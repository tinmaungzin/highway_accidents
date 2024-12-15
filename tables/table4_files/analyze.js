/* jshint esversion: 11 */

/**
 * @typedef { object } longdo_overlay
 */
/**
 * @typedef { { lat, lon } } point
 */
/**
 * @typedef { object } projection
 * @prop { String } longdoName
 * @prop { function } normToLat
 * @prop { function } latToNorm
 * @prop { function } setMaxZoom
 * @prop { Number } maxLat
 * @prop { Number } maxLon
 * @prop { Number } minLon
 * @prop { Number } maxPointX
 * @prop { Number } maxPointY
 * @prop { Number } maxResolution
 * @prop { Number } maxY
 * @prop { Number } maxZoom
 * @prop { Number } minX
 * @prop { Number } normSize
 * @prop { Number } pointDegree
 * @prop { Number } ratio
 * @prop { Number } size
 * @prop { Number } srs
 */
/**
 * @typedef { { minLat:number, minLon:number, maxLat:number, maxLon:number } } map_bound
 */
/**
 * @typedef { function } fn_string_overlays
 * @param { string } wkt
 * @returns { longdo_overlay[] } overlays
 */
/**
 * @typedef { function } fn_string-args_overlays
 * @param { string } wkt
 * @param { object } [option]
 * @returns { longdo_overlay[] } overlays
 */
/**
 * @typedef { function } fn_overlays_string
 * @param { longdo_overlay[] } overlays
 * @returns { string } wkt
 */
/**
 * @typedef { function } fn_overlays_bound
 * @param { point[] } locations
 * @returns { map_bound } bound
 */
/**
 * @typedef { function } fn__overlays
 * @return { longdo_overlay[] } overlays
 */
/**
 * @typedef { function } fn__number
 * @return { Number } overlays
 */
/**
 * @typedef { function } fn_overlay_
 * @param { longdo_overlay } overlay
 */
/**
 * @typedef { function } fn_object-point_object
 * @param { projection } projection
 * @param { point } point
 * @returns { { x: Number, y: Number } } overlays
 */
/**
 * @typedef { function } fn__projection
 * @returns { projection } projection
 */
/**
 * @typedef { function } DrupalAbsoluteUrl
 * @param { string } path
 * @return { string } absolute_path
 */
/**
 * @typedef { object } DrupalSettings
 * @prop { object } aadt - LongdoMap_v1_layer
 * @prop { object } km - LongdoMap_v1_layer
 * @prop { object } rai - LongdoMap_v1_layer
 * @prop { string } basePath - build assert path
 */
/**
 * @typedef { object } AccidentCase
 * @prop { string|null } acc_cause_group_array - comma separate value eg. "1, 2, 3" or "1"
 * @prop { string|null } addvehicle_age_array - comma separate value eg. "1, 2, 3" or "1"
 * @prop { string|null } addvehicle_type_array - comma separate value eg. "1, 2, 3" or "1"
 * @prop { string|null } cause_array - comma separate value eg. "1, 2, 3" or "1"
 * @prop { string|null } passenger_age_array - comma separate value eg. "1, 2, 3" or "1"
 * @prop { string|null } wound_array - comma separate value eg. "1, 2, 3" or "1"
 * @prop { string|null } char_horizontal
 * @prop { string|null } char_intersection
 * @prop { string|null } char_openacess
 * @prop { string|null } char_other
 * @prop { string|null } char_vertical
 * @prop { string|null } control_array
 * @prop { string|null } crash
 * @prop { string|null } datetime
 * @prop { string|null } env_light
 * @prop { string|null } env_surface
 * @prop { string|null } env_weather
 * @prop { string|null } ref_crash_id
 * @prop { string|null } road_char
 * @prop { string|null } road_char_desc
 * @prop { string|null } road_condition
 * @prop { string|null } road_traffic
 * @prop { string|null } summary
 * @prop { string } hid
 * @prop { string } kilometre
 * @prop { string } metre
 * @prop { string } latitude
 * @prop { string } longitude
 * @prop { string } province
 * @prop { string } route
 */
/**
 * @typedef { object } ProvinceTable
 * @prop { string } code
 * @prop { string } name_en
 * @prop { string } name_th
 * @prop { string } region_id
 * @prop { string } region_name
 */
/** @Class */
class dummy_class_point_obj {
  /** @param { point } a
   * @param { Object } b
   */
  constructor (a, b) { this.c = a + b; }
}
/** @Class */
class dummy_class_point_float_obj {
  /**
   * @param { point } a
   * @param { Number } b
   * @param { Object } c
   */
  constructor (a, b, c) { this.d = a + b + c; }
}
/** @Class */
class dummy_class_obj {
  /** @param { object } a */
  constructor (a) { this.b = a; }
}

const console = window.console;
/**
 * @type { object } longdo
 * @prop { dummy_class_point_obj } longdo.Marker
 * @prop { Class } longdo.Polygon
 * @prop { dummy_class_point_obj } longdo.Popup
 * @prop { dummy_class_point_float_obj } longdo.Circle
 * @prop { dummy_class_obj } longdo.CustomControl
 * @prop { fn_string-args_overlays } longdo.Util.overlayFromWkt
 * @prop { fn_overlays_string } longdo.Util.overlayToWkt
 * @prop { fn_overlays_bound } longdo.Util.locationBound
 * @prop { fn_object-point_object } longdo.Util.locationToPoint
 * @prop { String } longdo.LocationMode.Pointer
 */
const longdo = window.longdo;
const URLSearchParams = window.URLSearchParams;
var Highcharts = window.Highcharts;
var createMyDatePicker = window.createMyDatePicker;
let isHighchartsInstalled = false;
let isCanvasInstalled = false;
/**
 * @type {{ absoluteUrl: DrupalAbsoluteUrl, settings: DrupalSettings }} Drupal
 */
var Drupal = window.Drupal;
/**
 * @type { object } longdo_map
 * @alias longdo.Map
 * @prop { fn__projection } projection
 * @prop { fn__number } zoom
 * @prop { fn__overlays } Overlays.list
 * @prop { fn_overlay_ } Overlays.remove
 * @prop { object } Tags
 * @prop { object } Ui
 * @prop { function } Ui.add
 * @prop { function } Tags.set
 */
let analyze_map = null;
let enableBlackSpot = false;
let severityLayer = null;
let markercluster = null;
let heatmapLayer = null;
let region = [];
/** @type { ProvinceTable[] } */
let province = [];
let amphoe = {}; // amphoe[province code] = amphoe
let road = {}; // road[amphoe code] = road
let filter_of_interest = {}; // filter_of_interest[db] = filter_of_interest
let current_filter = {}; // current_filter[db] = array of selected

let depot = {}; // depot[district_code] = depot
let route = {}; // route[currentDepot] = route

/** @type { { area_wkt: string, cases: AccidentCase[] } } */
let main_data = {};
const priorityMarkerImage = {
  1: "sites/all/themes/marker/walk@2x.png",
  2: "sites/all/themes/marker/bicycle@2x.png",
  3: "sites/all/themes/marker/motorcycle@2x.png",
  4: "sites/all/themes/marker/car@2x.png",
  5: "sites/all/themes/marker/van@2x.png",
  6: "sites/all/themes/marker/bus@2x.png",
  7: "sites/all/themes/marker/truck@2x.png",
  8: "sites/all/themes/marker/etc@2x.png"
};
const vehicleTypePriority = {
  15: 1,
  1: 2,
  2: 3,
  5: 4,
  7: 4,
  8: 4,
  6: 5,
  9: 6,
  18: 6,
  10: 7,
  11: 7,
  12: 7,
  0: 8
};

let visualize_data = [
  { ref_name: "acccase", name: "เปรียบเทียบอุบัติเหตุ", ref: false },
  { ref_name: "wound", name: "การบาดเจ็บ", ref: true },
  { ref_name: "crash", name: "ประเภทอุบัติเหตุ", ref: true },
  { ref_name: "datetime", name: "วัน-เวลา ที่เกิดเหตุ", ref: false },
  { ref_name: "cause", name: "มูลเหตุสันนิษฐาน", ref: true },
  { ref_name: "acc_cause_group", name: "มูลเหตุสันนิษฐาน", ref: true },
  { ref_name: "env_light", name: "ไฟฟ้าและแสงสว่าง", ref: true },
  { ref_name: "env_weather", name: "สภาพแวดล้อมขณะเกิดเหตุ", ref: true },
  { ref_name: "age", name: "อายุผู้ประสบเหตุ", ref: true }
];

/** Tags region */
let schoolItem = {};
let cityItem = {};
let blackspotItem = {};
let movingAverageItem = {};

let schoolMarker = [];
let cityMarker = [];
let blackSpotMarker = [];
let movingAverageGeoms = [];

let schoolList = [];
let cityList = [];
let blackspotList = [];
let movingAverageList = [];

let bs_check_input = {};
const bs_fill_color = {
  1: "rgba(238, 0, 0, 0.4)",
  2: "rgba(238, 170, 0, 0.4)",
  3: "rgba(238, 102, 170, 0.4)"
};
/** End tags region */

var crashName = [
  'อุบัติเหตุชนคนเดินเท้า',
  'อุบัติเหตุบริเวณทางแยกจากคนละถนน',
  'อุบัติเหตุชนกันบนถนนในทิศทางตรงกันข้าม',
  'อุบัติเหตุชนกันบนถนนในทิศทางเดียวกัน',
  'อุบัติเหตุจากความบกพร่องของผู้ขับขี่',
  'อุบัติเหตุจากการแซง',
  'อุบัติเหตุบนทาง',
  'อุบัติเหตุนอกทางบนทางตรง',
  'อุบัติเหตุนอกทางบนทางโค้ง',
  'อุบัติเหตุผู้โดยสารและอื่นๆ',
];

var userPolygon = false;

function generatePolygonName () {
  return Math.random().toString(32).replace(".", "").slice(1, 3).toUpperCase();
}

function objectToSearchParams (obj = {}) {
  Object.keys(obj).forEach(key => {
    if (!obj[key]) { delete obj[key]; }
    if (Array.isArray(obj[key]) && obj[key].length === 0) { delete obj[key]; }
  });
  const params = new URLSearchParams(obj);
  return params.toString();
}

function setDefaultDate () {
  const today = new Date();
  const lastMonth = new Date();
  const from = $("#analyze_content_filter_accident-from");
  const to = $("#analyze_content_filter_accident-to");
  lastMonth.setMonth(today.getMonth() - 1);
  from.val(lastMonth.toISOString().slice(0, 10));
  to.val(today.toISOString().slice(0, 10));
  from.trigger("change");
  to.trigger("change");
}

function clear_school () {
  for (let i = 0; i < schoolMarker.length; i += 1) {
    analyze_map.Overlays.remove(schoolMarker[i]);
  }
  schoolItem = {};
  schoolMarker = [];
  schoolList = [];
}

function clear_city () {
  for (let i = 0; i < cityMarker.length; i += 1) {
    analyze_map.Overlays.remove(cityMarker[i]);
  }
  cityItem = {};
  cityMarker = [];
  cityList = [];
}

function clearAccidentMarker () {
  // analyze_map.Overlays.list().forEach(overlay => {
  //   if (overlay instanceof longdo.Marker && overlay.type === "accident") {
  //     analyze_map.Overlays.remove(overlay);
  //   }
  // });
  markercluster.clearMarkers();
}

function clear_ws_wkt () {
  analyze_map.Overlays.list().forEach(overlay => {
    if (overlay instanceof longdo.Polygon && overlay.type !== "city" && overlay.type !== "blackspot") {
      if (overlay.popupForm) {
        analyze_map.Overlays.remove(overlay.popupForm);
      }
      analyze_map.Overlays.remove(overlay);
    }
  });
}

function clear_moving_average () {
  for (let i = 0; i < movingAverageGeoms.length; i += 1) {
    analyze_map.Overlays.remove(movingAverageGeoms[i]);
  }
  movingAverageItem = {};
  movingAverageGeoms = [];
  movingAverageList = [];
}

function clear_form () {
  setDefaultDate();
  if (analyze_map) { 
    analyze_map.Overlays.clear(); 
    $('#blackspot_moving_average_checkbox').removeAttr('checked');
    $('#blackspot_dbscan_checkbox').removeAttr('checked');
    $('.ldmap_topright .ldmap_customcontrol .custom-control').removeClass('active');
  }
  $(".analyze_content_filter_item input:checked").each(function () {
    $(this).prop("checked", false);
  });
  $(".analyze_content_filter_item select").each(function () {
    $(this).val("");
  });
  $("#analyze_content_filter_condition button").each(function () {
    $(this).removeClass("btn-primary");
    $(this).addClass("btn-secondary");
  });
  current_filter = {};
}

function place_map_marker (cases = []) {
  for (let index = 0; index < cases.length; index += 1) {
    const accident = cases[index];
    const vehicleTypes = JSON.parse(`[${accident.addvehicle_type_array || 0}]`);
    const priority = vehicleTypes.map(type => vehicleTypePriority[type] || 8);
    const targetPriority = Math.min(...priority);
    const markerImageUrl = Drupal.absoluteUrl(priorityMarkerImage[targetPriority]);
    const targetUrl = Drupal.absoluteUrl(`analyze/case_data/${accident.hid}`);
    const woundArray = JSON.parse(`[${accident.wound_array || -1}]`);
    const date = new Date(accident.datetime.replace(/-/g, "/"));
    const dateStyleOption = { weekday: "short", year: "2-digit", month: "short", day: "numeric" };
    const timeStyleOption = { hour: "2-digit", minute: "2-digit" };
    const localeDateTime = new Intl.DateTimeFormat("th-TH", { ...dateStyleOption, ...timeStyleOption }).format(date);
    const tableData = [
      { title: "วันเวลาที่เกิดเหตุ", desc: localeDateTime },
      { title: "ทางหลวง", desc: accident.route },
      { title: "กม.", desc: String(parseInt(accident.kilometre)) + "+" + String(parseInt(accident.metre)).padStart(3, "0") },
      { title: "ลักษณะทางหลวงที่เกิดเหตุ", desc: accident.road_char_desc || "-" },
      { title: "ผู้เสียชีวิต", desc: woundArray.reduce((acc, cur) => ([1, 2].includes(cur) ? acc + 1 : acc), 0) + " ราย" }, // ตาย -> id in [1, 2] จาก table ref_wound
      { title: "ผู้บาดเจ็บ", desc: woundArray.reduce((acc, cur) => ([3, 4].includes(cur) ? acc + 1 : acc), 0) + " ราย" }, // เจ็บ -> id in [3, 4] จาก table ref_wound
      { title: "รูปแบบการชน", desc: accident.ref_crash_desc },
    ];
    const marker = new longdo.Marker(
      { lat: accident.latitude, lon: accident.longitude },
      {
        title: `<span style="font-weight: bold; color: #3D5B96; font-size: 15px;">HID ${accident.hid}</span>`,
        icon: {
          url: markerImageUrl,
          offset: { x: 30, y: 60 }
        },
        detail: `
          <div style="font-size: 13px; padding: 4px 0 0 8px;">
            <table class="analyze_content_map_marker_table">
              <tbody>
                ${
                  tableData
                    .map(item => `<tr><td>${item.title} : </td><td>${item.desc}</td></tr>`)
                    .join("")
                }
                <tr>
                  <td>ความเร็วขณะเกิดเหตุ​ : </td>
                  <td id="speed-${accident.hid}"></td>
                </tr>
                <tr>
                  <td></td>
                  <td style="text-align: right;">
                    <a href="${targetUrl}" target="_blank" class="btn btn-sm btn-primary text-white">ดูรายละเอียด</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
        loadDetail: (el) => {
          const speed_td = el.querySelector(`#speed-${accident.hid}`);
          $.ajax({
            url: Drupal.settings.basePath + `get_analyze/api/map_case_get_speed?datetime=${accident.datetime}&route=${accident.route}&controlsection=${accident.controlsection}`,
            dataType: "json",
            success: function (response) {
              if (!response.status || !response.data) {
                speed_td.innerText = "ไม่พบข้อมูล";
                return;
              }
              speed_td.innerText = response.data.speed + " กม./ชม.";
            }
          });
        }
      }
    );
    marker.type = "accident";
    markercluster.addMarkers(marker);
    // analyze_map.Overlays.add(marker);
  }
  markercluster.render();
}

function place_map_wkt (wkt = "", payload = {}) {
  if (wkt === "") { return false; }
  const wkts = longdo.Util.overlayFromWkt(wkt);
  for (let index = 0; index < wkts.length; index += 1) {
    if (!payload.wkt_name || wkts.length > 1) { wkts[index].fromWs = true; }
    analyze_map.Overlays.add(wkts[index]);
  }
}

function computeTableHeaderHeight () {
  const table2HeaderHeight = $(`[ref="analyze_table-2_province-header"]`).outerHeight();
  const table4HeaderHeight = $(`[ref="analyze_table-4_route-header"]`).outerHeight();
  $("#analyze_content_table_table-1 table thead tr").css("height", table2HeaderHeight);
  $("#analyze_content_table_table-3 table thead tr").css("height", table4HeaderHeight);
}

function place_table (cases = []) {
  const uniqueYears = [...new Set(cases.map(item => item.datetime.slice(0, 4)))].sort();
  const rows = {};
  [...new Set(cases.map(item => item.province))].forEach(el => rows[el] = {});
  cases.forEach(accident => {
    const year = accident.datetime.slice(0, 4);
    const row = rows[accident.province] || {};
    row[year] = row[year] ? row[year] + 1 : 1;
    rows[accident.province] = row;
  });
  $("#analyze_content_table_table-1").html(`
    <table class="haims__table-clear analyze_table">
      <thead>
        <tr>
          <th>จังหวัด</th>
          ${
            uniqueYears.map(year => `<th>ปี ${parseInt(year) + 543}</th>`).join("")
          }
        </tr>
      </thead>
      <tbody>
        ${
          Object.entries(rows).map(([province_id, obj]) => {
            const provinceObj = Object.values(province).find(item => String(item.code) === String(province_id));
            const provinceName = provinceObj?.name_th || "อื่นๆ";
            const yearColumns = uniqueYears.map(year => `<td>${obj[year] || 0}</td>`).join("");
            return `<tr><td>${provinceName}</td>${yearColumns}</tr>`;
          }).join("")
        }
      </tbody>
    </table>
  `);
  const secondRows = {};
  cases.forEach(accident => {
    const year = accident.datetime.slice(0, 4);
    const row = secondRows[accident.province] || {};
    row[year] = row[year] || { "4": 0, "3": 0, "1": 0, "2": 0 };
    const woundArray = JSON.parse(`[${accident.wound_array}]`);
    woundArray.forEach(id => row[year][id] += 1);
    secondRows[accident.province] = row;
  });
  $("#analyze_content_table_table-2").html(`
    <table class="haims__table-clear analyze_table">
      <colgroup>
        <col>
      </colgroup>
      <thead>
        <tr>
          <th rowspan="2" ref="analyze_table-2_province-header">จังหวัด</th>
          ${
            uniqueYears
              .map(year => `<th colspan="4">ปี ${parseInt(year) + 543}</th>`)
              .join("")
          }
        </tr>
        <tr>
          ${
            uniqueYears
              .map(() => `<th>บาดเจ็บน้อย</th><th>บาดเจ็บสาหัส</th><th>เสียชีวิตที่เกิดเหตุ</th><th>เสียชีวิตโรงพยาบาล</th>`)
              .join("")
          }
        </tr>
      </thead>
      <tbody>
        ${
          Object.entries(secondRows).map(([province_id, obj]) => {
            const provinceObj = Object.values(province).find(item => String(item.code) === String(province_id));
            const provinceName = provinceObj?.name_th || "อื่นๆ";
            const yearColumns = uniqueYears
              .map(year => [4, 3, 1, 2]
                .map(wound_id => `
                  <td>${obj[year] ? obj[year][wound_id] : 0}</td>
                `)
                .join(""))
              .join("");
            return `<tr><td>${provinceName}</td>${yearColumns}</tr>`;
          }).join("")
        }
      </tbody>
    </table>
  `);
  let thirdRows = {};
  cases.forEach(accident => {
    if (isNaN(accident.route)) {
      return 0;
    }
    const year = accident.datetime.slice(0, 4);
    const route = String(parseInt(accident.route)).padEnd(4, "0");
    const controlsection = String(accident.controlsection).padStart(4, "0");
    const hash = `${route}.${controlsection}`;
    const row = thirdRows[hash] || {};
    row[year] = row[year] ? row[year] + 1 : 1;
    row.route = row.route || parseInt(accident.route);
    row.control = row.controlsection || controlsection;
    row.control_name = row.control_name || accident.control_name;
    thirdRows[hash] = row;
  });
  thirdRows = Object
    .keys(thirdRows)
    .sort()
    .reduce(
      (obj, key) => {
        obj[key] = thirdRows[key];
        return obj;
        },
      {}
    );
  $("#analyze_content_table_table-3").html(`
    <table class="haims__table-clear analyze_table">
      <thead>
        <tr>
          <th>ทางหลวงหมายเลข</th>
          <th>หมายเลขตอนควบคุม</th>
          <th style="width: 300px;">ชื่อสายทาง</th>
          ${
            uniqueYears.map(year => `<th>ปี ${parseInt(year) + 543}</th>`).join("")
          }
        </tr>
      </thead>
      <tbody>
        ${
          Object.entries(thirdRows).map(([hash, obj]) => {
            const yearColumns = uniqueYears.map(year => `<td>${obj[year] || 0}</td>`).join("");
            return `<tr><td style="text-align: right;">${obj.route}</td><td>${obj.control}</td><td>${obj.control_name}</td>${yearColumns}</tr>`;
          }).join("")
        }
      </tbody>
    </table>
  `);
  let fourthRows = {};
  cases.forEach(accident => {
    if (isNaN(accident.route)) {
      return 0;
    }
    const year = accident.datetime.slice(0, 4);
    const route = String(parseInt(accident.route)).padEnd(4, "0");
    const controlsection = String(accident.controlsection).padStart(4, "0");
    const hash = `${route}.${controlsection}`;
    const row = fourthRows[hash] || {};
    row[year] = row[year] || { "4": 0, "3": 0, "1": 0, "2": 0 };
    const woundArray = JSON.parse(`[${accident.wound_array}]`);
    woundArray.forEach(id => row[year][id] += 1);
    row.route = row.route || parseInt(accident.route);
    row.control = row.controlsection || controlsection;
    row.control_name = row.control_name || accident.control_name;
    fourthRows[hash] = row;
  });
  fourthRows = Object
    .keys(fourthRows)
    .sort()
    .reduce(
      (obj, key) => {
        obj[key] = fourthRows[key];
        return obj;
      },
      {}
    );
  $("#analyze_content_table_table-4").html(`
    <table class="haims__table-clear analyze_table">
      <colgroup>
        <col>
      </colgroup>
      <thead>
        <tr>
          <th rowspan="2" ref="analyze_table-4_route-header">ทางหลวงหมายเลข</th>
          <th rowspan="2">หมายเลขตอนควบคุม</th>
          <th rowspan="2" style="width: 300px;">ชื่อสายทาง</th>
          ${
            uniqueYears
              .map(year => `<th colspan="4">ปี ${parseInt(year) + 543}</th>`)
              .join("")
          }
        </tr>
        <tr>
          ${
            uniqueYears
              .map(() => `<th>บาดเจ็บน้อย</th><th>บาดเจ็บสาหัส</th><th>เสียชีวิตที่เกิดเหตุ</th><th>เสียชีวิตโรงพยาบาล</th>`)
              .join("")
          }
        </tr>
      </thead>
      <tbody>
        ${
          Object.entries(fourthRows).map(([hash, obj]) => {
            const yearColumns = uniqueYears
              .map(year => [4, 3, 1, 2]
                .map(wound_id => `
                        <td>${obj[year] ? obj[year][wound_id] : 0}</td>
                      `)
                .join(""))
              .join("");
            return `<tr><td style="text-align: right;">${obj.route}</td><td>${obj.control}</td><td>${obj.control_name}</td>${yearColumns}</tr>`;
          }).join("")
        }
      </tbody>
    </table>
  `);
  $("#analyze_content_table_tab button").off().on("click", computeTableHeaderHeight);
  computeTableHeaderHeight();
}

function place_visualization () {
  const accordion_parent = "analyze_content_visualization_accordion";
  // https://getbootstrap.com/docs/5.0/components/accordion/
  visualize_data.forEach(async (item) => {
    if (!item.ref) { return; }
    if (filter_of_interest[item.ref_name]) { return; }
    const response = await $.ajax({
      url: Drupal.settings.basePath + "get/ref/" + item.ref_name,
      dataType: "json"
    });
    filter_of_interest[item.ref_name] = response.data;
  });
  $("#analyze_content_visualization").html(`
    <div class="d-flex justify-content-end mb-2">
      <button id="analyze_content_visualization_export-pdf" class="haims__button" style="width: auto">
        <i class="fa-solid fa-file-pdf fa-lg me-1"></i>
        Export ข้อมูล Visualization
      </button>
    </div>
    <div class="accordion" id="${accordion_parent}">
      ${
        visualize_data.map(({ name }, index) => (`
          <div class="accordion-item">
            <h2 class="accordion-header" id="${accordion_parent}_heading-${index}">
              <button class="accordion-button ${index === 0 ? "" : "collapsed"}" type="button"
                      data-bs-toggle="collapse" data-bs-target="#${accordion_parent}_content-${index}" 
                      aria-expanded="${index === 0 ? "true" : "false"}" aria-controls="${accordion_parent}_content-${index}">
                ${name}
              </button>
            </h2>
            <div id="${accordion_parent}_content-${index}" class="accordion-collapse ${index === 0 ? "collapse show" : "collapse"}" 
                 aria-labelledby="${accordion_parent}_heading-${index}" data-bs-parent="#${accordion_parent}">
              <div id="${accordion_parent}_content-${index}_chart-parent" class="accordion-body d-flex">
                <div id="${accordion_parent}_content-${index}_pie" style="height: 500px; flex: 1 1 0;"></div>
                <div id="${accordion_parent}_content-${index}_column" style="height: 500px; flex: 2 1 0;"></div>
                <div id="${accordion_parent}_content-${index}_table" style="height: 500px; flex: 1 1 0; overflow: auto;"></div>
              </div>
            </div>
          </div>
        `)).join("")
      }
    </div>
  `);
  $("#analyze_content_visualization_export-pdf").on("click", () => {
    $("#analyze_content_export-confirm-modal").modal("show");
  });
  $("#analyze_content_export-confirm-modal_do-export")
    .off("click")
    .on("click", async () => {
    $("#analyze_content_export-confirm-modal").modal("hide");
      // $(".analyze_content_visualization-activator").click();
      await new Promise(resolve => setTimeout(resolve, 1000)); // sleep(500), waiting bootstrap animation
      disable_mouse();
      await sample_export();
      enable_mouse();
    });
  $(".accordion-button, .accordion-header, .accordion-item")
    .on("shown.bs.collapse", () => {
      window.dispatchEvent(new Event("resize"));
    });
}

function buildCsvData (cases = []) {
  const header = [
    { name: "มูลเหตุหลัก", key: "acc_cause_group_array" },
    { name: "อายุผู้ขับขี่", key: "addvehicle_age_array" },
    { name: "อายุผู้โดยสาร", key: "passenger_age_array" },
    { name: "ประเภทรถ", key: "addvehicle_age_array" },
    { name: "มูลเหตุ", key: "cause_array" },
    { name: "แนวราบ", key: "char_horizontal" },
    { name: "ทางแยก", key: "char_intersection" },
    { name: "จุดเปิดเกาะกลาง", key: "char_openacess" },
    { name: "บริเวณเฉพาะอื่นๆ", key: "char_other" },
    { name: "แนวดิ่ง", key: "char_vertical" },
    { name: "การควบคุมการใช้ทางหลวง", key: "control_array" },
    { name: "crash", key: "crash" },
    { name: "ref_crash_id", key: "ref_crash_id" },
    { name: "วันเวลาที่เกิดเหตุ", key: "datetime" },
    { name: "แสงสว่าง", key: "env_light" },
    { name: "ผิวทาง", key: "env_surface" },
    { name: "สภาพภูมิอากาศ", key: "env_weather" },
    { name: "หมายเลขอุบัติเหตุ", key: "hid" },
    { name: "กิโลเมตรที่", key: "kilometre" },
    { name: "เมตรที่", key: "metre" },
    { name: "ละติจูด", key: "latitude" },
    { name: "ลองจิจูด", key: "longitude" },
    { name: "รหัสจังหวัด", key: "province" },
    { name: "road_char", key: "road_char" },
    { name: "road_char_desc", key: "road_char_desc" },
    { name: "สถานะทางหลวงขณะเกิดเหตุ", key: "road_condition" },
    { name: "การจราจร", key: "road_traffic" },
    { name: "route", key: "route" },
    { name: "summary", key: "summary" },
    { name: "ประเภทอุบัติเหตุ", key: "wound_array" },
  ];
  console.log(header);
  console.log(cases);
  return 0;
}

function place_visualization_chart () {
  visualize_data.forEach((item, index) => {
    if ("acccase" === item.ref_name) {
      const chartData = {}; // chartData[year] = { total: 0, wound: 0, death: 0 }
      main_data.cases.forEach(accident => {
        const [year,] = accident.datetime.split("-");
        const aggregate = chartData[year] || { total: 0, wound: 0, death: 0 };
        const woundArray = JSON.parse(`[${accident.wound_array || ""}]`);
        aggregate.total += 1;
        woundArray.forEach(id => {
          if (["1", "2"].includes(String(id))) {
            aggregate.death += 1;
          }
          if (["3", "4"].includes(String(id))) {
            aggregate.wound += 1;
          }
        });
        chartData[year] = aggregate;
      });
      Highcharts.chart(`analyze_content_visualization_accordion_content-${index}`, {
        chart: { zoomType: "xy", style: { fontFamily: "'Sarabun', sans-serif", letterSpacing: "0.55px" } },
        title: { text: "" },
        subtitle: { text: "" },
        xAxis: { categories: Object.keys(chartData).sort().map(year => parseInt(year) + 543), crosshair: true },
        yAxis: [
          { title: { text: "จำนวนครั้งอุบัติเหตุ", style: { color: Highcharts.getOptions().colors[0] } } },
          { title: { text: "จำนวนคน", style: { color: Highcharts.getOptions().colors[1] } }, opposite: true }
        ],
        tooltip: { shared: true },
        legend: {},
        series: [
          {
            name: "อุบัติเหตุ",
            type: "spline",
            yAxis: 0,
            data: Object.keys(chartData).sort().map(key => chartData[key].total),
            tooltip: { valueSuffix: " ครั้ง" }
          },
          {
            name: "บาดเจ็บ",
            type: "spline",
            yAxis: 1,
            data: Object.keys(chartData).sort().map(key => chartData[key].wound),
            tooltip: { valueSuffix: " คน" }
          },
          {
            name: "เสียชีวิต",
            type: "spline",
            yAxis: 1,
            data: Object.keys(chartData).sort().map(key => chartData[key].death),
            tooltip: { valueSuffix: " คน" }
          }
        ]
      });
    }
    if (["wound", "crash", "cause", "acc_cause_group", "env_light", "env_weather", "cause", "age"].includes(item.ref_name)) {
      /** Build chart data */
      const chartData = filter_of_interest[item.ref_name]
        .map(ref => ({
          name: ref.desc || ref.name,
          y: main_data.cases.reduce((acc, cur) => {
            const values = cur[`${item.ref_name}_array`] || null;
            const array = JSON.parse(`[${values}]`);
            if (values && array.includes(parseInt(ref.id))) { return acc + 1; }
            if (item.ref_name === "crash" && String(cur.crash) === String(ref.code)) { return acc + 1; }
            if (item.ref_name === "age" && String(ref.id) === "1" && (cur.passenger_age_array || cur.addvehicle_age_array)) {
              return acc + JSON.parse(`[${cur.passenger_age_array}, ${cur.addvehicle_age_array}]`).filter(i => i !== null)
                .reduce((totalAdult, age) => { return totalAdult + (age >= 15 ? 1 : 0); }, 0);
            }
            if (item.ref_name === "age" && String(ref.id) === "2" && (cur.passenger_age_array || cur.addvehicle_age_array)) {
              return acc + JSON.parse(`[${cur.passenger_age_array}, ${cur.addvehicle_age_array}]`).filter(i => i !== null)
                .reduce((totalChild, age) => { return totalChild + (age < 15 ? 1 : 0); }, 0);
            }
            if (cur[item.ref_name] && String(cur[item.ref_name]) === String(ref.id)) { return acc + 1; }
            return acc;
          }, 0)
        }))
        .filter(item => item.y !== 0)
        .sort((a, b) => (b.y - a.y)) // order by y desc;
        .slice(0, 10);
      /** Build pie chart */
      Highcharts.chart(`analyze_content_visualization_accordion_content-${index}_pie`, {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          style: { fontFamily: "'Sarabun', sans-serif", letterSpacing: "0.55px" }
        },
        title: { text: "" },
        subtitle: { text: "" },
        accessibility: { point: { valueSuffix: "%" } },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: false,
              // format: "{point.name}: {point.y} ({point.percentage:.1f}%)"
            },
            showInLegend: true
          }
        },
        tooltip: {
          headerFormat: "{point.name}",
          pointFormat: "<span style='color: {point.color}; font-weight: bold;'>{point.name}</span>: {point.y} ({point.percentage:.1f}%)",
          footerFormat: "",
          shared: true,
          useHTML: true
        },
        series: [{
          name: item.name,
          colorByPoint: true,
          data: chartData
        }]
      });
      /** Build column chart */
      Highcharts.chart(`analyze_content_visualization_accordion_content-${index}_column`, {
        chart: { type: "column", style: { fontFamily: "'Sarabun', sans-serif", letterSpacing: "0.55px" } },
        title: { text: "" },
        subtitle: { text: "" },
        xAxis: {
          type: "category",
          crosshair: true
        },
        yAxis: { min: 0, title: { text: "จำนวนครั้ง" } },
        tooltip: {
          headerFormat: "",
          pointFormat: `<strong style="color: {point.color}; padding: 2px 2px 2px 0;">{point.name}</strong>: {point.y}`,
          footerFormat: "",
          shared: true,
          useHTML: true
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          column: { columnPadding: 1, borderWidth: 0, stacking: "normal" }
        },
        series: [{
          name: "จำนวนอุบัติเหตุ",
          colorByPoint: true,
          data: chartData.map(item => ({ name: item.name, y: item.y }))
        }]
      });
      /** Build table */
      const totalAccident = chartData.reduce((acc, cur) => acc + cur.y, 0);
      $(`#analyze_content_visualization_accordion_content-${index}_table`).html(`
        <table class="haims__table-clear analyze_table">
          <thead>
            <tr>
              <th style="text-align: left;">ประเภท</th>
              <th>จำนวน</th>
              <th style="text-align: right;">%</th>
            </tr>
          </thead>
          <tbody>
            ${
              chartData
                .map(item => `
                  <tr>
                    <td>${item.name}</td>
                    <td style="text-align: center;">${item.y}</td>
                    <td style="text-align: right; white-space: nowrap;">${(item.y / totalAccident * 100).toLocaleString(undefined, { maximumFractionDigits: 2 })}%</td>
                  </tr>
                `).join("")
            }
          </tbody>
        </table>
      `);
    }
    if ("datetime" === item.ref_name) {
      const xLabels = ["00-04", "05-09", "10-14", "15-19", "20-24"];
      const yLabels = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์"];
      const heatmapObject = {};
      main_data.cases.forEach(({ datetime }) => {
        const date = new Date(datetime.replace(/-/g, "/"));
        const y_index = date.getDay();
        const hour = datetime.split(" ")[1].slice(0, 2);
        const x_index = xLabels.findIndex(condition => {
          const [fromHour, toHour] = condition.split("-");
          return fromHour <= hour && hour <= toHour;
        });
        heatmapObject[x_index] = heatmapObject[x_index] || {};
        heatmapObject[x_index][y_index] = heatmapObject[x_index][y_index] ? heatmapObject[x_index][y_index] + 1 : 1;
      });
      const heatmapData = [];
      for (let x = 0; x < xLabels.length; x += 1) {
        for (let y = 0; y < yLabels.length; y += 1) {
          const dx = heatmapObject[x] || {};
          const dy = dx[y] || 0;
          heatmapData.push([x, y, dy]);
        }
      }
      Highcharts.chart(`analyze_content_visualization_accordion_content-${index}_chart-parent`, {
        chart: { type: "heatmap", style: { fontFamily: "'Sarabun', sans-serif", letterSpacing: "0.55px" } },
        title: { text: "" },
        subtitle: { text: "" },
        xAxis: { categories: xLabels.map(item => item + " น.") },
        yAxis: { categories: yLabels, title: null, reversed: true },
        colorAxis: {
          min: 0,
          minColor: "#fff",
          maxColor: "#e31a1c"
        },
        legend: {
          align: "right",
          layout: "vertical",
          margin: 0,
          verticalAlign: "top",
          // y: 25,
          symbolHeight: 345
        },
        tooltip: {
          formatter: function () {
            const series = this.point.series;
            const xAxis = series.xAxis;
            const yAxis = series.yAxis;
            const l1 = `วัน${yAxis.categories[this.point.x]} เวลา ${xAxis.categories[this.point.x]}`;
            const l2 = `มีอุบัติเหตุ <strong>${this.point.value} ครั้ง</strong> ที่เกิดขึ้นในเวลานี้`;
            return `<span>${l1}</span><br/><span>${l2}</span>`;
          }
        },
        series: [{
          name: "Series-Name",
          data: heatmapData
        }]
      });
    }
    /** Build additional pie chart */
    if ("acc_cause_group" === item.ref_name) {
      $(`#analyze_content_visualization_accordion_content-${index}_column`).remove();
      const chartData = filter_of_interest.cause
        .map(ref => ({
          name: ref.desc || ref.name,
          y: main_data.cases.reduce((acc, cur) => {
            const values = cur.cause_array || null;
            const array = JSON.parse(`[${values}]`);
            if (values && array.includes(parseInt(ref.id))) { return acc + 1; }
            return acc;
          }, 0)
        }))
        .filter(item => item.y !== 0)
        .sort((a, b) => (b.y - a.y)) // order by y desc;
        .slice(0, 10);
      const parent = $(`#analyze_content_visualization_accordion_content-${index}_chart-parent`);
      parent.find("#additional_pie").remove();
      parent.prepend("<div id='additional_pie' style='height: 500px; flex: 1 1 0;'></div>");
      Highcharts.chart(`additional_pie`, {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          style: { fontFamily: "'Sarabun', sans-serif", letterSpacing: "0.55px" }
        },
        title: { text: "" },
        subtitle: { text: "" },
        accessibility: { point: { valueSuffix: "%" } },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: false,
              // format: "{point.name}: {point.y} ({point.percentage:.1f}%)"
            },
            showInLegend: true
          }
        },
        tooltip: {
          headerFormat: "{point.name}",
          pointFormat: "<span style='color: {point.color}; font-weight: bold;'>{point.name}</span>: {point.y} ({point.percentage:.1f}%)",
          footerFormat: "",
          shared: true,
          useHTML: true
        },
        series: [{
          name: item.name,
          colorByPoint: true,
          data: chartData
        }]
      });
    }
  });
}

async function fetch_case (payload) {
  const params = objectToSearchParams(payload);
  $(".analyze_content_filter_header, .ldmap_popup_title").append(`
    <i class="fas fa-circle-notch fa-spin"></i>
  `);
  $("#tab-analysis .haims__summary__menu__header span.text-danger").remove();

  const fromYear = (new Date(payload.dateFrom)).getFullYear();
  const toYear = (new Date(payload.dateTo)).getFullYear();
  visualize_data = [
    { ref_name: "acccase", name: "เปรียบเทียบอุบัติเหตุ", ref: false },
    { ref_name: "wound", name: "การบาดเจ็บ", ref: true },
    { ref_name: "crash", name: "ประเภทอุบัติเหตุ", ref: true },
    { ref_name: "datetime", name: "วัน-เวลา ที่เกิดเหตุ", ref: false },
    // { ref_name: "cause", name: "มูลเหตุสันนิษฐาน", ref: true },
    { ref_name: "acc_cause_group", name: "มูลเหตุสันนิษฐาน", ref: true },
    { ref_name: "env_light", name: "ไฟฟ้าและแสงสว่าง", ref: true },
    { ref_name: "env_weather", name: "สภาพแวดล้อมขณะเกิดเหตุ", ref: true },
    { ref_name: "age", name: "อายุผู้ประสบเหตุ", ref: true }
  ];
  if (fromYear === toYear) {
    visualize_data.splice(0, 1);
  }

  $('#analyze_search_dropdown').hide();
  $('#analyze_search_dropdown ul li.li-download').hide();
  $.ajax({
    url: Drupal.settings.basePath + "get_analyze/api/map_case_filter?" + params,
    dataType: "json"
  }).then(function (response) {
    const data = response.data;
    main_data = data;
    clearAccidentMarker();
    clear_ws_wkt();
    try {
      place_visualization();
      place_map_marker(data.cases);
    }
    catch (e) {
      console.error(e);
    }
    if (payload.wkt_name !== "buffer") {
      place_map_wkt(data.area_wkt, payload);
    }
    try {
      place_table(data.cases);
    }
    catch (e) {
      console.error(e);
    }
    try {
      place_visualization_chart();
    }
    catch (e) {
      console.error(e);
    }
    try {
      var exportHidList = [];
      for (let index = 0; index < data.cases.length; index++) {
        const item = data.cases[index];
        exportHidList.push(item.hid);
      }

      var contentHTML = getAnalyzeDownloadModalContentHTML(data.request_payload);
      $('#analyzeDownloadModal #analyzeDownloadModal-body-content-filter div.card').html(contentHTML);
      $('#analyzeConditionModal .modal-body').html(contentHTML);

      $('#analyze_search_dropdown').show();

      $('#analyze_summary span').html(numberWithCommas(exportHidList.length));
      $('#analyzeDownloadModal #analyzeDownloadModalLabel span').html(numberWithCommas(exportHidList.length));
      $('#analyzeDownloadModal #analyzeDownloadModal-body-title span').html(numberWithCommas(exportHidList.length));
      if (exportHidList.length > 0) {
        $('#analyzeDownloadModal #downloadHidList').val(exportHidList.toString());
        $('#analyze_search_dropdown ul li.li-download').show();
      }

      // buildCsvData(data.cases);
    } catch (e) {
      console.error(e);
    }
    $(".analyze_content_filter-parent").removeClass("active");
    $(".analyze_content_filter_selection").removeClass("active");
    $("[id^=analyze_content_visualization_parent]").remove();
    $(".analyze_content_filter_header i, .ldmap_popup_title i").remove();

    analyze_map.resize();
  }).catch(function (error) {
    if (error.status === 414) {
      $("#tab-analysis .haims__summary__menu__header").append("<span class='text-danger' style='margin-top: auto; margin-left: 4px;'>ไม่สามารถส่งข้อมูลได้เนื่องจาก Polygon มีรอยหยักมากเกินไป</span>");
    }
    else {
      $("#tab-analysis .haims__summary__menu__header").append(`<span class='text-danger' style='margin-top: auto; margin-left: 4px;'>${error.statusText}</span>`);
    }
    $(".analyze_content_filter_header i, .ldmap_popup_title i").remove();
  });
}

function buildPolygonOption () {
  const overlays = analyze_map.Overlays.list();
  const polygons = overlays.filter(overlay => overlay instanceof longdo.Polygon);
  polygons.forEach(polygon => { polygon.name = polygon.name || generatePolygonName(); });
  const polygonNames = polygons.map(polygon => polygon.name);
  const polygonSelector = $("#analyze_content_filter-polygon");
  const oldValue = polygonSelector.val();
  polygonSelector.html(
    "<option value=''></option>" +
    polygonNames.map(name => `<option value="${name}">${name}</option>`).join("")
  );
  polygonSelector.val(oldValue);
}

function showAnalyzeConditionModal () {
  $('#analyzeConditionModal').modal('show');
}

function showAnalyzeDownloadModal () {
  $('#analyzeDownloadModal').modal('show');
}

function getAnalyzeDownloadModalContentHTML (params, total) {
  var html = '';

  const wound_death = $('#analyze_content_filter_has-wound-death:checked');
  const wound_no_death = $('#analyze_content_filter_no-wound-death:checked');

  if (wound_death.length == 1 ||
      wound_no_death.length == 1 ||
      params.is_school_area ||
      params.is_city_area ||
      params.wkt
  ) {
    html += `<div class="item-div">
                <div class="item-title">เป็นอุบัติเหตุที่</div>
                <ul>
                  ${ wound_death.length == 1 ? '<li>มีผู้บาดเจ็บและเสียชีวิต</li>' : '' }
                  ${ wound_no_death.length == 1 ? '<li>ไม่มีผู้บาดเจ็บและเสียชีวิต</li>' : '' }
                  ${ params.is_school_area ? '<li>เกิดในบริเวณโรงเรียน (รัศมี 500 เมตร)</li>' : '' }
                  ${ params.is_city_area ? '<li>เกิดในบริเวณเขตชุมชน</li>' : '' }
                  ${ params.wkt ? '<li>เกิดในบริเวณพื้นที่ที่เลือก</li>' : ''}
                </ul>
              </div>`;
  }

  html += `<div class="item-div">
            <div class="item-title">วันที่เกิดเหตุ</div>
            <ul>
              <li>ตั้งแต่ ${ $('#analyze_content_filter_accident-from-mask').val() } ถึง ${ $('#analyze_content_filter_accident-to-mask').val() }</li>
            </ul>
          </div>`;

  if (params.region || params.province || params.amphoe || params.road) {
    html += `<div class="item-div">
            <div class="item-title">สถานที่</div>
            <ul>
              ${ params.region ? '<li>' + region[params.region].region_name + '</li>' : '' }
              ${ params.province ? '<li>จังหวัด ' + province[params.province].name_th + '</li>' : '' }
              ${ params.amphoe ? '<li>อำเภอ ' + amphoe[params.province + params.amphoe].name_th + '</li>' : '' }
    `;

    if (params.road) {
      var roadName = "";
      for (let index = 0; index < amphoe[params.province + params.amphoe].roads.length; index++) {
        const road = amphoe[params.province + params.amphoe].roads[index];
        if (road.gids == params.road) {
          roadName = road.name;
          break;
        }
      }
      html += `<li>ถนน ${ roadName }</li>`;
    }
    html += `</ul></div>`;
  }

  if (params.division || params.district || params.depot || params.route || params.controlSection) {
    html += `<div class="item-div">
            <div class="item-title">หน่วยงาน</div>
            <ul>
              ${ params.division ? '<li>' + $('#analyze_content_filter-division option[value=' + params.division + ']').html() + '</li>' : '' }
              ${ params.district ? '<li>' + $('#analyze_content_filter-district option[value=' + params.district + ']').html() + '</li>' : '' }
              ${ params.depot ? '<li>' + $('#analyze_content_filter-depot option[value=' + params.depot + ']').html() + '</li>' : '' } 
              ${ params.route ? '<li>ทางหลวง' + $('#analyze_content_filter-route option[value=' + params.route + ']').html() + '</li>' : '' }
              ${ params.controlSection ? '<li>ตอนควบคุม ' + params.controlSection + '</li>' : '' }
            </ul>
            </div>
    `;
  }

  if (params.road_char || params.road_traffic || params.road_condition || params.tims_vk) {
    html += `<div class="item-div">
            <div class="item-title">ข้อมูลทางหลวง</div>
            <ul>
              ${ params.road_char ? '<li>' + $('#analyze_content_filter-road-char').html() + '' + getFilterDescription('road_char', params.road_char) + '</li>' : '' }
              ${ params.tims_vk ? '<li>' + $('#analyze_content_filter-tims-vk').html() +  '' + getFilterDescription('tims_vk', params.tims_vk) + '</li>' : '' }
              ${ params.road_condition ? '<li>' + $('#analyze_content_filter-road-condition').html() + '' + getFilterDescription('road_condition', params.road_condition) + '</li>' : '' }
              ${ params.road_traffic ? '<li>' + $('#analyze_content_filter-road-traffic').html() + '' + getFilterDescription('road_traffic', params.road_traffic) + '</li>' : '' }
            </ul>
            </div>`;
  }

  if (params.char_horizontal || params.char_vertical || params.char_intersection || params.char_openacess || params.char_other ) {
    html += `<div class="item-div">
            <div class="item-title">ลักษณะบริเวณที่เกิดเหตุ</div>
            <ul>
              ${ params.char_horizontal ? '<li>' + $('#analyze_content_filter-char-horizontal').html() + '' + getFilterDescription('char_horizontal', params.char_horizontal) + '</li>' : '' }
              ${ params.char_vertical ? '<li>' + $('#analyze_content_filter-char-vertical').html() + '' + getFilterDescription('char_vertical', params.char_vertical) + '</li>' : '' }
              ${ params.char_intersection ? '<li>' + $('#analyze_content_filter-char-intersection').html() + '' + getFilterDescription('char_intersection', params.char_intersection) + '</li>' : '' }
              ${ params.char_openacess ? '<li>' + $('#analyze_content_filter-char-openacess').html() + '' + getFilterDescription('char_openacess', params.char_openacess) + '</li>' : '' }
              ${ params.char_other ? '<li>' + $('#analyze_content_filter-char-other').html() + '' + getFilterDescription('char_other', params.char_other) + '</li>' : '' }
            </ul>
            </div>`;
  }

  if (params.control) {
    html += `<div class="item-div">
            <div class="item-title">${ $('#analyze_content_filter-control').html() }</div>
            ${ params.control ? getFilterDescription('control', params.control) : '' }
            </div>`;
  }

  if (params.env_surface || params.env_weather || params.env_light) {
    html += `<div class="item-div">
            <div class="item-title">ทัศนวิสัย/สภาพแวดล้อม</div>
            <ul>
              ${ params.env_surface ? '<li>' + $('#analyze_content_filter-env-surface').html() + '' + getFilterDescription('env_surface', params.env_surface) + '</li>' : '' }
              ${ params.env_weather ? '<li>' + $('#analyze_content_filter-env-weather').html() + '' + getFilterDescription('env_weather', params.env_weather) + '</li>' : '' }
              ${ params.env_light ? '<li>' + $('#analyze_content_filter-env-light').html() + '' + getFilterDescription('env_light', params.env_light) + '</li>' : '' }
            </ul>
            </div>`;
  }

  if (params.addvehicle_type || params.addvehicle_damage || params.addvehicle_safety || params.addvehicle_drug) {
    html += `<div class="item-div">
              <div class="item-title">ข้อมูลเกี่ยวกับรถที่ประสบอุบัติเหตุ</div>
              <ul>
              ${ params.addvehicle_type ? '<li>' + $('#analyze_content_filter-vehicle-type').html() + '' + getFilterDescription('addvehicle_type', params.addvehicle_type) + '</li>' : '' }
              ${ params.addvehicle_damage ? '<li>' + $('#analyze_content_filter-vehicle-damage').html() + '' + getFilterDescription('addvehicle_damage', params.addvehicle_damage) + '</li>' : '' }
              ${ params.addvehicle_safety ? '<li>' + $('#analyze_content_filter-vehicle-safety').html() + '' + getFilterDescription('addvehicle_safety', params.addvehicle_safety) + '</li>' : '' }
              ${ params.addvehicle_drug ? '<li>' + $('#analyze_content_filter-vehicle-drug').html() + '' + getFilterDescription('addvehicle_drug', params.addvehicle_drug) + '</li>' : '' }
              </ul>
              </div>`;
  }

  if (params.crash) {
    html += `<div class="item-div">
            <div class="item-title">${ $('#analyze_content_filter-crash').html() }</div>
            <ul>
            ${ params.crash ? getCrashFilterDescription(params.crash) : '' }
            </ul>
            </div>`;
  }

  if (params.cause) {
    html += `<div class="item-div">
            <div class="item-title">มูลเหตุที่สันนิษฐาน</div>
            <ul>
            ${ params.cause ? getCauseFilterDescription(params.cause) : '' }
            </ul>
            </div>`;
  }

  return html;
}

function getFilterDescription (db_key, data) {
  var txtArr = [];
  var arr = data.split(",");
  var filterRawData = filter_of_interest[db_key];
  filterRawData.forEach(item => {
    arr.forEach(id => {
        if (item.id == id) {
          txtArr.push(item.desc);
        }
    });
  });

  var html = '<ul>';
  txtArr.forEach(item => {
    html += `<li>${ item }</li>`;
  });
  html += '</ul>';
  return html;
}

function getCrashFilterDescription (data) {
  var arr = data.split(",");

  var temp = [];
  for (let index = 0; index < crashName.length; index++) {
    const groupName = crashName[index];
    var row = {
      name: groupName,
      items: []
    };

    arr.forEach(id => {
      filter_of_interest['crash'].forEach(ref => {
        if (id == ref.id && index == Math.floor(ref.code/100)) {
            row.items.push(ref);
        }
      });
    });

    temp.push(row);
  }

  var html = "";
  temp.forEach(group => {
    if (group.items.length > 0) {
      html += `<li>${ group.name }<ul>`;
      group.items.forEach(item => {
        html += `<li>${ item.desc }</li>`;
      });
      html += `</ul></li>`;
    }
  });
  return html;
}

function getCauseFilterDescription (data) {
  var arr = data.split(",");

  var temp = [];
  filter_of_interest['acc_cause_group'].forEach(group => {
    var row = {
      id: group.id,
      name: group.name,
      items: []
    };
    filter_of_interest['cause'].forEach(ref => {
      if (group.id == ref.ref_acc_cause_group_id) {
        arr.forEach(id => {
          if (id == ref.id) {
            row.items.push(ref);
          }
        });
      }
    });
    temp.push(row);
  });
  var html = "";
  temp.forEach(group => {
    if (group.items.length > 0) {
      html += `<li>${ group.name }<ul>`;
      group.items.forEach(item => {
        html += `<li>${ item.desc }</li>`;
      });
      html += `</ul></li>`;
    }
  });
  return html;
}

function downloadCsv () {
  // เพิ่มรับว่าเอา column อะไรบ้าง
  $('#analyze_csv_download').addClass('disabled');
  $('#analyze_csv_download').attr('disabled', true);
  $('#analyze_csv_download').html('<i class="fas fa-circle-notch fa-spin"></i> กำลังสร้างไฟล์ csv');

  var column = "";
  $('#analyzeDownloadModal-csv-column input[id^=column_]:checked').each(function() {
    column += `${ column != "" ? "," : ""}${this.id.substring(7)}`;
  });

  $.ajax({
    url: `${ Drupal.settings.basePath }get_analyze/api/export_csv?`,
    type: "POST",
    data: {
      hid: $('#downloadHidList').val(),
      column: column
    },
    success: function (result) {
      var blob = new Blob([result], { type:'text/csv' }),
       a    = document.createElement('a'),
       url  = URL.createObjectURL(blob);

      // Put the link somewhere in the body
      document.body.appendChild(a);
      a.innerHTML = 'download me';
      a.href = url;

      var m = new Date();
      var dateString =
          m.getUTCFullYear() + "" +
          ("0" + (m.getUTCMonth()+1)).slice(-2) + "" +
          ("0" + m.getUTCDate()).slice(-2) + "" +
          ("0" + m.getUTCHours()).slice(-2) + "" +
          ("0" + m.getUTCMinutes()).slice(-2) + "" +
          ("0" + m.getUTCSeconds()).slice(-2);

      // Set our custom filename
      a.download = `${ dateString }_analyze_download.csv`;
      // Automatically click the link 
      a.click();

      $('#analyze_csv_download').removeClass('disabled');
      $('#analyze_csv_download').removeAttr('disabled');
      $('#analyze_csv_download').html('ดาวน์โหลด');
    }
  })

  // window.open(url);
}

/** Tags */

function set_analyze_map_school_tag () {
  if (analyze_map) {
    analyze_map.Tags.set(
      (tile, zoom) => {
        const res = 1 << zoom;
        const imgId = (tile.v * res) + tile.u;
        load_school_cluster(imgId, "", res);
      },
      { visibleRange: { min: 3, max: 20 } }
    );
  }
}

function set_analyze_map_city_tag () {
  if (analyze_map) {
    analyze_map.Tags.set(
      (tile, zoom) => {
        const res = 1 << zoom;
        const imgId = (tile.v * res) + tile.u;
        load_city_cluster(imgId, "", res);
      },
      { visibleRange: { min: 3, max: 20 } }
    );
  }
}

function toggle_analyze_map_tags (name) {
  const target = $(`.custom-control[name=${name}]`);
  target.toggleClass("active");

  if (target.hasClass("active")) {
    switch (name) {
      case ("school"):
        set_analyze_map_school_tag();
        break;
      case ("city"):
        $('#analyze_content_map_city_legend').show();
        set_analyze_map_city_tag();
        break;
      default:
        console.warn("Unsopported map tags");
        break;
    }
  } else {
    switch (name) {
      case ("school"):
        clear_school();
        break;
      case ("city"):
        clear_city();
        $('#analyze_content_map_city_legend').hide();
        break;
      default:
        console.warn("Unsopported map tags");
        break;
    }
  }
}

function toggle_analyze_map_severity () {
  severityLayer = severityLayer ||
    new longdo.Layer('haims:severity_index', {
      type: longdo.LayerType.WMTS,
      url: 'https://haims2.doh.go.th/geoserver/gwc/service/wmts',
      srs: 'EPSG:900913',
      tileMatrix: z => 'EPSG:900913:' + z,
    });
  const $target = $(".custom-control[name=severity]")
  $target.toggleClass("active")
  if ($target.is(".active")) {
    // go active, add wmts layer
    analyze_map.Layers.add(severityLayer)
  } else {
    // go deactivate, remove wmts layer
    analyze_map.Layers.remove(severityLayer)
  }
}

function load_school_cluster (imgid, objidx, resolution) {
  const zoom = analyze_map.zoom();
  const id = zoom + "-" + imgid;
  if (!schoolItem[id] && $(`.custom-control[name=school]`).hasClass("active")) {
    $.ajax({
		type: "POST",
		cache: false,
		url: Drupal.settings.basePath + "get_analyze_mapcase/school/" + imgid + "/" + resolution + "?rand=" + new Date().getTime(),
		dataType: "json",
		success: function (result) {
			schoolItem[id] = true;
			if (result.status && result.data.length > 0) {
				for (let i = 0; i < result.data.length; i++) {
					const data = result.data[i];
          if (schoolList[data.id]) {
            return;
          }
					const icon = document.createElement("div");
					icon.innerHTML =
					'<img alt="accident_icon" src="' + Drupal.settings.basePath + 'sites/all/modules/haims/summary_images/ic_school.png"/>';
					const coordinate = { lat: data.lat, lon: data.lon };
					const marker = new longdo.Marker(
						coordinate,
						{
							title:  data.title,
							icon: { html: icon.innerHTML },
							visibleRange: { min: 3, max: 20 },
							detail:
								`<table class="cluster-popup-table">
                  <tbody>
										<tr>
											<td class="left">ที่อยู่ :</td>
											<td>${data.address}</td>
										</tr>
										<tr>
											<td class="left">สังกัด :</td>
											<td>${data.belonging}</td>
										</tr>
										<tr>
											<td class="left">ขนาด :</td>
											<td>${data.size}</td>
										</tr>
                    <tr>
											<td class="left">ระยะรัศมี :</td>
											<td>
                        <select id="buffer" onchange="draw_buffer(${data.id})">
                          <option value="" selected>-- เลือก --</option>
                          <option value="250">250 เมตร</option>
                          <option value="500">500 เมตร</option>
                          <option value="1000">1 กิโลเมตร</option>
                        </select>
                      </td>
										</tr>
									</tbody>
								</table>
                <div class="cluster-popup-footer">
                  <input type="hidden" id="school_lat" value="${data.lat}"/>
                  <input type="hidden" id="school_lon" value="${data.lon}"/>
                  <a id="analyze_content_map_school_search" class="d-block btn btn-sm text-white btn-primary" href="javascript:search_buffer()">ค้นหาอุบัติเหตุในบริเวณนี้</a>
                </div>`
						}
					);
          marker.type = "school";
					analyze_map.Overlays.add(marker);
					schoolMarker.push(marker);
          schoolList[data.id] = true;
				}
			}
		}
    });
  }
}

var bufferCircle = false;

function draw_buffer(id) {
  if (bufferCircle) {
    analyze_map.Overlays.remove(bufferCircle);
  }
  const buffer = $("#buffer").val();
  if (buffer) {
    bufferCircle = new longdo.Circle({ lon: $("#school_lon").val(), lat: $("#school_lat").val()}, buffer/111111.0, {
      lineWidth: 1,
      lineColor: "rgba(255, 0, 0, 0.8)",
      fillColor: "rgba(255, 0, 0, 0.2)",
      draggable: false,
      title: `ระยะรัศมี ${buffer >= 1000 ? (buffer/1000) + " กิโลเมตร" : buffer + " เมตร" }`,
      detail: `<div><a class="d-block btn btn-sm text-white btn-danger" href="javascript:clearBufferOverlay(${id})">ลบ</a></div>`,
    });
    analyze_map.Overlays.add(bufferCircle);
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function clearBufferOverlay (id) {
  console.info(id);
  analyze_map.Overlays.remove(bufferCircle);
  bufferCircle = false;
  userPolygon = false;
}

function search_buffer () {
  // $('#buffer').removeClass('error-border');
  if (!bufferCircle) {
    // $('#buffer').addClass('error-border');
    alert("กรุณาระบุระยะรัศมี");
    return;
  }

  const payload = {
    wkts: longdo.Util.overlayToWkt([bufferCircle]),
    wkt_name: "buffer",
    buffer_offset: $("#buffer").val()
  };
  userPolygon = payload;
  search_form(payload);
}

function search_city (wkt) {
  const payload = {
    wkts: wkt,
    wkt_name: "city"
  };
  userPolygon = payload;
  search_form(payload);
}

function load_city_cluster (imgid, objidx, resolution) {
  const zoom = analyze_map.zoom();
  const id = zoom + "-" + imgid;
  if (!cityItem[id] && $(`.custom-control[name=city]`).hasClass("active")) {
    $.ajax({
      type: "POST",
      cache: false,
      url: Drupal.settings.basePath + "get_analyze_mapcase/city/" + imgid + "/" + resolution + "?rand=" + new Date().getTime(),
      dataType: "json",
      success: function (result) {
        cityItem[id] = true;
        if (result.status) {
          for (var i = 0; i < result.data.length; i++) {
            var data = result.data[i];
            if (cityList[data.gid]) {
              return;
            }
            var wkt = longdo.Util.overlayFromWkt(data.wkt, {
              lineWidth: 2,
              lineColor: data.line_color,
              fillColor: data.fill_color,
              title: data.title,
              detail: `<div class="cluster-popup-footer">
                        <a id="analyze_content_map_city_search" class="d-block btn btn-sm text-white btn-primary" href="javascript:search_city('${data.wkt}')">ค้นหาอุบัติเหตุในบริเวณนี้</a>
                      </div>`,
              visibleRange: { min: 3, max: 20 },
            });
            wkt[0].type = "city";
            analyze_map.Overlays.add(wkt[0]);
            cityMarker.push(wkt[0]);
            cityList[data.gid] = true;
          }
        }
      }
    });
  }
}

function add_blackspot (year, mode, level, marker) {
  let canAdd = true
  canAdd = canAdd && bs_check_input[mode].is(":checked")
  canAdd = canAdd && bs_check_input[level].is(":checked")
  canAdd = canAdd && $(".analyze_content #blackspot_year").val() === year;
  if (canAdd) {
    analyze_map.Overlays.add(marker)
  }
}

function load_blackspot (imgid, objidx, resolution) {
  const zoom = analyze_map.zoom();
  const year = $(".analyze_content #blackspot_year").val();
  const tile = zoom + "-" + imgid + "-" + year;
  if (!blackspotItem[tile] && enableBlackSpot && year) {
    $.ajax({
      url: Drupal.settings.basePath + `get_analyze/api/blackspot?imgid=${imgid}&resolution=${resolution}&year=${year}`,
      dataType: "json",
      success: function (response) {
        const data = response.data || []
        blackspotItem[tile] = true
        if (!data || !Array.isArray(data) || data.length === 0) { return }
        // --
        data.forEach(blackspot => {
          const { gid, type, lat, lon, km, bslevel, route, controlsection, district_code, district_name } = blackspot
          const blackspotHash = type + "-" + gid;
          if (blackspotList[blackspotHash]) { return }

          var iconClass = 'blackspot type' + type + ' class' + bslevel;
          var iconStyle = ""
          var icon = `<div class="${iconClass}" style="${iconStyle}">${ type }</div>`;
          var marker = new window.longdo.Marker(
            { lat: lat, lon: lon },
            {
              title: getBlackspotBsName(type),
              icon: { html: icon },
              visibleRange: { min: 3, max: 20 },
              detail: `<div style="font-size: 12px;">ทางหลวง ${route} ตอน ${controlsection}</div>
              <div style="font-size: 12px;">กม. ${km}</div>
              <div style="font-size: 12px;">${ district_name }</div>`
            }
          )
          marker.isBlackSpot = true;
          marker.bs_type = type;
          marker.bs_level = bslevel;
          marker.bs_year = year;
          blackSpotMarker.push(marker);
          blackspotList[blackspotHash] = true; 
          add_blackspot(year, type, bslevel, marker);
        })
      }
    })
  }
}

function getBlackspotBsName (bs_type) {
  var bsName = bs_type;
  switch (bs_type) {
    case 'B':
      bsName = "สะพาน";
      break;
    case 'C':
      bsName = "ทางโค้ง";
      break;
    case 'J':
      bsName = "ทางแยก";
      break;
    case 'R':
      bsName = "จุดตัดทางรถไฟ";
      break;
    case 'S':
      bsName = "ทางตรง";
      break;
    default:
      break;
  }
  return bsName;
}

function fetch_safety_plan (payload) {
  const params = objectToSearchParams(payload);
  return $.ajax({
    url: Drupal.settings.basePath + "get_analyze/api/safety_plan_history?" + params,
    dataType: "json"
  }).then(function (response) {
    const data = response.data;
    delete data.area_wkt;
    const headers = [
      { name: "รหัสงาน", key: "plan_code", classList: "text-end" },
      { name: "รหัสแขวงทางหลวง", key: "district_code", classList: "text-center" },
      { name: "แขวงทางหลวง", key: "district_name", classList: "text-left" },
      { name: "ทางหลวง", key: "road_code", classList: "text-center" },
      { name: "ตอน", key: "section_code", classList: "text-center" },
      { name: "ชื่อตอน", key: "section_name", classList: "text-left" },
      { name: "กม. เริ่มต้น", key: "km_start", classList: "text-end text-nowrap" },
      { name: "กม. สิ้นสุด", key: "km_end", classList: "text-end text-nowrap" },
      { name: "รายละเอียด", key: "plan_detail", classList: "text-left" },
      { name: "วงเงินเบื้องต้น (บาท)", key: "plan_budget", classList: "text-end" },
      { name: "ปีงบประมาณ", key: "budget_year", classList: "text-center" }
    ];
    const rows = data.data;
    rows.forEach(plan => {
      plan.road_code = plan.road_code.padStart(4, "0");
      plan.section_code = plan.section_code.padStart(4, "0");
      const [km_start, m_start] = Number(plan.km_start).toFixed(3).toString().split(".");
      const [km_end, m_end] = Number(plan.km_end).toFixed(3).toString().split(".");
      plan.km_start = `${km_start}+${m_start}`;
      plan.km_end = `${km_end}+${m_end}`;
      plan.plan_budget = Number(plan.plan_budget).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    });
    $("#analyze_content_safety_content_plan").html(`
      <table class="haims__table-clear analyze_table">
        <thead style="position: sticky; top: 0; background: white;">
          <tr>
            ${headers.map(head => `<th>${head.name}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(plan => `
              <tr>
                ${headers
                  .map(head => head.key!=="plan_detail"
                    ? `<td class="${head.classList}">${plan[head.key] ?? "-"}</td>`
                    : `<td class="${head.classList}"><pre style="white-space: pre-wrap; word-break: keep-all;">${plan[head.key] ?? "-"}</pre></td>`
                  )
                  .join("")
                }
              </tr>
            `)
            .join("")
          }
        </tbody>
      </table>
    `);
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "\uFEFF";
    csvContent += headers.map(head => head.name).join(",") + "\n"
    // remove word break and line break from string
    // replace comma to lower quote
    csvContent += rows.map(plan => headers.map(head => (plan[head.key] ?? "-").replace(/\n|\r/g, "").replaceAll(',', '‚')).join(",")).join("\n")
    const uri = encodeURI(csvContent);
    const downloadElement = document.getElementById("analyze_content_safety_export-plan");
    downloadElement.setAttribute("href", uri);
    downloadElement.setAttribute("download", "ประวัติการดำเนินงาน.csv");
  });
}

function fetch_safety_info (payload) {
  const params = objectToSearchParams(payload);
  return $.ajax({
    url: Drupal.settings.basePath + "get_analyze/api/safety_equipment?" + params,
    dataType: "json"
  }).then(function (response) {
    const data = response.data;
    // clear_ws_wkt();
    // place_map_wkt(data.area_wkt, payload);
    delete data.area_wkt;
    $("#analyze_content_safety_content_item").html(`
    <table class="haims__table-clear analyze_table" style="margin: 8px 0 0 8px;">
      <thead style="position: sticky; top: 0; background: white;">
        <tr>
          <th class="text-center">ข้อมูลอุปกรณ์อำนวยความปลอดภัย</th>
          <th class="text-center">มีหรือไม่มี</th>
        </tr>
      </thead>
      <tbody>
      ${
        Object.values(data)
          .map(({ count, name }) =>
            parseInt(count) > 0 
              ? `<tr><td>${name}</td><td class="text-center"><i class="fa-solid fa-check text-success" style="font-size: 20px;"></i></td></tr>`
              : `<tr><td>${name}</td><td class="text-center"><i class="fa-solid fa-xmark text-danger" style="font-size: 20px;"></i></td></tr>`
          )
          .join("")
      }
      </tbody>
    </table>
  `);
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "\uFEFF";
    csvContent += ["ข้อมูลอุปกรณ์อำนวยความปลอดภัย", "จำนวน"].join(",") + "\n";
    csvContent += Object.values(data)
      .map(({ count, name }) => [name, count].join(","))
      .join("\n");
    const uri = encodeURI(csvContent);
    const downloadElement = document.getElementById("analyze_content_safety_export-item");
    downloadElement.setAttribute("href", uri);
    downloadElement.setAttribute("download", "ข้อมูลอุปกรณ์อำนวยความปลอดภัย.csv");
  });
}

function setup_map () {
  analyze_map = new longdo.Map({
    placeholder: document.getElementById("analyze_content_map")
  });
  analyze_map.Event.bind("click", async function (e) {
    // Validate condition
    if (!$(".custom-control[name=severity]").is(".active")) {
      console.warn("Severity layer is disabled")
      return "400"
    }
    const div_position = document.querySelector('.analyze_content').getBoundingClientRect();
    const x = e.x + div_position.x;
    const y = e.y + div_position.y;
    const el = document.elementFromPoint(x, y);
    const severityTile = $(el).parent().find(`[src^="https://haims2.doh.go.th/geoserver/gwc/service/wmts?"]`)
    if (!severityTile) {
      console.warn("No severity tile at clicked position")
      return "404";
    }

    // Calculate tile using https://mmtech.slack.com/archives/C02FDEMLP/p1625819250418200?thread_ts=1625817998.417100&cid=C02FDEMLP
    const clickPosition = analyze_map.location(longdo.LocationMode.Pointer)
    const projection = analyze_map.projection()
    const p = longdo.Util.locationToPoint(projection, clickPosition)
    const r = 1 << (projection.maxZoom - analyze_map.zoom())
    const J = parseInt(p.y / r % 256)
    const I = parseInt(p.x / r % 256)

    // Build query
    const src_query = severityTile.attr("src").split("?")[1]
    const tileParameter = JSON.parse('{"' + decodeURI(src_query.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
    const payload = { ...tileParameter, REQUEST: "GetFeatureInfo", INFOFORMAT: "application/json", I, J, };
    const params = objectToSearchParams(payload);

    // Call service
    let response = {}
    try {
      response = await $.ajax({
        url: `${ Drupal.settings.basePath }get_analyze/api/feature_info`,
        type: "POST",
        data: {
          url: `https://haims2.doh.go.th/geoserver/gwc/service/wmts?${params}`
        },
        success: function (response) {
          // console.log(response);
        }
      })
    } catch (e) {
      console.error(e)
    }
    const data = response.data
    // Place data
    if (data && data.features && data.features.length && data.features[0].properties) {
      const keyName = [
        { key: "road_code", name: "หมายเลขทางหลวง", parse: (value) => (value) },
        { key: "control", name: "ตอนควบคุม", parse: (value) => (value) },
        { key: "km_start", name: "กม.เริ่มต้น", parse: (value) => (value) },
        { key: "km_end", name: "กม.สิ้นสุด", parse: (value) => (value) },
        { key: "length", name: "ระยะทาง", parse: (value) => (value + " กิโลเมตร") },
        { key: "accident", name: "จำนวนอุบัติเหตุ", parse: (value) => (value) },
        { key: "dead", name: "จำนวนผู้เสียชีวิต", parse: (value) => (value) + " ราย"},
        { key: "injury", name: "จำนวนผู้ได้รับบาดเจ็บ", parse: (value) => (value) + " ราย" },
        { key: "severity", name: "ค่าความรุนแรง", parse: (value) => (value) },
        { key: "level", name: "ระดับความรุนแรง", parse: (value) => (value) },
      ];
      const popup = new longdo.Popup(
        clickPosition,
        {
          title: "ดัชนีความรุนแรง",
          detail: `
            <div style="font-size: 13px; padding: 4px 0 0 8px;">
              <table class="analyze_content_map_marker_table">
                <tbody>
                  ${
                    keyName.map(item => `
                      <tr>
                        <td>
                          <strong>${item.name} : </strong>
                        </td>
                        <td>
                          ${ item.parse(data.features[0].properties[item.key] ?? "") }
                        </td>
                      </tr>
                    `).join("")
                  }
                </tbody>
              </table>
            </div>`
        }
      )
      popup.WTMS_data = true;
      analyze_map.Overlays.add(popup);
    }
  });
  analyze_map.Event.bind("overlayChange", function (overlay) {
    const isPopup = overlay instanceof longdo.Popup;
    if (!isPopup) { return; }
    if (!overlay.marker) {
      return;
    }
    const isSchoolPopup = overlay.marker.type === 'school';
    if (isSchoolPopup && !bufferCircle) {
      $("#buffer").val("");
    }
  });
  analyze_map.Event.bind("overlayClick", function (overlay) {
    const isPolygon = overlay instanceof longdo.Polygon;

    if (!isPolygon) { return; }
    /** @type { point[] }*/
    const polygonConvex = overlay.location();
    const convexBound = longdo.Util.locationBound(polygonConvex);
    const popupLat = (convexBound.minLat + convexBound.maxLat) / 2;
    const popupLon = (convexBound.minLon + convexBound.maxLon) / 2;
    overlay.name = overlay.name || generatePolygonName();
    // const popUpHeader = (function () {
    //   switch (overlay.type) {
    //     case ("blackspot"): // ไม่ได้ใช้แล้ว
    //       return `${overlay.bs_name} (${overlay.bs_type}) ${overlay.bs_level_name}`
    //     default:
    //       return `Polygon (รหัส ${overlay.name})`
    //   }
    // })()
    const popUpHeader = `Polygon (รหัส ${overlay.name})`;
    overlay.popupForm = overlay.popupForm || new longdo.Popup(
      { lat: popupLat, lon: popupLon },
      {
        title: `<span style="font-weight: bold; color: #3D5B96; font-size: 15px; line-height: 15px;">${popUpHeader}</span>`,
        detail: `
                  <div>
                    <a id="analyze_content_map_overlay_search" class="d-block btn btn-sm text-white btn-primary">ค้นหาอุบัติเหตุในบริเวณนี้</a>
                    <a id="analyze_content_map_overlay_safety" class="d-block btn btn-sm text-white" style="background: #FF7317;">ค้นหางานอำนวยความปลอดภัยในบริเวณนี้</a>
                    ${ overlay.type != "blackspot" ? '<a id="analyze_content_map_overlay_remove" class="d-block btn btn-sm text-white btn-danger">ลบ Polygon นี้</a>' : ''}
                  </div>
                `,
        /**
         * @param {HTMLElement} el
         */
        loadDetail: function (el) {
          // wait html mounted
          setTimeout(function () {
            $(el).find("#analyze_content_map_overlay_remove").click(function () {
              analyze_map.Overlays.remove(overlay.popupForm);
              analyze_map.Overlays.remove(overlay);
              userPolygon = false;
            });
            $(el).find("#analyze_content_map_overlay_safety").click(async function () {
              // this function use "wkt"
              const payload = {
                wkt: longdo.Util.overlayToWkt([overlay]),
                wkt_name: overlay.name
              };
              $(".analyze_content_filter_header, .ldmap_popup_title").append(`
                <i class="fas fa-circle-notch fa-spin"></i>
              `);
              try {
                const p1 = fetch_safety_info(payload);
                const p2 = fetch_safety_plan(payload);
                await Promise.allSettled([p1, p2]);
              } catch (e) {
                console.error(e);
              }
              $(".analyze_content_filter_header i, .ldmap_popup_title i").remove();
              $(".analyze_content_safety-activator").click();
            });
            $(el).find("#analyze_content_map_overlay_search").click(function () {
              // this function use "wkts"
              const payload = {
                wkts: longdo.Util.overlayToWkt([overlay]),
                wkt_name: overlay.name
              };
              userPolygon = payload;
              search_form(payload);
            });
          }, 10);
        }
      }
    );
    if (overlay.popupForm) { analyze_map.Overlays.remove(overlay.popupForm); }
    analyze_map.Overlays.add(overlay.popupForm);
    buildPolygonOption();
  });

  const schoolCustomControl = new longdo.CustomControl({ html: '<button class="custom-control" name="school" onclick="toggle_analyze_map_tags(\'school\')">โรงเรียน</button>' });
  const cityCustomControl = new longdo.CustomControl({ html: '<button class="custom-control" name="city" onclick="toggle_analyze_map_tags(\'city\')">เขตชุมชน</button>' });
  const severityLayerControl = new longdo.CustomControl({ html: '<button class="custom-control" name="severity" onclick="toggle_analyze_map_severity()">ดัชนีความรุนแรง</button>' });

  analyze_map.Ui.add(cityCustomControl);
  analyze_map.Ui.add(schoolCustomControl);
  // analyze_map.Ui.add(severityLayerControl);

  // Add blackspot tag
  $.ajax({
    url: Drupal.settings.basePath + "get_analyze/api/get_available_year",
    dataType: "json",
    success: function (response) {
      const data = response.data
      if (!data || !Array.isArray(data)) { return false; }
      var movingAverageCustomControl = `
      <div id="blackspot-moving-average-dropdown" class="dropdown custom-control" style="position: unset; line-height: 11px;">
        <button id="blackspot-moving-average" type="button" class="dropdown-toggle"
              data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"
              style="background: unset; border: unset;">
          Moving Average
        </button>
        <form class="dropdown-menu blackspot-menu p-2" style="box-sizing: unset;">
          <div class="form-check d-flex align-items-center">
            <input type="checkbox" id="blackspot_moving_average_checkbox" class="form-check-input">
            <label for="blackspot_moving_average_checkbox" class="form-check-label">แสดงบนแผนที่</label>
          </div>
          <table class="blackspot_table" style="margin: 0 5px">
            <tr>
              <td>จำนวนอุบัติเหตุขั้นต่ำ (ครั้ง) :</td>
              <td>
                <select name="blackspot_moving_average_min_accident" id="blackspot_moving_average_min_accident" style="padding: 2px 4px; border: 1px solid rgba(0, 0, 0, 0.25); line-height: 20px;">
                  <option value="" selected>ทั้งหมด</option>
                  ${
                    [3,5].map(min_accident => `<option value="${min_accident}">${min_accident}</option>`).join("")
                  }
                </select>
              </td>
            </tr>
            <tr>
              <td>Windows :</td>
              <td>
                <select name="blackspot_moving_average_windows" id="blackspot_moving_average_windows" style="padding: 2px 4px; border: 1px solid rgba(0, 0, 0, 0.25); line-height: 20px;">
                    <option value="" selected>ทั้งหมด</option>
                    ${
                      [50, 100].map(windows => `<option value="${windows}">${windows}</option>`).join("")
                    }
                  </select>
              </td>
            </tr>
          </table>
        </form>
      </div>
      `;
      var dbscanCustomConntrol = `
      <div id="blackspot-dbscan-dropdown" class="dropdown custom-control" style="position: unset; line-height: 11px;">
        <button id="blackspot-dbscan" type="button" class="dropdown-toggle"
              data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"
              style="background: unset; border: unset;">
        DBSCAN
        </button>
        <form class="dropdown-menu blackspot-menu p-2" style="box-sizing: unset;">
          <div class="form-check d-flex align-items-center">
            <input type="checkbox"  id="blackspot_dbscan_checkbox" class="form-check-input">
            <label for="blackspot_dbscan_checkbox" class="form-check-label">แสดงบนแผนที่</label>
          </div>
          <table class="blackspot_table" style="margin: 0 5px">
            <tr>
              <td>จำนวนอุบัติเหตุ (ครั้ง) :</td>
              <td>
                <select name="blackspot_dbscan_sample" id="blackspot_dbscan_sample" style="padding: 2px 4px; border: 1px solid rgba(0, 0, 0, 0.25); line-height: 20px;">
                  <option value="" selected>ทั้งหมด</option>
                  ${
                    [3,4,5,6,7,8].map(sample => `<option value="${sample}">${sample}</option>`).join("")
                  }
                </select>
              </td>
            </tr>
            <tr>
              <td>รอบรัศมี (เมตร) :</td>
              <td>
                <select name="blackspot_dbscan_distance" id="blackspot_dbscan_distance" style="padding: 2px 4px; border: 1px solid rgba(0, 0, 0, 0.25); line-height: 20px;">
                    <option value="" selected>ทั้งหมด</option>
                    ${
                      [50, 100, 200, 400, 500].map(distance => `<option value="${distance}">${distance}</option>`).join("")
                    }
                  </select>
              </td>
            </tr>
          </table>
        </form>
      </div>` 
      
      const blackSpotControl = new longdo.CustomControl({
        html: ` 
                ${ dbscanCustomConntrol }
                ${ movingAverageCustomControl }
                <div id="blackspot-dropdown" class="dropdown custom-control" style="position: unset; line-height: 11px; margin-right: 5px;">
                  <button type="button" class="dropdown-toggle"
                        data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"
                        style="background: unset; border: unset;">
                  จุดอันตราย
                </button>
                <form class="dropdown-menu blackspot-menu p-2" style="box-sizing: unset;">
                  <table class="blackspot_table">
                    <tr>
                      <td>ปี :</td>
                      <td>
                        <select name="blackspot_year" id="blackspot_year" style="padding: 2px 4px; border: 1px solid rgba(0, 0, 0, 0.25);">
                          <option selected></option>
                          ${
                            data.map(year => `<option value="${year}">${parseInt(year) + 543}</option>`).join("")
                          }
                        </select>
                      </td>
                    </tr>
                    <tr name="bs_level">
                      <td>
                        ระดับ :
                      </td>
                      <td>
                        <div style="line-height: 17px;">
                          <div class="form-check">
                            <input type="checkbox" name="blackspot_table" id="blackspot_1" class="form-check-input">
                            <label for="blackspot_1" class="form-check-label">อันตรายมาก</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" name="blackspot_table" id="blackspot_2" class="form-check-input">
                            <label for="blackspot_2" class="form-check-label">อันตราย</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" name="blackspot_table" id="blackspot_3" class="form-check-input">
                            <label for="blackspot_3" class="form-check-label">อันตรายน้อย</label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr name="bs_type">
                      <td>
                        ขนิด :
                      </td>
                      <td>
                        <div style="line-height: 17px;">
                          <div class="form-check">
                            <input type="checkbox" name="blackspot_table" id="blackspot_b" class="form-check-input">
                            <label for="blackspot_b" class="form-check-label">สะพาน</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" name="blackspot_table" id="blackspot_c" class="form-check-input">
                            <label for="blackspot_c" class="form-check-label">ทางโค้ง</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" name="blackspot_table" id="blackspot_j" class="form-check-input">
                            <label for="blackspot_j" class="form-check-label">ทางแยก</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" name="blackspot_table" id="blackspot_r" class="form-check-input">
                            <label for="blackspot_r" class="form-check-label">จุดตัดทางรถไฟ</label>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" name="blackspot_table" id="blackspot_s" class="form-check-input">
                            <label for="blackspot_s" class="form-check-label">ทางตรง</label>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </form>
              </div>`
      })
      analyze_map.Ui.add(blackSpotControl);
      analyze_map.Tags.set(
        (tile, zoom) => {
          const res = 1 << zoom;
          const imgId = (tile.v * res) + tile.u;
          load_blackspot(imgId, "", res);
        },
        { visibleRange: { min: 3, max: 20 } }
      );
      $("[name=blackspot_table], [name=blackspot_year]").on("click, change", function () {
        enableBlackSpot = $("[name=bs_level] [name=blackspot_table]:checked").length > 0 && $("[name=bs_type] [name=blackspot_table]:checked").length > 0 && $("#blackspot_year").val();
        if (enableBlackSpot) {
          $("#blackspot-dropdown").addClass("active")
        } else {
          $("#blackspot-dropdown").removeClass("active")
        }
        analyze_map.Overlays.list().forEach(marker => {
          if (marker.isBlackSpot) {
            analyze_map.Overlays.remove(marker)
          }
        })
        blackSpotMarker.forEach(marker => {
          add_blackspot(marker.bs_year, marker.bs_type, marker.bs_level, marker)
        })
      })
      bs_check_input["1"] = $("#blackspot_1")
      bs_check_input["2"] = $("#blackspot_2")
      bs_check_input["3"] = $("#blackspot_3")
      bs_check_input["B"] = $("#blackspot_b")
      bs_check_input["C"] = $("#blackspot_c")
      bs_check_input["J"] = $("#blackspot_j")
      bs_check_input["R"] = $("#blackspot_r")
      bs_check_input["S"] = $("#blackspot_s")

      $('#blackspot_dbscan_checkbox').click(toggleBlackspotDbscanPreset);
      $('#blackspot_dbscan_sample, #blackspot_dbscan_distance').change(toggleBlackspotDbscanPreset);

      $('#blackspot_moving_average_checkbox').click(toggleBlackspotMovingAveragePreset);
      $('#blackspot_moving_average_min_accident, #blackspot_moving_average_windows').change(toggleBlackspotMovingAveragePreset);
    }
  })
}

function toggleBlackspotDbscanPreset () {
  const isEnable = $("#blackspot_dbscan_checkbox:checked").length > 0;
  if (isEnable) {
    $('#blackspot-dbscan-dropdown').addClass('active');
    loadDBScanPreset();
  } else {
    $('#blackspot-dbscan-dropdown').removeClass('active');
    analyze_map.Layers.remove(heatmapLayer);
  }
}
function loadDBScanPreset () {
  const sample = $('#blackspot_dbscan_sample').val();
  const distance = $('#blackspot_dbscan_distance').val();
  const dbscanPresetPromise = $.ajax({
    url: Drupal.settings.basePath + "get_analyze_mapcase/dbscan_preset/1/1?sample=" + sample + "&distance=" + distance,
    dataType: "json"
  }).then(function (response) {
    if (response.status && response.code == 200) {
      var data = [];
      response.data.items.forEach(item => {
        data.push({
          'lat': parseFloat(item.lat),
          'lon': parseFloat(item.lon),
          'value': item.value
        });
      });
      const testData = {
        'max': response.data.max,
        'data': data
      };
      var cfg = {
        'radius': 15,
        "maxOpacity": .5,
        "scaleRadius": false,
        "useLocalExtrema": true
      };
      analyze_map.Layers.remove(heatmapLayer);

      heatmapLayer = new HeatmapOverlay(cfg);
      heatmapLayer.setData(testData);
      analyze_map.Layers.add(heatmapLayer);
    }
    
  });
}

function toggleBlackspotMovingAveragePreset () {
  const isEnable = $("#blackspot_moving_average_checkbox:checked").length > 0;
  clear_moving_average();
  if (isEnable) {
    $('#blackspot-moving-average-dropdown').addClass('active');
    loadMovingAveragePreset();
  } else {
    $('#blackspot-moving-average-dropdown').removeClass('active');
  }
}

function loadMovingAveragePreset () {
  const min_accident = $('#blackspot_moving_average_min_accident').val();
  const windows = $('#blackspot_moving_average_windows').val();
  const movingAveragePresetPromise = $.ajax({
    url: Drupal.settings.basePath + "get_analyze_mapcase/moving_average_preset/1/1?windows=" + windows + "&min_accident=" + min_accident,
    dataType: "json"
  }).then(function (response) {
    if (response.status && response.code == 200) {
      for (let i = 0; i < response.data.length; i++) {
        const data = response.data[i];
        const code = `${data.section_part_id}-${data.path}-${data.windows}-${data.min_accident}`;
        if (movingAverageList[code]) {
          return;
        }

        var wkt = longdo.Util.overlayFromWkt(data.wkt, {
          lineWidth: 5,
          lineColor: data.line_color,
          fillColor: data.fill_color,
          title: 'Moving Average',
          detail: `<div class="cluster-popup-footer">
                    <table class="analyze_content_map_marker_table">
                      <tbody>
                        <tr>
                          <td>หมายเลขทางหลวง : </td>
                          <td>${ data.route }</td>
                        </tr>
                        <tr>
                          <td>ตอนควบคุม : </td>
                          <td>${ data.controlsection }</td>
                        </tr>
                        <tr>
                          <td>ช่วง กม. : </td>
                          <td>${ data.km_start } - ${ data.km_end }</td>
                        </tr>
                        <tr>
                          <td>จำนวนครั้งที่เกิดอุบัติเหตุ : </td>
                          <td>${ data.accident }</td>
                        </tr>
                        <tr>
                          <td>จำนวนครั้งที่เกิดการตาย : </td>
                          <td>${ data.dead }</td>
                        </tr>
                        <tr>
                          <td>จำนวนครั้งที่มีผู้ได้รับบาดเจ็บ : </td>
                          <td>${ data.injury }</td>
                        </tr>
                        <tr>
                          <td>จำนวนครั้งที่มีทรัพย์สินเสียหาย : </td>
                          <td>${ data.property }</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>`,
          visibleRange: { min: 3, max: 20 },
        });
        wkt[0].type = "blackspot_moving_average";
        analyze_map.Overlays.add(wkt[0]);
        movingAverageGeoms.push(wkt[0]);
        movingAverageList[code] = true;
      }
    }
  });

}

function setup_filter_layout () {
  $("#analyze_content_map, .analyze_content_filter-parent")
    .click(function (event) {
      const restrict_zone = $(".analyze_content_filter-activator, .analyze_content_filter_selection, .analyze_content_filter");
      if (restrict_zone.find($(event.target)).length <= 0) {
        $(".analyze_content_filter-parent").removeClass("active");
        $(".analyze_content_filter_selection").removeClass("active");
      }
    });
  $(".analyze_content_filter-activator").click(function (event) {
    event.stopPropagation();
    const filterParent = $(".analyze_content_filter-parent");
    filterParent.toggleClass("active");
    if (!filterParent.is(".active")) {
      $(".analyze_content_filter_selection").removeClass("active");
    }
    reset_tab_activation("filter");
  });
  setDefaultDate();
  createMyDatePicker(
    "#analyze_content_filter_accident-from",
    "#analyze_content_filter_accident-from-mask",
    "-20Y:+0Y",
    { day: "numeric", month: "short", year: "2-digit" }
  );
  createMyDatePicker(
    "#analyze_content_filter_accident-to",
    "#analyze_content_filter_accident-to-mask",
    "-20Y:+0Y",
    { day: "numeric", month: "short", year: "2-digit" }
  );
  $(".analyze_content_filter").click(function () {
    $(".analyze_content_filter_selection").removeClass("active");
  });
}

async function setup_filter_data_agent () {
  const divisionPromise = $.ajax({
    url: Drupal.settings.basePath + "get/ref/division",
    dataType: "json"
  }).then(function (response) {
    const data = response.data;
    const divisionSelector = data.map(item => `<option value="${item.division_code}">${item.name}</option>`).join("");
    $("#analyze_content_filter-division")
      .html(divisionSelector)
      .prepend(`<option value="" selected></option>`);
  });
  const districtPromise = $.ajax({
    url: Drupal.settings.basePath + "get/ref/district",
    dataType: "json"
  }).then(function (response) {
    const data = response.data;
    const districtSelector = data.map(item => `<option value="${item.district_code}" data-parent-division="${item.division_code}">${item.name}</option>`).join("");
    $("#analyze_content_filter-district")
      .html(districtSelector)
      .prepend(`<option value="" selected></option>`);
  });
  return await Promise.allSettled([divisionPromise, districtPromise]);
}

async function setup_filter_data_bs () {
  $.ajax({
    url: Drupal.settings.basePath + "get_analyze/api/get_available_year",
    dataType: "json",
    success: function (response) {
      const data = response.data
      if (!data || !Array.isArray(data)) { return false; }
      $("#analyze_content_filter_bs_year").html(`
        <option selected></option>
        ${
          data.map(year => `<option value="${year}">${parseInt(year) + 543}</option>`).join("")
        }
      `)
    }
  })
}

async function setup_filter_data_region () {
  return await $.ajax({
    url: Drupal.settings.basePath + "get/ref/region",
    dataType: "json"
  }).then(function (response) {
    /** @type { ProvinceTable[] } */
    const data = response.data;
    const region_temp =
      [...new Set(data.map(item => item.region_id))]
        .map(id => {
          const r = data.find(item => item.region_id === id);
          const { region_id, region_name } = r;
          return { region_id, region_name };
        });
    
    data.forEach(item => {
      province[item.code] = item;
    });

    region_temp.forEach(item => {
      region[item.region_id] = item;
    });
    // province = data;
    // region = region_temp;
    const regionSelector = $("#analyze_content_filter-region");
    regionSelector.html(
      region.map(item => `<option value="${item.region_id}">${item.region_name}</option>`).join("")
    );
    regionSelector.prepend("<option value=\"\" selected></option>");
  });
}

function setup_filter_data_province () {
  const current_region = $("#analyze_content_filter-region").val();
  const localProvince = province.filter(item => !current_region || String(item.region_id) === String(current_region));
  const provinceSelector = $("#analyze_content_filter-province");
  provinceSelector.val("");
  provinceSelector.html(
    localProvince.map(item => `<option value="${item.code}">${item.name_th}</option>`).join("")
  );
  provinceSelector.prepend("<option value=\"\" selected></option>");
}

async function setup_filter_data_amphoe () {
  const current_province = $("#analyze_content_filter-province").val();
  const amphoeSelector = $("#analyze_content_filter-amphoe");
  amphoeSelector.val("");
  amphoeSelector.html("");
  if (!current_province) { return false; }

  let amphoeData = amphoe[current_province];
  if (!amphoeData) {
    const response = await $.ajax({
      url: Drupal.settings.basePath + "get/ref/amphoe?code=" + current_province,
      dataType: "json"
    });
    amphoeData = response.data;
    amphoe[current_province] = response.data;
  }
  amphoeSelector.html(
    amphoeData.map(item => `<option value="${item.amphoe_code}">${item.name_th}</option>`).join("")
  );
  amphoeSelector.prepend("<option value=\"\" selected></option>");
  return true;
}

async function setup_filter_data_road () {
  const current_province = $("#analyze_content_filter-province").val();
  const current_amphoe = $("#analyze_content_filter-amphoe").val();
  const roadSelector = $("#analyze_content_filter-road");
  roadSelector.val("");
  roadSelector.html("");
  if (!current_amphoe) { return false; }
  const hash = current_province + current_amphoe;
  let roadData = road[hash];
  if (!roadData) {
    let params = new URLSearchParams({"province_code": current_province, "amphoe_code": current_amphoe});
    params = params.toString();
    const response = await $.ajax({
      url: Drupal.settings.basePath + "get_analyze/api/road_by_amphoe?" + params,
      dataType: "json"
    });
    roadData = response.data.roads;
    amphoe[hash] = response.data;
  }
  roadSelector.html(
    "<option value='' selected></option>" +
    roadData.map(item => `<option value="${item.gids}">[${item.code}] ${item.name}</option>`).join("")
  );
  return true;
}

function setup_filter_data_district () {
  const districtOptions = $("#analyze_content_filter-district option");
  const currentDivision = $(this).val();
  districtOptions.each(function () {
    const self = $(this);
    const isCurrentDivision = self.attr("data-parent-division") === currentDivision || !self.attr("value");
    if (isCurrentDivision) {
      self.css("display", "");
    } else {
      self.css("display", "none");
    }
  });
}

async function setup_filter_data_depot () {
  const currentDistrict = $("#analyze_content_filter-district").val();
  const depotSelector = $("#analyze_content_filter-depot");
  depotSelector.val("");
  depotSelector.html("");
  if (!currentDistrict) { return false; }

  let depotData = depot[currentDistrict];
  if (!depotData) {
    const response = await $.ajax({
      url: Drupal.settings.basePath + "get/ref/depot?district_code=" + currentDistrict,
      dataType: "json"
    });
    depotData = response.data;
    depot[currentDistrict] = response.data;
  }
  depotSelector.html(
    depotData.map(item => `<option value="${item.depot_code}">${item.name}</option>`)
  );
  depotSelector.prepend("<option value=\"\" selected></option>");
  return true;
}

async function setup_filter_data_route () {
  const currentDepot = $("#analyze_content_filter-depot").val();
  const routeSelector = $("#analyze_content_filter-route");
  routeSelector.val("");
  routeSelector.html("");
  if (!currentDepot) { return false; }

  let routeData = route[currentDepot];
  if (!routeData) {
    const response = await $.ajax({
      url: Drupal.settings.basePath + "get/ref/route?depot_code=" + currentDepot,
      dataType: "json"
    });
    routeData = response.data;
    route[currentDepot] = response.data;
  }
  routeSelector.html(
    routeData.map(r => `<option value="${r.route}">หมายเลข ${r.route} ${r.route_name}</option>`)
  );
  routeSelector.prepend("<option value=\"\" selected></option>");
  return true;
}

async function setup_filter_data_control () {
  const currentDepot = $("#analyze_content_filter-depot").val();
  const currentRoute = $("#analyze_content_filter-route").val();
  const controlSelector = $("#analyze_content_filter-controlsection");
  controlSelector.val("");
  controlSelector.html("");
  if (!currentRoute || !currentDepot) { return false; }

  const response = await $.ajax({
    url: Drupal.settings.basePath + `get/ref/controlsection?depot_code=${currentDepot}&route=${currentRoute}`,
    dataType: "json"
  });
  const controlsections = response.data;
  controlSelector.html(
    controlsections.map(c => `<option>${c.control}</option>`)
  );
  controlSelector.prepend("<option value=\"\" selected></option>");
  return true;
}

function initialRouteAutocomplete () {
  const input = $("#analyze_content_filter-search_consec")
  const datalist = $("#analyze_content_filter-search_consec-data")
  const nativeDatalist = datalist.get(0)

  // if click on input -> show datalist
  input.click(async function () {
    await new Promise((resolve) => { setTimeout(resolve, 10) }) // delay is important
    datalist.css("display", "block")
    document.addEventListener('click', (e) => {
      const isClickInsideDatalist = nativeDatalist.contains(e.target)
      if (!isClickInsideDatalist && nativeDatalist.style.display === 'block') {
        nativeDatalist.style.display = 'none'
      }
    }, { once: true }) // once is important
  })

  // search function
  // if click on option -> set value to input
  // if value is set -> call api
  let typingTimer
  const typingDelaySearch = 500
  function doSearch (payload) {
    // payload -> { route, km, control, keyword }
    const params = new URLSearchParams(payload).toString()
    return $.ajax({
      url: Drupal.settings.basePath + "get_analyze/api/search_consec?" + params,
      dataType: "json",
      success: function (response) {
        const data = response.data || []
        if (payload.route && !payload.control && !payload.km && data[0] && data[0].route) {
          data.unshift({
            route: data[0].route,
            control: "",
            route_name: data[0].route_name,
            control_name: ""
          })
        }
        const options = data.map(item =>
          `<option value="${item.route}-${item.control}"
                   route-name="${item.route_name}" route="${item.route}"
                   control-name="${item.control_name}" control="${item.control}">
              ${item.control ? `[${item.route}-${item.control}] ${item.control_name}` : `[${item.route}] ${item.route_name}`}
          </option>`)
          .join("")
        datalist.find("option").remove()
        datalist.html(options)
        datalist.find("option").click(function () {
          const $this = $(this)
          input.val($this.text().trim())
          datalist.find("option").each(function () { $(this).removeClass("active") })
          $(this).addClass("active")
          datalist.css("display", "none")
          $("#analyze_content_filter-route")
            .html(`<option value="${$this.attr("route")}">${$this.attr("route-name")}</option>`)
            .val($this.attr("route"))
          if ($this.attr("control") !== "") {
            $("#analyze_content_filter-controlsection")
              .html(`<option value="${$this.attr("control")}">${$this.attr("control-name")}</option>`)
              .val($this.attr("control"))
          } else {
            $("#analyze_content_filter-controlsection").html("").val("")
          }
        })
      }
    })
  }
  async function alignMode () {
    $("#analyze_content_filter-route").html("").val("")
    $("#analyze_content_filter-controlsection").html("").val("")
    datalist.find("option").remove()
    const keyword = input.val();
    const [isRouteKm, routeKmData] = (function () {
      const [route, km] = keyword.split(" ");
      if (!km) { return [false, {}]; }
      const [kilometre, metre] = km.split("+");
      if (route && kilometre && metre && metre.length === 3) {
        if (!isNaN(route) && !isNaN(kilometre) && !isNaN(metre) && parseInt(metre) < 1000) {
          const km = parseInt(kilometre) * 1000 + parseInt(metre);
          const n_route = String(route).padStart(4, "0")
          return [true, { route: n_route, km }];
        }
      }
      return [false, {}];
    })();
    if (isRouteKm) {
      await doSearch(routeKmData);
      return 0;
    }
    const [isRoute, routeData] = (function () {
      if (!isNaN(keyword) && parseInt(keyword) < 10000) {
        // Exactly route
        const route = String(keyword).padStart(4, "0")
        return [true, { route }]
      }
      if (!isNaN(keyword) && parseInt(keyword) > 10000) {
        // route|control
        const route = String(Math.floor(parseInt(keyword) / 10000)).padStart(4, "0")
        const control = String(parseInt(keyword) % 10000).padStart(4, "0")
        return [true, { route, control }]
      }
      return [false, {}]
    })();
    if (isRoute) {
      await doSearch(routeData);
      return 0;
    }
    await doSearch({ keyword });
    return 0;
  }
  input.on("keyup keydown", async function () {
    clearTimeout(typingTimer)
    typingTimer = setTimeout(alignMode, typingDelaySearch)
  })
}

function setup_filter_data_event () {
  /**
   * สถานที่ Region
   */

  $("#area_selector_1 select").change(function () { $("#area_selector_2 select").val(""); $("#area_selector_3 select, #area_selector_3 datalist").html(""); $("#analyze_content_filter-search_consec").val("") });

  // const polygonSelector = $("#analyze_content_filter-polygon");
  // polygonSelector.mouseenter(buildPolygonOption);
  // polygonSelector.change(function () { $("#analyze_content_filter-region").val("").change(); });

  const regionSelector = $("#analyze_content_filter-region");
  regionSelector.change(setup_filter_data_province);
  regionSelector.change(function () { $("#analyze_content_filter-province").val("").change(); });
  regionSelector.change(function () { $("#analyze_content_filter-polygon").val(""); });

  const provinceSelector = $("#analyze_content_filter-province");
  provinceSelector.change(setup_filter_data_amphoe);
  provinceSelector.change(function () { $("#analyze_content_filter-amphoe").val("").change(); });
  provinceSelector.change(function () { $("#analyze_content_filter-polygon").val(""); });

  const amphoeSelector = $("#analyze_content_filter-amphoe");
  amphoeSelector.change(setup_filter_data_road);
  amphoeSelector.change(function () { $("#analyze_content_filter-road").val("").change(); });
  amphoeSelector.change(function () { $("#analyze_content_filter-polygon").val(""); });

  const roadSelector = $("#analyze_content_filter-road");
  roadSelector.change(function () { $("#analyze_content_filter-polygon").val(""); });

  /**
   * หน่วยงาน Region
   */

  $("#area_selector_2 select").change(function () { $("#area_selector_1 select").val(""); $("#area_selector_3 select, #area_selector_3 datalist").html(""); $("#analyze_content_filter-search_consec").val("") });

  const divisionSelector = $("#analyze_content_filter-division");
  divisionSelector.change(setup_filter_data_district);
  divisionSelector.change(function () { $("#analyze_content_filter-district").val("").change(); });

  const districtSelector = $("#analyze_content_filter-district");
  districtSelector.change(setup_filter_data_depot);
  districtSelector.change(function () { $("#analyze_content_filter-depot").val("").change(); });

  // const depotSelector = $("#analyze_content_filter-depot");
  // depotSelector.change(setup_filter_data_route);
  // depotSelector.change(function () { $("#analyze_content_filter-route").val("").change(); });
  //
  // const routeSelector = $("#analyze_content_filter-route");
  // routeSelector.change(setup_filter_data_control);
  // routeSelector.change(function () { $("#analyze_content_filter-controlsection").val("").change(); });

  /**
   * ส่วนควบคุม Region
   */
  $("#analyze_content_filter-search_consec").change(function () { $("#area_selector_2 select").val(""); $("#area_selector_1 select").val(""); })
  initialRouteAutocomplete();
}

function setup_filter_button_event () {
  const filterButtons = $("#analyze_content_filter_condition button");
  filterButtons.click(function (event) {
    event.stopPropagation();
    $(".analyze_content_filter_selection").addClass("active");
  });
  filterButtons.click(async function () {
    const dom = $(this)[0];
    const db = dom.dataset.db;
    const database = db.split("~")[0];
    const name = $(this).text();
    const headerDiv = $(".analyze_content_filter_selection .analyze_content_filter_header");
    const contentDiv = $(".analyze_content_filter_selection_content");
    headerDiv.text("Loading");
    contentDiv.text("Loading");
    if (!database) { return false; }
    let refData = filter_of_interest[database];
    current_filter[db] = current_filter[db] || [];
    contentDiv.attr("db", db);
    if (!refData) {
      const response = await $.ajax({
        url: Drupal.settings.basePath + "get/ref/" + database,
        dataType: "json"
      });
      refData = response.data;
      filter_of_interest[database] = refData;
    }
    const option = db.split("~")[1];
    if (option) {
      refData = refData.filter(item => item.ref_acc_cause_group_id === option);
    }
    headerDiv.text(name);
    if (database == 'crash') {
      var arr = [];
      refData.forEach(element => {
        var categoryId = parseInt(element.code/100);
        if (!arr[categoryId]) {
          arr[categoryId] = [];
        }
        arr[categoryId].push(element);
      });

      var html = "";
      for (let i = 0; i < arr.length; i++) {
        var groupValue = "";
        var subHTML = "";
        var groupCheckedAll = true;
        var items = arr[i];
        for (let j = 0; j < items.length; j++) {
          var item = items[j];
          if (groupValue != "") {
            groupValue += ",";
          }

          if (!current_filter[db].includes(item.id)) {
            groupCheckedAll = false;
          }
          groupValue += item.id;
          subHTML += `
            <li>
            <div class="form-check sub-form-check" ${database}-group="${i}">
              <input class="form-check-input" type="checkbox" id="${database}-${item.id}" value="${item.id}" ${current_filter[db].includes(item.id) ? "checked" : ""}/>
              <label class="form-check-label" for="${database}-${item.id}">${item.desc}</label>
            </div>
            </li>
          `;
        }

        html += `
          <li>
            <div class="form-check group-form-check" ${database}-group="${i}">
              <input class="form-check-input" type="checkbox" id="${database}-${groupValue}" value="${groupValue}" ${groupCheckedAll ? "checked" : ""}/>
              <label class="form-check-label" for="${database}-${groupValue}">${crashName[i]}</label>
            </div>
            <ul style="list-style: none;">${subHTML}</ul>
          </li>
        `;
      }

      contentDiv.html(`<ul style="list-style: none; padding-left: 0;">${html}</ul>`);
    } else {
      contentDiv.html(
        refData.map(item => `
          <div class="form-check">
              <input class="form-check-input" type="checkbox" id="${database}-${item.id}" value="${item.id}"
                 ${current_filter[db].includes(String(item.id)) ? "checked" : ""}>
            <label class="form-check-label" for="${database}-${item.id}">${item.desc}</label>
          </div>
        `)
        // .join("<br>")
      );
    }

    $(`.analyze_content_filter_selection_content[db="${db}"] input`)
      .off("click")
      .on("click", function () {
        var isGroup = $(this).parent().hasClass('group-form-check');
        var isSub = $(this).parent().hasClass('sub-form-check');
        var checked = $(this).prop('checked');
        if (isGroup) {
          var groupId = $(this).parent().attr(db + '-group');

          var value = $(this).attr('id').replace(db + '-','');
          const valueArr = value.split(",");
          for (let j = 0; j < valueArr.length; j++) {
            $(`#${db}-${valueArr[j]}`).prop('checked', checked)
          }
        } else if (isSub) {
          var groupId = $(this).parent().attr(db + '-group');
          var parent = $(`.group-form-check[${db}-group=${groupId}] input`);
          if (!checked && parent.prop('checked')) {
            parent.removeAttr('checked');
          } else if (checked && !parent.prop('checked')) {
            var subsChecked = $(`.sub-form-check[${db}-group=${groupId}] input:checked`);
            var subs = $(`.sub-form-check[${db}-group=${groupId}] input`);
            if (subs.length == subsChecked.length) {
              parent.prop('checked', true);
            }
          }
        }

        const selected = $(`.analyze_content_filter_selection_content[db="${db}"] .form-check:not(.group-form-check) input:checked`);
        const count = selected.length;
        const target = $(`#analyze_content_filter_condition button[data-db="${db}"]`);
        current_filter[db] = selected.toArray().map(el => el.value);
        if (count <= 0) {
          target.removeClass("btn-primary");
          target.addClass("btn-secondary");
        } else {
          target.addClass("btn-primary");
          target.removeClass("btn-secondary");
        }

      });
  });
}

function setup_filter_tims () {
  filter_of_interest.tims_vk = [
    { id: "-5000", desc: "0 - 5000 (คัน/วัน)" },
    { id: "5001-10000", desc: "5,001 - 10,000 (คัน/วัน)" },
    { id: "10001-40000", desc: "10,001 - 40,000 (คัน/วัน)" },
    { id: "40001-80000", desc: "40,001 - 80,000 (คัน/วัน)" },
    { id: "80000-", desc: "80,001 ขึ้นไป (คัน/วัน)" },
  ]
}

function setup_filter_data () {
  setup_filter_data_region()
    .then(setup_filter_data_province);
  setup_filter_data_agent()
    .then(() => {});
  setup_filter_data_bs()
    .then(() => {});
  setup_filter_data_event();
  setup_filter_button_event();
  setup_filter_tims();
}

function setup_analyzeDownloadModal_csv_column_layout () {
  $.ajax({
    url: Drupal.settings.basePath + "get_analyze/api/csv_column",
    dataType: "json",
    success: function (response) {
      const data = response.data
      var html = ``;
      data.forEach(async (item) => {
        html += `<div class="form-check col-4">
                  <input class="form-check-input" type="checkbox" value="" id="column_${item.key}" checked="true">
                  <label class="form-check-label" for="column_${item.key}">
                    ${ item.name }
                  </label>
                </div>`;
      });
      $('#analyzeDownloadModal-csv-column').html(html);

      $('#analyzeDownloadModal-all-csv-column').click(function() {
        $('#analyzeDownloadModal-csv-column input[id^=column_]').prop('checked', $('#analyzeDownloadModal-all-csv-column').prop('checked'))
      });
    }
  });
}

function search_form (payload) {
  const uid = $("#analyze_user_uid").val();

  let wound1 = $("#analyze_content_filter_has-wound-death:checked").val() || "[]";
  wound1 = JSON.parse(wound1);
  let wound2 = $("#analyze_content_filter_no-wound-death:checked").val() || "[]";
  wound2 = JSON.parse(wound2);
  const wound = [...wound1, ...wound2];

  let is_school_area = $("#analyze_content_filter_school-area").prop("checked");
  let is_city_area = $("#analyze_content_filter_city-area").prop("checked");

  let bs_year = $("#bs_selector [name=bs_year]").val();
  let bs_level = $("#bs_selector [name=bs_level]:checked").get().map(el => el.value);
  let bs_type = $("#bs_selector [name=bs_type]:checked").get().map(el => el.value);

  const dbscan_sample = $("#analyze_content_filter-dbscan_minsample").val();
  const dbscan_eps = $("#analyze_content_filter-dbscan_eps").val();

  const moving_avg_min_accident = $("#analyze_content_filter-moving_average_min_accident").val();
  const moving_avg_windows = $("#analyze_content_filter-moving_average_windows").val();

  const dateFrom = $("#analyze_content_filter_accident-from").val() || "";
  const dateTo = $("#analyze_content_filter_accident-to").val() || "";

  const region = $("#analyze_content_filter-region").val() || "";
  const province = $("#analyze_content_filter-province").val() || "";
  const amphoe = $("#analyze_content_filter-amphoe").val() || "";
  const road = $("#analyze_content_filter-road").val() || "";

  const division = $("#analyze_content_filter-division").val() || "";
  const district = $("#analyze_content_filter-district").val() || "";
  const depot = $("#analyze_content_filter-depot").val() || "";

  const route = $("#analyze_content_filter-route").val() || "";
  const controlSection = $("#analyze_content_filter-controlsection").val() || "";

  const localInterest = {};
  Object.entries(current_filter).forEach(([key, value]) => {
    const db = key.split("~")[0];
    if (db !== "cause") {
      localInterest[db] = value;
    } else {
      localInterest[db] = localInterest[db] || [];
      localInterest[db] = [...localInterest[db], ...value];
    }
  });

  let wkts = {};
  let buffer_offset = false;
  if (payload && payload.wkts && payload.wkt_name) {
    wkts = { wkt: payload.wkts, wkt_name: payload.wkt_name };
    if (payload.wkt_name === "buffer") {
      buffer_offset = payload.buffer_offset;
    }
  } else if ( userPolygon ) {
    wkts = { wkt: userPolygon.wkts, wkt_name: userPolygon.wkt_name };
    if (payload.userPolygon === "buffer") {
      buffer_offset = userPolygon.buffer_offset;
    }
  }

  const politicalData = { region, province, amphoe, road };
  const manageMentData = { division, district, depot, route, controlSection };
  const ajaxData = {
    wound,
    bs_year, bs_level, bs_type,
    is_school_area, is_city_area,  dateFrom, dateTo,
    ...politicalData, ...manageMentData,
    ...wkts, buffer_offset,
    dbscan_sample, dbscan_eps, uid,
    moving_avg_min_accident, moving_avg_windows, 
    ...localInterest
  };
  fetch_case(ajaxData).then(() => {});
}

function setup_filter_form () {
  $("#analyze_content_filter_clear").click(clear_form);
  $("#analyze_content_filter_search").click(search_form);
}

function reset_tab_activation (current) {
  if (current !== "visualization") {
    $(".analyze_content_visualization-activator").removeClass("active");
    $(".analyze_content_visualization").removeClass("active");
  }
  if (current !== "table") {
    $(".analyze_content_table-activator").removeClass("active");
    $(".analyze_content_table").removeClass("active");
  }
  if (current !== "safety") {
    $(".analyze_content_safety-activator").removeClass("active");
    $(".analyze_content_safety").removeClass("active");
  }
}

function setup_table_layout () {
  $(".analyze_content_table-activator").click(function (event) {
    event.stopPropagation();
    $(this).toggleClass("active");
    $(".analyze_content_table").toggleClass("active");
    reset_tab_activation("table");
    computeTableHeaderHeight();
  });
  window.addEventListener("resize", computeTableHeaderHeight);
}

function setup_visualization_layout () {
  $(".analyze_content_visualization-activator").click(function (event) {
    event.stopPropagation();
    $(this).toggleClass("active");
    $(".analyze_content_visualization").toggleClass("active");
    reset_tab_activation("visualization");
  });
  place_visualization();
}

function setup_safety_layout () {
  $(".analyze_content_safety-activator").click(function (event) {
    event.stopPropagation();
    $(this).toggleClass("active");
    $(".analyze_content_safety").toggleClass("active");
    reset_tab_activation("safety");
  })
}

function setup () {
  setup_map();
  setup_filter_layout();
  setup_filter_data();
  setup_filter_form();
  setup_table_layout();
  setup_visualization_layout();
  setup_safety_layout();
  setup_analyzeDownloadModal_csv_column_layout();
}

const addScriptObj = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.addEventListener("load", resolve)
    script.addEventListener("error", reject)
    document.head.appendChild(script);
  })
}

const addStyleSheetObj = (src) => {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.type = "text/css"
    link.rel = "stylesheet";
    link.href = src
    link.addEventListener("load", resolve)
    link.addEventListener("error", reject)
    document.head.appendChild(link);
  })
}

async function install_highcharts () {
  if (isHighchartsInstalled) { return; }
  try {
    await addScriptObj("https://code.highcharts.com/highcharts.js")
    await addScriptObj("https://code.highcharts.com/modules/heatmap.js")
    // await addScriptObj("https://code.highcharts.com/modules/exporting.js")
    // await addScriptObj("https://code.highcharts.com/modules/offline-exporting.js")
    Highcharts.setOptions({
      lang: {
        thousandsSep: ","
      }
    });
  } catch (e) {
    console.error(e)
  }
}

function install_canvasTools () {
  if (isCanvasInstalled) { return; }
  try {
    addScriptObj("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.js").then(() => {})
    addScriptObj("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js").then(() => {})
  } catch (e) {
    console.error(e)
  }
}

function install_markerCluster () {
  addStyleSheetObj("./sites/all/modules/haims/css/MarkerCluster.Default.css").then(() => {})
  addScriptObj("./sites/all/modules/haims/js/longdomap.markercluster-src.js").then(() => {
    markercluster = new lmc.MarkerCluster(analyze_map,
      {
        minClusterSize: 5
      });
  })
}

async function install_heatmap () {
  await addScriptObj("./sites/all/modules/haims/js/heatmap.js")
  await addScriptObj("./sites/all/modules/haims/js/longdomap-heatmap.js") // is map is need to loaded before.
}

function disable_mouse () {
  $(".highcharts-point")
    .on('mouseover mouseenter mouseleave mouseup mousedown',
      function () {
        return false
      }
    );
}

function enable_mouse () {
  $(".highcharts-point")
    .off('mouseover mouseenter mouseleave mouseup mousedown')
}

async function sample_export () {
  const tabs_button = document.querySelectorAll(`[id^="analyze_content_visualization_accordion_heading"]`)
  const capture_target = [...tabs_button].map(el => el.parentNode)
  const tabsLength = tabs_button.length
  $("#analyze_summary_export_visualization").append(`
    <i class="fas fa-circle-notch fa-spin fa-lg ms-2"></i>
  `);
  // --
  const pdf = new jspdf.jsPDF("l", "mm", "a4"); // jsPDF(orientation, unit, format) | orientation = { p(portrait), l(landscape) }
  const padding = 25.4 // 25.4mm = 1inch
  const a4_width = pdf.internal.pageSize.getWidth() - (2 * padding); // padding left, right
  const a4_height = pdf.internal.pageSize.getHeight() - (2 * padding); // padding top, bottom
  // --
  for (let index=0; index < tabsLength; index += 1) {
    const button = $(tabs_button[index]).find("button")
    if (button.is(".collapsed")) {
      button.click()
      await new Promise(resolve => setTimeout(resolve, 500)) // sleep(500), waiting bootstrap animation
      $(".haims__summary__menu__header").click() // clear hover effect
    }
    // --
    window.dispatchEvent(new Event('resize'));
    await new Promise(resolve => setTimeout(resolve, 100)) // sleep(100), waiting highcharts aligned
    // --
    const canvas = await html2canvas(capture_target[index])
    const imageUrl = canvas.toDataURL('image/png')
    // --
    const w_ratio = a4_width / canvas.width
    const h_ratio = a4_height / canvas.height
    const ratio = w_ratio > h_ratio ? h_ratio : w_ratio
    const pdf_el_width = canvas.width * ratio
    const pdf_el_height = canvas.height * ratio
    // --
    if (index > 0) { pdf.addPage() }
    pdf.setPage(index + 1)
    pdf.addImage(imageUrl, 'JPEG', 0+padding, 0+padding, pdf_el_width, pdf_el_height);
  }
  $("#analyze_summary_export_visualization i.fa-spin").remove()

  pdf.save(getCurrentDateTimeString() + "_export_visualization.pdf")
}

$(document).ready(function () {
  setup();
});


/**
 * On entered component
 * Used in script.js
 */
function analyze_onMounted () {
  if (analyze_map) {
    analyze_map.resize();
  }
  $(".analyze_content_filter-parent").addClass("active");
  clear_form();
  install_highcharts().then(() => {});
  install_canvasTools();
  install_markerCluster();
  install_heatmap().then(() => {});
}
