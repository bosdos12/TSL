$(document).ready(function(){
    
  //Learn the number when "equality" button is pressed
  $("#learn_btn").click(function(){
    if(typeof hundreds == 'undefined'){hundreds=0;}
    if(typeof tens == 'undefined'){tens=0;}
    if(typeof ones == 'undefined'){ones=0;}
    
    if(hundreds>0){
       $(".number_block .huns").css("color", "red");
      if(hundreds==1){
        $("#learn_btn").addClass("wait_click");
        $("#gesture").attr("src","../../images/gestures/numbers/100a.jpg");
        setTimeout(function(){         
          $("#gesture").attr("src","../../images/gestures/numbers/100b.jpg");
          $("#learn_btn").removeClass("wait_click");
          $(".number_block .huns").css("color", "white");
        }, 2500);       
       }
        
       else if(hundreds>=2 && hundreds<=5){
         $("#gesture").attr("src","../../images/gestures/numbers/" + hundreds + "00.jpg");
          setTimeout(function(){         
            $(".number_block .huns").css("color", "white");
          }, 2500);  
       }
        
        
    }
    else{
      if(tens>0){
        alert(tens);
        alert(ones);        
      }
      else{
        alert(ones);
      }
    }
      
     /*
    if(tens==0 && hundreds==0){
      //dealing with ones
      if(ones==0){
        $("#gesture").attr("src","../../images/gestures/o.jpg");
      }
      else if(ones==7 || ones==8){
        $("#learn_btn").addClass("wait_click");
        $("#gesture").attr("src","../../images/gestures/numbers/"+ones+"a.jpg")
        setTimeout(function(){         
          $("#gesture").attr("src","../../images/gestures/numbers/"+number+"b.jpg")   
          $("#learn_btn").removeClass("wait_click");
        }, 1000);             
       }
                  
       else{
         $("#gesture").attr("src","../../images/gestures/numbers/"+ones+".jpg");
       }
    
    } */
      
      
  });
    

    
    
    

  //read value of hundreds and increase its value by one
  $(".huns_up").click(function(){
    hundreds = parseInt($(".number_block .huns").html());
    if(hundreds<9){
      hundreds+=1;
      $(".number_block .huns").html(hundreds)
    }  
  });
    
  //read value of tens and increase its value by one
  $(".tens_up").click(function(){
    tens = parseInt($(".number_block .tens").html());
    if(tens<9){
      tens+=1;
      $(".number_block .tens").html(tens)
    }  
  });
    
  //read value of ones and increase its value by one
  $(".ones_up").click(function(){
    ones = parseInt($(".number_block .ones").html());
    if(ones<9){
      ones+=1;
      $(".number_block .ones").html(ones)
    }  
  });  
    
  //read value of hundreds and decrease its value by one
  $(".huns_down").click(function(){
    hundreds = parseInt($(".number_block .huns").html());
    if(hundreds>0){
    hundreds-=1;
      $(".number_block .huns").html(hundreds)
    }  
  });
    
  //read value of tens and increase its value by one
  $(".tens_down").click(function(){
    tens = parseInt($(".number_block .tens").html());
    if(tens>0){
      tens-=1;
      $(".number_block .tens").html(tens)
    }  
  });
    
  //read value of ones and increase its value by one
  $(".ones_down").click(function(){
    ones = parseInt($(".number_block .ones").html());
    if(ones>0){
      ones-=1;
      $(".number_block .ones").html(ones)
    }  
  });  
 
 
    
    
    
});