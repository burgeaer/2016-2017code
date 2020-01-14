
window.onload = function () {

    var target = document.querySelector("#target");

   // var  p = document.getElementsByTagName("p");

  //  var p1 = target.getElementsByTagName("p");


    //console.log(p);
    //console.log(p1)

    //var pet = "dog";
  //  let pet = new Object();
  //  pet.type = "dog";
  //  pet.breed = "poodle";
  //  pet.name = "Scruffy";

   // let pet2 = pet;

   // let str = "Type: " + pet.type + "<br>";
   // str += "Breed: " + pet.breed + "<br>";
  //  str += "Name: " + pet.name + "<br>";

   // target.innerHTML = str;

//________________________________________________________________




    // same as pet = new Object();

   // All Objects are Associative Arrays
    function getLifeSpan(n) {
        return n*2;
    }
    var birds = {
        type: ["Condor", "Eagle, Dove"],
        wingspan: {
            "c":8,
            "e":12,
            "d":
                {"t":12, "v":34}},
        lifespan: function (n) {
            return n*2;
        }
    };
    var x = function (n) {
        return n*2;
    }

    x();


    var str = "Type: " + birds[1] + "<br>";
    str += "WingSpan: " + birds.wingspan["c"] + " feet <br>";
    str += "LifeSpan: " + birds.lifespan(3) + "years";


    target.innerHTML = str;

}

var points = [159, 170, 199, 201];
var x = 0;
while(x <= points.length){
    if(x % 2 == 0)
        document.writeln(points[x] + "<br/>");

    ++x;
}