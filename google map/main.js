let myZipData = [
    {
        zip: '89135',
        descrTitle: "89135",
        descrContent: "<p>We are serve this zip</p>",
        link: ''
    },
    {
        zip: '89117',
        descrTitle: "89117",
        descrContent: "<p>We are serve this zip</p>"
    },
    {
        zip: '89147',
        descrTitle: "89147",
        descrContent: "<p>We are serve this zip</p>"
    },
    {
        zip: '89032',
        descrTitle: "89032",
        descrContent: "<p>We are serve this zip</p>"
    },
    {
        zip: '89109',
        descrTitle: "89109",
        descrContent: "<p>We are serve this zip</p>"
    }
]
let myZipInfo = [];
let allZips = [];
let allZipsInfo;
var map1;
var curentPolygon;
var curentPopup;
var markers = [];

function getData() {
    let x = fetch('https://raw.githubusercontent.com/sashgorych/sashgorych.github.io/master/zipData.json').then(res => res.json())
    return x;
}

document.querySelector('.searchByZipBtn').addEventListener('click', function (e) {
    let zip = document.querySelector('#searchByZip').value;
    markers.forEach(el => {
        if (el.marker.title == zip) {
            let lat = el.marker.position.lat();
            let lng = el.marker.position.lng();
            let place = {lat: lat, lng: lng};
            map1.setCenter(place);
            // showPopup(el)
            showInfoBlock(el.markerPopupTitle, el.markerPopupContent, el.link)

            higlightArea(el.marker)
        }
    })
})

function showInfoBlock(title, content, link = "") {
    let htmlContent = `<h2 class="info_block_title intro">${title}</h2> <div class="info_block_content">${content}</div> <div class="info_block_link"><a href="${link}">Visit page</a></div>`
    let container = document.querySelector('.areas_serve .info_block');
    container.innerHTML = "";
    container.insertAdjacentHTML('beforeEnd', htmlContent)

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
            markerPopupContent: markerInfo.descrContent,
            link: markerInfo.link
        })
    return true;
}

async function createMarkers() {
    // let allZip = getZips();
    allZipsInfo = await getData()
    myZipInfo = chooseOnlyMy(allZipsInfo, myZipData)
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
            showInfoBlock(el.markerPopupTitle, el.markerPopupContent, el.link)
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
    console.log(all)
    let my = []
    myZips.forEach(el => {
        all.forEach(el2 => {
            if (el.zip == el2.name) {
                el2.descrTitle = el.descrTitle;
                el2.descrContent = el.descrContent;
                el2.link = el.link;
                my.push(el2)
                return false
            }
        })
    })
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