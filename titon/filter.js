let timeOutForCountRequest;

let filter = (function () {
    let filterFields = {
            "propertyType": "",
            "maxPrice": "",
            "minPrice": "",
            "city": "",
            "state": "",
            "street": "",
            "type": "",
            "PostalCode": "",
            "address": "",
            "bedsMin": "",
            "bedsMax": "",
            "bathsMin": "",
            "bathsMax": "",
            "listingStatus": "",
            "homeSizeMin": "",
            "homeSizeMax": "",
            "lotSizeMin": "",
            "lotSizeMax": "",
            "homeAgeMin": "",
            "homeAgeMax": "",
            "stories": "",
            "pool": "",
            "garage": "",
            "gated": "",
            "communityAmenities": "",
            "number": "",
            "sold":""
        },
        isFirstInitVariable = false;

    function setFirstInit(val) {
        isFirstInitVariable = val;
    }

    function isFirstInit() {
        return isFirstInitVariable;
    }

    function getFiltersValue() {
        return filterFields;
    }

    function setValue(listField, value, update = true) {
        filterFields[listField] = value;

        if (!isFirstInitVariable) {
            setCountOfResults();
            if (update) {
                setFilterTextForNav();

            }
            checkIfMoreFilterHaveFiltered();
        }
    }

    function getPreviousValue() {
        return JSON.parse(localStorage.getItem('filter'));
    }

    return {
        'setFirstInit': setFirstInit,
        'getIsFirstInit': isFirstInit,
        'getValue': getFiltersValue,
        'setValue': setValue,
        'getPreviousSearched': getPreviousValue
    }
})()

let terms = {
    "propertyType": "",
    "listingStatus": "",
    "bedsMin": "Beds",
    "bedsMax": "Beds",
    "bathsMin": "Baths",
    "bathsMax": "Baths",
    "minPrice": "Min:",
    "maxPrice": "Max:",
    "homeSizeMin": "sqft",
    "homeSizeMax": "sqft",
    "lotSizeMin": "sqft",
    "lotSizeMax": "sqft",
    "homeAgeMin": "years",
    "homeAgeMax": "years",
    "stories": "",
    "garage": "",
    "pool": "",
    "gated": "",
    "communityAmenities": "",
    "number": ''
}
let similarFields = {
    "homeSizeMin": "homeSizeMax",
    "homeSizeMax": "homeSizeMin",
    "lotSizeMin": "lotSizeMax",
    "lotSizeMax": "lotSizeMin",
    "homeAgeMin": "homeAgeMax",
    "homeAgeMax": "homeAgeMin",
    "bedsMin": "bedsMax",
    "bedsMax": "bedsMin",
    "bathsMin": "bathsMax",
    "bathsMax": "bathsMin"
}

function getSimilar(field) {
    for (let key in similarFields) {
        if (key == field) {
            return similarFields[key];
        }
    }
}

function checkIfMoreFilterHaveFiltered() {
    let moreFilterBlock = document.querySelector('.more');
    let hasChecked = moreFilterBlock.querySelector('.more-line:not(.mobile-nav).filtered');
    let hasCheckedMobileNav = moreFilterBlock.querySelector('.mobile-nav.filtered');
    if (hasChecked && screen.width > 1280) {
        moreFilterBlock.classList.add('hasChecked')
    } else {
        if (hasChecked || hasCheckedMobileNav && screen.width < 1280) {
            moreFilterBlock.classList.add('hasChecked')

        } else {
            moreFilterBlock.classList.remove('hasChecked')
        }
    }
}

function makeStringForMaxAndMin(first, second) {
    let minField, maxField;
    if (first.includes('Min')) {
        minField = first
        maxField = second
    } else {
        minField = second
        maxField = first
    }
    let objValue = filter.getValue()
    let str = "";
    if (objValue[minField] == objValue[maxField]) {
        str = objValue[minField] + " " + terms[maxField];
        return str;
    }
    if (!objValue[minField].length == 0 && !objValue[maxField].length == 0) {
        str = objValue[minField] + "-" + objValue[maxField] + " " + terms[maxField];
        return str
    }
    if (!objValue[minField].length == 0 && objValue[maxField].length == 0) {
        str = objValue[minField] + "+ " + terms[maxField];
        return str
    }
    if (objValue[minField].length == 0 && !objValue[maxField].length == 0) {
        str = "Max: " + objValue[maxField] + " " + terms[maxField];
        return str
    }
    return str
}

function setTextToHtml(el, text) {
    el.querySelector('.data-filter').innerHTML = text;

}

let classesList = {
    'parentField': ".parentField",
    'activeElement': "active"
}

$('.btn-filter-search').click(function (e) {
    makeRequest(true);
})

$('.search-filter').keydown(function(e) {
    if(e.keyCode === 13) {
        makeRequest(true);

    }
});
function getParentsByClass(elemArray, className) {
    let arr = [];
    elemArray.forEach(el => {
        arr.push(getParentByClass(el, className))

    })
    return arr;
}

function getParentByClass(elem, className) {
    let name = "." + className;
    return elem.closest(name);
}

function searchBlockByDataValue(parent, val) {
    let searchedBlocks = parent.querySelector(`[data-value="${val}"]`);
    return searchedBlocks;
}

function searchBlockByData(val) {
    let searchedBlocks = document.querySelectorAll(`[data-listValue="${val}"]`);
    return searchedBlocks;
}

function setFilterTextForNavs(navs, dataValue, value) {
    navs.forEach(el => {
        // if price field
        if (dataValue.includes('Price') && !(value.length == 0) && !isNaN(value)) {
            let obj = filter.getValue();
            if ((dataValue == 'minPrice') && (!obj['maxPrice'].length == 0)) {
                return
            }
            value = intToString(value)
            setTextToHtml(el, terms[dataValue] + " " + value)
            setPriceDropValueForAll()
        } else {
            if (dataValue.includes('Min') || dataValue.includes('Max')) {
                let thisFieldName = dataValue;
                let similarFieldName = getSimilar(thisFieldName)
                let filteredString = makeStringForMaxAndMin(thisFieldName, similarFieldName)
                setTextToHtml(el, filteredString)
            } else {
                setTextToHtml(el, terms[dataValue] + " " + value)
                cropText(10, el.querySelector('.data-filter'));

            }

        }
    })
}

function setActiveCity(value) {
    let a = $('#search-filter-is').select2().val(value)

}

function makeFilteredBlockForNav(dataValue, value) {
    if (dataValue == 'city') {
        setActiveCity(value);
    }
    let blocksWithValue = searchBlockByData(dataValue);
    let navBlocks = getParentsByClass(blocksWithValue, "nav-li");
    makeActiveNAvBlocks(navBlocks);
    setFilterTextForNavs(navBlocks, dataValue, value);
}

function stringToInt(value) {
    value = value.toLowerCase()
    if (!(value.indexOf("k") == -1)) {
        value = value.slice(0, -1);
        if (!(value.indexOf(".") == -1)) {
            value = value.replace(/\./g, '')
            value = value * 100;
        } else {
            value = value * 1000;
        }
        return value;
    }
    if (!(value.indexOf("m") == -1)) {
        value = value.slice(0, -1);
        if (!(value.indexOf(".") == -1)) {
            value = value.replace(/\./g, '')
            value = value * 100000;
        } else {
            value = value * 1000000;
        }
        return parseInt(value);

    }
    if (!(value.indexOf("g") == -1)) {
        value = value.slice(0, -1);
        if (!(value.indexOf(".") == -1)) {
            value = value.replace(/\./g, '')
            value = value * 100000000;
        } else {
            value = value * 1000000000;
        }
        return value;

    }
    if (!(value.indexOf("t") == -1)) {
        value = value.slice(0, -1);
        if (!(value.indexOf(".") == -1)) {
            value = value.replace(/\./g, '')
            value = value * 100000000000;
        } else {
            value = value * 1000000000000;
        }
        return value;

    }
    return value;

}

function intToString(value) {

    var length = (value + '').length,
        index = Math.ceil((length - 3) / 3),
        suffix = ['K', 'M', 'G', 'T'];

    if (length < 4) return value;

    return (value / Math.pow(1000, index))
        .toFixed(1)
        .replace(/\.0$/, '') + suffix[index - 1];

}

var diff = function (obj1, obj2) {

    // Make sure an object to compare is provided
    if (!obj2 || Object.prototype.toString.call(obj2) !== '[object Object]') {
        return obj1;
    }

    //
    // Variables
    //

    var diffs = {};
    var key;


    //
    // Methods
    //

    var arraysMatch = function (arr1, arr2) {

        // Check if the arrays are the same length
        if (arr1.length !== arr2.length) return false;

        // Check if all items exist and are in the same order
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }

        // Otherwise, return true
        return true;

    };

    var compare = function (item1, item2, key) {

        // Get the object type
        var type1 = Object.prototype.toString.call(item1);
        var type2 = Object.prototype.toString.call(item2);

        // If type2 is undefined it has been removed
        if (type2 === '[object Undefined]') {
            diffs[key] = null;
            return;
        }

        // If items are different types
        if (type1 !== type2) {
            diffs[key] = item2;
            return;
        }

        // If an object, compare recursively
        if (type1 === '[object Object]') {
            var objDiff = diff(item1, item2);
            if (Object.keys(objDiff).length > 1) {
                diffs[key] = objDiff;
            }
            return;
        }

        // If an array, compare
        if (type1 === '[object Array]') {
            if (!arraysMatch(item1, item2)) {
                diffs[key] = item2;
            }
            return;
        }

        // Else if it's a function, convert to a string and compare
        // Otherwise, just compare
        if (type1 === '[object Function]') {
            if (item1.toString() !== item2.toString()) {
                diffs[key] = item2;
            }
        } else {
            if (item1 !== item2) {
                diffs[key] = item2;
            }
        }

    };


    //
    // Compare our objects
    //

    // Loop through the first object
    for (key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            compare(obj1[key], obj2[key], key);
        }
    }

    // Loop through the second object and find missing items
    for (key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (!obj1[key] && obj1[key] !== obj2[key]) {
                diffs[key] = obj2[key];
            }
        }
    }

    // Return the object of differences
    return diffs;

};

function makeActiveNAvBlocks(blocks) {
    blocks.forEach(el => {
        el.classList.add('filtered')
    })
}

function copyFromObj1ToObj2(obj1, obj2) {
    for (let key in obj1) {
        obj2[key] = obj1[key]
    }
}

function setFilterTextForNav() {
    let objTh = filter.getValue()
    for (let key in objTh) {
        if (!(objTh[key] == '')) {
            makeFilteredBlockForNav(key, objTh[key])
        }
    }
}
function setTotalCount(count){
    document.querySelector('.results-count').innerHTML = count;

}
function getObjectsCount() {
    reqprm = JSON.stringify(filter.getValue());
    console.log(filter.getValue())
    $('#custom-filter-val').val(reqprm);

    var url = '/index.php?page=corelogic&pgnum=0&properties=custom';
// + '&filterdata='+ JSON.stringify( filter.getValue() );

    var totalcount = 0;
    $.post(url, $('#search-custom-form').serialize(), function (data) {
            console.log(data);
            //data.status = 'ok' or = 'error'
            totalcount = data.totalcount;
            setTotalCount(totalcount);
        }, 'json'
    );
    return;
}

function showLoadInDrop() {
    document.querySelector('.city-drop-loading').classList.add('active')
}

function hideLoadInDrop() {
    document.querySelector('.city-drop-loading').classList.remove('active')
}

function startLoading() {
    document.querySelector('.content-div-city').textContent = '';
    showLoadInDrop();
    showCityDrop()
}

function stopLoading() {
    hideLoadInDrop();

}

function getSearchObjects() {
    clearCityList();
    startLoading()
    console.log(filter.getValue())
    reqprm = JSON.stringify(filter.getValue());
    $('#custom-filter-val').val(reqprm);

    var url = '/index.php?page=corelogic&pgnum=0&properties=custom&searchbyzip=1';

    $.post(url, $('#search-custom-form').serialize(), function (data) {
            console.log(data);
            stopLoading();
            if (data.status == 'notfound') {
                displayNotFoundMessage()
            } else {
                hideErrorNotFound();
                makeCityList(data.items)
            }
            //data.status = 'found' or = 'notfound'
            //data.items obiect { name 'zip, city, ST' , postal, city }
        }, 'json'
    );
    return;
}
function getUnion(str) {
    if(str) {
        let res = str.match(/\d{4}/);
        if (res) {
            return res[0];
        }
    }

}
function saveInputValue(val) {
    if (val.length == 0) {
        filter.setValue('cityFullName', "", false)

    } else {
        filter.setValue('cityFullName', val, false)
    }
}
function createLoadPopup() {
    document.querySelector('body').insertAdjacentHTML('beforeEnd', `<div class="overlay-popup-load loadPopup"><img class="load-popup-img" src="/images/loading.gif" style="width:50px"></div> `)

}
function showLoadPopup() {
    if(document.querySelector('.loadPopup')){
    }else {
        createLoadPopup();
    }
    document.querySelector('.loadPopup').classList.add('active')

}
function makeRequest(subm = false) {
    showLoadPopup()
    closeFilterDrop()
    // if (!getCity()) {
    //     return
    // };
    let previousData = getFromLocalStorage()
    let curentData = filter.getValue();
    let inputValue = document.querySelector('.search-filter').value;
    if (inputValue.length == 0) {
        // filter.setValue('city', 'las vegas', false)
    }
    saveInputValue(inputValue);
    filter.setFirstInit(false);
    displayFilterDataInNav();
    saveToLocalStorage()
    setFilterTextForNav()
    //console.log(previousData);
    //console.log(filter.getValue());
    // refresh page if need
    if (subm) {
        //reqprm = $.param( filter.getValue() );
        reqprm = JSON.stringify(filter.getValue());
        $('#custom-filter-val').val(reqprm);

        $('#search-custom-form').submit();
    }
    totalcount = getObjectsCount();


}

function displayFilterDataInNav() {

}


function toogleElement(element) {
    let isAlreadyActive = element.classList.contains('active-element')
    if (isAlreadyActive) {
        disableLiElement(element)
    } else {
        // clearAllActiveElementInDropList(parentTag)
        makeActiveLiElement(element)
    }
}

function makeOnlyOneActive(element) {
    let isAlreadyActive = element.classList.contains('active-element')
    let parentTag = element.closest(classesList['parentField']);
    if (isAlreadyActive) {
        disableLiElement(element)
    } else {

        clearAllActiveElementInDropList(parentTag)
        makeActiveLiElement(element)
    }
}

function makeActiveLiElement(element) {
    element.classList.add('active-element')
    // element.querySelector('input').checked = true;
}

function disableLiElement(element) {
    element.classList.remove('active-element')
    // element.querySelector('input').checked = false;
}

function checkCorrectMinAndMax(minField, maxField) {
    if (minField.value.length == 0 || maxField.value.length == 0) {
        return true;
    }
    let valMin = stringToInt(minField.value);
    let valMax = stringToInt(maxField.value);
    if (valMin > valMax) {
        return false;
    } else {
        return true;

    }
}

function saveToLocalStorage() {
    localStorage.setItem('filter', JSON.stringify(filter.getValue()));
}

function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('filter'));
}

function isChanged(obj1, obj2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        return false;
    }
    ;
    return true;
}

function processingChooseMaxValue(parent, value) {
    let toInputField = parent.querySelector('.to');
    if (!(parent.dataset.listvalue.indexOf('Price') == -1)) {
        toInputField.value = intToString(value);

    } else {
        toInputField.value = value;
    }
    let minField = toInputField.parentNode.parentNode.querySelector('.from')
    if (checkCorrectMinAndMax(minField, toInputField)) {
        saveValue(value, toInputField.parentNode.dataset.listvalue)
    } else {
        clearAllActiveElementInDropList(minField.parentNode)
        saveValue("", minField.parentNode.dataset.listvalue)
        saveValue(value, toInputField.parentNode.dataset.listvalue)
        minField.value = ""
    }
    ;
    return;
}

function processingChooseMinValue(parent, value) {
    let fromInputField = parent.querySelector('.from');
    if (!(parent.dataset.listvalue.indexOf('Price') == -1)) {
        fromInputField.value = intToString(value);

    } else {
        fromInputField.value = value;
    }
    let maxField = fromInputField.parentNode.parentNode.querySelector('.to')
    if (checkCorrectMinAndMax(fromInputField, maxField)) {
        saveValue(value, fromInputField.parentNode.dataset.listvalue)
    } else {
        // if min>max
        clearAllActiveElementInDropList(maxField.parentNode)

        saveValue(value, fromInputField.parentNode.dataset.listvalue)
        saveValue("", maxField.parentNode.dataset.listvalue)
        maxField.value = ""
    }
    ;
    return;
}

function clearSelect(select) {
    console.log(select)

    if (select) {
        select.value = "";
    }
}

function processingClickOnCircle(parent, value) {
    // if value not a numeric (without dropdown input)
    if (!+value) {
        saveValue(value, parent.dataset.listvalue)
        return;
    }
    //set data to inputs
    parent.parentNode.querySelector('input.from').value = value;
    parent.parentNode.querySelector('input.to').value = "";
    //disable active element in input drop
    clearAllActiveElementInDropList(parent.parentNode.querySelector('input.to').parentNode)
    clearSelect(parent.parentNode.querySelector('.select-to'))
    saveValue("", parent.parentNode.querySelector('input.to').parentNode.dataset.listvalue);
    saveValue(value, parent.dataset.listvalue)
    let dataSelect = parent.dataset.listvalue;
    setToSelectValue(dataSelect, value);
    return;
}

function displayChoosenValueInInput(parent, value) {
    let clickOnCirlce = parent.classList.contains('circle-fields')
    let haveCircleElements = parent.parentNode.parentNode.querySelector('.circle-fields')
    let clickOnInputDropdown = parent.classList.contains('dropdown')
    if (clickOnCirlce) {
        processingClickOnCircle(parent, value);
    }
    //if block with circle and drop
    if (clickOnInputDropdown && haveCircleElements) {
        let fromInputField = parent.querySelector('.from');
        if (fromInputField) {
            let circleElementsParent = parent.parentNode.parentNode.querySelector('.circle-fields')
            clearAllActiveElementInDropList(circleElementsParent)
            let maxField = fromInputField.parentNode.parentNode.querySelector('.to')
            processingChooseMinValue(parent, value)
            clearAllActiveElementInDropList(maxField.parentNode)

        }
        let toInputField = parent.querySelector('.to');
        if (toInputField) {

            let minField = toInputField.parentNode.parentNode.querySelector('.from')
            let circleElementsParent = parent.parentNode.parentNode.querySelector('.circle-fields')
            clearAllActiveElementInDropList(circleElementsParent)
            processingChooseMaxValue(parent, value);
            clearAllActiveElementInDropList(minField.parentNode)

        }
    }

    // if only drop
    if (clickOnInputDropdown && !haveCircleElements) {

        let fromInputField = parent.querySelector('.from');
        if (fromInputField) {
            processingChooseMinValue(parent, value)
        }
        let toInputField = parent.querySelector('.to');
        if (toInputField) {

            processingChooseMaxValue(parent, value);
        }

    }
}

function getAllCheckedElements(clickedElement) {
    let parentTag = clickedElement.closest(classesList['parentField']);
    let allActiveElements = parentTag.querySelectorAll('.active-element')
    let allActiveElementsValue = [];
    allActiveElements.forEach(el => {
        allActiveElementsValue.push(el.dataset.value);
    })
    return allActiveElementsValue.join(',');
}

function saveValue(elementData, fieldName) {
    filter.setValue(fieldName, elementData)
}

function showCheckedElementinNav(element) {
}

function clearActiveElementInDropList(parentTag) {
    let checkedElement = parentTag.querySelector('input:checked');
    if (checkedElement) {
        checkedElement.checked = false;
    }
}

function getCity() {
    let chosenCity = document.querySelector('.chosen-city');
    if (chosenCity) {
        filter.setValue("PostalCode", chosenCity.dataset.zip, false)
        filter.setValue("city", chosenCity.dataset.city, false)
        filter.setValue("cityFullName", chosenCity.dataset.name, false)
        return true;

    } else {
        let inputValue = document.querySelector('.search-filter').value;
        if (formatZip(inputValue) && checkLength(inputValue)) {
            filter.setValue("PostalCode", inputValue, false)
            filter.setValue("cityFullName", inputValue, false)
            return true;
        } else {
            if (checkLength(inputValue)) {
                filter.setValue("city", inputValue, false)
                filter.setValue("cityFullName", inputValue, false)
                return true;
            } else {
                return false;
            }
        }
    }
    return true;
}

function clearAllActiveElementInDropList(parentTag) {
    let checkedElementLi = parentTag.querySelectorAll('.li-filter-item');
    if (checkedElementLi.length > 0) {
        checkedElementLi.forEach(el => {
            el.classList.remove('active-element');
            // el.querySelector('input').checked = false;
        })
    }

}

function validateCheckboxValue(container, clickedElement) {
    let CountOfelements = container.querySelectorAll('.li-filter-item').length;
    let CountOfActiveElements = container.querySelectorAll('.active-element').length;
    let isAnyElementClicked = clickedElement.classList.contains('any-element');
    let isAnyElementActive = (container.querySelector('.any-element')) ? container.querySelector('.any-element').classList.contains('active-element') : false;
    let delta = CountOfelements - CountOfActiveElements;
    if (isAnyElementClicked) {
        clearAllActiveElementInDropList(container);
        clearFilter(clickedElement.closest('.nav-li'))

        makeActiveLiElement(clickedElement);
        return;
    }
    if (CountOfActiveElements > 1 && delta > 1 && isAnyElementActive) {
        //disable *any* element if click to other element
        disableLiElement(container.querySelector('.any-element'))
        return;
    }
    if (delta == CountOfelements) {
        //if nothing checked - check *any* element
        clearFilter(clickedElement.closest('.nav-li'))

        makeActiveLiElement(container.querySelector('.any-element'))

    }
    if (delta == 1) {
        //if checked all  - make checked only *any*
        clearAllActiveElementInDropList(container);
        clearFilter(clickedElement.closest('.nav-li'))

        makeActiveLiElement(container.querySelector('.any-element'))

        return;
    }

}

function clickOnCheckbox(element) {
    let parentTag = element.closest(classesList['parentField']);
    let fieldName = parentTag.dataset.listvalue;
    toogleElement(element);
    validateCheckboxValue(parentTag, element);
    let valueOfAllCheckedElements = getAllCheckedElements(element, parentTag);
    saveValue(valueOfAllCheckedElements, fieldName);
    showCheckedElementinNav(element)
}

function clickedOnCircleRadio(element) {
    let elementData = element.dataset.value;
    let parentTag = element.closest(classesList['parentField']);
    if (element.classList.contains('active-element')) {
        return;
    }
    if (element.classList.contains('any-element')) {
        clearFilter(element.closest('.nav-li'))
    }
    makeOnlyOneActive(element)
    displayChoosenValueInInput(parentTag, elementData)
}

function clickedOnInput(element) {
    let elementData = element.dataset.value;
    let parentTag = element.closest(classesList['parentField']);
    makeOnlyOneActive(element)
    displayChoosenValueInInput(parentTag, elementData, element)
}

function setPriceDropValueForAll() {
    setPriceDropValue(document.querySelector('.price'))
    setPriceDropValue(document.querySelector('.price-mobile'))
}

function clickOnInputDropDownElement(element) {
    element.addEventListener('change', function () {
        let elementData = stringToInt(element.value);

        let parentField = element.closest(classesList['parentField']);
        let parentFieldName = parentField.dataset.listvalue;

        clearAllActiveElementInDropList(parentField)
        if (checkCorrectMinAndMax(parentField.parentNode.querySelector('.from'), parentField.parentNode.querySelector('.to'))) {
            filter.setValue(parentFieldName, elementData)
            showCheckedElementinNav(element)
        } else {
            if (parentField.querySelector('.to')) {
                parentField.parentNode.querySelector('.to').value = ""
                filter.setValue(parentFieldName, "")
            } else {
                parentField.parentNode.querySelector('.from').value = ""
                filter.setValue(parentFieldName, "")

            }
        }

    })


}

if (document.querySelector('.real-estate')) {
    onInitFilter()
}

function makeAnyElementsActive() {
    document.querySelectorAll('.any-element').forEach(el => {
        if (!el.closest('.nav-li').querySelector('.active-element')) {
            el.classList.add('active-element')
        }
    })
}

$('.clearCity').click(function (e) {
    clearCity()
})

function clearCity() {
    filter.setValue('city', "", false)
    document.querySelector('.search-filter').value = "";
}

function setCity() {
    let name = filter.getValue()['cityFullName'];
    let city = filter.getValue()['city'];
    let zip = filter.getValue()['PostalCode']
    if (!name) {
        // name = "Las Vegas, NV"
        // filter.setValue('city', "Las Vegas", false)
        // filter.setValue('cityFullName', "Las Vegas", false)
        filter.setValue('city', "", false)
        filter.setValue('cityFullName', "", false)
        document.querySelector('.search-filter').value = "";
    }else{
        document.querySelector('.search-filter').value = name;
    }
}

function onInitFilter() {
    createLoadPopup();
    let searchParams;
    const params = new URLSearchParams(window.location.search)
    for (const param of params) {
        if(param[0] == 'filterdata'){
            //get data from search bar if exist
            searchParams = JSON.parse(param[1]);
            fillFilterAllObj(searchParams)
            saveToLocalStorage()
        }
    }
    if(!(window.location.search.substr(1).indexOf('filterdata') == -1)) {
    //if exist fitterdata in search bar
    showClearBtn();
    setCountOfResults(true)
    filter.setFirstInit(true);
    let prewObj = searchParams;
    if (searchParams) {
        for (let key in prewObj) {
            if (!prewObj[key] == "") {
                let parentList = searchBlockByData(key);
                if (parentList) {
                    parentList.forEach(parent => {
                        if (!parent.classList.contains('multipleCheck')) {
                            //new select
                            let searchedSelect = searchSelectByDataValue(parent, key)
                            if (searchedSelect) {
                                searchedSelect.value = prewObj[key];
                            }

                            let searchedBlock = searchBlockByDataValue(parent, prewObj[key])
                            if (searchedBlock) {
                                makeActiveLiElement(searchedBlock)
                                prepare(parent)
                            } else {
                                parent.querySelector('input').value = prewObj[key];
                            }
                        } else {
                            (prewObj[key]).split(',').forEach(el => {
                                makeActiveLiElement(searchBlockByDataValue(parent, el))

                            })
                        }
                    })

                }

            }
        }
        if(prewObj['sold'] == 'sold' && !document.querySelector('.custom_sold')){
            setSoldBtnActive()
        }
    } else {
        saveToLocalStorage()
    }
        fillFilterAllObj(prewObj)
        setFilterTextForNav()
        checkIfMoreFilterHaveFiltered()
        filter.setFirstInit(false);
        makeAnyElementsActive()
        setCity()
    }
}

function fillFilterAllObj(obj) {
    for (let key in obj) {
        filter.setValue(key, obj[key]);
    }
}

function prepare(element) {
    if (element.querySelector('.onlyOneCheck')) {
        return
    }
    let el = element.querySelector(".active-element label") || element.querySelector('.label-input');
    disableLiElement(element.querySelector(".active-element"))
    processClickOnFilter(el)
}

function clearFilter(parent, element = null) {
    let obj = filter.getValue()
    parent.classList.remove('filtered')
    parent.querySelector('.data-filter').innerHTML = '';
    parent.querySelectorAll('.active-element').forEach(el => {
        el.classList.remove('active-element')
    })
     clearSelect(parent.querySelector('.select-to'))
     clearSelect(parent.querySelector('.select-from'))

    parent.querySelectorAll('.drop-input').forEach(el => {
        el.value = "";
    })
    if (element) {
        let dataListValues = element.parentNode.querySelector(`[data-filter]`).getAttribute('data-filter');
        dataListValues.split(' ').forEach(el => {
            if (!obj[el].length == 0) {
                filter.setValue(el, "", false)

            }

        })
    }

}
document.querySelector('.select-from').addEventListener('change',function (e) {
    processClickOnFilter(e.currentTarget)
})
document.querySelector('.select-to').addEventListener('change',function (e) {
    processClickOnFilter(e.currentTarget)
})
function processClickOnFilter(element) {
    let elementType = element.tagName;
    let elementClass = element.classList;
    let isReset = element.classList.contains('reset');
    let isDone = element.classList.contains('done');
    let isCircleElement = elementClass.contains('onlyOneCheck');
    let isInputWithDrop = elementClass.contains('drop-input');
    let cityItem = elementClass.contains('city-row');
    let isSelect = elementClass.contains('select-from') || elementClass.contains('select-to');

    let isSearchFilter = elementClass.contains('search-filter');
    let isMultipleCheck = elementClass.contains('label-input');
    let isMultipleCheckClickOnLabel = element.parentNode.classList.contains('label-input');
    let isBlockWithOneCorrectCheck = elementClass.contains('onlyOneCheck');
    let isOnlyDrop = element.parentNode.parentNode.parentNode.classList.contains('only-drop');
    let isDropWithCircle = element.parentNode.parentNode.parentNode.classList.contains('drop-to-circle');

    if (isReset) {
        clearFilter(element.closest('.nav-li'), element)
        return
    }
    if (isDone) {
        closeFilterDrop()
        makeRequest(true);
        return;
    }
    if (cityItem) {
        chooseCityProcces(element);
    }
    if (isSearchFilter) {
        showCityDrop()
        showDefaultCities();
    }
    if (isSelect) {
        clickedOnSelect(element)
        return;
    }
    if (isDropWithCircle) {
        clickedOnInput(element.parentNode);
        return
    }
    if (isOnlyDrop) {
        clickedOnInput(element.parentNode);
        return
    }
    if (isMultipleCheck) {
        clickOnCheckbox(element.parentNode)
        return
    }
    if (isMultipleCheckClickOnLabel) {
        clickOnCheckbox(element.parentNode.parentNode)
        return
    }
    if (isBlockWithOneCorrectCheck) {
        clickedOnCircleRadio(element.parentNode);
        return
    }


    if (isInputWithDrop) {
        clickOnInputDropDownElement(element);
        return
    }
    if (element.classList.contains('nav-li')) {
        return;
    }


}

function chooseCityProcces(element) {
    resetAddressField()

    if (element.dataset.direct == 'directlink') {
        let link = element.dataset.link;
        saveInputValue(element.dataset.name);
        saveToLocalStorage()
        location.replace(link);
        return;
    }
    if (element.dataset.zip) {
        filter.setValue('PostalCode', element.dataset.zip, false);
    }
    if (element.dataset.city) {
        filter.setValue('city', element.dataset.city, false);

    }

    element.classList.add('chosen-city')
    document.querySelector('.search-filter').value = element.dataset.name;
    closeCityDrop();
    // filter.setValue('address',"",false);
    // filter.setValue('city',element.dataset.name,false);
    // filter.setValue('PostalCode','',false)
    makeRequest(true);
}

document.querySelector('.filters-real-estate-div').addEventListener('click', function (e) {
    e.preventDefault();
    let element = e.target;
    processClickOnFilter(element);
})


$('.search-btn2').click(function (e) {
    closeFilterDrop()
    checkAddressInput();
    makeRequest(true);
    return;
})

$('.more-line').click(function (e) {
    if (e.target.classList.contains('dr-title') || e.target.classList.contains('more-line'))
        $(this).toggleClass('active')

})
$('.drop-input ').keyup(function (e) {
    let text = e.target.value;
    let testText = text;
    let correctNumber;
    if (testText * 1 + 0 != text) {
        correctNumber = testText.substring(0, testText.length - 1)
        if (isNaN(correctNumber)) {
            correctNumber = '';
        }
        e.target.value = correctNumber;

    }

});
$('.price-mobile input').focus(function (e) {
    $(this).val(stringToInt($(this).val()))
})
$('.price input').focus(function (e) {
    $(this).val(stringToInt($(this).val()))
})
$('.price-mobile input').focusout(function (e) {
    $(this).val(intToString($(this).val()))
})
$('.price input').focusout(function (e) {
    $(this).val(intToString($(this).val()))
})

function cropText(size, el) {

    let endCharacter = '...';


    let text = el.innerHTML;
    if ((text.indexOf('<span>') == -1)) {
        if (el.innerHTML.length > size) {
            text = text.substr(0, size);
            el.innerHTML = text + endCharacter;
        }

    }


}

function setPriceDropValue(parent) {
    clearAllActiveElementInDropList(parent)
    let min = parent.querySelectorAll('.min-price-drop-ul .numeric-li-item');
    let minValue = filter.getValue()['minPrice']
    let maxValue = filter.getValue()['maxPrice']
    let max = parent.querySelectorAll('.max-price-drop-ul .numeric-li-item');
    let noMax = false;
    if (minValue.length == 0) {
        minValue = 80000;
    }
    if (maxValue.length == 0) {
        maxValue = minValue;
        minValue = 0
        noMax = true;
    }
    let newMinValue = +maxValue;
    let newMaxValue = +maxValue;
    if (newMinValue < 600000 && !noMax) {
        newMinValue = 600000;
    }
    let minArray = [];
    min.forEach(el => {
        if (noMax) {
            newMinValue = +newMinValue + 100000;

        } else {
            newMinValue = +newMinValue - 100000;

        }
        minArray.push(newMinValue)
    })

    if (noMax) {
        minArray.reverse();
    }
    min.forEach(el => {
        let textInt = intToString(roundTostep(minArray[minArray.length - 1], 100000))
        el.dataset.value = roundTostep(minArray[minArray.length - 1], 100000);
        el.querySelector('label').innerHTML = textInt;
        minArray.splice(-1, 1)
    })
    max.forEach(el => {
        el.dataset.value = newMaxValue;
        el.querySelector('label').innerHTML = intToString(newMaxValue);
        newMaxValue = roundTostep(+newMaxValue + 100000, 100000);

    })
}

$(document).ready(function () {
        var doctitle = document.title;
/*
	$(window).on({
	  // Store initial state
	  'load': function() {
		window.history.pushState({
		   'html': '<section id="prop-list-section" class="homes">' + $('#prop-list-section').html() + '<section>'
		}, '', document.URL);
	  },

	  // Handle browser Back/Forward button
	  'popstate': function(e) {
console.log(e.originalEvent);
		var oState = e.originalEvent.state;
		if (oState) {
		  $('#prop-list-section').replaceWith(oState.html);
		}
	  }
	});
*/

    // --------------------
    $('#props-load-more-but').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $this = $(this);
        var url = '/index.php?page=corelogic&pgnum=' + $this.attr('data-page') + '&properties=' + $this.data('filter') + '&filterdata=' + JSON.stringify($(this).data('custom')) + '&pth='+window.location.pathname;
        console.log(url);

        $.ajax({
            url: url,
            dataType: "html",
            data: '',
            beforeSend: function (data, textStatus) {
                $this.hide();
                $('#props-loading-gif').show();
            },
            always: function (data, textStatus) {
                $this.show();
                $('#props-loading-gif').hide();
            },
            success: function (data, textStatus) {
                $('#props-loading-gif').hide();
                var info = $.parseJSON(data);

                if (info.nextlink != null) $this.show()
                else $this.hide();

                console.log(info);
                if(!(info['filter'] == 'featured')) {
                    setTotalCount(info['totalcount']);
                }
                if (info.status == 'ok') {
                    //console.log('xxxx', $('#props-items-container'));
                    $('#props-items-container').append(info.html);
                    $('#props-load-more-but').attr('data-page', info.page)
		    if ( info.totalcount ) {
			$('#custom-title-h1').html( info.totalcount + ' ' + $('#custom-title-h1').data('text') );
			}

			pg = $this.attr('data-page');
			pg = parseInt(pg);
			if (isNaN(pg)) pg=1;

			if (pg) newtitle = doctitle + ' Page #'+ pg;
			else newtitle = doctitle;

			newpath = changeSearchQueryParameter("pgnum","pgnum", pg );
			$('#pages-props-place').html(info.scroll);

			//document.title = newtitle;
			//history.pushState( { 'html': '<section id="prop-list-section" class="homes">' + $('#prop-list-section').html() + '<section>', 'newtitle': newtitle.toString() }, newtitle, newpath );

                    if (info.nextlink != null) {
			/*var somind = pathroot.lastIndexOf('&pgnum=');
			if ( somind ) {
				newpath = pathroot.substring()
			} else newpath = pathroot + '&pgnum='+$this.attr('data-page')
			pg = $this.attr('data-page');
			pg = parseInt(pg);
			if (isNaN(pg)) pg=0;
			else pg = pg - 1;

			if (pg) newtitle = $('#custom-title-h1').data('text') + ' Page #'+ pg;
			newtitle = $('#custom-title-h1').data('text');
			newpath = changeSearchQueryParameter("pgnum","pgnum", pg );

			console.log( 'newtitle', newtitle );
			console.log( 'newpath', newpath );
			console.log( 'saved', '<div class="homes-content-block" id="props-items-container">' + $('#props-items-container').html() + '</div>' );
			*/
			//history.pushState( { 'html': '<section id="prop-list-section" class="homes">' + $('#prop-list-section').html() + '<section>' }, newtitle, newpath );
                    } 

                    //$this.data('filter', info.filter)
                } else {
                    if ( info.totalcount ) showFormModalWindow('Request error', 'Receiving data error. Please try later.');
		    else {
			$('.similarListing-container').hide();
		    }
                }
            }
        });
    });

    //$('#props-load-more-but').trigger('click');
});


$('.dropdown').click(function () {
    if ($(this).hasClass('active')) {
        closeDropDown()

    } else {
        closeDropDown()
        $(this).toggleClass('active')
    }
})

function closeFilterDropdown() {
    $('.dropdown').removeClass('active')

}

$(document).click(function (e) {
    //close filter dropdown  when click outside
    let filterDropdown = $(".dropdown");
    if (!filterDropdown.is(e.target) && filterDropdown.has(e.target).length === 0) {
        closeFilterDropdown()
    }
    let city = $(".city-drop");
    let inputField = $(".search-filter");
    if (!city.is(e.target) && city.has(e.target).length === 0 && !inputField.is(e.target) && inputField.has(e.target).length === 0) {
        closeCityDrop()
    }
})

function closeFilterDrop(e) {
    $('body').removeClass('mobile-filter-fixed')

    $('.filters-real-estate li').removeClass('active')
}

$('.filters-real-estate li>span').click(function () {
    if ($(this).parent().hasClass('active')) {
        closeFilterDrop();
    } else {
        closeFilterDrop();
        $('body').addClass('mobile-filter-fixed')

        $(this).parent().addClass('active')
    }
})
$('.filterData').click(function (e) {
    if (screen.width > 576 && !$(this).parent().hasClass('more-line')) {
        if ($(this).parent().hasClass('active')) {
            closeFilterDrop();
        } else {
            if (!e.target.classList.contains('reset')) {
                closeFilterDrop();
                $('body').addClass('mobile-filter-fixed')
                $(this).parent().addClass('active')

            }

        }
    }
})

$(document).click(function (e) {
    let search = $('.filters-real-estate li');
    if (!search.is(e.target) && search.has(e.target).length === 0) {
        closeFilterDrop(e);
    }
})

function resetFilterObj() {
    let obj = filter.getValue();
    for (let key in obj) {
        if (key == "city" ||
            key == "state" ||
            key == "street" ||
            key == "type" ||
            key == "PostalCode" ||
            key == "address" ||
            key == "number") {
        } else {
            filter.setValue(key, "", false);
        }
    }
}
function clearAllSelect() {
    $('.select-from').val("");
    $('.select-to').val("");
}
function resetFilters() {
    resetFilterObj();
    clearAllSelect();
    $('.filtered').removeClass('filtered');
    $('.active-element').removeClass('active-element');
    $('.drop-input').val("");
    makeAnyElementsActive();

}

$('.reset-filters').click(function () {
    resetFilters();
})

function clearFilterObj() {
    let obj = filter.getValue();
    for (let key in obj) {
        filter.setValue(key, "", false);
    }
}

function setCountOfResults(isInit = false) {
    if (isInit) {
        document.querySelector('.results-count').innerHTML = '';
    }
    clearTimeout(timeOutForCountRequest);
    timeOutForCountRequest = setTimeout(() => {
        getObjectsCount();
    }, 1500)
}

$('.more-close').click(function () {
    $('body').removeClass('mobile-filter-fixed')
    $(this).parents('.more').removeClass('active')
})

function closeDropDown() {
    $('.dropdown').removeClass('active')
}

//new select
function processingChooseMinValueSelect(element, value) {
    let minField = element.parentNode.querySelector('.select-from');
    let maxField = element.parentNode.querySelector('.select-to');

    let nameField = element.getAttribute('data-select-value');
    let namemaxField = maxField.getAttribute('data-select-value');
    if (element.value == "") {
        return
    }
    if (maxField.value == "") {
        saveValue(value, nameField)
        return;
    }
    if (maxField.value >= minField.value) {
        saveValue(value, nameField)
    } else {
        saveValue(value, nameField)
        saveValue('', namemaxField)
        maxField.value = '';
    }

    return;
}

function processingChooseMaxValueSelect(element, value) {
    let minField = element.parentNode.querySelector('.select-from');
    let maxField = element.parentNode.querySelector('.select-to');

    let nameField = element.getAttribute('data-select-value');
    let nameminField = minField.getAttribute('data-select-value');
    if (element.value == "") {
        return
    }
    if (minField.value == "") {
        saveValue(value, nameField)
        return;
    }
    if (maxField.value >= minField.value) {
        saveValue(value, nameField)
    } else {
        saveValue(value, nameField)
        saveValue('', nameminField)
        minField.value = '';
    }

    return;
}

function clickedOnSelect(el) {
    let elementData = el.value;
    let haveCircleElements = el.parentNode.parentNode.querySelector('.circle-fields')
    if (el.classList.contains('select-from')) {
        processingChooseMinValueSelect(el, elementData)
    }
    if (el.classList.contains('select-to')) {
        processingChooseMaxValueSelect(el, elementData)
    }
    if (haveCircleElements) {
        clearAllActiveElementInDropList(haveCircleElements)
    }

}

function searchSelectByDataValue(parent, val) {
    let searchedBlocks = document.querySelector(`[data-select-value="${val}"]`);
    return searchedBlocks;
}

function setToSelectValue(datavalue, value) {
    let searchedBlock = document.querySelector(`[data-select-value="${datavalue}"]`);
    if (searchedBlock) {
        searchedBlock.value = value;
    }

}


let inputTimeOut;

function getDataForAddressInput() {

}

function hideClearBtn() {
    document.querySelector('.clear-city-btn').classList.remove('active')

}

function showClearBtn() {
    document.querySelector('.clear-city-btn').classList.add('active')
}

function checkLength(value) {
    if (value.length > 2) {
        return true;
    }
    return false
}

document.querySelector('.search-filter').addEventListener('input', function (e) {
    clearTimeout(inputTimeOut)
    if (e.target.value.length == 0) {
        hideClearBtn()
    } else {
        showClearBtn();
    }

    inputTimeOut = setTimeout(() => {
        checkAddressInput();
        getSearchObjects();
    }, 1000)
})


function showCityDrop() {
    document.querySelector('.city-drop').classList.add('active')
}

function closeCityDrop() {
    document.querySelector('.city-drop').classList.remove('active')
}

function displayNotFoundMessage() {
    let input = document.querySelector('.search-filter');
    let str = `We did not find listings for ${input.value}`
    showErrorNotFound(str)
    showDefaultCities();
}

function showEmptyCityDrop() {
    showDefaultCities();
    showCityDrop()
}

function showErrorNotFound(str) {
    let pstr = `<p class="error-notfound active">${str}</p>`
    document.querySelector('.content-div-city').textContent = '';
    document.querySelector('.content-div-city').insertAdjacentHTML('afterbegin', pstr);
}

function hideErrorNotFound() {
    let cont = document.querySelector('.content-div-city .error-notfound');
    if (cont) {
        cont.classList.remove('active');

    }
}


function showDefaultCities() {
    document.querySelector('.default-cities').classList.add('active')
}

function hideDefaultCities() {
    document.querySelector('.default-cities').classList.remove('active')
}

function clearCityList() {
    document.querySelector('.content-div-city').textContent = '';

}

function makeCityList(data) {
    clearCityList();
    let str = ""
    data.forEach(el => {
        str += `<p class="city-row" data-name="${el.name}" data-city="${el.city}" data-direct="${el.type}" data-link="${el.link}" data-zip="${el.zip}">${el.name} </p>`
    })
    document.querySelector('.content-div-city').insertAdjacentHTML('afterbegin', str);
    hideDefaultCities();
    showCityDrop()
}

function formatCity(value) {

    let regexp = /^[a-zA-Z\s]*$/;
    if (regexp.test(value)) {
        return true;
    } else {
        return false;
    }
}

function formatZip(value) {
    let regexp = /^[0-9]+$/;
    if (regexp.test(value)) {
        return true;
    } else {
        return false;
    }
}

function isDigit(value) {
    let regexp = /^[0-9]+$/;
    if (regexp.test(value)) {
        return true;
    } else {
        return false;
    }
}

function roundTostep(number, step) {
    let num = Math.ceil(number / step) * step;
    if (num == 0) {
        num = step
    }
    return num;
}

$('.clear-city-btn').click(function (e) {
    $('.search-filter').val("");
    filter.setValue('PostalCode', "", false)
    filter.setValue('state', "", false)
    filter.setValue('type', "", false)
    filter.setValue('street', "", false)
    filter.setValue('city', "", false)
    filter.setValue('number', "", false)
    filter.setValue('unit', "", false)
})
function resetAddressField() {
    filter.setValue('PostalCode',"", false)
    filter.setValue('state', "", false)
    filter.setValue('type', "", false)
    filter.setValue('street', "", false)
    filter.setValue('city', "", false)
    filter.setValue('number', "", false)
    filter.setValue('unit', "", false)
}
function checkAddressInput() {
    resetAddressField();
    let initValue = $('.search-filter').val().toLowerCase().trim();
    if (isDigit(initValue)) {
        filter.setValue('PostalCode', initValue, false)
        filter.setValue('state', "", false)
        filter.setValue('type', "", false)
        filter.setValue('street', "", false)
        filter.setValue('city', "", false)
        filter.setValue('number', "", false)
        filter.setValue('unit', "", false)
        return;
    }
    else {
        if (!(initValue.indexOf('las vegas') == -1) && initValue.length < 15) {
            filter.setValue('PostalCode', "", false)
            filter.setValue('state', "", false)
            filter.setValue('type', "", false)
            filter.setValue('street', "", false)
            filter.setValue('city', "Las Vegas", false)
            filter.setValue('number', "", false)
            filter.setValue('unit', "", false)

            return;
        }
        if (!(initValue.indexOf('henderson') == -1) && initValue.length < 15) {
            filter.setValue('PostalCode', "", false)
            filter.setValue('state', "", false)
            filter.setValue('type', "", false)
            filter.setValue('street', "", false)
            filter.setValue('city', 'Henderson', false);
            filter.setValue('number', "", false)
            filter.setValue('unit', "", false)
            return;
        }
        let obj = parseAddress.parseLocation(initValue) || {};
        filter.setValue('PostalCode', obj.zip || "", false)
        filter.setValue('state', obj.state || "", false)
        filter.setValue('type', obj.type || "", false)
        filter.setValue('city', obj.city || "", false)
        filter.setValue('number', obj.number || "", false)
        let unit = getUnion(obj.street);
        if(unit){
            filter.setValue('unit', unit, false)
            let street = obj.street.replace(unit, "");
             street = street.replace("  ", " ");
             // if street contains type - split it
            if(street.length > 10){
                let parceStreet = parseAddress.parseLocation(street);
                if(parceStreet){
                    filter.setValue('type', parceStreet.type || "", false)
                    filter.setValue('street', parceStreet.street || "", false)
                }
            }else{
                filter.setValue('street', street.trim(), false)

            }


        }else{
            filter.setValue('unit',"", false)
            if(obj.street) {obj.street = obj.street.trim()}

                filter.setValue('street', obj.street || "", false)

        }
    }
    // console.log(parseAddress.parseLocation(initValue));
}
function setSoldBtnActive(){
    let btn = document.querySelector('.sold_alr');
    let btn_sale = document.querySelector('.for_sale_btn');
    if(btn){
        btn.classList.add('active')
        if(btn_sale){
            btn_sale.classList.remove('active')
        }
    }
}
function setSoldBtnNotActive(){
    let btn = document.querySelector('.sold_alr');
    let btn_sale = document.querySelector('.for_sale_btn');
    if(btn){
        btn.classList.remove('active')
        if(btn_sale){
            btn_sale.classList.add('active')
        }
    }
}
$(".sold_patentblock:not('.custom_sold') .for_sale_btn").click(function (e) {
    e.preventDefault()
    setSoldBtnNotActive()
    filter.setValue('sold', '')
    makeRequest(true)
})
$(".sold_patentblock:not('.custom_sold') .sold_alr").click(function (e) {
    e.preventDefault()
    setSoldBtnActive()
    filter.setValue('sold', 'sold')
    makeRequest(true)
})
$('.search-filter').focus(function (e) {
    closeFilterDrop();
    $('.city-drop').addClass('active')
})
