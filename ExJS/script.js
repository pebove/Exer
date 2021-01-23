$(document).ready(function () {
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function validatePhone(phone) {
    var rep = /^(([+]|00)39)?((3[1-6][0-9]))(\d{7})$/;
    return rep.test(Number(phone));
  }
  $("input.module__form__input").change(function validate(e) {
    e.preventDefault();
    var fullname = $("#fullname").val();
    var job = $("#job").val();
    var phone = $("#phone").val();
    var email = $("#email").val();

    $(".error").remove();

    if (fullname.length < 4) {
      $("#fullname").before('<span class="error">Campo Obbligatorio</span>');
      $("#fullname").addClass("invalid");
    } else {
      $("#fullname").removeClass("invalid");
    }
    if (job.length < 3) {
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
  $("#module").submit(function validate(e) {
    e.preventDefault();
    var fullname = $("#fullname").val();
    var job = $("#job").val();
    var phone = $("#phone").val();
    var email = $("#email").val();

    $(".error").remove();

    if (fullname.length < 4) {
      $("#fullname").before('<span class="error">Campo Obbligatorio</span>');
      $("#fullname").addClass("invalid");
    } else {
      $("#fullname").removeClass("invalid");
    }
    if (job.length < 3) {
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
//asd
