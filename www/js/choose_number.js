$(document).ready(function(){

  //read value of hundreds and increase its value by one
  $(".huns_up").click(function(){
    hundreds = parseInt($(".number_block .huns").html());
    if(hundreds<9){
      $(".number_block .huns").html(hundreds + 1)
    }  
  });
    
  //read value of tens and increase its value by one
  $(".tens_up").click(function(){
    tens = parseInt($(".number_block .tens").html());
    if(tens<9){
      $(".number_block .tens").html(tens + 1)
    }  
  });
    
  //read value of ones and increase its value by one
  $(".ones_up").click(function(){
    tens = parseInt($(".number_block .ones").html());
    if(tens<9){
      $(".number_block .ones").html(tens + 1)
    }  
  });  
    
  //read value of hundreds and decrease its value by one
  $(".huns_down").click(function(){
    hundreds = parseInt($(".number_block .huns").html());
    if(hundreds>0){
      $(".number_block .huns").html(hundreds - 1)
    }  
  });
    
  //read value of tens and increase its value by one
  $(".tens_down").click(function(){
    tens = parseInt($(".number_block .tens").html());
    if(tens>0){
      $(".number_block .tens").html(tens - 1)
    }  
  });
    
  //read value of ones and increase its value by one
  $(".ones_down").click(function(){
    tens = parseInt($(".number_block .ones").html());
    if(tens>0){
      $(".number_block .ones").html(tens - 1)
    }  
  });  
 
 
    
    
    
});