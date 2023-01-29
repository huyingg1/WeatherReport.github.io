var whichcity;
var cityhistory = [];

$(function () {
  if (JSON.parse(localStorage.getItem("dataset")) !== null) {
    let arrl = JSON.parse(localStorage.getItem("dataset"));
    console.log(arrl);
    //console.log(typeof arrl);
    //arrarr = arrl[0];
    //console.log(arrarr);
    //cityhistory.push(arrl);
    //console.log(cityhistory[0]);
    //arrl.push("a");
    //console.log(arrl);

    for (var i = 0; i < arrl.length; i++) {
      cityhistory.push(arrl[i]);
    }
    cityhistory = [...new Set(cityhistory)];
    for (var t = 0; t < cityhistory.length; t++) {
      var $addbtn = $(
        '<button type="submit" class="searchhistoryparts btn" id="city-' +
          cityhistory[t] +
          '" />'
      );

      $addbtn
        .html(cityhistory[t])
        .click(function () {
          whichcity = $(this).html();
          fetch3();
        })
        .appendTo($(".searchhistory"));
    }
    console.log(cityhistory);
  }
});

$(".searchbtn").click(function () {
  whichcity = document.querySelector(".cityinput").value.trim();
  whichcity = whichcity[0].toUpperCase() + whichcity.slice(1);

  if (document.querySelector(".cityinput").value.trim() == "") {
    alert("Please enter a valid City");
  } else {
    fetch1();
    //
    if (cityhistory.includes(whichcity)) {
    } else {
      var $addbtn = $(
        '<button type="submit" class="searchhistoryparts btn" id="city-' +
          whichcity +
          '" />'
      );

      $addbtn
        .html(whichcity)
        .click(function () {
          whichcity = $(this).html();
          fetch3();
        })
        .appendTo($(".searchhistory"));
    }

    //
  }
});

function fetch1() {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      whichcity +
      "&appid=b10ce5e87f3822e450223e9d323263ce"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.cod === "404") {
        alert("City Not Found");
        $(".cityname").html("CityName");
        $(".date0").html("");
        $(".icon0").attr("src", "");
        $(".temp0").html("Temp");
        $(".wind0").html("wind:");
        $(".hum0").html("humidity:");
      } else {
        console.log(cityhistory);
        if (cityhistory.includes(whichcity)) {
        } else {
          cityhistory.push(whichcity);
        }

        console.log(cityhistory);

        localStorage.setItem("dataset", JSON.stringify(cityhistory));

        document.getElementById("fivedays").style.display = "block";
        $(".cityname").css("font-weight", "bold").html(`${data.name}`);
        var d = new Date();
        $(".date0")
          .css("font-weight", "bold")
          .html(`(${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()})`);
        $(".icon0").attr(
          "src",
          "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        );
        $(".temp0")
          .css("font-weight", "bold")
          .html(`Temp: ${data.main.temp}°F`);
        $(".wind0")
          .css("font-weight", "bold")
          .html(`Wind: ${data.wind.speed}MPH`);
        $(".hum0")
          .css("font-weight", "bold")
          .html(`Humidity: ${data.main.humidity}%`);
      }
    });

  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
      whichcity +
      "&appid=b10ce5e87f3822e450223e9d323263ce"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data.cod === "404") {
        document.getElementById("fivedays").style.display = "none";
      } else {
        document.getElementById("fivedays").style.display = "block";

        $(".date1").html(data.list[7].dt_txt.slice(0, 10));
        $(".icon1").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[7].weather[0].icon +
            "@2x.png"
        );
        $(".temp1").html(`Temp: ${data.list[7].main.temp}°F`);
        $(".wind1").html(`Wind: ${data.list[7].wind.speed}MPH`);
        $(".hum1").html(`Humidity: ${data.list[7].main.humidity}%`);

        $(".date2").html(data.list[15].dt_txt.slice(0, 10));
        $(".icon2").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[15].weather[0].icon +
            "@2x.png"
        );
        $(".temp2").html(`Temp: ${data.list[15].main.temp}°F`);
        $(".wind2").html(`Wind: ${data.list[15].wind.speed}MPH`);
        $(".hum2").html(`Humidity: ${data.list[15].main.humidity}%`);

        $(".date3").html(data.list[23].dt_txt.slice(0, 10));
        $(".icon3").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[23].weather[0].icon +
            "@2x.png"
        );
        $(".temp3").html(`Temp: ${data.list[23].main.temp}°F`);
        $(".wind3").html(`Wind: ${data.list[23].wind.speed}MPH`);
        $(".hum3").html(`Humidity: ${data.list[23].main.humidity}%`);

        $(".date4").html(data.list[31].dt_txt.slice(0, 10));
        $(".icon4").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[31].weather[0].icon +
            "@2x.png"
        );
        $(".temp4").html(`Temp: ${data.list[31].main.temp}°F`);
        $(".wind4").html(`Wind: ${data.list[31].wind.speed}MPH`);
        $(".hum4").html(`Humidity: ${data.list[31].main.humidity}%`);

        $(".date5").html(data.list[39].dt_txt.slice(0, 10));
        $(".icon5").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[39].weather[0].icon +
            "@2x.png"
        );
        $(".temp5").html(`Temp: ${data.list[39].main.temp}°F`);
        $(".wind5").html(`Wind: ${data.list[39].wind.speed}MPH`);
        $(".hum5").html(`Humidity: ${data.list[39].main.humidity}%`);
      }
    });
}
function fetch3() {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      whichcity +
      "&appid=b10ce5e87f3822e450223e9d323263ce"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.cod === "404") {
        alert("City Not Found");
        $(".cityname").html("CityName");
        $(".date0").html("");
        $(".icon0").attr("src", "");
        $(".temp0").html("Temp");
        $(".wind0").html("wind:");
        $(".hum0").html("humidity:");
      } else {
        console.log(data);
        document.getElementById("fivedays").style.display = "block";
        $(".cityname").css("font-weight", "bold").html(`${data.name}`);
        var d = new Date();
        $(".date0")
          .css("font-weight", "bold")
          .html(`(${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()})`);
        $(".icon0").attr(
          "src",
          "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
        );
        $(".temp0")
          .css("font-weight", "bold")
          .html(`Temp: ${data.main.temp}°F`);
        $(".wind0")
          .css("font-weight", "bold")
          .html(`Wind: ${data.wind.speed}MPH`);
        $(".hum0")
          .css("font-weight", "bold")
          .html(`Humidity: ${data.main.humidity}%`);
      }
    });

  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
      whichcity +
      "&appid=b10ce5e87f3822e450223e9d323263ce"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data.cod === "404") {
        document.getElementById("fivedays").style.display = "none";
      } else {
        document.getElementById("fivedays").style.display = "block";

        $(".date1").html(data.list[7].dt_txt.slice(0, 10));
        $(".icon1").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[7].weather[0].icon +
            "@2x.png"
        );
        $(".temp1").html(`Temp: ${data.list[7].main.temp}°F`);
        $(".wind1").html(`Wind: ${data.list[7].wind.speed}MPH`);
        $(".hum1").html(`Humidity: ${data.list[7].main.humidity}%`);

        $(".date2").html(data.list[15].dt_txt.slice(0, 10));
        $(".icon2").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[15].weather[0].icon +
            "@2x.png"
        );
        $(".temp2").html(`Temp: ${data.list[15].main.temp}°F`);
        $(".wind2").html(`Wind: ${data.list[15].wind.speed}MPH`);
        $(".hum2").html(`Humidity: ${data.list[15].main.humidity}%`);

        $(".date3").html(data.list[23].dt_txt.slice(0, 10));
        $(".icon3").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[23].weather[0].icon +
            "@2x.png"
        );
        $(".temp3").html(`Temp: ${data.list[23].main.temp}°F`);
        $(".wind3").html(`Wind: ${data.list[23].wind.speed}MPH`);
        $(".hum3").html(`Humidity: ${data.list[23].main.humidity}%`);

        $(".date4").html(data.list[31].dt_txt.slice(0, 10));
        $(".icon4").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[31].weather[0].icon +
            "@2x.png"
        );
        $(".temp4").html(`Temp: ${data.list[31].main.temp}°F`);
        $(".wind4").html(`Wind: ${data.list[31].wind.speed}MPH`);
        $(".hum4").html(`Humidity: ${data.list[31].main.humidity}%`);

        $(".date5").html(data.list[39].dt_txt.slice(0, 10));
        $(".icon5").attr(
          "src",
          "http://openweathermap.org/img/wn/" +
            data.list[39].weather[0].icon +
            "@2x.png"
        );
        $(".temp5").html(`Temp: ${data.list[39].main.temp}°F`);
        $(".wind5").html(`Wind: ${data.list[39].wind.speed}MPH`);
        $(".hum5").html(`Humidity: ${data.list[39].main.humidity}%`);
      }
    });
}
