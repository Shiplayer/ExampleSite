/**
 * Created by anton on 23.04.16.
 */

var focus = null;

function setOnClick(node){
    for (var i = 0; i < node.childElementCount; i++) {
        console.log("i = ", i);
        if (node.children[i].childElementCount > 0)
            setOnClick(node.children[i]);
        else {
            console.log("set onclick");
            node.children[i].onclick = function () {
                console.log("clicked");
                focus = this;
            }
        }
    }
}

window.onload = function(){
    console.log("window is loaded");
    var body = document.getElementsByTagName("body");

    var divs = document.getElementsByTagName("div");
    console.log(divs.length);

    setOnClick(body[0]);

    //setInterval(function() {
    //}, 1000);

    document.onclick = function(){
        var content = document.getElementsByClassName("content")[0];
        if (focus != null) {
            content.innerHTML = focus.className;
            console.log("focus is ", focus.className);

        } else {
            console.log("focus is null");
        }
    }
};

/*document.onload = function(){
    console.log("test");

};*/

document.onload = function(){
    console.log("document is loaded");
};