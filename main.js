function getData(cb) {
 
    var xhr = new XMLHttpRequest();
    //var data;

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    xhr.send();

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
   
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);

//setTimeout(function() {
    //console.log(data);
//}, 500);