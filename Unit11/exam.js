
var breed= ['Burmese', 'Persian', 'Ragdoll', 'Siamese', 'Siberian'];
var cat = new Object({
    name: 'Bucky',
    age: '7',
    showCatInfo: function() {
        alert(this.name + 'is' + this.age + breed[3] + '<p id="details"></p>')
    }});

cat.showCatInfo(2);
