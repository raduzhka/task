$(window).on('load', function () {
    $.ajax ({
        type: 'GET',
        url: 'https://koskapanbooks.azurewebsites.net/api/Books',
        ContentType: 'application/json',
        success: function (dataBook) {
            console.log(dataBook);
            for (var a in dataBook) {
                console.log(dataBook[0]);
                var template = "<span>{{title}}</span><p ><span>Автор:</span><span>{{author}}</span></p><p><span>Год издания:</span><span>{{publicationYear}}</span></p><div><b>Описание</b><p>{{description}}</p></div>";
                var html = Mustache.render(template, dataBook[a]);
                $('.infoBook').html(html);
            }
        },
        error: function () {
            alert('fail');
        }
    })
    var data = [
        {
            titleBook : "Игра престолов",
            author : "martin",
            year: "2014",
            description: "bla-bla-bla"
        },
        {
            titleBook : "Игра престолов2",
            author : "martin2",
            year: "2014",
            description: "bla-bla-bla2"
        },
        ];

});



