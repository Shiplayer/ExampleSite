/**
 * Created by anton on 23.04.16.
 */

var focus = null;
var count = 0;

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

function setAttribute(node){
    console.log(node);
    for(var i = 0; i < node.childElementCount; i++) {
        if(node.children[i].childElementCount > 0) {
            setAttribute(node.children[i]);
        } else {
            node.children[i].setAttribute("tabindex", (++count).toString());
            node.children[i].onkeypress = function (e) {
                console.log(e.keyCode, " in ", this.className);
                console.log(this.height);
                this.style.height += 1 + "px";
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
    setAttribute(body[0]);

    //setInterval(function() {
    //}, 1000);

    var menu = document.getElementsByClassName("menu")[0];
    menu.onkeydown = function(e){
        console.log(e.keyCode);
    };

    document.onclick = function(){
        var content = document.getElementsByClassName("content")[0];
        if (focus != null) {
            content.innerHTML = focus.className;
            console.log("focus is ", focus.className);
            focus.focus();

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