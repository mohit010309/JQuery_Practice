/* using Vanilla JS */
// document.querySelector("h1").addEventListener("click",function(){
//     document.querySelector("h1").style.color="purple";
// });

/* using jQuery */
// $("h1").click(function(){
//     $("h1").css("color","purple");
// });

/* Changing background color of buttons through vanilla JS */
// var ob = document.querySelectorAll("button");
// for(var i=0;i<ob.length;i++)
// {
//     ob[i].addEventListener("click",func);
// }
// function func()
// {
//     this.style.backgroundColor="red";
// }
// var ob=document.querySelectorAll("button");
// for(var i=0;i<ob.length;i++)
// {
//     ob[i].addEventListener("click",function(){
//         document.querySelectorAll("button")[i].style.backgroundColor="green";
//     })
// }
// document.querySelector("button").style.color="blue";

/*changing background color of buttons to pink using jQuery*/
// $("button").click(function(event){
//     console.log(event);
//     $("h1").css("color","blue");
//     $("h1").css("border","4px solid red");
// });


/* detecting keypress in input text through vanilla JS*/
// document.querySelector("input").addEventListener("keydown",function(event){
//     console.log("The key pressed is "+event.key);
// });

/* detecting keypress through jQuery */
// $("input").keydown(function(event){
//     console.log("The key pressed is the "+event.key);
// });

// $("body").keydown(function(event){
//     console.log(event.key);
// });

// $(document).keydown(function(event){
//     console.log("key is "+event.key);
// });

/* keypress get shown in <h1> */
// $(document).keydown(function(event){
//     console.log(event);
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover",function(){
//     $("h1").css("color","red");
// });

/* Adding and removing elements */
// $("h1").before("<button>Click me before</button>");
// $("h1").after("<button>Click me after</button>");
// $("h1").prepend("<button>Click me prepend</button>");
// $("h1").append("<button>Click me append</button>");
// $("button").remove();
// $("h1").remove();
