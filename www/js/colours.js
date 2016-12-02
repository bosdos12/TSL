$(document).ready(function(){ 
    
  //show gesture for red colour as default
  show_gesture("rgb(255, 0, 0)")
  $("#default").addClass("selected");
    
  function show_gesture(colour){
    //Delete unnecessary background intervals
    try{
      window.clearInterval(refreshIntervalId);
    } catch(err){}
    
    //this is an interval that checks for chosem circles and update gestures if necessary
    window.refreshIntervalId = setInterval(function(){
        
      //Red colour  
      if(colour == "rgb(255, 0, 0)"){
        current_image = $("#colour_gesture").attr("src");        
        if(current_image.indexOf("red_1") != -1){
          current_image = $("#colour_gesture").attr("src", "../../images/gestures/colours/red_3.jpg"); 
        }
        else{
          current_image = $("#colour_gesture").attr("src", "../../images/gestures/colours/red_1.jpg");
        }
          
        
      }
        
      //Green colour  
      else if (colour == "rgb(0, 128, 0)"){
          
        current_image = $("#colour_gesture").attr("src");  
        if(current_image.indexOf("green_1") != -1){ 
          current_image = $("#colour_gesture").attr("src", "../../images/gestures/colours/green_2.jpg");
        }
          
        else{
          current_image = $("#colour_gesture").attr("src", "../../images/gestures/colours/green_1.jpg"); 
        }
          ``        
      }
        
      //Brown colour  
      else if (colour == "rgb(165, 42, 42)"){
          
        current_image = $("#colour_gesture").attr("src");  
        if(current_image.indexOf("brown_1") != -1){ 
          current_image = $("#colour_gesture").attr("src", "../../images/gestures/colours/brown_2.jpg");
        }
          
        else{
          current_image = $("#colour_gesture").attr("src", "../../images/gestures/colours/brown_1.jpg"); 
        }
          ``        
      }
        
     //Black colour  
      else if (colour == "rgb(0, 0, 0)"){
          
        current_image = $("#colour_gesture").attr("src");  
        if(current_image.indexOf("black_1") != -1){ 
          current_image = $("#colour_gesture").attr("src", "../../images/gestures/colours/black_2.jpg");
        }
          
        else{
          current_image = $("#colour_gesture").attr("src", "../../images/gestures/colours/black_1.jpg"); 
        }
          ``        
      }
        
      //White colour  
      else if (colour == "rgb(255, 255, 255)"){
          
        current_image = $("#colour_gesture").attr("src");  
        if(current_image.indexOf("white_1") != -1){ 
          current_image = $("#colour_gesture").attr("src", "../../images/gestures/colours/white_2.jpg");
        }
          
        else{
          current_image = $("#colour_gesture").attr("src", "../../images/gestures/colours/white_1.jpg"); 
        }
          ``        
      }
        
      //Grey colour  
      else if (colour == "rgb(128, 128, 128)"){
          
        current_image = $("#colour_gesture").attr("src");  
        if(current_image.indexOf("grey_1") != -1){ 
          current_image = $("#colour_gesture").attr("src", "../../images/gestures/colours/grey_2.jpg");
        }
          
        else{
          current_image = $("#colour_gesture").attr("src", "../../images/gestures/colours/grey_1.jpg"); 
        }
          ``        
      }
        
    }, 2000);
      
      
      
  }
    
  //$(".circle").click(show_gesture(this));
  
  //Colours chosen after default was shown
  $(".circle").click(function(){
    $(".circle").removeClass("selected"); //unclicking previously chosen circles
    $(this).addClass("selected"); 
    chosen_colour = $(".selected").css("background-color");
    show_gesture(chosen_colour)
    
    alert(chosen_colour);
  });
                     
  
});