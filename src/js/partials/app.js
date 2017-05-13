

$(window).on('load', function () {
    $.ajax ({
        type: 'GET',
        url: 'https://koskapanbooks.azurewebsites.net/api/Books',
        ContentType: 'application/json',
        success: function (dataBook) {
            console.log(dataBook);
            for (var a in dataBook) {
                var template = $(".books").html();
                console.log(template);
                var donedata = mustache.render(template, dataBook[a]);
                $('.books:first').clone().appendTo('#content').html(donedata);
                // $('.books:last .titleBook').text(dataBook[a].title);
                // $('.books:last .author span:last').text(dataBook[a].author);
                // $('.books:last .pubYear span:last').text(dataBook[a].publicationYear);
                // $('.books:last .description p').text(dataBook[a].description);
            }
        },
        error: function () {
            alert('fail');
        }
    })
});
