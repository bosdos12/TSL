$(document).ready(function(){ 
    
  //show hot weather gesture as default
  $("#default").addClass("selected");
  show_gesture("../../images/basics/weather/hot.jpg")
  
  function show_gesture(weather){
    try{
      window.clearInterval(refreshIntervalId);
    } catch(err){}
    
    window.refreshIntervalId = setInterval(function(){
      current_image = $("#weather_gesture").attr("src");
      if(weather.indexOf("hot") != -1){
        if(current_image.indexOf("hot_1") != -1){
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/hot_2.jpg"); 
        }
        else if(current_image.indexOf("hot_2") != -1){
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/hot_3.jpg"); 
        }
        else{
          current_image = $("#weather_gesture").attr("src", "../../images/gestures/weather/hot_1.jpg");
        }
      }
      
    }, 2500); 
    
  }
        
  //Colours chosen after default was shown
  $(".clip").click(function(){
  $(".clip").removeClass("selected"); //unclicking previously chosen circles
  $(this).addClass("selected");
  chosen_weather = $(".selected").attr("src");
  show_gesture(chosen_weather);
  });
  
});