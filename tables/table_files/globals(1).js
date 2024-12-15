var $ = jQuery;


$(function() {
    if ($('#privatemsg-list').length > 0) {
        addPrivatemsgListCustomActions();
        addPrivateMessageDeleteModal();
    }

    if ($('#privatemsg-new').length > 0) {
        Drupal.behaviors.autocomplete(document);
    }
});

function addPrivatemsgListCustomActions () {
    var html = `
    <div id="privatemsg-list-custom-actions">
        ${$('form#privatemsg-list input[value="Delete"]') ? '<button  type="button" class="btn btn-danger" onclick="showPrivateMessageDeleteModal()"><i class="fa-solid fa-trash-can"></i> Delete</button>' : ''}
        <button type="button" class="btn btn-primary" onclick="openMessageNew()"><i class="fa-solid fa-plus"></i> Write New Message</button>
    </div>`;

    $('#privatemsg-list-form').prepend(html);
}

function addPrivateMessageDeleteModal() {
    $('#privatemsg-list-form').append(`
    <div class="modal fade" id="privateMessageDeleteModal" aria-hidden="true" aria-labelledby="privateMessageDeleteModalLabel" tabindex="-1">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="privateMessageDeleteModalLabel">ลบข้อความ</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
                    <button class="btn btn-danger" onclick="privateMessageDeleteButtonClick()">ยืนยัน</button>
                </div>
            </div>
        </div>
    </div>
    `);
}

function showPrivateMessageDeleteModal () {
    var list = $('input.privatemsg-list.form-checkbox:checked');
    if (list.length == 0) {
        alert('กรุณาเลือกรายการข้อความที่ต้องการจะลบ');
        return;
    }
    $('#privateMessageDeleteModal .modal-body').html(`
    ยืนยันการลบรายการข้อความจำนวน ${ list.length } รายการ?
    `);
    $('#privateMessageDeleteModal').modal('show');
}
function privateMessageDeleteButtonClick() {
    $('form#privatemsg-list').submit();
}

function openMessageNew() {
    window.open(Drupal.settings.basePath + 'messages/new');
}

function getCurrentDateTimeString () {
    const currentdate = new Date(); 
    const date = currentdate.getDate() < 10 ? "0" + currentdate.getDate() : currentdate.getDate();
    const month = currentdate.getMonth()+1 < 10 ? "0" + (currentdate.getMonth()+1) : currentdate.getMonth()+1;
    const year = currentdate.getFullYear();
    const hour = currentdate.getHours() < 10 ? "0" + currentdate.getHours() : currentdate.getHours();
    const minute = currentdate.getMinutes() < 10 ? "0" + currentdate.getMinutes() : currentdate.getMinutes();
    return year + month + date + hour + minute;
  }