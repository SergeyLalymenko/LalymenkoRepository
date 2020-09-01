function search() {
    $.ajax({
        type:  "POST",
        url: 'search.php',
        cache: false,
        data: {"data": $("#data").val()},
        dataType: "html",
        success: function (response) {
            $("#response").html(response);
        }
    })
}