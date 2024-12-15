from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

# Configure Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless")  # Optional: Run in headless mode
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")

# Selenium Manager will handle the driver
driver = webdriver.Chrome(options=chrome_options)

try:
    # Visit the URL
    url = "https://haims2.doh.go.th/summary?p=summary#"
    driver.get(url)

    # Confirm the page loaded
    print("Page title:", driver.title)

finally:
    driver.quit()
