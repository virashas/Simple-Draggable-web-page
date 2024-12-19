
const sliderTab = document.querySelector("#slider-tab")

const sliderList = sliderTab.querySelector("#slider-list")

const slideLeftBtn = sliderTab.querySelector("#slider-tab-left-btn")
const slideRightBtn = sliderTab.querySelector("#slider-tab-right-btn")
 

sliderList.querySelectorAll(".slider-item").forEach(function(el){
    el.addEventListener("click", function(e){
        e.preventDefault();
        sliderList.querySelector(".slider-item.active").classList.remove("active");
        el.classList.add("active")
    })
})

slideLeftBtn.addEventListener("click", function(e){
    e.preventDefault();
 
    var currentSliderOffset = sliderList.scrollLeft;
  
    var newSlideOffset = currentSliderOffset - 100;
 
    if(newSlideOffset < 0)
        newSlideOffset = 0
    
     sliderList.scrollLeft = newSlideOffset;
    })
     
    
    slideRightBtn.addEventListener("click", function(e){
        e.preventDefault();
      
        var sliderWidth = sliderList.scrollWidth;
      
        var currentSliderOffset = sliderList.scrollLeft;
     
        var newSlideOffset = currentSliderOffset + 100;

        if(newSlideOffset > sliderWidth)
            newSlideOffset = sliderWidth;
    
        sliderList.scrollLeft = newSlideOffset;
    })
     
 
  
    var dragSlider = false;
    var dragStartX = 0;
    var dragEndX = 0;
   
sliderList.addEventListener("mousedown", function(e){
    e.preventDefault;
  
    dragSlider = true;
   
    dragStartX = e.clientX;
})
 

window.addEventListener("mousemove", function(e){
    e.preventDefault;
   
    if(!dragSlider)
        return;
    
    dragEndX = e.clientX;
     
     var dragDiff = dragEndX - dragStartX;
 
  
     sliderList.scrollLeft = sliderList.scrollLeft - dragDiff;
 })
  

 window.addEventListener("mouseup", function(e){
   
     if(!dragSlider)
         return;
  
    
     dragSlider = false;
     dragStartX = 0;
     dragEndX = 0;
 })
