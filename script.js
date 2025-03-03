// let elem1 = document.querySelector("#elem1");
//only for one line
// let elem1_image = document.querySelector("#elem1 img");

// elem1.addEventListener("mouseenter",function(dets){
//     elem1_image.style.transform = 'scale(1)';
   
// })
// elem1.addEventListener('mousemove',function(dets){
//     elem1_image.style.left = dets.x+'px'
//     // elem1_image.style.top = dets.y+'px'
// })
// elem1.addEventListener("mouseleave",function(){
//         elem1_image.style.transform = 'scale(0)'
// })

// onther way for all lines

let elem = document.querySelectorAll(".elem");

let elemImage = document.querySelectorAll(".elem img");
    
elem.forEach(function(val) {
    // console.log(val.childNodes[3]); from this we access images
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.transform = 'scale(1)'
    });
    val.addEventListener("mouseleave",function(){
        
        val.childNodes[3].style.transform = "scale(0)"
    }); 

    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left = dets.x+"px"
    })

});
