function loaddate() {
    var currentdate = new Date()
    var datestring = currentdate.toString().split(' ').splice(0, 4).join(' ')
    $('#date').text(datestring)
}

function loadweather() {
    var weather = $('#weather')
    var url = 'https://api.openweathermap.org/data/2.5/weather'
    var apikey = 'ee80ff0d2fb484ad2235cb69b405ff7a'

    
    function success(position) {
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude
    
        // api request
        $.getJSON(url + '?units=metric&lat=' + latitude + '&lon=' + longitude + '&appid=' + apikey, function (data) {weather.text('Based on your current location, it is ' + data.main.temp + '°C right now')})
    }


    function error() {
        alert('Unable to retrieve your location for weather')
    }

    navigator.geolocation.getCurrentPosition(success, error)

    weather.text('fetching weather...')
}

function loadnews() {
    var news = $('#news')
    var url = 'https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey='
    var apikey = 'bd6e33b3bf2a495fac76479d1988b000'

    $.getJSON(url + apikey, function (data) {
        var titles = data.articles.map(function (articles) {
            return "<a href='" + articles.url + "'>" + articles.title + '</a>'
        })
    
        news.html(titles.join('<br><br>'))
    })

    news.text('fetching news...')
}

loaddate()
loadweather()
loadnews()

