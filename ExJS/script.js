/*
  
  Validate Form

*/
$(document).ready(function () {
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function validatePhone(phone) {
    var rep = /^(([+]|00)39)?((3[1-6][0-9]))(\d{7})$/;
    return rep.test(Number(phone));
  }
  $("#fullname").change(function validate(e) {
    e.preventDefault();
    var fullname = $("#fullname").val();

    $(".error").remove();

    if (fullname.length < 4) {
      $("#fullname").before('<span class="error">Campo Obbligatorio</span>');
      $("#fullname").addClass("invalid");
    } else {
      $("#fullname").removeClass("invalid");
    }
  });
  $("#job").change(function validate(e) {
    e.preventDefault();
    var job = $("#job").val();

    $(".error").remove();

    if (job.length < 3) {
      $("#job").before('<span class="error">Campo Obbligatorio</span>');
      $("#job").addClass("invalid");
    } else {
      $("#job").removeClass("invalid");
    }
  });
  $("#phone").change(function validate(e) {
    e.preventDefault();
    var phone = $("#phone").val();

    $(".error").remove();

    if (!validatePhone(phone)) {
      $("#phone").before('<span class="error">numero non valido</span>');
      $("#phone").addClass("invalid");
    } else {
      $("#phone").removeClass("invalid");
    }
  });
  $("#email").change(function validate(e) {
    e.preventDefault();
    var email = $("#email").val();

    $(".error").remove();

    if (!validateEmail(email)) {
      $("#email").before('<span class="error">email non valida</span>');
      $("#email").addClass("invalid");
    } else {
      $("#email").removeClass("invalid");
    }
  });
  $("#module").submit(function validate(e) {
    e.preventDefault();
    var fullname = $("#fullname").val();
    var job = $("#job").val();
    var phone = $("#phone").val();
    var email = $("#email").val();

    $(".error").remove();

    if (fullname.length == 0) {
      $("#fullname").before('<span class="error">Campo Obbligatorio</span>');
      $("#fullname").addClass("invalid");
    } else {
      $("#fullname").removeClass("invalid");
    }
    if (job.length == 0) {
      $("#job").before('<span class="error">Campo Obbligatorio</span>');
      $("#job").addClass("invalid");
    } else {
      $("#job").removeClass("invalid");
    }
    if (!validatePhone(phone)) {
      $("#phone").before('<span class="error">numero non valido</span>');
      $("#phone").addClass("invalid");
    } else {
      $("#phone").removeClass("invalid");
    }
    if (!validateEmail(email)) {
      $("#email").before('<span class="error">email non valida</span>');
      $("#email").addClass("invalid");
    } else {
      $("#email").removeClass("invalid");
    }
  });
});
/*

  Chat

  */
$(document).ready(function () {
  $(".chat__window__write__button").on(
    "click",
    function addChatMessage(message) {
      var message = $(".chat__window__write__input").val();
      $(".chat__window__message").append(
        $(
          `<div class="message--box--mine"><p class='message'>${message}</p></div>`
        )
      );
    }
  );

  /* $(function () {
    $(".chat__window__write").on("submit", function (event) {
      event.preventDefault();
      var message = $(".message--box--mine").first().clone();
      message.find("p").text($(".chat__window__write__input").val());
      message.insertAfter(".message--box--user:last");
      $(".chat__window__write__input").val("");
    });*/
  var typingTimer;
  var doneTypingInterval = 2000;
  var $input = $(".chat__window__write__input");
  $input.on("keyup", function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  });
  $input.on("keydown", function () {
    clearTimeout(typingTimer);
  });
  function doneTyping() {
    var message = $(".message--box--user").first().clone();
    message.find("p").text("Miiinchia!");
    message.insertAfter(".message--box--mine:last");
  }
});
/*

table

*/

$(".tab__title__button").on("click", function loadJSONDoc() {
  fetch("https://pebove.github.io/sube.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data["customers"]);
      loadData(data["customers"]);
      $(".tab__content__load__nodata").hide();
    })
    .catch((error) => console.error(error));
});

function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function loadData(x) {
  var i;
  var table = "";
  for (i = 0; i < x.length; i++) {
    table +=
      "<br" +
      "<tr><td class='tab--data' style='padding-left: 70px'>" +
      x[i].name +
      "</td><td class='tab--data' style='padding-left: 65px'>" +
      x[i].age +
      "</td><td class='tab--data' style='padding-left: 140px'>" +
      x[i].job +
      "</td><td class='tab--data' style='padding-left: 130px'>" +
      `<button class='tab--delete--button' onclick='deleteRow(this)'>Cancella</button>` +
      "</td></tr>" +
      "<br>" +
      "<br>";
  }
  document.getElementById("data").innerHTML = table;
}
