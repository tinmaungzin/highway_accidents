import os
import pandas as pd
from bs4 import BeautifulSoup

# Define the columns based on the header
COLUMNS = [
    "No",
    "ID",
    "Editor",
    "Date of incident",
    "Time",
    "Highway",
    "Section",
    "KM",
    "Car",
    "Died",
    "Injured",
    "Status",
    "Source",
    "Link",
]

def parse_html(file_path):
    """Parse an HTML file and extract table data."""
    with open(file_path, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')

    table_rows = soup.find_all('tr', class_=['odd', 'even'])
    data = []

    for row in table_rows:
        cells = row.find_all('td')
        row_data = [cell.get_text(strip=True) for cell in cells[:len(COLUMNS) - 1]]

        # Extract the href value for the link column
        link_cell = row.find('td', class_='button')
        link_tag = link_cell.find('a', href=True) if link_cell else None
        link = f"{link_tag['href']}" if link_tag else ""
        
        row_data.append(link)
        data.append(row_data)

    return data

def process_html_files(input_dir, output_csv):
    """Process multiple HTML files and merge data into a CSV file."""
    all_data = []

    for file_name in os.listdir(input_dir):
        if file_name.endswith('.html'):
            file_path = os.path.join(input_dir, file_name)
            file_data = parse_html(file_path)
            all_data.extend(file_data)

    # Create a DataFrame and save it as CSV
    df = pd.DataFrame(all_data, columns=COLUMNS)
    df.to_csv(output_csv, index=False, encoding='utf-8')
    print(f"Data successfully saved to {output_csv}")

# Usage
input_directory = "tables"  # Replace with the directory containing HTML files
output_file = "output.csv"  # Replace with the desired output CSV file name

process_html_files(input_directory, output_file)
