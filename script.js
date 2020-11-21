document.getElementById("title").innerHTML = localStorage["title"];
document.getElementById("content").innerHTML = localStorage["content"];

setInterval(function() {
  localStorage["title"] = document.getElementById("title").innerHTML;
  localStorage["content"] = document.getElementById("content").innerHTML;
}, 1000);