let myZipData = JSON.parse(ziplistdata)

// let myZipData = [
//     {
//         zip: '89135',
//         descrTitle: "89135",
//         descrContent: "<p>We are serve this zip</p>",
//         link: '',
//         imgUrl: '/photos/articles/000.photogal-1101310.jpeg'
//     },
//     {
//         zip: '89117',
//         descrTitle: "89117",
//         descrContent: "<p>We are serve this zip</p>"
//     },
//     {
//         zip: '89147',
//         descrTitle: "89147",
//         descrContent: "<p>We are serve this zip</p>"
//     },
//     {
//         zip: '89032',
//         descrTitle: "89032",
//         descrContent: "<p>We are serve this zip</p>"
//     },
//     {
//         zip: '89109',
//         descrTitle: "89109",
//         descrContent: "<p>We are serve this zip</p>"
//     }
// ]
let myZipInfo = [];
// let allZips = [];
let allZipsInfo;
var map1;
var curentPolygon;
var curentPopup;
var markers = [];

function getData() {
    let x = fetch('https://raw.githubusercontent.com/sashgorych/sashgorych.github.io/master/zipData.json').then(res => res.json())
    return x;
}

function findByZip(zip) {
    let find = false;
    doScrolling('.left-map', 1000)
    markers.forEach(el => {
        if (el.marker.title == zip) {
            find = true;
            let lat = el.marker.position.lat();
            let lng = el.marker.position.lng();
            let place = {lat: lat, lng: lng};
            map1.setCenter(place);
            // showPopup(el)
            hidePopupServe()
            showInfoBlock(el.markerPopupTitle, el.markerPopupContent, el.link, el.imgUrl)
            higlightArea(el.marker)
        }
    })
    if (!find) {
        hidePopupInfo()
        clearHighliteArea()
        showPopupServe('error', zip)
    }
}

document.querySelector('#searchByZip').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let zip = document.querySelector('#searchByZip').value;
        findByZip(zip)
    }

})
document.querySelector('.searchByZipBtn').addEventListener('click', function (e) {
    let zip = document.querySelector('#searchByZip').value;
    findByZip(zip)
})

function clearHighliteArea() {
    if (curentPolygon) {
        curentPolygon.setMap(null);
    }
}

function getElementY(query) {
    return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}

function doScrolling(element, duration) {
    var startingY = window.pageYOffset
    var elementY = getElementY(element) - 200;
    // If element is close to page's bottom then window will scroll only to some position above the element.
    var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
    var diff = targetY - startingY
    // Easing function: easeInOutCubic
    // From: https://gist.github.com/gre/1650294
    var easing = function (t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }
    var start

    if (!diff) return

    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp
        // Elapsed miliseconds since start of scrolling.
        var time = timestamp - start
        // Get percent of completion in range [0, 1].
        var percent = Math.min(time / duration, 1)
        // Apply the easing.
        // It can cause bad-looking slow frames in browser performance tool, so be careful.
        percent = easing(percent)

        window.scrollTo(0, startingY + diff * percent)

        // Proceed with animation as long as we wanted it to.
        if (time < duration) {
            window.requestAnimationFrame(step)
        }
    })
}

function hidePopupServe() {
    let popup = document.querySelector('.success_search_zip');
    popup.classList.remove('error')
    popup.classList.remove('success')
}

function hidePopupInfo() {
    let container = document.querySelector('.areas_serve .info_block');
    container.classList.remove('active');

}

function showPopupServe(status, zip) {
    let popup = document.querySelector('.success_search_zip');
    popup.classList.add(status)
    let popupText = popup.querySelector('span.zip')
    popupText.innerHTML = zip
}

function showInfoBlock(title, content, link = "", imgUrl) {
    let htmlContent = ``;
    if (!(imgUrl.length == 0)) {
        htmlContent = `<div class="info_block_img"><img src="${imgUrl}" loading="lazy" alt="zip ${title} image"></div>`
    }

    htmlContent = htmlContent + `
<div class="tooltip-google-map"><p class="info_block_title intro">${title}</p><div class="close_google_popup"></div></div>
<div class="info_block_content">${content}</div>
`
    if (!(link.length == 0)) {
        htmlContent = htmlContent + `<div class="info_block_link">
<a href="${link}">Visit page</a>
</div>`
    }

    let container = document.querySelector('.areas_serve .info_block');
    container.innerHTML = "";
    container.classList.add('active');
    container.insertAdjacentHTML('beforeEnd', htmlContent)
    document.querySelector('.close_google_popup').addEventListener('click', function (e) {
        hidePopupInfo()
        clearHighliteArea()
    })
}

function createPopup(title, content) {
    return '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">' +
        title +
        '</h1>' +
        '<div id="bodyContent">' +
        content
    "</div>" +
    "</div>";
}

const getAddress = address => {
    return new Promise((resolve, reject) => {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({address: address}, (results, status) => {
            if (status === 'OK') {
                resolve(results[0].geometry.location);
            } else {
                reject(status);
            }
        });
    });
};

async function createOneMarker(markerInfo) {
    let location = await getAddress(markerInfo.name);
    let lat = location.lat();
    let lng = location.lng();
    let myMarker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        draggable: true,
        label: "",
        title: markerInfo.name,

    });
    let myinfowindow = new google.maps.InfoWindow({
        content: createPopup(markerInfo.descrTitle, markerInfo.descrContent),
    });
    markers.push(
        {
            marker: myMarker,
            popup: myinfowindow,
            markerPopupTitle: markerInfo.descrTitle,
            imgUrl: markerInfo.imgUrl,
            markerPopupContent: markerInfo.descrContent,
            link: markerInfo.link
        })
    return true;
}

async function createMarkers() {
    // let allZip = getZips();
    // allZipsInfo = await getData()
    allZipsInfo = prepareGeoData();
    myZipInfo = chooseOnlyMy(allZipsInfo, myZipData)
    console.log(myZipInfo)

    for (let i = 0; i < myZipInfo.length; i++) {
        await createOneMarker(myZipInfo[i]);
    }
    drawAllMarkers(markers)
}

function drawAllMarkers(markersArray) {
    markersArray.forEach(el => {
        el.marker.setMap(map1);

        el.marker.addListener("click", () => {
            // showPopup(el)
            showInfoBlock(el.markerPopupTitle, el.markerPopupContent, el.link, el.imgUrl)
            higlightArea(el.marker)
        });
    })

}

function showPopup(element) {
    if (curentPopup) {
        curentPopup.close();
    }
    curentPopup = element.popup;
    element.popup.open(map1, element.marker);

}

function higlightArea(marker) {
    let lat = marker.position.lat();
    let lng = marker.position.lng();
    myZipInfo.forEach(el => {
        if (el.name == marker.title) {
            showPolygon(el.value)
        }
    })

}

function chooseOnlyMy(all, myZips) {
    let my = []
    console.log(all)
    console.log(myZips)
    myZips.forEach(el => {
        all.forEach(el2 => {
            if (el.zip == el2.name) {
                el2.descrTitle = el.descrTitle;
                el2.descrContent = el.descrContent;
                el2.imgUrl = el.imgUrl;
                el2.link = el.link;
                my.push(el2)
                return false
            }
        })
    })
    console.log(my)
    return my;
}

const start = async () => {
    map1 = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: 12,
        center: new google.maps.LatLng(36.106216, -115.382825),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    createMarkers()
}
start()

function prepareGeoData() {
    let processedData = []
    let data = JSON.parse(zipgeodata);
    let unicZipControl = []
    console.log(data)
    data.features.forEach(el => {
        let arr = []
        let name = el.properties.zipCode;
        el.geometry.coordinates[0].forEach(el => {
            arr.push({
                lat: el[1],
                lng: el[0]
            })
        })

        processedData.push({name: name, value: arr})
    })
    console.log('pwerar', processedData)
    return processedData;
}

function getArea() {

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://vanitysoft-boundaries-io-v1.p.rapidapi.com/rest/v1/public/boundary/zipcode?zipcode=" + d,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "d5b458ed0amsh46ed8e0eb522572p14d288jsn32cbfb93a3ba",
            "x-rapidapi-host": "vanitysoft-boundaries-io-v1.p.rapidapi.com"
        }
    };
    $.ajax(settings).done(function (response) {
        response.features.forEach(el => {
            let arr = []
            let name = el.properties.zipCode
            el.geometry.coordinates[0].forEach(el => {
                arr.push({
                    lat: el[1],
                    lng: el[0]
                })
            })
            allZips.push({name: name, value: arr})
        })
        localStorage.setItem('zips', JSON.stringify(allZips))
    });

}

function getZips() {
    let a = JSON.parse(localStorage.getItem('zips'))
    return a;
}

function saveTolocal() {
    localStorage.setItem('zips', JSON.stringify(allZipsInfo))
}

function showPolygon(coordinates) {
    if (curentPolygon) {
        curentPolygon.setMap(null);
    }
    curentPolygon = new google.maps.Polygon({
        paths: coordinates,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
    });
    curentPolygon.setMap(map1);
}
