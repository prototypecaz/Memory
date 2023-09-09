
function generateImg () {
    div.innerHTML="";
    
    for(var iterator = 0; iterator < levels[level];iterator++){
    
            img = document.createElement('img');
            img.className = "image"
            img.id = "carte"+iterator;
            img.src="image/unnamed.jpg";
            img.style.marginLeft="20px";
            
           
            div.appendChild(img)
    
    }}