$(document).ready(function(){
    
  $(".hun_up").click(function(){
    $(".number_block .huns").html("1");
    
    function explode(){
  alert($(".number_block .huns").html());
}
setTimeout(explode, 2000);
  });
    
});