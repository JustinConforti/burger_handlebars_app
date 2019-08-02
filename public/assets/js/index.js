$(document).ready(function(){


    $(".devourBTN").on("click", function(event){

        var update = {
            id:$(this).attr('data-type')
        }
            $.ajax("/update",{
                type:'PUT',
                data:update
            }).then(function(data){
                location.reload()
            })
        })


});