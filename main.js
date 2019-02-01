'use strict'

var divs = $("div > div");

for(var i = 0; i < divs.length; i+=3) {
  divs.slice(i, i+3).wrapAll("<div class='new'></div>");
}