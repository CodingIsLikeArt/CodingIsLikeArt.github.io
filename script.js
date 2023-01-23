$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });

function dil(object){
    $(object).hide(500);
    if (object=='.prezi'){
        $('html').css("overflow", "auto");
    }
}

function hyr(object){
    var fjalekalim = document.getElementById("fjalekalimi").value ;
    if (fjalekalim == "2479"){
        dil(object);
    }else{
        alert("Gabim");
    }
}
