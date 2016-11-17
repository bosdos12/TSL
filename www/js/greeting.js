$(document).ready(function(){

 //This variable contains info on which gesture in two_gesture_sign is currently shown. Is it gesture 1 or gesture 2?
 var first_gesture = 1
 
 function two_gstr_signs() {
  jQuery('.2gstr_sign').each(function () {
      if(first_gesture==1){
        jQuery(this).attr('src', jQuery(this).attr('src').replace("1", "2"));
      }
      else if (first_gesture == 0){
        jQuery(this).attr('src', jQuery(this).attr('src').replace("2", "1"));
      }
    });
    first_gesture = 1 - first_gesture; 
}

setInterval(two_gstr_signs, 2000);
    
 
    
});

