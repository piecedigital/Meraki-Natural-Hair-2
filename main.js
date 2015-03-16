$(document).ready(function(){
  //mobile nav
  $("#mo-nav").click(function(){
    if($("#nav").height() > 0 ){
      $("#nav").css({"height": "0px"});
    } else {
      $("#nav").css({"height": "230px"});
    }
  });
  //slider
  var currentLeft, sliderOrigin;
  function checkList () {
    switch($("body").data("page") ) {
      case "home":  currentLeft = $("#nav li:nth-of-type(1) a").offset().left;
                    sliderOrigin = currentLeft;
                    $("#nav li:nth-of-type(1) a").addClass("hovered");//.css({"background": "#a90000"});
      break;
      case "booking":  currentLeft = $("#nav li:nth-of-type(2) a").offset().left;
                    sliderOrigin = currentLeft;
                    $("#nav li:nth-of-type(2) a").addClass("hovered");//.css({"background": "#a90000"});
      break;
      case "testimonials":  currentLeft = $("#nav li:nth-of-type(3) a").offset().left;
                    sliderOrigin = currentLeft;
                    $("#nav li:nth-of-type(3) a").addClass("hovered");//.css({"background": "#a90000"});
      break;
      case "portfolio":  currentLeft = $("#nav li:nth-of-type(4) a").offset().left;
                    sliderOrigin = currentLeft;
                    $("#nav li:nth-of-type(4) a").addClass("hovered");//.css({"background": "#a90000"});
      break;
      case "contact":  currentLeft = $("#nav li:nth-of-type(5) a").offset().left;
                    sliderOrigin = currentLeft;
                    $("#nav li:nth-of-type(5) a").addClass("hovered");//.css({"background": "#a90000"});
      break;
    }
  }
  checkList();
  $("#nav-slider").css({"left": currentLeft, "opacity": "0"});
  //hover action
  function slideToNew(e){
    e.preventDefault();
    currentLeft = $(this).offset().left;
    $("#nav-slider").css({"left": currentLeft + "px", "opacity": "1"});
    //if( $("#mo-nav").is(":hidden") ){
      $("#nav li a").removeClass("hovered");//.css({"background": "transparent"});
    //}
    $(this).addClass("hovered");
  }
  function slideToOriginal(e){
    e.preventDefault();
    currentLeft = sliderOrigin;
    $("#nav-slider").css({"left": currentLeft + "px", "opacity": "0"});
    $("#nav li a").removeClass("hovered");
    checkList();
  }
  $("#nav li a").hover(slideToNew);
  $("#nav li a").mouseleave(slideToOriginal);
  $(window).on("resize", slideToOriginal);
});//end ready
