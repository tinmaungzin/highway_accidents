var $ = jQuery;
var currentTab = 'home';

$(function () {
  checkAuth();
  sideBarEvent();
  applyQuery();
  $('#bugsend').click(sendBugReport);
});

function checkAuth () {
  if ($(".content").text().trim() === "You are not authorized to access this page.") {
    window.stop();
    window.location.replace(Drupal.settings.basePath);
  }
}

function sideBarEvent () {
  $('#layout_sidebar-collapse').click(function () {
    $('#layout_sidebar').toggleClass('layout_sidebar-not-active');
  });

  $('.layout_sidebar__list li a').click(function () {
    $('.layout_sidebar__list li').each(function () {
      $(this).removeClass('layout_sidebar__list--active');
    });
    $(this).parent().addClass('layout_sidebar__list--active');
    $('#layout_sidebar').addClass('layout_sidebar-not-active');
  });

  $('#block-system-main, #layout_sidebar__dismiss').click(function () {
    $('#layout_sidebar').addClass('layout_sidebar-not-active');
  });

  $('.layout_sidebar__list li a').click(function (e) {
    e.preventDefault();
  });

  var pathName = getPathName();
  if (pathName !== 'summary') {
    $('.layout_sidebar__list li').each(function () {
      $(this).removeClass('layout_sidebar__list--active');
    });
  }
}

function showBugReport() {
  $('#bugreport').toggle();
  /*@cc_on
    @if (@_jscript_version == 5.7)
      return;
    @end
  @*/
  $('#bugmessage').focus();
}

function openNewTab (url) {
  window.open(url);
}

function getPathName () {
  var pathArray = window.location.pathname.split("/");
  var pathName = pathArray[pathArray.length - 1];
  if (!isNaN(pathName)) { // if pathName is page query
    pathName = pathArray[pathArray.length - 2];
  }
  return pathName;
}

function changeTab (tabname) {
  // window.location.hash = tabname;
  var pathName = getPathName();
  if (pathName !== 'summary') {
    var mainHref = $('#summarybutton').attr('href');
    var mainHrefWithAnchor = mainHref + '?p=' + tabname;
    window.stop();
    window.open(mainHrefWithAnchor, '_blank');
    return;
  } else {
    window.history.pushState({}, document.title, window.location.pathname + '?p=' + tabname);
  }
  if (currentTab === tabname) {
    return;
  }
  // --
  $("#main-tab-content > .tab-pane").removeClass('show');
  $("#main-tab-content > .tab-pane").removeClass('active');
  var sel = document.querySelector('#nav-' + tabname + '-tab');
  bootstrap.Tab.getOrCreateInstance(sel).show();
  // remove selected menu
  $('.layout_sidebar__list li').each(function () {
    $(this).removeClass('layout_sidebar__list--active');
  });
  // select menu
  $(`.layout_sidebar__list a[data-ref="${tabname}"]`).parent().addClass('layout_sidebar__list--active');
  // --
  changeTabCallback(tabname);
  currentTab = tabname;
}

function changeTabCallback (tabname) {
  var $main = $("#block-system-main");
  var $content = $(".tab-content");
  $main.removeClass("remove-padding");
  $content.css("height", "");
  switch (tabname) {
    case ("map"):
      $main.addClass("remove-padding");
      setTimeout(function () {
        window.dispatchEvent(new Event("resize"));
      }, 200);
      break;
    case ("database"):
      $content.css("height", "100%");
      break;
    // case ("roadside"):
    //   $content.css("height", "100%");
    //   break;
    case ("dashboard"):
      $content.css("height", "100%");
      tableau_onMounted();
      break;
    case ("analysis"):
      $content.css("height", "100%");
      analyze_onMounted();
      break;
    case ("user"):
      loadUserTab();
      break;
  }
}

function applyQuery () {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  if (params.p) {
    $(`.layout_sidebar__list a[data-ref="${params.p}"]`).click();
  }
  // window.history.replaceState({}, document.title, window.location.pathname);
}

function sendBugReport() {
  $('#bugstatus').html('กำลังส่ง...');
  $.ajax({
    type: 'POST',
    cache: false,
    url: '/bugreport',
    data: { comment: $('#bugmessage').val() },
    success: function(msg) {
      $('#bugstatus').empty();
      alert('ส่งเรียบร้อย');
      $('#bugreport').hide();
    }
  });
}

function convertToThaiDateShort (str) {
  const monthArr = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
  var arr = str.split("-");
  var y = (parseInt(arr[0]) + 543).toString().slice(-2);
  var m = monthArr[parseInt(arr[1]) - 1];
  var d = parseInt(arr[2]);

  return d + " " + m + " " + y;
}

function createMyDatePicker (target, altTarget = undefined, yearRange = "-20Y:+0Y", dateStyle = { day: "numeric", month: "long", year: "numeric" }, useCurrentDateAsMaxDate = false, minDate = false) {
  function setBuddhistYear () {
    $(".ui-datepicker-year option").each(function () {
      var year = Number($(this).text());
      var b_year = year + 543;
      $(this).text(b_year);
    });
  }
  function updateAltInput () {
    var val = $(target).val()
    if (!val) {
      $(altTarget).val('');
      return false
    }
    var date = new Date(val).toLocaleString('th-TH', dateStyle);
    $(`#${id}`).css('display', 'initial')
    $(altTarget).val(date);
  }
  $(altTarget).focus(function() { $(target).focus(); });
  $(target).datepicker({
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    changeYear: true,
    minDate: minDate ? minDate: null,
    maxDate: useCurrentDateAsMaxDate ? 0 : null,
    yearRange: yearRange,
    beforeShow: function () {
      $(altTarget).toggleClass("focus")
      setTimeout(setBuddhistYear, 50)
    },
    onChangeMonthYear: function () {
      setTimeout(setBuddhistYear, 1)
    },
    onClose: function () {
      $(altTarget).toggleClass("focus")
    }
  });
  const id = (Math.random() + 1).toString(36).substring(7);
  $(altTarget).after(`<i id="${id}" class="fas fa-close" style="margin-left: -16px; margin-right: 6px; display: none;"></i>`)
  $(target).change(updateAltInput);
  updateAltInput();
  $(`#${id}`).click(function () {
    $(target).datepicker('setDate', null);
    updateAltInput();
    $(this).css('display', 'none')
  })
  if ($(target).val()) {
    $(`#${id}`).css('display', 'initial')
  }
}
