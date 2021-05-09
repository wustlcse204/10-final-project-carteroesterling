var movies = [];
function Film(id, name, pic, date, summary){
    this.id = id;
    this.name = name;
    this.pic = pic;
    this.date = date;
    this.summary = summary;
}

//SEARCH

function search(){

}

function reset(){
    movies = [];
    var temp = document.getElementById("container");
    while(temp.hasChildNodes()){
        temp.removeChild(temp.lastChild);
    }
}

// LIST

var buckets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function prep(watchlist){
    for(var i = 0; i < buckets.length; i++){
        watchlist[i] = [];
        watchlist[i].push(buckets[i]);
    }
}

function update(){

}

function add(){

}

function remove(){

}

function wipe(){
    var temp = document.getElementById("watchlist");
    while(temp.hasChildNodes()){
        temp.removeChild(temp.lastChild);
    }
}