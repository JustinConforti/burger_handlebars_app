$(document).ready(function(){

    $(".devourBtn").on('click',function(){ 
        var update ={
             id:$(this).attr('data-type')}
            $.ajax("/update",{
                type:'PUT',
                data:update
            }).then(function(data){
                location.reload();
            })
    })

    
        
});