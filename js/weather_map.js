$(document).ready(function() {
    "use strict";

    function toFaren(k) {
        return (1.8 * (k - 273) + 32);
    }

    function toCelc(k) {
        return (k - 273.15);
    }

    function findMax(arr) {
        var max = 0;
        arr.forEach(function (elem) {
            if (elem > max) {
                max = elem;
            }
        });
        return max;
    }

    function findMin(arr) {
        var min = 4000;
        arr.forEach(function (elem) {
            if (elem < min) {
                min = elem;
            }
        });
        return min;
    }

    function countInArray(arr, x) {
        var retval = 0;
        arr.forEach(function (element) {
            if (element === x) {
                retval += 1;
            }
        });
        return retval;
    }

    function mostFrequentItem(arr) {
        var largestCount = 0;
        var holder = "";
        arr.forEach(function (element) {
            if (countInArray(arr, element) > largestCount) {
                largestCount = countInArray(arr, element);
                holder = element;
            }
        });
        return holder;
    }

    function parseTime(str) {
        var date = str.split(' ')[0].split('-');
        var time = str.split(' ')[1].split(':');
        return {
            year: date[0],
            month: date[1],
            date: date[2],
            hour: time[0],
            minute: time[1],
            second: time[2]
        };
    }

    function averageArr(arr) {
        var sum = 0;
        arr.forEach(function (element, index, array) {
            sum += parseInt(element);
        });
        return sum / (arr.length);
    }

    function getInfo(data, timeNum) { //argument is of format Date.getTime() + timeOffset; data is just JSON return array;
        var tempLows = [];
        var tempHighs = [];
        var humidity = [];
        var wind = [];
        var pressure = [];
        var description = [];
        var icon = [];
        var today = new Date(timeNum);
        data.list.forEach(function (element) {
            var dateObj = parseTime(element.dt_txt);
            if (dateObj.year === today.getFullYear().toString() && dateObj.month === (today.getMonth() + 1).toString() && parseInt(dateObj.date).toString() === today.getDate().toString()) {
                tempHighs.push(parseInt(element.main.temp_max));
                tempLows.push(parseInt(element.main.temp_min));
                humidity.push(parseInt(element.main.humidity));
                pressure.push(parseInt(element.main.pressure));
                wind.push(parseInt(element.wind.speed));
                description.push(element.weather[0].description);
                icon.push(element.weather[0].icon.substr(0, 2));
            }
        });
        if (!icon) {
            icon = data.list[0].weather[0].icon;
        }
        var retVal = {
            tempLow: findMin(tempLows),
            tempHigh: findMax(tempHighs),
            humidity: averageArr(humidity).toFixed(0),
            wind: averageArr(wind).toFixed(2),
            pressure: averageArr(pressure).toFixed(2),
            description: mostFrequentItem(description),
            icon: mostFrequentItem(icon) + 'd'
        };
        //console.log(retVal);
        return retVal;
    }

    function makeBadge(today, option, day) { //0 for celcius, 1 for farenheit
        if (today.description) {
            var html = "";
            html += '<div class="col-md-4 text-center weather-badge">';
            html += (day === 1) ? '<h5 class="text-right dayNum">Today</h5>' : ('<h5 class="text-right dayNum">Day ' + day + '</h5>');
            if (temp) {
                html += (option === 0) ? '<h3>' + toCelc(parseInt(today.tempLow)).toFixed(0) + '&deg;C/' + toCelc(parseInt(today.tempHigh)).toFixed(0) + '&deg;C</h3>' : '<h3>' + toFaren(parseInt(today.tempLow)).toFixed(0) + '&deg;F/' + toFaren(parseInt(today.tempHigh)).toFixed(0) + '&deg;F</h3>';
            }
            html += '<h4><img src="http://openweathermap.org/img/w/' + today.icon + '.png"></h4>';
            if (clouds) {
                html += '<h4><strong>Clouds:</strong> ' + today.description + '</h4>';
            }
            if (humidity) {
                html += '<h4><strong>Humidity:</strong> ' + today.humidity + '</h4>';
            }
            if (wind) {
                html += '<h4><strong>Wind:</strong> ' + today.wind + '</h4>';
            }
            if (pressure) {
                html += '<h4><strong>Pressure:</strong> ' + today.pressure + '</h4>';
            }
            html += '</div>';
            $('#weather-insert').append(html);
        }
    }

    function fetch(getObj, option, numDays) { //0 for celcius, 1 for farenheit
        var jqXhr = $.get("http://api.openweathermap.org/data/2.5/forecast", getObj);

        jqXhr.done(function (data) {
            var date = new Date;

            $('#weather-insert').html('');

            for (var i = 0; i < numDays; i++) {
                var today = getInfo(data, date.getTime() + i * 24 * 60 * 60 * 1000);
                makeBadge(today, option, i + 1);
            }
        });

        jqXhr.fail(function (jqXhr, status, error) {
            console.log("There was an error!");
            console.log("status: " + status);
            console.log("error: " + error);
        });
    }

    function mapConstructor(id, zoom, center, mapType) {
        var mapOptions = {
            zoom: zoom,
            center: center,
            mapTypeId: mapType
        };

        return new google.maps.Map(document.getElementById(id), mapOptions);
    }

    function markerConstructor(position, animation, map) {
        return new google.maps.Marker({
            position: position,
            animation: animation,
            map: map
        });
    }

    var map = mapConstructor(
        "map",
        10,
        {lat: 41, lng: -74},
        google.maps.MapTypeId.HYBRID
    );
    var option = 0;
    var marker;
    var numDays = 3;
    var temp = true;
    var clouds = true;
    var humidity = true;
    var wind = true;
    var pressure = true;

    google.maps.event.addListener(map, 'click', function (event) {
        if (marker !== undefined) {
            marker.setMap(null);
        }
        //console.log(event.latLng);
        marker = markerConstructor(event.latLng, google.maps.Animation.DROP, map);
        map.setCenter(marker.position);
        var options = {
            APPID: "340467c1a9978f4a8384d02573e98e28",
            lat: marker.position.lat(),
            lon: marker.position.lng()
        };
        $('#input-lon')[0].value = marker.position.lng();
        $('#input-lat')[0].value = marker.position.lat();
        fetch(options, option, numDays);
        var jqXhr = $.ajax('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + marker.position.lat() + ',' + marker.position.lng() + '&key=AIzaSyB5uR5lV2F4v_tIkmtejRIzjTrKZeDHNIk');
        jqXhr.done(function (data) {
            console.log(data);
            $('#location').html(data.results[2].formatted_address);
            $('#address')[0].value = data.results[0].address_components[0].long_name + " " + data.results[0].address_components[1].long_name;
            (data.results[2].address_components[2].long_name) ? $('#city')[0].value = data.results[2].address_components[2].long_name : $('#city')[0].value = "No City Value";
            (data.results[3].address_components[data.results[3].address_components.length - 2].short_name) ? $('#state')[0].value = data.results[3].address_components[1].short_name : $('#state')[0].value = "";
            $('#zip')[0].value = data.results[1].address_components[0].long_name;
            $('#country')[0].value = data.results[data.results.length - 1].address_components[0].long_name;
        });
    });

    $('#searchCoord').click(function () {
        var options = {
            APPID: "340467c1a9978f4a8384d02573e98e28",
            lat: $('#input-lat')[0].value,
            lon: $('#input-lon')[0].value
        };
        if (marker !== undefined) {
            marker.setMap(null);
        }
        marker = markerConstructor({
            lat: parseInt($('#input-lat')[0].value),
            lng: parseInt($('#input-lon')[0].value)
        }, google.maps.Animation.DROP, map);
        map.setCenter(marker.position);
        if (options.lat && options.lon) {
            fetch(options, option, numDays);
        }
    });

    $('#searchAddress').click(function () {
        var geocoder = new google.maps.Geocoder();
        var latitude;
        var longitude;
        var address = "";
        address += $.trim($('#address')[0].value) + ", ";
        address += $.trim($('#city')[0].value) + ", ";
        address += $('#state')[0].value + " ";
        address += $('#zip')[0].value;
        address += ($('#country')[0]) ? (', ' + $('#country')[0].value) : '';
        console.log(address);
        geocoder.geocode({"address": address}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                latitude = results[0].geometry.location.lat();
                longitude = results[0].geometry.location.lng();
                var options = {
                    APPID: "340467c1a9978f4a8384d02573e98e28",
                    lat: latitude,
                    lon: longitude
                };
                $('#input-lon')[0].value = longitude;
                $('#input-lat')[0].value = latitude;
                $('#location').html($.trim($('#city')[0].value) + ", " + $('#state')[0].value + ", " + $.trim($('#country')[0].value));
                if (marker !== undefined) {
                    marker.setMap(null);
                }
                marker = markerConstructor({lat: latitude, lng: longitude}, google.maps.Animation.DROP, map);
                map.setCenter(marker.position);
                if (options.lat && options.lon) {
                    fetch(options, option, numDays);
                }
            } else {
                alert('Geocoding ' + location.address + ' Failure -- STATUS: ' + status);
            }
        });
    });

    $('input[name="unitsRadio"]').click(function (event) {
        if (marker) {
            var options = {
                APPID: "340467c1a9978f4a8384d02573e98e28",
                lat: marker.position.lat(),
                lon: marker.position.lng()
            };
            if (event.target.value === 'c') {
                if (options.lat && options.lon) {
                    option = 0;
                    fetch(options, option, numDays);
                }
            } else {
                if (options.lat && options.lon) {
                    option = 1;
                    fetch(options, option, numDays);
                }
            }
        }
    });

    $('input[name="daysRadio"]').click(function (event) {
        numDays = parseInt(event.target.value);
        if (marker) {
            var options = {
                APPID: "340467c1a9978f4a8384d02573e98e28",
                lat: marker.position.lat(),
                lon: marker.position.lng()
            };
            if (options.lat && options.lon) {
                fetch(options, option, numDays);
            }
        }
    });

    $('.display-select').click(function (event) {
        switch (event.target.value) {
            case 'temp':
                temp = event.target.checked;
                break;
            case 'clouds':
                clouds = event.target.checked;
                break;
            case 'humidity':
                humidity = event.target.checked;
                break;
            case 'wind':
                wind = event.target.checked;
                break;
            case 'pressure':
                pressure = event.target.checked;
                break;
        }
        if (marker) {
            var options = {
                APPID: "340467c1a9978f4a8384d02573e98e28",
                lat: marker.position.lat(),
                lon: marker.position.lng()
            };
            if (options.lat && options.lon) {
                fetch(options, option, numDays);
            }
        }
    });

    $('#display-options-toggle').click(function () {
        $('#display-options-form').slideToggle(1000);
    });

    $('#lon-lat-toggle').click(function () {
        $('#lon-lat-form').slideToggle(1000);
    });

    $('#address-search-toggle').click(function () {
        $('#address-search-form').slideToggle(1000);
    });
});