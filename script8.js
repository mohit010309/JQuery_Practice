// $("button").click(function(){
//     $("h1").toggle();
// })
// $("h1").hide();
$("button").click(function(){
    $("h1").slideUp().slideDown().animate({
        opacity:0.5,
        marginLeft:"100px",
        padding:"20%"
    });
});