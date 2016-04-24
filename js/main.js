/**
 * Created by anton on 23.04.16.
 */

var focus = null;

function setOnClick(node){
    console.log(node);
    console.log("node ", node.children, " with tagName is ", node.tagName);
    console.log(node.length);
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

    setInterval(function() {
        var content = document.getElementsByClassName("content");
        if (focus != null) {
            console.log("focus is ", focus.className);
            content.innerHTML = focus.className;
        } else {
            console.log("focus is null");
        }
    }, 1000)
};
/*document.onload = function(){
    console.log("test");

};*/

document.onload = function(){
    console.log("document is loaded");
};