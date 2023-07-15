var level=0;
var flag=false;
var gp=[];
var up=[];
var cols=['red','blue','green','yellow'];
function gameStart()
{
    level++;
    $('h1').text('Level '+level);
    var rn=Math.floor(Math.random()*4);
    $('#'+cols[rn]).fadeOut(100).fadeIn(100);

    gp.push(cols[rn]);
    console.log(gp);
    //waiting for user response
    up=[];
}

$('.btn').click(function(){
    $(this).fadeOut(100).fadeIn(100);
});

$(document).keypress(function(){
    if(flag==false)
    {
        gameStart();
        flag=true;
    }
});

function checkAns(index)
{
    if(up[index]===gp[index])
    {
        if(up.length===gp.length)
        {
            $('h1').text("Congrats");
            setTimeout(function(){
                gameStart();
            },1000);
        }
    }
    else
    {
        $('h1').text("Wrong key pressed");
        gp=[];
        flag=false;
        level=0;
    }
}

$('.btn').click(function(){
    up.push($(this).attr('id'));
    console.log("user "+up);
    checkAns(up.length-1);
})