$(function () {
    $('#id_storage_pos').change(function () {
        var pos = $('#id_storage_pos').val();
        if (pos != '' && $('#id_storage_no').val() == '') {
            $.get('/reagent_management/get_proper_storage_id?storage_pos=' + pos, function (data) {
                if ($('#id_storage_pos').val() == pos && $('#id_storage_no').val() == '')
                    $('#id_storage_no').val(data.result);
            });
        }
    });
    $('#id_cas_no').change(function () {
        var cas_no = $('#id_cas_no').val();
        if (cas_no != '' && $('#id_storage_name').val() == '') {
            $.get('/reagent_management/get_proper_name_from_cas?cas_no=' + $('#id_cas_no').val(), function (data) {
                if ($('#id_cas_no').val() == cas_no && $('#id_storage_name').val() == '')
                    $('#id_storage_name').val(data.result);
            });
        }
    });

});


