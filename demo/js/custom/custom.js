/*========================================== MASTER JAVASCRIPT ===================================================================

	Project     :	GRAND BUNDLE TEMPLATES
	Version     :	1.0
	Last Change : 	13/01/2018
	Primary Use :   GRAND BUNDLE TEMPLATES

=================================================================================================================================*/
$(document).on("ready", function () {
  "use strict"; //Start of Use Strict

  //AFTER SCROLL MENU CREATED,MENU BGCOLOR AND TEXT COLOR
  /*hotel booking FIXED HEADER*/
  var menu_bar = $(".navbar-default.topbar1");
  var top_menu = $("#top-nav1");
  if (top_menu.length) {
    var menuHeight = top_menu.height();
    var topx = $(window).scrollTop();
    var screenSize = $(window).innerWidth();

    if (topx >= menuHeight) {
      menu_bar.fadeIn().addClass("fixed-header");
      if (screenSize > 767) {
        $(".logo-image1").css("display", "none");
        $(".logo1-image1").css("display", "inherit");
      } else {
        $(".logo-image1").css("display", "none");
        $(".logo1-image1").css("display", "inherit");
      }
    } else {
      menu_bar.removeClass("fixed-header");

      if (screenSize > 767) {
        $(".logo-image1").css("display", "inherit");
        $(".logo1-image1").css("display", "none");
      } else {
        $(".logo-image1").css("display", "none");
        $(".logo1-image1").css("display", "inherit");
      }
    }

    $(document).on("scroll", function () {
      var y = $(window).scrollTop();

      if (y >= menuHeight) {
        menu_bar.fadeIn().addClass("fixed-header");

        if (screenSize > 767) {
          $(".logo-image1").css("display", "none");
          $(".logo1-image1").css("display", "inherit");
        } else {
          $(".logo-image1").css("display", "none");
          $(".logo1-image1").css("display", "inherit");
        }
      } else {
        menu_bar.removeClass("fixed-header");

        if (screenSize > 767) {
          $(".logo-image1").css("display", "inherit");
          $(".logo1-image1").css("display", "none");
        } else {
          $(".logo-image1").css("display", "none");
          $(".logo1-image1").css("display", "inherit");
        }
      }

      var scrollPos = $(document).scrollTop() + 80;
      $("#menu_1 a").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (
          refElement.position().top <= scrollPos &&
          refElement.position().top + refElement.height() > scrollPos
        ) {
          $("#menu_1 ul li a").removeClass("active");
          currLink.addClass("active");
        } else {
          currLink.removeClass("active");
        }
      });
    });
  }
  //MENU BAR SMOOTH SCROLLING FUNCTION
  /*hotel booking*/
  var booking_pagescroll = $(".booking-pagescroll");
  if (booking_pagescroll.length) {
    $(".booking-pagescroll").on("click", function (e) {
      var y = $(window).scrollTop();
      var t = "";

      if (window.innerWidth <= 767) {
        if (y <= 120) {
          t = 640;
        } else {
          t = 50;
        }
      } else {
        if (y <= 170) {
          t = 210;
        } else {
          t = 50;
        }
      }
      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - t,
        },
        2000
      );
      return false;
    });
  }
  /*restaurant FIXED HEADER*/
  var menu_bar4 = $(".navbar-default.topbar4,.navbar-default.topbar16");
  var top_menu = $("#top-nav4");
  if (top_menu.length) {
    var menuHeight = top_menu.height();
    var topx = $(window).scrollTop();
    var screenSize = $(window).innerWidth();

    if (topx >= menuHeight) {
      menu_bar4.fadeIn().addClass("fixed-header");
    } else {
      menu_bar4.removeClass("fixed-header");
    }

    $(document).on("scroll", function () {
      var y = $(window).scrollTop();

      if (y >= menuHeight) {
        menu_bar4.fadeIn().addClass("fixed-header");
      } else {
        menu_bar4.removeClass("fixed-header");
      }

      var scrollPos = $(document).scrollTop() + 80;
      $("#menu_4 a").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (
          refElement.position().top <= scrollPos &&
          refElement.position().top + refElement.height() > scrollPos
        ) {
          $("#menu_4 ul li a").removeClass("active");
          currLink.addClass("active");
        } else {
          currLink.removeClass("active");
        }
      });
    });
  }
  /*restaurant MENU SMOOTH SCROLL*/
  var menu4_pagescroll = $(".menu4-scroll");
  if (menu4_pagescroll.length) {
    $(".menu4-scroll").on("click", function (e) {
      var y = $(window).scrollTop();
      var t = "";

      if (window.innerWidth <= 767) {
        if (y <= 70) {
          t = 380;
        } else {
          t = 50;
        }
      } else {
        if (y <= 70) {
          t = 150;
        } else {
          t = 50;
        }
      }

      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - t,
        },
        2000
      );
      return false;
    });
  }
  //MENU-2 SCROLL
  /*travel*/
  var top_menu2 = $("#top-nav2");
  if (top_menu2.length) {
    var x = top_menu2.offset().top;
    if (x > 50) {
      top_menu2.fadeIn();
    } else {
      top_menu2.fadeOut();
    }
    $(document).on("scroll", function () {
      var y = $(this).scrollTop();
      if (y > 50) {
        top_menu2.fadeIn();
      } else {
        top_menu2.fadeOut();
      }
    });
  }
  /*COMMON MENU*/
  var common_nav = $(".common-nav");
  if (common_nav.length) {
    var x = common_nav.offset().top;
    if (x > 50) {
      common_nav.fadeIn();
    } else {
      common_nav.fadeOut();
    }
    $(document).on("scroll", function () {
      var y = $(this).scrollTop();
      if (y > 50) {
        common_nav.fadeIn();
      } else {
        common_nav.fadeOut();
      }
    });
  }
  //MENU BAR SMOOTH SCROLLING FUNCTION
  /*travel MENU SMOOTH SCROLL*/
  var menu2_list = $(
    ".menu2-ul,.menu7-ul,.menu8-ul,.menu9-ul,.menu10-ul,.menu11-ul,.menu12-ul,.menu14-ul,.menu_smooth_scroll"
  );
  if (menu2_list.length) {
    menu2_list.on("click", ".pagescroll", function (event) {
      event.stopPropagation();
      event.preventDefault();
      var hash_tag = $(this).attr("href");
      if ($(hash_tag).length) {
        $("html, body").animate(
          {
            scrollTop: $(hash_tag).offset().top - 50,
          },
          2000
        );
      }
      return false;
    });
  }
  /*hotel booking MENU SMOOTH SCROLL*/
  var menu1_list = $(".menu1-ul");
  if (menu1_list.length) {
    menu1_list.on("click", ".booking-pagescroll", function (event) {
      event.stopPropagation();
      event.preventDefault();
      var hash_tag = $(this).attr("href");
      if ($(hash_tag).length) {
        $("html, body").animate(
          {
            scrollTop: $(hash_tag).offset().top - 80,
          },
          2000
        );
      }
      return false;
    });
  }
  /*spa MENU SMOOTH SCROLL*/
  var menu5_list = $(".menu5-ul");
  if (menu5_list.length) {
    menu5_list.on("click", ".pagescroll", function (event) {
      event.stopPropagation();
      event.preventDefault();
      var hash_tag = $(this).attr("href");
      if ($(hash_tag).length) {
        $("html, body").animate(
          {
            scrollTop: $(hash_tag).offset().top - 80,
          },
          2000
        );
      }
      return false;
    });
  }
  /*COMMON MENU SMOOTH SCROLL*/
  var menu_list = $(".smooth-scroll-common");
  if (menu_list.length) {
    menu_list.on("click", ".pagescroll", function (event) {
      event.stopPropagation();
      event.preventDefault();
      var hash_tag = $(this).attr("href");
      if ($(hash_tag).length) {
        $("html, body").animate(
          {
            scrollTop: $(hash_tag).offset().top - 50,
          },
          2000
        );
      }
      return false;
    });
  }
  //RESPONSIVE MENU SHOW AND HIDE FUNCTION
  var collapse = $(".navbar-collapse");
  var menu = $(".navbar-default li a");
  if (menu.length) {
    menu.on("click", function (event) {
      collapse.slideToggle();
    });
  }
  $(".navbar-default .navbar-toggle").on("click", function (e) {
    collapse.slideToggle();
  });

  // YOUTUBE BACKGROUND VIDEO FUNCTION
  var player = $(".player");
  if (player.length) {
    player.mb_YTPlayer();
  }
  //Datepicker//
  var datepicker = $(".datepicker");
  if (datepicker.length) {
    $(".datepicker")
      .datepicker({
        autoclose: true,
        format: "dd/mm/yyyy",
        todayHighlight: true,
      })
      .datepicker();
  }

  var datetime = $("#datetimepicker5");
  if (datetime.length) {
    $("#datetimepicker5").datetimepicker({
      //defaultDate: "11/1/2013",
      enabledDates: [
        //moment("12/25/2013"),
        new Date(2013, 11 - 1, 21),
        "11/22/2013 00:53",
      ],
    });
  }

  //COUNTER
  var counter = $(".count");
  if (counter.length) {
    counter.counterUp({
      delay: 10,
      time: 1000,
    });
  }
  //GALLERY POPUP
  var gallery = $(".popup-gallery");
  if (gallery.length) {
    $(".popup-gallery").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
        },
      },
    });
  }
  //CONTACT FORM VALIDATION
  if ($(".form1-common").length) {
    $(".form1-common").each(function () {
      $(this).validate({
        errorClass: "error",
        submitHandler: function (form) {
          $.ajax({
            type: "POST",
            url: "mail/mail.php",
            data: $(form).serialize(),
            success: function (data) {
              if (data) {
                $(form).find(".sucessMessage").html("Mail Sent Successfully !");
                $(form).find(".sucessMessage").show();
                $(form).find(".sucessMessage").delay(3000).fadeOut();
              } else {
                $(form).find(".failMessage").html(data);
                $(form).find(".failMessage").show();
                $(form).find(".failMessage").delay(3000).fadeOut();
              }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
              $(form).find(".failMessage").html(textStatus);
              $(form).find(".failMessage").show();
              $(form).find(".failMessage").delay(3000).fadeOut();
            },
          });
        },
      });
    });
  }
  //ACCORDION
  var accordion = $(".accordion-row");
  if (accordion.length) {
    accordion.each(function () {
      var all_panels = $(this).find(".accordion-ans").hide();
      var all_titles = $(this).find(".accordion-title");
      $(this).find(".accordion-ans.active").slideDown();

      all_titles.on("click", function () {
        var acc_title = $(this);
        var acc_inner = acc_title.next();

        if (!acc_inner.hasClass("active")) {
          all_panels.removeClass("active").slideUp();
          acc_inner.addClass("active").slideDown();
          all_titles.removeClass("active");
          acc_title.addClass("active");
        } else {
          all_panels.removeClass("active").slideUp();
          all_titles.removeClass("active");
        }
      });
    });
    $(
      ".resort-accordion .col-md-6 .accordion-main:first-child .accordion-ans"
    ).css("display", "block");
    $(".accordion14-row .col-sm-6 .faq-div:first-child .accordion-ans").css(
      "display",
      "block"
    );
  }
  //VERTICAL SLIDER
  var verticalSlider = $("#verticalSlider");
  if (verticalSlider.length) {
    $("#verticalSlider").carousel({
      interval: 4000,
    });
  }

  var storiesSlider = $(".stories-slider");
  if (storiesSlider.length) {
    $(".stories-slider").owlCarousel({
      loop: true,
      autoplay: true,
      items: 1,
      smartSpeed: 5500,
      autoplayTimeout: 7000,
      nav: true,
      navigation: true,
      navigationText: [
        "<i class='icon-chevron-left icon-white'><</i>",
        "<i class='icon-chevron-right icon-white'>></i>",
      ],
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
      autoplayHoverPause: true,
      animateOut: "slideOutUp",
      animateIn: "slideInUp",
    });
  }

  return false;
  // End of use strict
});
