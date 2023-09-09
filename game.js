


function game () {
    
    Rand_Tableau(images);
    generateImg();
    
    var imgs = document.getElementsByTagName('img')
    var imageAll = document.querySelectorAll('img')
    console.log(imgs)
    for ( var iterator = 0; iterator < imgs.length;iterator++) {
        imgs[iterator].src2 = Tab[iterator]
      
    }
    
   
    
    var tableauSrc = [];
    var tableauId = [];
    

    
    imageAll.forEach(element => {
    
        element.onclick = function () {
    
            element.src = element.src2
        
           tableauSrc.push(element.src2);
           tableauId.push(element.id);
        
            
           if (tableauSrc.length === 2) {
    
            if (tableauSrc[0]==tableauSrc[1]) {
              
            

               var index = images[level].indexOf(tableauSrc[0]);
               var index2 = images[level].indexOf(tableauSrc[1]);
               console.log(images[level])
               console.log(images[level].splice(index2,1))
               images[level].splice(index,1)
               images[level].splice(index2,1)
               
                tableauSrc = [];
                tableauId = [];
                
            }
    
            if(images[level].length <= 1) {
                setTimeout(() => {
                alert("bien jouer");
                level++;
                if (level < MAXLEVEL) {
                    
                game();}

                if (level == MAXLEVEL) {
                    // mettre boutton rejouer
                    div.innerHTML="";
                   var p = document.createElement('p');
                   var button = document.createElement('button');
                   p.innerHTML="Bravo vous avez gagner"
                   button.innerHTML="Rejouer";
                   button.setAttribute("onclick","window.location.reload()");
                   win.appendChild(p);
                   win.appendChild(button);
                }},1000)
            }


            
            else {
                
    
                imageAll.forEach(autre => {
                    
                    autre.style.pointerEvents="none"
                    setTimeout(() => {
                       
                        autre.style.pointerEvents="auto"
                      }, 1000);
                    
                    })
    
                        setTimeout(function(){
                        tableauId.forEach(function(element) {
                        document.getElementById(element).src = "image/unnamed.jpg";
                        tableauSrc = [];
                        tableauId = [];
                        })
                    },1000)
                } } } }
    
    
       
        
    
    
           
    );}

