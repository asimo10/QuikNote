var title;
var content;
var text;

setInterval(function() {
    title = document.getElementById("title").innerHTML;
    content = document.getElementById("content").innerHTML;
}, 10);

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function save() {
    var text = '<!DOCTYPE html><html> <head> <title>FlashNote | About</title>  </head> <style>body{color:#333;font-weight:100;max-width:50em;margin:0 auto}hr{display:block;height:1px;border:0;border-top:1px solid #b7b7b7;margin:1em 0;padding:0}a{text-decoration:none}#title{font-family:"Montserrat";src:url(Montserrat-Medium.woff2) format(woff2),url(Montserrat-Medium.woff) format(woff);font-weight:600;font-size:48px;padding-top:30px}#content{font-family:"Montserrat";src:url(Montserrat-Medium.woff2) format(woff2),url(Montserrat-Medium.woff) format(woff);font-size:25px;font-weight:500;padding-top:10px}hr[space]{border-top:0 solid #fff}</style> <body> <hr space> <div id="title" placeholder="Title">' + title + '</div> <div id="content" placeholder="content">' + content + '</div> </body></html>';
    download("QuikNote.html", text);
}

document.onkeyup = function(){
    if (content == "") {
        document.getElementById("content").className = "tab";
    }
    else {
        document.getElementById("content").className = "tabfocused";
    }
}