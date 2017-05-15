

$(window).on('load', function () {
    $.ajax ({
        type: 'GET',
        url: 'https://koskapanbooks.azurewebsites.net/api/Books',
        ContentType: 'application/json',
        success: function (dataBook) {
            for (var a in dataBook) {
                var index_of_description_short = dataBook[a].description.substr(0, 220).lastIndexOf('.');
                var description_short =  dataBook[a].description.substr(0, index_of_description_short.toNumber);
                var template = $(".books").html();
                var description = mustache.render(template, description_short);
                var donedata = mustache.render(template, dataBook[a]);
                $('.books:first').clone().appendTo('#content').html(donedata);
                $('.books:last').children("div .img").css('background-image','url("'+dataBook[a].imageUrl+'")');
            }
        },
        error: function () {
            alert('fail');
        }
    }),
        $("#content").on("click", ".about_button", function() {
        var idBook = $(this).closest('.books').children('.idBook').text();
        $.ajax ({
            type: 'GET',
            url: 'https://koskapanbooks.azurewebsites.net/api/Books/{'+idBook+'}',
            ContentType: 'application/json',
            // data: idBook,
            success: function (dataAboutBook) {
                console.log(dataAboutBook);
            }
        })
    })
})

