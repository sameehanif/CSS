$(document).ready(function(){
    
    
    
    
    //stiky
    $(".js--services-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }
           else{
           $("nav").removeClass("sticky");
           }
           
        
    }); 
    
    
    
    
    
    
    //Mixitup
    var mixer = mixitup('.container');
});