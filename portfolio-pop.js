$(document).ready(function(){
  var cats = [
  {
    "category": "Box Braids",
    "preview": "box2",
    "data": "boxBraids"
  },
  {
    "category": "Buns",
    "preview": "bun2",
    "data": "buns"
  },
  {
    "category": "Children's Styles",
    "preview": "child1",
    "data": "childStyles"
  },
  {
    "category": "Cornrows",
    "preview": "corn3",
    "data": "cornrows"
  },
  {
    "category": "Crochet Weaves",
    "preview": "croch4",
    "data": "crochetWeaves"
  },
  {
    "category": "Locs",
    "preview": "loc1",
    "data": "locs"
  },
  {
    "category": "Natural Hair Styles",
    "preview": "natural2",
    "data": "natStyles"
  },
  {
    "category": "Sew Ins",
    "preview": "sewin1",
    "data": "sewIns"
  },
  {
    "category": "Twists",
    "preview": "twist5",
    "data": "twists"
  },
  {
    "category": "Updos",
    "preview": "updo4",
    "data": "updos"
  }
  ];
  var port = {
    "boxBraids": [{"preview": "box1"},{"preview": "box2"}],
    "buns": [{"preview": "bun1"},{"preview": "bun2"}],
    "childStyles": [{"preview": "child1"},{"preview": "child2"},{"preview": "child3"}],
    "cornrows": [{"preview": "corn1"},{"preview": "corn2"},{"preview": "corn3"},{"preview": "corn4"},{"preview": "corn5"},{"preview": "corn6"},{"preview": "corn7"},{"preview": "corn8"}],
    "crochetWeaves": [{"preview": "croch1"},{"preview": "croch2"},{"preview": "croch3"},{"preview": "croch4"},{"preview": "croch5"},{"preview": "croch6"},{"preview": "croch7"},{"preview": "croch8"},{"preview": "croch9"}],
    "locs": [{"preview": "loc1"},{"preview": "loc2"},{"preview": "loc3"},{"preview": "loc4"}],
    "natStyles": [{"preview": "natural1"},{"preview": "natural2"}],
    "sewIns": [{"preview": "sewin1"},{"preview": "sewin2"}],
    "twists": [{"preview": "twist1"},{"preview": "twist2"},{"preview": "twist3"},{"preview": "twist4"},{"preview": "twist5"},{"preview": "twist6"},{"preview": "twist7"},{"preview": "twist8"}],
    "updos": [{"preview": "updo1"},{"preview": "updo2"},{"preview": "updo3"},{"preview": "updo4"},{"preview": "updo5"},{"preview": "updo6"}]
  };
  function popCats(given){
    $("#portfolio-spawn").css({"opacity": "0"});
    $(".portfolio-wrapper").css({"height": "6em"});
    $("#portfolio-spawn").html("");
//console.log(typeof given);
    setTimeout(function(){
      given.map(function(elem, index){
        if(given === cats )
          {$("#portfolio-spawn").append("<div class='cat-wrapper' data-show-cat="+elem.data+"><img class='cat-img' src='/files/theme/"+elem.preview+".jpg' /><span class='cat-title'>"+elem.category+"</span></div>");}
          else
            {$("#portfolio-spawn").append("<div class='cat-wrapper lb-img'><img class='cat-img' data-index='"+index+"' src='/files/theme/"+elem.preview+".jpg' /><span class='cat-title'>CLICK TO VIEW</span></div>");}
          });
    }, 600);
    setTimeout(function(){
      $("#portfolio-spawn").css({"opacity": "1"});
      $(".portfolio-wrapper").css({"height": "auto"});
    }, 800)
  }//end popCat
  popCats(cats);

  var displaying;
  var currentPort;
  clickable = false;
  $(document).on("click", ".cat-wrapper", function(e){
    e.preventDefault();
    if(!clickable){
      $("#back-btn").css({"opacity":"1"});
      clickable = true;
      var temp = $(this).data("show-cat");
      popCats(port[temp] );
      currentPort = port[temp];
    }
  });
  $(document).on("click", ".lb-img", function(e){
    e.preventDefault();
    $("#lightbox").css({"display":"block", "opacity":"1"});
    displaying = $(this).find(".cat-img").data("index");
    var img = currentPort[displaying].preview;
    console.log(displaying);
    $("#imageDisplay").html( "<img src='/files/theme/"+img+".jpg' />" );
  });
  function prev(){
    displaying--;
    if(displaying < 0){
      displaying = currentPort.length-1;
    }
    console.log(displaying);
    var img = currentPort[displaying].preview;
    $("#imageDisplay").html( "<img src='/files/theme/"+img+".jpg' />" );
  }
  function next(){
    displaying++;
    if(displaying > currentPort.length){
      displaying = 0;
    }
    console.log(displaying);
    var img = currentPort[displaying].preview;
    $("#imageDisplay").html( "<img src='/files/theme/"+img+".jpg' />" );
  }
  function close(){
    $("#lightbox").css({"opacity":"0"});
    setTimeout(function(){
      $("#lightbox").css({"display":"none"});
      $("#imageDisplay").html("");
    }, 200);
  }

  $("#prev").on("click", prev);
  $("#next").on("click", next);
  $("#close").on("click", close);
  $("#background").on("click", close);
  

  $("#back-btn").click(function(){
    if(clickable){
      $(this).css({"opacity":"0.5"});
      popCats(cats );
      clickable = false;
    }
  });
  //swap out testimonials
});//end ready
