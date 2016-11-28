$(document).ready(function(){
   
  $(".circle").click(function(){
    $(".circle").removeClass("selected");
    $(this).addClass("selected");
      
    chosen_colour = $(this).css("backgroundColor");
    setInterval(function(){
      //While the chosen colour is green show gestures for green
      if(chosen_colour == "rgb(0, 128, 0)"){
        $("#colour_gesture").attr("src", "../../images/gestures/colours/green_1.jpg")
        setTimeout(function(){
          if(chosen_colour == "rgb(0, 128, 0)"){
            $("#colour_gesture").attr("src", "../../images/gestures/colours/green_2.jpg") 
          }
        }, 1000) 
        }
        
      //While the chosen colour is red show gestures for green
      else if(chosen_colour == "rgb(255, 0, 0)"){
        $("#colour_gesture").attr("src", "../../images/gestures/colours/red_1.jpg")
        setTimeout(function(){
          if(chosen_colour == "rgb(255, 0, 0)"){
            $("#colour_gesture").attr("src", "../../images/gestures/colours/red_2.jpg") 
          }
        }, 1000)
      }
        
        
    }, 3000);
        
      
    /*
   
    else if(chosen_colour == "rgb(0, 0, 255)"){
      $("#colour_gesture").attr("src", "")
    }
    else if(chosen_colour == "rgb(165, 42, 42)"){
      $("#colour_gesture").attr("src", "../../images/gestures/colours/brown_1.jpg")
    }
    else if(chosen_colour == "rgb(0, 0, 0)"){
      $("#colour_gesture").attr("src", "../../images/gestures/colours/black_1.jpg")
    }
    else if(chosen_colour == "rgb(255, 255, 255)"){
      $("#colour_gesture").attr("src", "../../images/gestures/colours/white_1.jpg")
    }
    else if(chosen_colour == "rgb(128, 128, 128)"){
      $("#colour_gesture").attr("src", "../../images/gestures/colours/grey_1.jpg")
    }
    else if(chosen_colour == "rgb(255, 165, 0)"){
      $("#colour_gesture").attr("src", "")
    }
    else if(chosen_colour == "rgb(255, 255, 0)"){
      $("#colour_gesture").attr("src", "../../images/gestures/colours/yellow_1.jpg")
    }
    else if(chosen_colour == "rgb(255, 192, 203)"){
      $("#colour_gesture").attr("src", "../../images/gestures/colours/pink_1.jpg")
    }*/
  });
    
    

});