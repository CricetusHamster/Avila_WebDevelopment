let counter = 0;

function subtract(){
    counter--;
    document.getElementById("number").innerHTML = counter;
}

function add(){
    counter++;
    document.getElementById("number").innerHTML = counter;
    if(counter == 10){
        window.alert("wowzers");
    }
}