// Check Off specific Todos by clicking
$("ul").on("click", "li", function (){
 $(this).toggleClass("completed");
});

// click on X to delete Todo
$("ul").on("click", "span", function(event){
   $(this).parent().fadeOut(500, function(){
       $(this).remove();
   });
   event.stopPropagation(); 
});

//input
$("input[type='text']").keypress(function (event){
    if(event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to lu
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>")
    }
});

//plus toggle
$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle(200);
});