var gData;
var url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=processData&tags=music2&tagmode=any&format=json";
window.onload = function () {
    var button = document.querySelector("#button");
    button.addEventListener("click", loadData, false);
}


function processData(data) {
    gData = data;
    console.table(data);
    var result = document.querySelector("#result");
    for (var i = 0; i < gData.items.length ; i++) {

        var img = document.createElement("img");
        img.setAttribute("src", gData.items[i].media.m);
        result.appendChild(img);

        var a = document.createElement("a");
        a.setAttribute("href", gData.items[i].media.m);
        a.setAttribute("target", "_blank");
        a.appendChild(img);

        result.appendChild(a);
    }
}
function loadData() {
   var script = document.createElement("script");
   script.setAttribute("src", url);

   var head = document.head;
   head.appendChild(script);
}