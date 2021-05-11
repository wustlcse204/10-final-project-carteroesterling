function TheList(){
    this.ranks = new Array(6);
    setUp(this.ranks);
}

function Movie(id, title, poster_path, popularity, overview){
    this.id = id;
    this.title = title;
    this.poster_path = poster_path;
    this.popularity = popularity;
    this.overview = overview;
}
var results = [];
function reset(){
    results = [];
    var container = document.getElementById("container");
    var x = container.childElementCount;
    for(var i = 0; i < x; i++){
        container.removeChild(container.lastChild);
    }
}
const rankNames = ["S", "A", "B", "C", "D", "F"];
var live = new TheList();
function lookUp(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            reset();
            var val = JSON.parse(this.responseText).results;
            for (var i = 0; i < val.length; i++) 
            {
                results.push(new Movie(val[i].id, val[i].title, val[i].poster_path, val[i].runtime, val[i].popularity, val[i].overview));
            }
            var container = document.getElementById("container");
            for (var i = 0; i < results.length; i++) 
            {
                var rect = document.createElement("div");
                var pic = document.createElement("div");
                var img = document.createElement("img");
                var info = document.createElement("div");
                var name = document.createElement("h2");
                var summary = document.createElement("p");
                var score = document.createElement("p");
                rect.className = "rect";
                pic.className = "pic";
                img.src = "https://image.tmdb.org/t/p/w185" + val[i].poster_path;
                img.id = i;
                img.className = "poster";
                info.className="info";
                name.innerHTML = val[i].title;
                summary.className = "overview";
                if(val[i].overview != null){
                    summary.innerHTML = val[i].overview;
                }
                else{
                    summary.innerHTML = "";
                }
                score.innerHTML = "TMDB Popularity Score: " + val[i].popularity;
                var sButton = document.createElement("button");
                sButton.type = "submit";
                sButton.id = i;
                sButton.className = "btn";
                sButton.innerHTML = "S-Tier";
                sButton.addEventListener("click", function(){
                    add(0);
                });
                var aButton = document.createElement("button");
                aButton.type = "submit";
                aButton.id = i;
                aButton.className = "btn";
                aButton.innerHTML = "A-Tier";
                aButton.addEventListener("click", function(){
                    add(1);
                });
                var bButton = document.createElement("button");
                bButton.type = "submit";
                bButton.id = i;
                bButton.className = "btn";
                bButton.innerHTML = "B-Tier";
                bButton.addEventListener("click", function(){
                    add(2);
                });                
                var cButton = document.createElement("button");
                cButton.type = "submit";
                cButton.id = i;
                cButton.className = "btn";
                cButton.innerHTML = "C-Tier";
                cButton.addEventListener("click", function(){
                    add(3);
                });                
                var dButton = document.createElement("button");
                dButton.type = "submit";
                dButton.id = i;
                dButton.className = "btn";
                dButton.innerHTML = "D-tier";
                dButton.addEventListener("click", function(){
                    add(4);
                });                
                var fButton = document.createElement("button");
                fButton.type = "submit";
                fButton.id = i;
                fButton.className = "btn";
                fButton.innerHTML = "F-Tier";
                fButton.addEventListener("click", function(){
                    add(5);
                });
                pic.appendChild(img);
                info.appendChild(name);
                info.appendChild(summary);
                info.appendChild(score);
                info.appendChild(sButton);
                info.appendChild(aButton);
                info.appendChild(bButton);
                info.appendChild(cButton);
                info.appendChild(dButton);
                info.appendChild(fButton);
                rect.appendChild(pic);
                rect.appendChild(info);
                container.appendChild(rect);
            }
        }
    };
    xhttp.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=9baf1c82992144e3ef50cbeb509ef19f&query="+event.target.value, true);
    xhttp.send();
}

function setUp(ranks){
    for(var i = 0; i < rankNames.length; i++)
    {
        ranks[i] = [];
        ranks[i].push(rankNames[i]);
    }
}

function wipe(){
    var ul = document.getElementById("tierList");
    var x = ul.childElementCount;
    for(var i = 0; i < x; i++){
        ul.removeChild(ul.lastChild);
    }
}

function add(rank){    
    const title = results[event.target.id].title;
    //const moviePoster = results[event.target.id].poster_path;
    const index = rank;
    if (live.ranks[0].includes(title) === false
    && live.ranks[1].includes(title) === false
    && live.ranks[2].includes(title) === false
    && live.ranks[3].includes(title) === false
    && live.ranks[4].includes(title) === false
    && live.ranks[5].includes(title) === false){
        live.ranks[index].push(title);
    }
    else if (live.ranks[0].includes(title) === true && index != 0
    ){
        live.ranks[0].splice(live.ranks[0].indexOf(title,1));
        live.ranks[index].push(title);
    }
    else if (live.ranks[1].includes(title) === true && index != 1
    ){
        live.ranks[1].splice(live.ranks[0].indexOf(title,1));
        live.ranks[index].push(title);
    }
    else if (live.ranks[2].includes(title) === true && index != 2
    ){
        live.ranks[2].splice(live.ranks[0].indexOf(title,1));
        live.ranks[index].push(title);
    }
    else if (live.ranks[3].includes(title) === true && index != 3
    ){
        live.ranks[3].splice(live.ranks[0].indexOf(title,1));
        live.ranks[index].push(title);
    }
    else if (live.ranks[4].includes(title) === true && index != 4
    ){
        live.ranks[4].splice(live.ranks[0].indexOf(title,1));
        live.ranks[index].push(title);
    }
    else if (live.ranks[5].includes(title) === true && index != 5
    ){
        live.ranks[5].splice(live.ranks[0].indexOf(title,1));
        live.ranks[index].push(title);
    }
    wipe();
    load();
}

function load()
{
    const temp = live.ranks;
    for(var i = 0; i < temp.length; i++){
        for(var j = 0; j < temp[i].length; j++){
            var tempList = document.createElement("li");
            tempList.innerHTML = temp[i][j];
            /*lines 198 and 201 were learned from Bootstrap documentation: https://getbootstrap.com/docs/5.0/components/list-group/ */
            if(j != 0){
                tempList.className = "list-group-item d-flex justify-content-between align-items-center";
            }
            else{
                tempList.className = "list-group-item list-group-item-info d-flex justify-content-between align-items-center";
            }
            document.getElementById("tierList").appendChild(tempList);
        }
    }
}