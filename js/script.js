$(document).ready(function(){
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $('li').css('background-color', 'yellow');
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      alert('Good day.');
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
      alert('Later!');
    });
  });

  $("button#goodbye").click(function() {

    console.log($("ul#user"));
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>")
    $('li').css('background-color', 'yellow');
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      alert('Goodbye');
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
      alert('Later!');
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $('li').css('background-color', 'yellow');
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      alert('Stop mimicing me!');
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
      alert('Twins!');
    });
  });


});
