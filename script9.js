var click=0;
$("body").click(function(){
    click++;
    $("h1").text("Clicked "+click+" times");
    var level;
    for(level=1;level<=click;level++)
    {
        var rn=Math.floor(Math.random()*4+1);
        var s="sq"+rn;
        console.log(s+" -> ");
        $("."+s).fadeIn(100).fadeOut(100).fadeIn(100);
    }

});