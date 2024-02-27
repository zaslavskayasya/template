(function ($) {
  "use strict";

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("bg-primary shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("bg-primary shadow-sm").css("top", "-150px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Countdown Timer
  function countDownTimer() {
    
    let lastVisitDate = localStorage.getItem('lastVisitDate');
    let startDate = lastVisitDate ? new Date(lastVisitDate) : new Date();
    
    // Записуємо поточну дату для майбутнього використання
    localStorage.setItem('lastVisitDate', startDate.toISOString());

    // Додаємо 7 днів до дати
    let endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 7);

    let now = new Date();

    // Розрахунок залишкового часу у секундах
    let timeLeft = Math.floor((endDate - now) / 1000);

    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft % 86400) / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = Math.floor(timeLeft % 60);

    // Форматування для виведення на екран
    if (days < 10) {
        days = "0" + days;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Відображення залишкового часу на екрані
    $("#cdt-days").html(days + "<span>-днів-</span>");
    $("#cdt-hours").html(hours + "<span>-годин-</span>");
    $("#cdt-minutes").html(minutes + "<span>-хвилин-</span>");
    $("#cdt-seconds").html(seconds + "<span>-секунд-</span>");
}

// Викликати функцію кожну секунду
setInterval(countDownTimer, 1000);

// Запустити таймер при завантаженні сторінки
countDownTimer();

  // // Testimonials carousel
  // $('.testimonial-carousel').owlCarousel({
  //     autoplay: true,
  //     smartSpeed: 1000,
  //     loop: true,
  //     nav: false,
  //     dots: true,
  //     items: 1,
  //     dotsData: true,
  // });



  $('.main-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>',
      ],

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);







// function validatePhone(input) {
//   input.value = input.value.replace(/[^0-9+]/g, "");
// }

// function submitForm() {
//   let name = document.getElementById("name").value;
//   let phone = document.getElementById("phone").value;

//   document.getElementById("name").classList.remove("error");
//   document.getElementById("phone").classList.remove("error");

//   if (!/^[0-9+]+$/.test(phone) || phone.length < 8) {
//     document.getElementById("phone").classList.add("error");
//     document.getElementById("resultContainer").innerHTML =
//       '<div class="alert alert-danger" role="alert">Помилка: Невірний формат телефону!</div>';
//     return;
//   }

//   if (name.length < 2) {
//     document.getElementById("name").classList.add("error");
//     document.getElementById("resultContainer").innerHTML =
//       '<div class="alert alert-danger" role="alert">Помилка: Ім\'я має бути не менше 2 символів!</div>';
//     return;
//   }

//   if (name === "" || phone === "") {
//     if (name === "") {
//       document.getElementById("name").classList.add("error");
//     }
//     if (phone === "") {
//       document.getElementById("phone").classList.add("error");
//     }
//     document.getElementById("resultContainer").innerHTML =
//       '<div class="alert alert-danger" role="alert">Помилка: Всі поля повинні бути заповнені!</div>';
//     return;
//   }

//   document.getElementById("formContainer").style.display = "none";
//   document.getElementById("resultContainer").innerHTML =
//     '<div class="alert alert-success" role="alert">Дякуємо за замовлення, наш менеджер зв\'яжеться з вами за вказаним номером телефону: ' +
//     " " +
//     phone +
//     "</div>";
// }
