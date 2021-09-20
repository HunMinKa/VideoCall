import $ from "jquery";

export class Common {
  public ResizePage(): void {
    var $select = $("select");
    var $menuAll = $(".menu-all");
    var $utilAll = $(".util-all");
    var $nav = $menuAll.parents("header").children("nav");
    var $utilList = $utilAll.siblings(".util-list");
    var $tabNav = $(".tab-nav li");
    var $slideOpen = $(".slide-open");
    var $tipIcon = $(".tip-icon");
    var $popUp = $(".pop-layer");
    var $popWrap = $(".pop-layer__wrap");
    var $layoutLink = $(".layout-thumb a");
    var $layoutCont = $(".video-call__cont");
    var $chatIcon = $(".icon-chat");
    var $chatClose = $(".chat-close");
    var $btn = $(".btn");
    var speed = 500;

    // select focus
    $select.on("focus", function () {
      $(this).parents(".opt").addClass("focus");
    });
    $select.on("blur", function () {
      $(this).parents(".opt").removeClass("focus");
    });

    // tooltip
    $tipIcon.on("mouseover", function () {
      $(this).next(".tip").toggleClass("on");
    });
    $tipIcon.on("focus", function () {
      $(this).next(".tip").addClass("on");
    });
    $tipIcon.on("blur", function () {
      $(this).next(".tip").removeClass("on");
    });

    // menu-all
    $menuAll.on("click", function () {
      var isOn = $menuAll.hasClass("on");
      $menuAll.toggleClass("on");

      if (isOn !== true) {
        $nav.slideDown(speed);
      } else {
        $nav.slideUp(speed);
      }
    });

    // util-all
    $utilAll.on("click", function () {
      var isOn = $utilAll.hasClass("on");
      $utilAll.toggleClass("on");

      if (isOn !== true) {
        $utilList.addClass("on");
      } else {
        $utilList.removeClass("on");
      }
    });

    // appointment slide button
    $slideOpen.on("click", function () {
      var isOn = $(this).hasClass("on");
      var $slideCont = $(this).parents(".cont").siblings("footer");

      $(this).toggleClass("on");
      if (isOn !== true) {
        $slideCont.slideDown(speed);
      } else {
        $slideCont.slideUp(speed);
      }
    });

    // 탭
    $tabNav.on("click", function () {
      var TabOn = $(this).attr("rel");
      $(this).parent().children("li").removeClass("on");
      $(this).addClass("on");
      $(this).parent().siblings(".tab-cont").removeClass("on");
      $("#" + TabOn).addClass("on");
    });

    // layout-thumb
    $layoutLink.on("click", function () {
      var typeOn: any;
      var typeName: any;
      var $layout: any;

      typeOn = $(this).attr("href");
      typeName = typeOn.substring(1, 7);
      $layout = $layoutCont.children(".layout");

      $layout.removeClass("type01 type02 type03 type04 type05 type06");
      $layout.addClass(typeName);
    });

    // chat
    // $chatIcon.on("click", function () {
    //   var isOn = $chatIcon.hasClass("on");
    //   console.log(isOn);
    //   $chatIcon.toggleClass("on");
    //   if (isOn !== true) {
    //     $chatIcon.addClass("on");
    //     $layoutCont.addClass("on");
    //   } else {
    //     $chatIcon.removeClass("on");
    //     $layoutCont.removeClass("on");
    //   }
    // });

    $chatClose.on("click", function () {
      $chatIcon.removeClass("on");
      $layoutCont.removeClass("on");
    });

    // 버튼 focus 처리

    $btn
      .on("mouseenter", function () {})
      .on("mouseleave", function () {
        $(this).trigger("click");
      });

    // 리사이즈시
    $(function () {
      var innerWidth: any;
      var chkPc: any;
      innerWidth = $(window).innerWidth();
      chkPc = innerWidth = innerWidth > 769 ? true : false;
      if (chkPc === true) {
        $(".wrap").addClass("pc");
      } else {
        $(".wrap").removeClass("pc");
      }

      popRespon();
    });

    // pop-layer 반응형 위치체크
    function popRespon() {
      var popWrapHT: any;
      var winHT: any;
      popWrapHT = $popWrap.innerHeight();
      winHT = $(window).innerHeight();
      // console.log(popWrapHT + " / " + winHT);

      if (popWrapHT >= winHT) {
        $popUp.css("height", "100%");
      } else if (popWrapHT < winHT) {
        $popUp.css("height", "auto");
      }
    }
  }
  public openLayer = (el: any) => {
    var temp = $("#" + el);
    if (!$(".pop-layer:visible").length) {
      $("<div/>", {
        class: "dimmed",
      })
        .appendTo("body")
        .fadeIn(200);
    }
    temp.fadeIn(200);
    this.popRespon();
    $("html").addClass("full");

    $(".dimmed, .popClose").on("click", function () {
      temp.fadeOut(200);
      if ($(".dimmed").length) {
        $(".dimmed").fadeOut(200, function () {
          $(this).remove();
        });
      }
      $("html").removeClass("full");
    });
  };
  public popRespon() {
    var $popUp = $(".pop-layer");
    var $popWrap = $(".pop-layer__wrap");

    var popWrapHT: any;
    var winHT: any;
    popWrapHT = $popWrap.innerHeight();
    winHT = $(window).innerHeight();
    // console.log(popWrapHT + " / " + winHT);

    if (popWrapHT >= winHT) {
      $popUp.css("height", "100%");
    } else if (popWrapHT < winHT) {
      $popUp.css("height", "auto");
    }
  }
}
