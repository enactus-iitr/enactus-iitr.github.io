$(document).ready(function(){
  addEventListener("load", function() {
    setTimeout(hideURLbar, 0);
  }, false);

  function hideURLbar() {
    window.scrollTo(0, 1);
  };
  $(function(){
        $(".element").typed({
         strings: ["EnActUs","Seeing possibilities","Taking action","Enabling progress"],
         // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
         stringsElement: null,
         // typing speed
         typeSpeed: 20,
         // time before typing starts
         startDelay: 1000,
         // backspacing speed
         backSpeed: 20,
         // time before backspacing
         backDelay: 500,
         // loop
         loop: true,
         // false = infinite
         loopCount: false,
         // show cursor
         showCursor: false,
         // character for cursor
         cursorChar: "|",
         // attribute to type (null == text)
         attr: null,
         // either html or text
         contentType: 'html',

         // call when done callback function
         callback: function() {},
         // starting callback function before each string
         preStringTyped: function() {},
         //callback for every typed string
         onStringTyped: function() {},
         // callback for reset
         resetCallback: function() {}
        });
      });

});
