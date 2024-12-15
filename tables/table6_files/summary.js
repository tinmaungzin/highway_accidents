var dirty = true;
var mmmap = false;
var searchtimeout = false;
var currentKey = "*";
var brandCount;
var dateTh2En = {};
var mapCaseParam;
var mapCaseItem = {};
var isShowMapCase = true;
var mapCaseMarker = [];
var mapCaseLabel = [];
var nextCaseLabelMode = 'show';
var url;
var hash;
var maximize = false;

$(document).ready(function () {
    currentKey = getCookie("key");
    if (!currentKey) {
      currentKey = "*";
    }

    createMyDatePicker("#loginuser-start-date", "#loginuser-start-date_mask", "-20Y:+0Y", { day: "numeric", month: "short", year: "2-digit" });
    createMyDatePicker("#loginuser-end-date", "#loginuser-end-date_mask",  "-20Y:+0Y", { day: "numeric", month: "short", year: "2-digit" });
    createMyDatePicker("#search_from", "#search_from_mask");
    createMyDatePicker("#search_to", "#search_to_mask");
    $("#search_from").change(loadCase);
    $("#search_to").change(loadCase);
    createMyDatePicker("#search_created_from", "#search_created_from_mask");
    createMyDatePicker("#search_created_to", "#search_created_to_mask");
    $("#search_created_from").change(loadCase);
    $("#search_created_to").change(loadCase);
    // --
    $("#search_department").change(loadCase);
    $("#search_source").change(loadCase);
    $("#search_noposition").click(loadCase);
    $("#search_invalid").click(loadCase);
    $("#search")
    .keyup(searchKeyup)
    .val(currentKey == "*" ? "" : currentKey);
    createMyDatePicker("#map_from", "#map_from_mask",  "-20Y:+0Y", { day: "numeric", month: "short", year: "2-digit" });
    createMyDatePicker("#map_to", "#map_to_mask",  "-20Y:+0Y", { day: "numeric", month: "short", year: "2-digit" });
    $("#map_from").change(loadMapCase);
    $("#map_to").change(loadMapCase);
    $("#map_department").change(loadMapCase);
    $("#map_source").change(loadMapCase);
    $("#showmapcase").click(toggleMapCase);
    $("input.number")
    .on("change keyup", validateNumber)
    .each(function () {
        $(this).attr("last", this.value);
    });
    $("input[name=pref_home]").change(savePref);

    // set collapse
    $('#search_from_to').click(toggleCollapseSearchFilter);
    $('#search_created_from_to').click(toggleCollapseSearchFilter);
    $('#search_text').click(toggleCollapseSearchFilter);

    $('#search_noposition_mask').click(setCheckBoxSearchFilter);
    $('#search_invalid_mask').click(setCheckBoxSearchFilter);

    // $('#collapse-search_from_to').collapse('hide');

    /*
    $('#mmtab-label-dashboard').attr('href', Drupal.settings.basePath + 'dashboard').attr('target', '_blank');
    $("#mmtab-label-forum").attr("href", Drupal.settings.basePath + "forum").attr("target", "_blank");
    $("#mmtab-label-messages").attr("href", Drupal.settings.basePath + "messages").attr("target", "_blank");
    */

    dateTh2En["ม.ค."] = "Jan";
    dateTh2En["ก.พ."] = "Feb";
    dateTh2En["มี.ค."] = "Mar";
    dateTh2En["เม.ย."] = "Apr";
    dateTh2En["พ.ค."] = "May";
    dateTh2En["มิ.ย."] = "Jun";
    dateTh2En["ก.ค."] = "Jul";
    dateTh2En["ส.ค."] = "Aug";
    dateTh2En["ก.ย."] = "Sep";
    dateTh2En["ต.ค."] = "Oct";
    dateTh2En["พ.ย."] = "Nov";
    dateTh2En["ธ.ค."] = "Dec";
    // SortableTable.prototype.addSortType("thdate", thDateSort);

    createMyDatePicker("#report_from", "#report_from_mask");
    createMyDatePicker("#report_to", "#report_to_mask");
    createMyDatePicker("#report_created_from", "#report_created_from_mask");
    createMyDatePicker("#report_created_to", "#report_created_to_mask");
    createMyDatePicker("#report_past_from", "#report_past_from_mask", "-20Y:+1Y");
    createMyDatePicker("#report_past_to", "#report_past_to_mask", "-20Y:+1Y");
    createMyDatePicker("#report_past_created_from", "#report_past_created_from_mask", "-20Y:+1Y");
    createMyDatePicker("#report_past_created_to", "#report_past_created_to_mask", "-20Y:+1Y");

    createMyDatePicker("#log_from", "#log_from_mask");
    createMyDatePicker("#log_to", "#log_to_mask");

    createMyDatePicker("#wslastupdate", "#wslastupdate_mask");
    createMyDatePicker("#wsuntil", "#wsuntil_mask");

    $("#map_route").change(loadMapCase);
    $("#map_consec").change(loadMapCase);

    // roadsideResize();

    $('input#showallmapcase').change(function () {
      deleteCookie('showallmapcase');
      if ($(this).prop('checked')) {
        setCookie('showallmapcase', true);
      }
      location.reload();
    });

    loadMapTab();
    loadSummaryTab();

    $('.km-num-only').keypress(kmNumberOnly);
    // $('.km-num-only').blur(validateKm);

    showDashboardCounter();


    $('#analyze_search_dropdown').hide();

    $(window).resize(windowResize);
    windowResize();
});

// function roadsideResize() {
//   $("#roadside-frame").height($(window).height() - 80);
// }

function kmNumberOnly (event) {
  var key = window.event ? event.keyCode : event.which;
  if (event.keyCode === 8 || event.keyCode === 43 || event.keyCode === 46) { // code 43 = +
      return true;
  } else if ( key < 48 || key > 57 ) {
      return false;
  } else {
      return true;
  }
}

function windowResize () {
  var content = document.getElementsByClassName("content")[0];
  var childHeight = content.offsetHeight - 3;
  // var mapCase = document.getElementById("mapcase");
  var map = document.getElementById("maptab");
  map.style.height = childHeight + "px";

  if (mmmap) { mmmap.resize(); }

  // chkWinSize();
  $("#mapcase").height(childHeight);
}

function pollHash() {
  if (window.location.hash == hash) { return; }
  checkHash();
}

function showDashboardCounter () {
  $.ajax({
    url: Drupal.settings.basePath + 'counter/v2',
    success: function (response) {
      if (!response.status) {
        return false;
      }
      var data = response.data;
      var dateFrom = new Date(data.dateFrom).toLocaleString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' });
      var dateTo = new Date(data.dateTo).toLocaleString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' });
      if (new Date() < new Date(data.dateTo)) {
        dateTo = "ปัจจุบัน";
      }
      $('#counter_date').text(dateFrom + ' - ' + dateTo);
      $('#total_accident').text(data.count);
      $('#total_wound').text(data.pain);
      $('#total_death').text(data.dead);
      $('#widget_name').text(data.name);
      $('#dashboard__counter').css('display', 'block');
    }
  });
}

function checkHash() {
  hash = window.location.hash;
  if (!hash || hash == "#") { return false; }

  // mmtab.selectTab(hash.substring(1));
  return true;
}

// function showTab(id) {
//     console.log("in showTab " + id);
//   switch (id) {
//     case "summary":
//       loadSummaryTab();
//       break;
//     case "map":
//       loadMapTab();
//       break;
//     case "user":
//       loadUserTab();
//       break;
//     case "eventsummary":
//       loadEventSummaryTab();
//       break;
//   }
//   $(".tab").hide();
//   $("#tab-" + id).show();
//   windowResize();
//   window.location = url + "#" + id;
// }

//////////////////////////////
// Case                     //
//////////////////////////////

function loadSummaryTab() {
  if (dirty) {
    $("#search_from").val($("#map_from").val());
    $("#search_to").val($("#map_to").val());
    $("#search_department").val($("#map_department").val());
    loadCase();
    dirty = false;
  }
}

function toggleCollapseSearchFilter (e) {
  var collapseId = "collapse-" + e.currentTarget.id;
  $('#tab-summary .collapse.show').collapse('hide');
  $("#tab-summary #" +  collapseId).collapse($("#" +  collapseId + ".show").length == 1 ? "hide" : "show");
}

function setCheckBoxSearchFilter (e) {
  var checkboxId = e.currentTarget.id.replace("_mask", "");

  if ($('#' + e.currentTarget.id).hasClass('btn-secondary')) {
    setSearchFilterButtonActive(e.currentTarget.id, true);
  } else if ($('#' + e.currentTarget.id).hasClass('btn-primary')) {
    setSearchFilterButtonActive(e.currentTarget.id, false);
  }

  $('#' + checkboxId).trigger('click');
}


function setSearchFilterButtonActive (id, isActive) {
  if (isActive) {
    $('#' + id).addClass('btn-primary');
    $('#' + id).removeClass('btn-secondary');
  } else {
    $('#' + id).removeClass('btn-primary');
    $('#' + id).addClass('btn-secondary');
  }
}

function setSearchFromToUI () {
  if ($("#search_from").val() != "" && $("#search_to").val() != "") {
    $('#search_from_to span').html(convertToThaiDateShort($("#search_from").val()) + " - " + convertToThaiDateShort($("#search_to").val()));
    setSearchFilterButtonActive('search_from_to', true);
  } else if ($("#search_from").val() != "") {
    $('#search_from_to span').html("ตั้งแต่ " + convertToThaiDateShort($("#search_from").val()) + " - ปัจจุบัน");
    setSearchFilterButtonActive('search_from_to', true);
  } else if ($("#search_to").val() != "") {
    $('#search_from_to span').html(" ถึง " + convertToThaiDateShort($("#search_to").val()));
    setSearchFilterButtonActive('search_from_to', true);
  } else {
    $('#search_from_to span').html("");
    setSearchFilterButtonActive('search_from_to', false);
  }
}

function setSearchCreatedFromToUI () {
  if ($("#search_created_from").val() != "" && $("#search_created_to").val() != "") {
    $('#search_created_from_to span').html(convertToThaiDateShort($("#search_created_from").val()) + " - " + convertToThaiDateShort($("#search_created_to").val()));
    setSearchFilterButtonActive('search_created_from_to', true);
  } else if ($("#search_created_from").val() != "") {
    $('#search_created_from_to span').html("ตั้งแต่ " + convertToThaiDateShort($("#search_created_from").val()) + " - ปัจจุบัน");
    setSearchFilterButtonActive('search_created_from_to', true);
  } else if ($("#search_created_to").val() != "") {
    $('#search_created_from_to span').html(" ถึง " + convertToThaiDateShort($("#search_created_to").val()));
    setSearchFilterButtonActive('search_created_from_to', true);
  } else {
    $('#search_created_from_to span').html("");
    setSearchFilterButtonActive('search_created_from_to', false);
  }
}

function setSearchTextUI () {
  if ($('#search').val() != "") {
    setSearchFilterButtonActive('search_text', true);
  } else {
    setSearchFilterButtonActive('search_text', false);
  }
}

function setSearchSource(source) {
  $('#search_source_mask-dropdown li a').removeClass('active');
  $('#search_source_mask span').html(source == '' ? 'ทั้งหมด' : source);
  $('#search_source_mask-dropdown li a[value="' + source + '"]').addClass('active');
  $('#search_source').val(source);
  if (source != '') {
    setSearchFilterButtonActive('search_source_mask', true);
  } else {
    setSearchFilterButtonActive('search_source_mask', false);
  }
  loadCase();
}

function setSearchDepartmentTextUI (department) {
  $('#search_department_mask-dropdown li a').removeClass('active');
  const deptName = $('#search_department_mask-dropdown li a[value="' + department + '"]').attr('department-name');
  $('#search_department_mask span').html(deptName);
  $('#search_department_mask-dropdown li a[value="' + department + '"]').addClass('active');
}

function setSearchDepartment(department) {
  setSearchDepartmentTextUI(department);
  $('#search_department').val(department);
  if (department != '') {
    setSearchFilterButtonActive('search_department_mask', true);
  } else {
    setSearchFilterButtonActive('search_department_mask', false);
  }
  loadCase();
}

function loadCase() {
  dirty = true;

  var from = $("#search_from").val();
  var to = $("#search_to").val();
  var created_from = $("#search_created_from").val()
    ? $("#search_created_from").val()
    : "0001-01-01";
  var created_to = $("#search_created_to").val()
    ? $("#search_created_to").val()
    : "9999-12-31";
  var department = $("#search_department").val();
  var noposition = $("#search_noposition").prop("checked") ?? false ;
  var invalid = $("#search_invalid").prop("checked") ?? false;
  var source = $("#search_source").val();

  setSearchFromToUI();
  setSearchCreatedFromToUI();
  setSearchTextUI();
  setSearchFilterButtonActive('search_source_mask', source != '');
  setSearchDepartmentTextUI(department);
  setSearchFilterButtonActive('search_department_mask', department !== '');
  setSearchFilterButtonActive('search_noposition_mask', noposition);
  setSearchFilterButtonActive('search_invalid_mask', invalid);

  setCookie("from", from);
  setCookie("to", to);
  setCookie("created_from", created_from);
  setCookie("created_to", created_to);
  // setCookie("department", department);
  setCookie("noposition", noposition);
  setCookie("invalid", invalid);
  setCookie("key", currentKey);
  setCookie("source", source);

  $("#case").html('<div class="casestatus">Loading...</div>');
  var url = Drupal.settings.basePath + "getcase/" + encodeURIComponent(currentKey) + "/" + from + "/" + to +
      "/" + created_from + "/" + created_to + "/" + noposition + "/" + invalid + "/" + department + "/" + source + "?rand=" + new Date().getTime();
  $.ajax({
    type: "POST",
    cache: false,
    url: url,
    success: function (msg) {
		$("#case").html(msg);
		if ($("#caselist").length == 0) return;
      $('.no-results').remove();

      var config = {
        base_path: Drupal.settings.basePath + 'sites/all/libraries/tablefilter/',
        no_results_message: {
          content: 'ไม่พบข้อมูล'
        },
        auto_filter: {
          delay: 1100 //milliseconds
        },
        alternate_rows: true, //Highlight แถวคู่คี่
        paging: {
          results_per_page: ['รายการ: ', [20, 50, 100]],
          page_text: "หน้า",
          of_text: "จาก",
        },
        col_0: "none",
        col_2: "select",
        col_8: "select",
        col_9: "select",
        col_10: "select",
        col_11: "select",
        col_12: "select",
        col_13: "none",
        col_14: "none",
        col_15: "none",
        col_16: "select",
        col_widths: [
          ($("#checkall").length ? "6" : "3") + "5px",
          null,
          "90px",
          "100px",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          "100px",
          "50px",
          "50px",
          "50px",
          "50px",
        ],
        // col_widths: [
        //   ($("#checkall").length ? "6" : "") + "5px",
        //   "50px",
        //   "50px",
        //   "95px",
        //   "45px",
        //   "65px",
        //   "45px",
        //   "75px",
        //   "60px",
        //   "60px",
        //   "60px",
        //   "50px",
        //   "45px",
        //   "45px",
        //   "45px",
        // ],
        btn_reset: {
          text: 'ล้าง'
        },
        rows_counter: {
          text: 'รายการที่:'
        },
        loader: true,
        // loader: {
        //   html: '<div id="lblMsg"></div>',
        //   css_class: 'myLoader'
        // },
        col_types: [
          "None",
          "Number",
          "String",
          "thdate",
          "String",
          "Number",
          "Number",
          "String",
          "Number",
          "Number",
          "Number",
          "String",
          "String",
          "None",
          "None",
          "None",
          "None",
        ],
        custom_options: {
          cols: [8, 9, 10, 11, 12],
          texts: [
              [
                "ไม่มี",
                "1 - 5",
                "6 - 10",
                "11 - 20",
                "21 - 50",
                "51 - 100",
                "> 100",
              ],
              [
                "ไม่มี",
                "1 - 5",
                "6 - 10",
                "11 - 20",
                "21 - 50",
                "51 - 100",
                "> 100",
              ],
              [
                "ไม่มี",
                "1 - 5",
                "6 - 10",
                "11 - 20",
                "21 - 50",
                "51 - 100",
                "> 100",
              ],
              ["ร่าง", "ร่าง/ไม่ครบ", "ไม่ครบ", "ไม่ครบ/เสร็จ", "เสร็จ", "พิจารณาลบ"],
              [
                "Highway + HAIMS Mobile", 
                "Highway",
                "HAIMS Mobile",
                "Motorway",
                "RIMS",
                "TRAMS"
              ]
            ],
          values: [
              [
                "0",
                ">0 && <=5",
                ">5 && <=10",
                ">10 && <=20",
                ">20 && <=50",
                ">50 && <=100",
                ">100",
              ],
              [
                "0",
                ">0 && <=5",
                ">5 && <=10",
                ">10 && <=20",
                ">20 && <=50",
                ">50 && <=100",
                ">100",
              ],
              [
                "0",
                ">0 && <=5",
                ">5 && <=10",
                ">10 && <=20",
                ">20 && <=50",
                ">50 && <=100",
                ">100",
              ],
              ["ร่าง", "ร่าง  || ไม่ครบ", "ไม่ครบ", "ไม่ครบ || เสร็จ", "เสร็จ", "พิจารณาลบ"],
              [
                "Highway || HAIMS Mobile", 
                "Highway",
                "HAIMS Mobile",
                "Motorway",
                "RIMS",
                "TRAMS"
              ]
            ],
          sorts: [false, false, false],
        },
        clear_filter_text: "ทั้งหมด",
        sort_num_asc: [4, 5],
        cell_parser: {
          cols: [16],
          parse: function(o, cell, colIndex){
            if(colIndex === 16){
                var chk = cell.getElementsByTagName('a')[0];
                if(chk) return 'ซ้ำซ้อน';
                else return 'ไม่ซ้ำซ้อน';
            }
          }
        },
        on_filters_loaded: function(tf){
          tf.setFilterValue(12, 'Highway || HAIMS Mobile');
          tf.filter();
        },
        extensions:[{
            name: 'sort',
            on_sort_loaded: function(o, sort) {
              sort.addSortType('thdate', thDateCast, thDateSort);
            },
        }]
      };
      var tf = new TableFilter('caselist', config);
      tf.init();

		$(".check").click(lockCase);
		$("#checkall").click(lockAllCase);
    },
  });
}

function searchKeyup() {
  if (searchtimeout) {
    clearTimeout(searchtimeout);
  }
  searchtimeout = setTimeout(searchCase, 500);
}

function searchCase() {
  var key = jQuery.trim($("#search").val());
  if (key == "") key = "*";
  if (key == currentKey) return;

  currentKey = key;
  loadCase();
}

function showDeleteCaseModal(hid, status) {
  var bodyMsg = `<div>ยืนยันการลบข้อมูล hid ${hid} หรือไม่</div>`;
  $('#delete-case-modal .modal-body').html(bodyMsg);
  $('#delete-case-modal .modal-footer').html(`
    ${ status == 4 ? `<button type="button" class="btn btn-secondary" onclick="updateCaseStatus(${hid}, ${status == 4 ? 1 : false})">เปลี่ยนสถานะเป็นร่าง</button>` : ""}
    <button type="button" class="btn btn-danger" onclick="deleteCase(${hid})">ยืนยัน</button>
  `);
  $('#delete-case-modal').modal('show');
}

function updateCaseStatus(hid, status) {
  if (status && hid) {
    $.ajax({
      type: "POST",
      cache: false,
      url: Drupal.settings.basePath + "save/update_status",
      data: {
        hid: hid,
        status: status,
      },
      success: function (result) {
        if (!result.status) {
          alert(result.message);
        }
        $('#delete-case-modal').modal('hide');
        loadCase();
        if (mmmap) {
          mmmap.Overlays.clear();
          setMapTag();
        }
      },
    });
  }
}

function deleteCase(hid) {
  // if (!confirm("ต้องการลบข้อมูลหมายเลข hid " + hid + "?")) return;
  $.ajax({
    type: "POST",
    cache: false,
    url: Drupal.settings.basePath + "delete/case",
    data: {
      hid: hid,
      is_from_haims_mobile: false,
      
    },
    success: function (result) {
      if (!result.status) {
        alert(result.message);
      }
      $('#delete-case-modal').modal('hide');
      loadCase();
      if (mmmap) {
        mmmap.Overlays.clear();
        setMapTag();
      }
    },
  });
}

function lockCase(e) {
  doLock(e.target.checked, e.target.id.substring(6));
}

function lockAllCase(e) {
  var id = "";
  $(".check")
    .prop("checked", $("#checkall").prop("checked"))
    .each(function () {
      id += "," + this.id.substring(6);
    });
  doLock(e.target.checked, id.substring(1));
}

function doLock(isChecked, id) {
  var checkbox = $(isFinite(id) ? "#check_" + id : ".check");
  checkbox.attr("disabled", "disabled");
  $.ajax({
    type: "POST",
    cache: false,
    data: { hid: id },
    url:
      Drupal.settings.basePath +
      "lock/" +
      (isChecked ? 1 : 0) +
      "?rand=" +
      new Date().getTime(),
    success: function (msg) {
      if (msg != "OK") {
        alert(msg);
        if (isChecked) {
          checkbox.removeAttr("checked");
        } else {
          checkbox.prop("checked", "checked");
        }
      }
      checkbox.removeAttr("disabled");
    },
  });
}

function thDateCast (s) {
  var date = s.split(" ");
  var day = date[1];
  var month = dateTh2En[date[2]];
  var year = 1957 + parseInt(date[3]);
  var time = "00:00";
  if (date.length > 4) {
    time = date[4];
  }
  return Date.parse(day + " " + month + " " + year + " " + time);
}

function thDateSort(n1, n2) {
  if(n1.value < n2.value) {
    return -1;
  }
  if(n2.value < n1.value) {
      return 1;
  }
  return 0;
}


function getCompareCase (hid, similar_hid) {
  $('#compare-case-modal .loading').show();
  $('#compare-case-modal table').hide();
  $.ajax({
    type: "POST",
    cache: false,
    data: {
      hid: hid,
      similar_hid: similar_hid,
    },
    url: Drupal.settings.basePath + "get/compare_case" + "?rand=" + new Date().getTime(),
    success: function (result) {
      if (result.status) {
        var data = result.data.hid_data;
        var dataSourceTxt = data.source == "Highway" ? "HAIMS" : data.source;

        var similar_data = result.data.similar_hid_data;
        var similarDataSourceTxt = "ไม่พบข้อมูล";
        if (similar_data.source) {
          similarDataSourceTxt = similar_data.source == "Highway" ? "HAIMS" : similar_data.source;
        }

        var html = '';
        html += '<tr>'
                  + '<td>เลขอุบัติเหตุ</td>'
                  + '<td>' + (similar_data.source ? '<a href="' + Drupal.settings.basePath + 'form/' + similar_data.hid + '" target="_blank">' + similar_data.hid + '</a>' : similar_data.hid) + '</td>'
                  + '<td><a href="' + Drupal.settings.basePath + 'form/' + data.hid + '" target="_blank">' + data.hid + '</a></td>'
                + '</tr>'
                + '<tr>'
                  + '<td>วันที่เกิดเหตุ</td>'
                  + '<td>' + similar_data.date + '</td>'
                  + '<td>' + data.date + '</td>'
                + '</tr>'
                + '<tr>'
                  + '<td>เวลาเกิดเหตุ</td>'
                  + '<td>' + similar_data.time + '</td>'
                  + '<td>' + data.time + '</td>'
                + '</tr>'
                + '<tr>'
                  + '<td>หมายเลขสายทาง</td>'
                  + '<td>' + similar_data.route + '</td>'
                  + '<td>' + data.route + '</td>'
                + '</tr>'
                + '<tr>'
                  + '<td>กิโลเมตรที่</td>'
                  + '<td>' + similar_data.km + '</td>'
                  + '<td>' + data.km + '</td>'
                + '</tr>'
                + '<tr>'
                  + '<td>ชื่อสายทาง</td>'
                  + '<td>' + similar_data.control_name + '</td>'
                  + '<td>' + data.control_name + '</td>'
                + '</tr>'
                + '<tr>'
                  + '<td>ที่เกิดเหตุ</td>'
                  + '<td>' + similar_data.address + '</td>'
                  + '<td>' + data.address + '</td>'
                + '</tr>'
                + '<tr>'
                  + '<td>จำนวนผู้บาดเจ็บ</td>'
                  + '<td>' + similar_data.injured + '</td>'
                  + '<td>' + data.injured + '</td>'
                + '</tr>'
                + '<tr>'
                  + '<td>จำนวนผู้เสียชีวิต</td>'
                  + '<td>' + similar_data.death + '</td>'
                  + '<td>' + data.death + '</td>'
                + '</tr>'
                + '<tr>'
                  + '<td>ทะเบียนยานพาหนะ คันที่ 1</td>'
                  + '<td>' + similar_data.vehicle_no1 + '</td>'
                  + '<td>' + data.vehicle_no1 + '</td>'
                + '</tr>';
        $('#compare-case-modal table tbody').html(html);
        
        html = '<tr>'
                + '<td><button type="button" class="btn btn-danger" onclick="javascript:saveUpdateCompareCase(' + data.hid + ',' + similar_data.hid + ')">ไม่ใช่อุบัติเหตุซ้ำซ้อน</button></td>'
                + '<td>' + (similar_data.source ? '<button type="button" class="btn btn-primary" onclick="javascript:saveCompareCase(' + similar_data.hid + ',' + data.hid + ');">ใช้ข้อมูลเลขอุบัติเหตุ ' + similar_data.hid + '</button>' : '') + '</td>'
                + '<td><button type="button" class="btn btn-primary" onclick="javascript:saveCompareCase(' + data.hid + ',' + similar_data.hid + ');">ใช้ข้อมูลเลขอุบัติเหตุ ' + data.hid+ '</button></td>'
              + '</tr>';

        $('#compare-case-modal table tfoot').html(html);
        
        $('#compare-case-modal table th#data-source').html(dataSourceTxt);
        $('#compare-case-modal table th#similar-data-source').html(similarDataSourceTxt);

        $('#compare-case-modal .loading').hide();
        $('#compare-case-modal table').show();
      } else {
        alert(result.message);
      }
    }
  });
  showCompareCaseModal();
}

function showCompareCaseModal () {
  $('#compare-case-modal').modal('show');
}

function saveUpdateCompareCase(hid, similar_hid) {
  if (!confirm("ยืนยันว่าตรวจสอบแล้ว พบว่าข้อมูลเลขอุบัติเหตุ " + hid + " กับ เลขอุบัติเหตุ " + similar_hid + " ไม่ซ้ำซ้อนกัน?")) return;
  $('#compare-case-modal .loading').show();
  $.ajax({
    type: "POST",
    cache: false,
    data: {
      hid: hid
    },
    url: Drupal.settings.basePath + "save/update_compare_case" + "?rand=" + new Date().getTime(),
    success: function (result) {
      if (result.status) {
        $('#compare-case-modal').modal('hide');
        loadCase();
      } else {
        alert(result.message);
      }
    }
  });
} 

function saveCompareCase (use_hid, delete_hid) {
  if (!confirm("ยืนยันต้องการใช้ข้อมูลจาก เลขอุบัติเหตุ " + use_hid + "?")) return;
  $('#compare-case-modal .loading').show();
  $.ajax({
    type: "POST",
    cache: false,
    data: {
      use_hid: use_hid,
      delete_hid: delete_hid
    },
    url: Drupal.settings.basePath + "save/compare_case" + "?rand=" + new Date().getTime(),
    success: function (result) {
      if (result.status) {
        $('#compare-case-modal').modal('hide');
        loadCase();
      } else {
        alert(result.message);
      }
    }
  });
}


//////////////////////////////
// Map                      //
//////////////////////////////

function setMapTag () {
  if (mmmap) {
    mmmap.Tags.set((tile, zoom) => {
      var res = 1 << zoom
      var imgId = (tile.v * res) + tile.u
      loadMapCaseCluster(imgId, '', res)
    }, { visibleRange: { min: 3, max: 20 } })
  }
}

function transformLayerV2 (LayerOptionV1) {
  // extra in mapV1 already place in mapV2
  var layerName = LayerOptionV1.layers ?? LayerOptionV1.name;
  var layerOption = {
    type: window.longdo.LayerType[LayerOptionV1.layertype],
    url: LayerOptionV1.url,
    zoomRange: { min: LayerOptionV1.startzoom ?? 5, max: LayerOptionV1.stopzoom ?? 20 },
    weight: LayerOptionV1.zIndex,
    extraQuery: LayerOptionV1.extraQuery
  }
  return new window.longdo.Layer(layerName, layerOption)
}

function loadMapTab() {
  if (!mmmap) {
    mmmap = new window.longdo.Map({
      placeholder: document.getElementById("maptab")
    });
    mmmap.Layers.add(transformLayerV2(Drupal.settings.km)); // Layer หลักกิโล
    mmmap.location({ lat: 13.767734, lon: 100.5351375 });
    mmmap.zoom(7);
    mmmap.Ui.LayerSelector.visible(false);
    setMapTag();
    // --
    if (dirty) {
      loadCase();
    } else {
      dirty = true;
    }
    windowResize();
  }
  if (dirty) {
    $("#map_from").val($("#search_from").val());
    $("#map_to").val($("#search_to").val());
    $("#map_department").val($("#search_department").val());
    if (getCookie('showallmapcase')) {
      $('#showallmapcase').prop('checked', true);
    }
    loadMapCase();
    dirty = false;
  }
}

function loadMapCase() {
  dirty = true;

  var from = $("#map_from").val();
  var to = $("#map_to").val();
  var department = $("#map_department").val() ? $("#map_department").val() : 0;
  setCookie("from", from);
  setCookie("to", to);
  setCookie("department", department);

  var route = $("#map_route").val() ? $("#map_route").val() : 0;
  var consec = $("#map_consec").val() ? $("#map_consec").val() : 0;
  setCookie("route", route);
  setCookie("consec", consec);

  var source = $("#map_source").val() ? $("#map_source").val() : 0;
  setCookie("source", source);

  mapCaseParam = "/" + from + "/" + to + "/" + department + "/" + route + "/"+ source + "/" + consec;

  //if (this.id == undefined || this.id == 'map_year' || this.id == 'map_month' || this.id == 'map_department') {
  mapCaseItem = {};
  //}
  if (window.loadBlackSpot) loadBlackSpot(this.id);

  mmmap.resize();
  $("#mapcaseinfo").html('<div class="casestatus">Loading...</div>');
  $.ajax({
    type: "POST",
    cache: false,
    url:
      Drupal.settings.basePath +
      "getmapinfo" +
      mapCaseParam +
      "?rand=" +
      new Date().getTime() +
      (window.loadBlackSpot && $("#blackspot_year").val() != null ? "&blackspot=" + $("#blackspot_year").val() : ""),
    dataType: "json",
    success: function (msg) {
      var info = "<td><h6>อุบัติเหตุ</h6>";
      if (msg.count == "0") {
        info += "ไม่พบอุบัติเหตุ</div>";
      } else {
        info += msg.count + " อุบัติเหตุ</id>";
        mmmap.location({ lat: msg.lat, lon: msg.lon });
      }
      if (window.renderBlackSpotInfo) info += renderBlackSpotInfo(msg);
      $("#mapcaseinfo").html(
        '<table class="casestatus"><tr>' + info + "</tr></table>"
      );

      mmmap.Overlays.clear();
      setMapTag();
      if (msg.geom != null) drawMapInfoGeom(msg.geom);
    },
  });
}

function loadMapCaseCluster(imgid, objidx, resolution) {
  var showAllMapCase = getCookie('showallmapcase');
  var zoom = mmmap.zoom();
  var id = zoom + "-" + imgid;
  if (isShowMapCase && !mapCaseItem[id]) {
    $.ajax({
      type: "POST",
      cache: false,
      url:
        Drupal.settings.basePath +
        "getmapcase/" +
        imgid +
        "/" +
        resolution +
        mapCaseParam +
        "?rand=" +
        new Date().getTime()
        + '&showallmapcase=' + (showAllMapCase ? 1 : 0),
      dataType: "json",
      success: function (msg) {
        mapCaseItem[id] = true;
        for (var i = 0; i < msg.length; i++) {
          var item = msg[i];
          var icon = document.createElement("div");
          icon.className = "icon cluster" + id + " severity" + item.severity;
          icon.innerHTML =
            '<img alt="accident_icon" src="' +
              Drupal.settings.basePath + "sites/all/modules/haims/summary_images/icon_accident" + item.severity + '.png"' +
            '/>';
          if (!isShowMapCase) {
            icon.style.display = "none";
          }
          var coordinate = { lat: item.latitude, lon: item.longitude };
          var marker = new window.longdo.Marker(
            coordinate,
            {
              title: item.title,
              icon: { html: icon.innerHTML },
              visibleRange: { min: zoom-1, max: zoom+1 },
              detail:
                '<div style="background-color: white;">' +
                  item.detail +
                '<div class="popupbutton">' +
                  '<a class="btn view btn-primary btn-sm datalist__btn" role="button" href="' + Drupal.settings.basePath + 'view/' + item.hid + '" title="ดู" target="_blank"><i class="fa-solid fa-eye"></i></a>' + 
                  (item.editable
                    ? 
                    '<a class="btn edit btn-warning btn-sm datalist__btn" role="button" href="' + Drupal.settings.basePath + 'form/' + item.hid + '" title="แก้ไข" target="_blank"><i class="fa-solid fa-pen"></i></a>' +
                    '<a class="btn delete btn-danger btn-sm datalist__btn" role="button" href="javascript:showDeleteCaseModal(' + item.hid + ', false);" title="ลบ"><i class="fa-solid fa-trash-can"></i></a>'
                    : '') +
                  '</div>' +
                '</div>'
            }
          )
          var markerLabel = new window.longdo.Dot(
            coordinate,
            {
              label: item.title,
              visibleRange: { min: zoom-1, max: zoom+1 }
            }
          )
          mmmap.Overlays.add(marker)
          mapCaseMarker.push(marker)
          mapCaseLabel.push(markerLabel)
        }
      },
    });
  }
  if (window.loadBlackSpotCluster)
    loadBlackSpotCluster(imgid, objidx, resolution);
  /*HAIMS2013: use WMS kmstone*/ return;
  if (zoom < 14) return;

  $.ajax({
    type: "POST",
    cache: true,
    url: Drupal.settings.basePath + "getkmstone/" + imgid + "/" + resolution,
    dataType: "json",
    success: function (msg) {
      for (var i = 0; i < msg.length; i++) {
        var item = msg[i];
        var icon = document.createElement("div");
        icon.className = "kmstone";
        icon.innerHTML =
          '<div class="stone"></div>' + (zoom < 16 ? "" : item.name);
        mmmap.drawCustomDivLevel(
          icon,
          item.latitude,
          item.longitude,
          item.name,
          zoom,
          zoom,
          { centerOffsetX: "8px", centerOffsetY: "12px" }
        );
      }
    },
  });
}

function toggleMapCase() {
  var checked = document.getElementById('showmapcase').checked // New val
  if (mmmap && !checked) {
    for (var i = 0; i < mapCaseMarker.length; i += 1) {
      mmmap.Overlays.remove(mapCaseMarker[i])
    }
    for (var i = 0; i < mapCaseLabel.length; i += 1) {
      mmmap.Overlays.remove(mapCaseLabel[i])
    }
    mapCaseMarker = []
    mapCaseLabel = []
  } else if (mmmap && checked) {
    setMapTag();
    loadMapCase();
  }
}

function mapResize() {
  if (maximize) {
    maximize = false;
    $("#mapresize").removeClass("maximize");
  } else {
    maximize = true;
    $("#mapresize").addClass("maximize");
  }
  windowResize();
}
//////////////////////////////
// Report                   //
//////////////////////////////

function validateNumber() {
  var content = $(this);
  var value = content.val();
  if (!value.replace(/\d/g, "")) {
    var intVal = parseInt(value);
    var min = parseInt(content.attr("min"));
    var max = parseInt(content.attr("max"));
    if ((isNaN(min) || intVal >= min) && (isNaN(max) || intVal <= max)) {
      content.attr("last", value);
      return;
    }
  }

  var last = content.attr("last");
  content.val(last == undefined ? "" : last);
}

// When request_only is true, do not open the report in new page
// just creating the report
function showReport(id, type, request_only) {
  //var url = Drupal.settings.basePath + 'report?id=' + id + '&type=' + type + '&year=' + $('#report_year').val();
  //var month = $('#report_month').val();
  //if (month > 0) {
  //  url += '&month=' + month;
  //}
  var from = $("#report_from").val();
  var to = $("#report_to").val();
  var created_from = $("#report_created_from").val()
    ? $("#report_created_from").val()
    : "0001-01-01";
  var created_to = $("#report_created_to").val()
    ? $("#report_created_to").val()
    : "9999-12-31";
  if (!from || !to) {
    alert("ไม่ได้ระบุช่วงเวลา");
    return;
  }

  // var url =
  //   Drupal.settings.basePath +
  //   "report?id=" +
  //   id +
  //   "&type=" +
  //   type +

  var url = jasper_server + 'report' + id + '.' + type + "?" +
    "from=" +
    from +
    "&to=" +
    to +
    "&created_from=" +
    created_from +
    "&created_to=" +
    created_to;
    if (type == 'xlsx') {
      url += '&ignorePagination=true';
    }
  var reportDepartment = $("#report_department");
  var department = reportDepartment.val();
  var deptname = "";
  if (department && (id < 16 || id > 18)) {
    var deptname = $("label[for=report_department]");
    deptname = deptname.length
      ? deptname.html()
      : reportDepartment
          .children('option[value="' + department + '"]')
          .html()
          .replace(" &nbsp; - ", "");
  }
  url += "&deptname=" + deptname + "&deptcode=" + department;

  var province = $("#report_province").val();
  url += "&province=" + province;
  // if (province) {
  //   url += "&province=" + province;
  // }

  var route = $("#report_route").val();
  url += "&route=" + route;
  // if (route) {
  //   url += "&route=" + route;
  // }
  var controlsection = $("#report_controlsection").val();
  url += "&controlsection=" + controlsection;
  // if (controlsection) {
  //   url += "&controlsection=" + controlsection;
  // }

  var cause = $("#report_cause").val();
  url += "&cause=" + cause;
  // if (cause) {
  //   url += "&cause=" + cause;
  // }

  var roadusetype = $("#report_roadusetype").val();
  url += "&roadusetype=" + roadusetype;
  // if (roadusetype) {
  //   url += "&roadusetype=" + roadusetype;
  // }

  var km_start = $('#report_km_start').val().trim().replace('+', '');
  km_start = km_start ? parseInt(km_start) : '';
  var km_end = $('#report_km_end').val().trim().replace('+', '');
  km_end = km_end ? parseInt(km_end) : '';

  url += "&km_start=" + km_start;
  url += "&km_end=" + km_end;

  if (id == 2) {
    //ภาพรวมมูลเหตุสันนิษฐาน
    url += "&cause_mode=" + $('input[name=cause_mode]:checked').val();

  } else if (id == 14) {
    //สรุปอุบัติเหตุบนทางหลวงทั่วประเทศ
    url += "&sort=" + $("input[name=report_sort]:checked").val();
  } else if (id == 15) {
    //สรุปอุบัติเหตุบนทางหลวงทั่วประเทศเปรียบเทียบเทศกาลสงกรานต์
    var festival = $("#report_festival").val();
    var pastfrom = $("#report_past_from").val();
    var pastto = $("#report_past_to").val();
    var pastcreatedfrom = $("#report_past_created_from").val();
    if (!pastcreatedfrom) {
      pastcreatedfrom = "0001-01-01";
    }
    var pastcreatedto = $("#report_past_created_to").val();
    if (!pastcreatedto) {
      pastcreatedto = "9999-01-01";
    }
    url +=
      "&report_festival="+ 
      festival +
      "&report_past_from=" +
      pastfrom +
      "&report_past_to=" +
      pastto +
      "&report_past_created_from=" +
      pastcreatedfrom +
      "&report_past_created_to=" +
      pastcreatedto;
  } else if (id == 100) {
    var kmfrom = $("#report100_from").val();
    var kmto = $("#report100_to").val();
    if (!route.length) {
      alert("ไม่ได้ระบุทางหลวง");
      return;
    }
    if (!kmfrom.length || !kmto.length) {
      alert("ไม่ได้ระบุ กม.");
      return;
    }
    url += "&kmfrom=" + kmfrom + "&kmto=" + kmto;
  } 

  url += "&rand=" + $.now();
  // console.log(url);
  if (!request_only) {
    window.open(url);
  } else {
    $.ajax({
      type: "GET",
      cache: false,
      url: url,
    });
  }
}

// build all report except report 100
function buildAllReport() {
  var type = ["pdf", "xlsx", "htm"];
  //var report = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  //
  //$.each(type, function(index, report_type) {
  //  $.each(report, function(index, report_id) {
  //    showReport(report_id, report_type, true);
  //  });
  //});
  $.each(type, function (index, report_type) {
    $(".reportname").each(function (index) {
      if (index != 0) showReport(index, report_type, true);
    });
  });

  alert("สร้างรายงานเสร็จเรียบร้อยแล้ว");
}
//////////////////////////////
// Event Summary            //
//////////////////////////////

function loadEventSummaryTab() {
  $("#eventsummary").load(Drupal.settings.basePath + "eventsummary");
}

//////////////////////////////
// Preferences              //
//////////////////////////////

function savePref(e) {
  setCookie("home", e.target.id.split("_")[2]);
}

//////////////////////////////
// Cookie                   //
//////////////////////////////

function setCookie(name, value) {
  document.cookie = "haims_" + name + "=" + value;
}

function getCookie(name) {
  if (document.cookie.length == 0) return null;

  name = "haims_" + name;
  start = document.cookie.indexOf(name + "=");
  if (start == -1) return null;

  start += name.length + 1;
  end = document.cookie.indexOf(";", start);
  if (end == -1) end = document.cookie.length;

  return unescape(document.cookie.substring(start, end));
}

function deleteCookie(name){
  name = 'haims_' + name;
  document.cookie = name+'=; Max-Age=-99999999;';
}

//***aaa
var colorList = [
  "#FF0033",
  "#669900",
  "#FF66FF",
  "#111111",
  "#AA66CC",
  "#33AAFF",
  "#DDAA00",
  "#336600",
  "#0099FF",
  "#990099",
  "#999900",
  "#3366FF",
  "#CC33CC",
  "#434951",
  "#ABDE00",
  "#0033FF",
  "#CC6633",
  "#339999",
  "#9900FF",
  "#FF6666",
  "#66CC66",
  "#005588",
  "#CC9900",
  "#663300",
  "#33FF66",
  "#CC0033",
  "#66CCDD",
  "#000099",
  "#FF6600",
  "#333300", //*30
  "#FF0033",
  "#669900",
  "#FF66FF",
  "#111111",
  "#AA66CC",
  "#33AAFF",
  "#DDAA00",
  "#336600",
  "#0099FF",
  "#990099",
  "#999900",
  "#3366FF",
  "#CC33CC",
  "#434951",
  "#ABDE00",
  "#0033FF",
  "#CC6633",
  "#339999",
  "#9900FF",
  "#FF6666",
  "#66CC66",
  "#005588",
  "#CC9900",
  "#663300",
  "#33FF66",
  "#CC0033",
  "#66CCDD",
  "#000099",
  "#FF6600",
  "#333300", //*30 like upper
  "#FF0033",
  "#669900",
  "#FF66FF",
  "#111111",
  "#AA66CC",
  "#33AAFF",
  "#DDAA00",
  "#336600",
  "#0099FF",
  "#990099",
  "#999900",
  "#3366FF",
  "#CC33CC",
  "#434951",
  "#ABDE00",
  "#0033FF",
  "#CC6633",
  "#339999",
  "#9900FF",
  "#FF6666",
  "#66CC66",
  "#005588",
  "#CC9900",
  "#663300",
  "#33FF66",
  "#CC0033",
  "#66CCDD",
  "#000099",
  "#FF6600",
  "#333300", //*30 like upper
  "#FF0033",
  "#669900",
  "#FF66FF",
  "#111111",
  "#AA66CC",
  "#33AAFF",
  "#DDAA00",
  "#336600",
  "#0099FF",
  "#990099",
  "#999900",
  "#3366FF",
  "#CC33CC",
  "#434951",
  "#ABDE00",
  "#0033FF",
  "#CC6633",
  "#339999",
  "#9900FF",
  "#FF6666",
  "#66CC66",
  "#005588",
  "#CC9900",
  "#663300",
  "#33FF66",
  "#CC0033",
  "#66CCDD",
  "#000099",
  "#FF6600",
  "#333300",
]; //*30 like upper

function setBound(bound, start, end) {
  var temp;
  if ((temp = Math.min(start[0], end[0])) < bound[0]) {
    bound[0] = temp;
  }
  if ((temp = Math.min(start[1], end[1])) < bound[1]) {
    bound[1] = temp;
  }
  if ((temp = Math.max(start[0], end[0])) > bound[2]) {
    bound[2] = temp;
  }
  if ((temp = Math.max(start[1], end[1])) > bound[3]) {
    bound[3] = temp;
  }
}

function drawMapInfoGeom(geom) {
  var colorIndex = 0;
  var alllocation = []
  $.each(geom, function (index, value) {
    $.each(value, function (index2, value2) {
      if (value2 && value2.length > 0) {
        var locationlist = []
        for (var i = 0; i < value2.length; i+= 1) {
          var position = { lat: value2[i][0], lon: value2[i][1] }
          locationlist.push(position)
          alllocation.push(position)
        }
        var geom = new longdo.Polyline(locationlist, { lineColor: colorList[colorIndex++] })
        mmmap.Overlays.add(geom)
      }
    });
  });
  var boundingBox = window.longdo.Util.locationBound(alllocation)
  mmmap.bound(boundingBox)
}

function printMap() {
  // var customDiv = document.getElementById("custom_div");
  // var html = "";
  // for (var i = 0; i < customDiv.childNodes.length; i++) {
  //   var icon = customDiv.childNodes[i];
  //   html +=
  //     '<div class="icon-title" style="left: ' +
  //     (icon.offsetLeft + (i % 2 ? 15 : -180)) +
  //     "px; top: " +
  //     icon.offsetTop +
  //     'px;">' +
  //     icon.title +
  //     "</div>";
  // }
  // customDiv.innerHTML += '<div id="icon-title-temp">' + html + "</div>";
  for (var index = 0; index < mapCaseLabel.length; index += 1) {
    if (nextCaseLabelMode === 'show') {
      mmmap.Overlays.add(mapCaseLabel[index])
    } else {
      mmmap.Overlays.remove(mapCaseLabel[index])
    }
  }
  nextCaseLabelMode = nextCaseLabelMode === 'show' ? 'not-show' : 'show'
}

function tableau_onMounted () {
  $("#tab-dashboard iframe").remove()
  $.ajax({
    type: "POST",
    cache: false,
    url: Drupal.settings.basePath + "get/tableau_tickets",
    success: function (response) {
      if (response.status) {
        const iframe = document.createElement('iframe');
        const html = `${ TABLEAU_CALL_FROM_BROWSER_URL }trusted/${response.tickets}/views/20220823_HAIMSDB_1_TABLEAUFONTDBScan/MainDashboard2?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link`;
        iframe.style.setProperty('height', 'calc(100% - 70px)');
        iframe.style.setProperty('width', '100%');
        iframe.src = html;
          document.getElementById('tab-dashboard').appendChild(iframe);
      } else {
        alert(response.message);
      }
    }
  });
  
  // const iframe = document.createElement('iframe');
  // const html = `
  //   <script type='text/javascript' src='https://tableau-test.longdo.com/javascripts/api/viz_v1.js'></script>
  //   <div class='tableauPlaceholder' style='width: 100%; height: calc(100% - 70px);'>
  //     <object class='tableauViz' width='1504' height='1327' style='display:none;'>
  //       <param name='host_url' value='https%3A%2F%2Ftableau-test.longdo.com%2F' />
  //       <param name='embed_code_version' value='3' />
  //       <param name='site_root' value='' />
  //       <param name='name' value='20220823_HAIMSDB_1&#47;MainDashboard2' />
  //       <param name='tabs' value='no' />
  //       <param name='toolbar' value='yes' />
  //       <param name='showAppBanner' value='false' />
  //     </object>
  //   </div>
  // `
// const html2 = `https://tableau-test.longdo.com/#/views/20220823_HAIMSDB_1/MainDashboard2?:embed=y&showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link`;
// iframe.style.setProperty('height', 'calc(100% - 70px)')
//   iframe.style.setProperty('width', '100%')
  // iframe.srcdoc = html;
  // iframe.src = html2;
  // document.getElementById('tab-tableau').appendChild(iframe);
  // iframe.contentWindow.document.open();
  // iframe.contentWindow.document.write(html);
  // iframe.contentWindow.document.close();
  return 0;
}
