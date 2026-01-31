let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  const currentScrollPos = window.scrollY;

  if (currentScrollPos > prevScrollPos) {
    // Scrolling down
    navbar.style.top = "-75px"; // Hide the navbar
    logo.visible = false;
  } else {
    // Scrolling up
    navbar.style.top = "0px"; // Show the navbar
  }

  prevScrollPos = currentScrollPos;
});


//toggle visiblity//

  function toggleContact() {
    const contact = document.getElementById("contactDetails");
    contact.classList.toggle("show");
  }

//side panel

   function openForm() {
    document.getElementById("regForm").classList.add("show");
  }

  function closeForm() {
    document.getElementById("regForm").classList.remove("show");
  }


  /* Generate random CAPTCHA numbers
  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  let answer = num1 + num2;

  // Display CAPTCHA
  document.getElementById("captchaQuestion").textContent = `What is ${num1} + ${num2}?`;

  function validateCaptcha() {
    const userAnswer = parseInt(document.getElementById("captchaInput").value);
    const message = document.getElementById("message");

    if (userAnswer === answer) {
      message.textContent = "CAPTCHA passed!";
      message.className = "success";
      return true; // allow form submission
    } else {
      message.textContent = "Incorrect CAPTCHA. Please try again.";
      message.className = "error";
      return false; // block form submission
    }
  }*/


  /*typewritter*/


    window.addEventListener('scroll', function () {
    const element = document.getElementById('typeSection');
    const position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.remove('hidden');
    }
  });


 /*typewitter*/

  const texts = [
      "Welcome to Astro Animation!",
      "We bring ideas to life.",
      "Your animation partner.",
      "Creative. Bold. Animated."
    ];

    let i = 0;         // text index
    let j = 0;         // character index
    let currentText = '';
    let isDeleting = false;
    const speed = 100; // typing speed

    function type() {
      const heading = document.getElementById('typewriter');
      currentText = texts[i];

      if (isDeleting) {
        heading.textContent = currentText.substring(0, j--);
      } else {
        heading.textContent = currentText.substring(0, j++);
      }

      if (!isDeleting && j === currentText.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }

      if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % texts.length;
      }

      setTimeout(type, isDeleting ? 50 : speed);
    }

    // Start typing
    type();