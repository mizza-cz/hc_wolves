$(".scoreboard-slider").slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  prevArrow:
    '<button class="scoarboard__btn scoarboard__btnprev"><img src="/images/ico/arrow-left-square.svg" alt="" ></button> ',
  nextArrow:
    ' <button class="scoarboard__btn  scoarboard__btnnext"><img  src="/images/ico/arrow-right-square.svg" alt = "" ></button>',
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1520,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
