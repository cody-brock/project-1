localStorage.setItem("name", "Cody Brock")
localStorage.setItem("email", "newemail@gmail.com")

var database = firebase.database();
$(document).ready(function () {


    // BEGIN weather api
    function getWeather(city) {
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=083d3eb2292f5bf714789f4f2412af5a";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            currentTemperature = Math.round((response.main.temp_max - 273.5) * 9 / 5 + 32);

            $("#weather-description").append(response.weather[0].description);
            $("#current-temperature").append(`${currentTemperature}°`);

        })
    }
    // END weather api

    // BEGIN New York Times API

    function getNews(input1, input2, input3) {
        let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + '&fq=news_desk:("Sports")' + "&api-key=aLJdnOdoGzFIuwTyY3VQKCwWllm8UqfE";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $("#news-interest-1").append(response.response.docs[0].abstract);
        })



    }

    // END New York Times API
    // Start Stock API Call



    function getStock() {
        console.log("hello")
        var api = "https://www.alphavantage.co";
        var query1 = "/query?function=GLOBAL_QUOTE&symbol=DJI";
        var query2 = "/query?function=GLOBAL_QUOTE&symbol=NDAQ";
        var query3 = "/query?function=GLOBAL_QUOTE&symbol=GOOG";
        var query4 = "/query?function=GLOBAL_QUOTE&symbol=FB";
        var query5 = "/query?function=GLOBAL_QUOTE&symbol=AAPL";
        var key = "&apikey=VKVZWYFG94UY892N&datatype=json";

        console.log("Button Clicked!")
        var xhr = $.get(api + query1 + key).done(function (xhr) {
            console.log("success got data", JSON.stringify(xhr));
            var stockReply = xhr;
            console.log(stockReply)

            $("#You").append("Name: " + "DOW Jones", "<br>")
            $("#You").append("Symbol: " + `${stockReply['Global Quote']['01. symbol']}`, "<br>")
            $("#You").append("Price($): " + `${stockReply['Global Quote']['05. price']}`, "<br>")
            $("#You").append("Change: " + `${stockReply['Global Quote']['10. change percent']}`, "<br>", "<br>")
        })

        "<br>"

        var xhr = $.get(api + query2 + key).done(function (xhr) {
            console.log("success got data");
            var stockReply = xhr
            console.log(stockReply)

            $("#Are").append("Name: " + "NASDAQ", "<br>")
            $("#Are").append("Symbol: " + `${stockReply['Global Quote']['01. symbol']}`, "<br>")
            $("#Are").append("Price($): " + `${stockReply['Global Quote']['05. price']}`, "<br>")
            $("#Are").append("Change: " + `${stockReply['Global Quote']['10. change percent']}`, "<br>", "<br>")
            "<br>"
        })


        var xhr = $.get(api + query3 + key).done(function (xhr) {
            console.log("success got data");
            var stockReply = xhr
            console.log(stockReply)

            $("#The").append("Name: " + "Google", "<br>")
            $("#The").append("Symbol: " + `${stockReply['Global Quote']['01. symbol']}`, "<br>")
            $("#The").append("Price($): " + `${stockReply['Global Quote']['05. price']}`, "<br>")
            $("#The").append("Change: " + `${stockReply['Global Quote']['10. change percent']}`, "<br>", "<br>")
            "<br>"
        })

        var xhr = $.get(api + query4 + key).done(function (xhr) {
            console.log("success got data");
            var stockReply = xhr
            console.log(stockReply)

            $("#Best").append("Name: " + "Facebook", "<br>")
            $("#Best").append("Symbol: " + `${stockReply['Global Quote']['01. symbol']}`, "<br>")
            $("#Best").append("Price($): " + `${stockReply['Global Quote']['05. price']}`, "<br>")
            $("#Best").append("Change: " + `${stockReply['Global Quote']['10. change percent']}`, "<br>", "<br>")
            "<br>"
        })

        var xhr = $.get(api + query5 + key).done(function (xhr) {
            console.log("success got data");
            var stockReply = xhr
            console.log(stockReply)

            $("#Train").append("Name: " + "Apple", "<br>")
            $("#Train").append("Symbol: " + `${stockReply['Global Quote']['01. symbol']}`, "<br>")
            $("#Train").append("Price($): " + `${stockReply['Global Quote']['05. price']}`, "<br>")
            $("#Train").append("Change: " + `${stockReply['Global Quote']['10. change percent']}`, "<br>", "<br>")
            "<br>"
        })

    }

    // Start Bart Service Annoucement Calls


    function getBSA() {
        var apis = "http://api.bart.gov/api/bsa.aspx";
        var querys = "?cmd=bsa";
        var keys = "&key=MW9S-E7SL-26DU-VV8V&json=y";
        let arrays = ['12TH']

        train = $("#train").val();
        destination = $("#destination").val();
        firstTime = $("#firstTime").val();
        frequency = $("#frequency").val();


        for (let i = 0; i < arrays.length; i++) {
            var rapid = `${arrays[i]}`
            var xhr = $.get(apis + querys + keys).done(function (xhr) {
                console.log("success got data");
                var bartReply = xhr
                console.log(bartReply)
                // console.log(`${bartReply}`)

                $("#Ares").append(`${bartReply.root.bsa[0].type}`, "<br>")
                $("#Youz").append(`${bartReply.root.bsa[0].sms_text[`#cdata-section`]}`, "<br>")


            })
        }
    }

    //Start Bart Train Route Calls



    function getBartRoute() {

        var apiz = "http://api.bart.gov/api/etd.aspx";
        var queryz = "?cmd=etd&orig=";
        var keyz = "&key=MW9S-E7SL-26DU-VV8V&json=y";
        let arrayz = ['12TH', '16TH', '19TH', '24TH', 'ANTC', 'ASHB', 'BALB', 'BAYF', 'CAST', 'CIVC', 'COLS', 'COLM', 'CONC', 'DALY', 'DBRK', 'DUBL', 'DELN', 'PLZA', 'EMBR', 'FRMT', 'FTVL', 'GLEN', 'HAYW', 'LAFY', 'LAKE', 'MCAR', 'MLBR', 'MONT', 'NBRK', 'NCON', 'OAKL', 'ORIN', 'PITT', 'PCTR', 'PHIL', 'POWL', 'RICH', 'ROCK', 'SBRN', 'SFIA', 'SANL', 'SHAY', 'SSAN', 'UCTY', 'WCRK', 'WARM', 'WDUB', 'WOAK']

        train = $("#train").val();
        destination = $("#destination").val();
        firstTime = $("#firstTime").val();
        frequency = $("#frequency").val();


        console.log("Button Clicked!")
        for (let i = 0; i < arrayz.length; i++) {
            var rapid = `${arrayz[i]}`
            var xhr = $.get(apiz + queryz + rapid + keyz).done(function (xhr) {
                // console.log("success got data");
                var bartReply = xhr
                console.log(bartReply)
                console.log(`${bartReply.root.station[0].name}`)


                $("#Yous").append(`${bartReply.root.station[0].name}`, "<br>")
                $("#Arez").append(`${bartReply.root.station[0].etd[0].destination}`, "<br>")
                $("#Thez").append(`${bartReply.root.station[0].etd[0].estimate[0].direction}`, "<br>")
                $("#Bestz").append(`${bartReply.root.station[0].etd[0].estimate[0].minutes}`, "<br>")
                $("#Trainz").append(`${bartReply.root.station[0].etd[0].destination}`, "<br>")



            })
        }

    }



    // START API CALLS BELOW
    // if the user has the local storage items we've given them...
    if (localStorage.getItem("name") && localStorage.getItem("email")) {

        console.log("local Name", localStorage.getItem("name"))
        console.log("local Email", localStorage.getItem("email"))

        //...then we search our firebase for a corresponding email, then look at the associated user object
        database.ref('/users').orderByChild('email').equalTo(localStorage.getItem("email")).on("value", snapshot => {
            console.log('snapshot.val()', snapshot.val());
            //we do something to each key in object
            snapshot.forEach(function (data) {
                console.log("data.key", data.key);
                console.log("snapshot.val()[data.key].name", snapshot.val()[data.key].name);
                console.log("snapshot.val()[data.key].city", snapshot.val()[data.key].city);

                //makes AJAX call to run api.  TODO: Add the other api calls here
                $("#user-name-header").append(snapshot.val()[data.key].name)

                getWeather(snapshot.val()[data.key].city);
                getNews("San Francisco");
                getStock();
                getBSA();
                getBartRoute();


            });
        })
    }
    // END API CALLS

})