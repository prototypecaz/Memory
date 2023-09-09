var levels = [6,8,10,12]
var images = [["image/picture"+1+".png","image/picture"+2+".png","image/picture"+3+".png","image/picture"+1+".png","image/picture"+2+".png","image/picture"+3+".png"],
              ["image/picture"+1+".png","image/picture"+2+".png","image/picture"+3+".png","image/picture"+4+".png","image/picture"+1+".png","image/picture"+2+".png","image/picture"+3+".png","image/picture"+4+".png"],
              ["image/picture"+1+".png","image/picture"+2+".png","image/picture"+3+".png","image/picture"+4+".png","image/picture"+5+".png","image/picture"+1+".png","image/picture"+2+".png","image/picture"+3+".png","image/picture"+4+".png","image/picture"+5+".png"],
              ["image/picture"+1+".png","image/picture"+2+".png","image/picture"+3+".png","image/picture"+4+".png","image/picture"+5+".png","image/picture"+6+".png","image/picture"+1+".png","image/picture"+2+".png","image/picture"+3+".png","image/picture"+4+".png","image/picture"+5+".png","image/picture"+6+".png"]
                        ]
var level = 0
const MAXLEVEL = levels.length
var img;
var imgs;
var div = document.querySelector('#table');
var Tab;
var header = document.querySelector('header')
var win = document.querySelector('#win');
var h2 = document.createElement('h2');
h2.innerHTML="Jeu du Memory";
h2.style.textAlign="center";
h2.style.fontSize="70px";

header.appendChild(h2)
