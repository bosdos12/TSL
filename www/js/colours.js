$(document).ready(function(){
  
 //circle selected by default 
 $("#default").addClass("selected");
    
  $(".circle").click(function(){
    $(".circle").removeClass("selected");
    $(this).addClass("selected");
      
    chosen_colour = $(this).css("backgroundColor");
    alert(chosen_colour);
    if(chosen_colour == "rgb(0, 128, 0)"){
      $("#colour_gesture").attr("src", "../../images/gestures/colours/green_1.jpg")
    }
    else if(chosen_colour == "rgb(255, 0, 0)"){
      $("#colour_gesture").attr("src", "../../images/gestures/colours/red_1.jpg")
    }
  });
    
    

});