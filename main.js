const baseURL =  "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
 
    var xhr = new XMLHttpRequest();
    //var data;

    //function setData(jsonData) {
    //    data = jsonData;
        //console.log(data);
    //}

    xhr.onreadystatechange = function() {
        //console.log(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            cb(data = JSON.parse(this.responseText));
            //document.getElementById("data").innerHTML = this.responseText;
            //setData(JSON.parse(this.responseText));
            //console.log(JSON.parse(this.responseText));
            //data = this.responseText;
            //console.log(data);
        }
    };   

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}


//function printDataToConsole(data) {
    //console.log(data);
//}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var tableRows = [];
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow =[];

            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`)
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
            //Object.keys(item).forEach(function(key) {
                //console.log(key);
            //});
            //el.innerHTML += "<p>" + item.name + "</p>";
        });
        
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`; 
    });
}

//getData(printDataToConsole);

//setTimeout(function() {
    //console.log(data);
//}, 500);