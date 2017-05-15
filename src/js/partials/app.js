

$(window).on('load', function () {
    $.ajax ({
        type: 'GET',
        url: 'https://koskapanbooks.azurewebsites.net/api/Books',
        ContentType: 'application/json',
        success: function (dataBook) {
            for (var a in dataBook) {
                var index_of_description_short = dataBook[a].description.substr(0, 220).lastIndexOf('.');
                var description_short =  dataBook[a].description.substr(0, parseInt(index_of_description_short)+1);
                var description_short_json = {
                    description_short : description_short
                };
                var description_template = $(".description_template").html();
                var description = mustache.render(description_template, description_short_json);

                var template = $(".books").html();
                var donedata = mustache.render(template, dataBook[a]);
                $('.books:first').clone().appendTo('#content').html(donedata)
                .children("div .img").css('background-image','url("'+dataBook[a].imageUrl+'")')
                .closest(".books").find('div .description').html(description);
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

