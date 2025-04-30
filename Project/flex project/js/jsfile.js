nav = document.querySelector('#nav')
search =  document.querySelector('.search-col')

function hideShow(){
if(search.style.display == "none"){
    nav.style.display = "block"
    // nav.style.display = "inline"
    search.style.display = "block"   
}
else{
    search.style.display = "none"
     nav.style.display = "none"
}
}     
row = document.querySelector('.row-first')
 agrow =    document.querySelector('#agrow')
 moon =    document.querySelector('#moon')
 a_tag =    document.querySelector('.a_tag')
 about =    document.querySelector('.about')
 services =    document.querySelector('.services')
 pages =    document.querySelector('.pages')
 contact =    document.querySelector('.Contact')
 arrow = document.querySelector(".button")
 num1 = document.querySelector("#num1")
 num2 = document.querySelector("#num2")
 
function scroll(){
    if(document.documentElement.scrollTop > 150)
    {
        row.style.background  = "white"
        row.style.transition  = "1s" 
          /* transition: 1s; */
        agrow.style.color = "black"
        moon.style.color ="black"
        about.style.color = "black"
        services.style.color = "black"
        pages.style.color = "black"
        contact.style.color = "black"
        arrow.style.display= "block"
    }
    else{
        row.style.background = "transparent"
        // row.style.transition  = "1s" 
        agrow.style.color = "white"
        moon.style.color ="white"
        about.style.color = "white"
        services.style.color = "white"
        pages.style.color = "white"
        contact.style.color = "white"
        arrow.style.display= "none"    
    }
}

    
    //  col1 = document.querySelector("#col-first")
    //  col2 = document.querySelector(".col-second")
    //  col.style.transform = "translate( 0%, 0%)"
    // col1.style.transform = "translate( -140%, 0%)"
    //  dot1 = document.querySelector(".icon-one")

    //  function kiya(){
    //      col1.style.transform = "translate( -140%, 0%)"
    //      col2.style.transform = "translate( 0%, 0%)"
    //  }





x=0;
y=0;
function count(a,b){
    if(x<5233){
        a.innerHTML = ++x
    }
    if(y<=2233){
        b.innerHTML = ++y
    }
}
setInterval(function(){count(num1,num2)})



