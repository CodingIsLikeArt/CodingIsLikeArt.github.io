$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });

function dil(object){
    $(object).hide(500);
    if (object=='.prezi'){
        $('html').css("overflow", "auto");
    }
}

function hyr(){
    var fjalekalim = document.getElementById("fjalekalimi").value ;
    if (fjalekalim == "1111"){
        fshi();
    }else{
        alert("Gabim");
    }
}
