var imageindex=document.querySelectorAll(".slideshow img");
var dotindex=document.querySelectorAll(".img-selector input")
var dotcount=0;
var slideindex=0;
function currentslide(n){
    showindex(slideindex=n);
}
showindex(0);
function showindex(n){
    for(var i=0;i<imageindex.length;i++){
        imageindex[i].style.display="none";
    }
    imageindex[n].style.display="block";
    slideindex=n;
}
autoslideshow();
function autoslideshow(){
    for(var i=0;i<imageindex.length;i++){
        imageindex[i].style.display="none";
    }
    if(slideindex>imageindex.length-1){
        slideindex=0;
        dotcount=0;
    }
    imageindex[slideindex].style.display="block";
    dotindex[dotcount].click();
    slideindex++;
    dotcount++;
    setTimeout(autoslideshow,5000);
}


var servicechoice=document.getElementById("List-of-services");
var typesofservices=document.getElementsByClassName("pricing");
var roomcapacity=document.getElementById("size-of-room");
for(var i=0;i<typesofservices.length;i++){
    typesofservices[i].style.display="none";
}
servicechoice.addEventListener("click",function(){
    if(servicechoice.value==="Cockroaches-Treatment"){
        roomcapacity.addEventListener("click",function(){
            if(roomcapacity.value==="1BHK"){
                for(var i=0;i<typesofservices.length;i++){
                    typesofservices[i].style.display="none";
                }
                typesofservices[0].style.display="block";
                typesofservices[1].style.display="block";
            }
            if(roomcapacity.value==="2BHK"){
                for(var i=0;i<typesofservices.length;i++){
                    typesofservices[i].style.display="none";
                }
                typesofservices[2].style.display="block";
                typesofservices[3].style.display="block";
            }
})}})

