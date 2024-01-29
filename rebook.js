

$('.shoe-container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  /*var items=document.getElementsByClassName("menu-icon-list");
  var display=0;
 function displayMenu(){
   
    // console.log(items);
    
    if(display==1)
    {
        items.style.display="block";
        display=0;
    }
    else{
        items.style.display="none";
        display=1;
    }
 }*/

   //jquery
   $(document).ready(function(){
    $(".menu-icon").click(function(){
        // $(".menu-icon-list").show();
        $(".menu-icon").hide();
        $(".cross-icon").show();
        $(".list-items").show();
        $(".main").hide();
        $(".footer").hide();

    });
    $(".cross-icon").click(function(){
      $(".menu-icon-list").hide();
      $(".menu-icon").show();
      $(".cross-icon").hide();
      $(".main").show();
      $(".footer").show();
      $(".list-items").hide();
  });
    $(".arrow_down").click(function(){
     $(".country_flag_list").toggle();
  });
  //   $(".list-items-arrow").click(function(){
  //     //$(".headings").hide();
  //     //$(".men-items-list").hide();
  //     // $(".men-items-list").show();
  // });
  // // $(".inner-list-items-arrow").click(function(){
  // //   $(".men-items-list").show();
  // // })
})
   