document.addEventListener("DOMContentLoaded", () => {
    const typed = new Typed(".typed-text", {
      strings: ["This is not a portfolio."],
      typeSpeed: 60,
      showCursor: false,
      onComplete: () => {
        setTimeout(() => {
          document.getElementById("preloader").style.display = "none";
          document.getElementById("main").classList.remove("hidden");
  
          document.getElementById("typed-final").style.display = "none";
          document.getElementById("slogan-after").classList.remove("hidden");
        }, 1000);
      }
    });
  });
  