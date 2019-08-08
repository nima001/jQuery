$('#bj').css({
    height:'333px',
    background:'black',
    paddingTop:'30px'
});

$('#bj').find('.child').css({
    color:'red',
    fontSize:'33px',
    fontWeight:'bold',
    textAlign:'center'
});


function toggle(){
    $('p').fadeOut(200);
    $('p').fadeIn(200);
}

function toggle1(){
   clearInterval(m);
   clearInterval(n);
}

var m=setInterval(toggle,200);
var n=setInterval(toggle1,2000);

