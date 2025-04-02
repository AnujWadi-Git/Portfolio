document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("lock-scroll");

  const typed = new Typed(".typed-text", {
    strings: ["This is not a portfolio."],
    typeSpeed: 60,
    showCursor: false,
    onComplete: () => {
      setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        document.body.classList.remove("lock-scroll");
        document.documentElement.classList.remove("lock-scroll");
        document.getElementById("main").classList.remove("hidden");
        document.getElementById("typed-final").style.display = "none";
        document.getElementById("slogan-after").classList.remove("hidden");
      }, 1000);
    }
  });

  // Coding Facts
  const factEl = document.getElementById("coding-fact-text");
  if (factEl) {
    const facts = [
      "The first computer programmer was Ada Lovelace — in the 1800s.",
      "A typo in code once caused a $1B rocket to self-destruct.",
      "JavaScript was created in just 10 days.",
      "The first computer bug was literally a bug (a moth)."
    ];
    let i = 0;
    function typeFact() {
      let current = facts[i % facts.length];
      let j = 0;
      factEl.textContent = "";
      const typing = setInterval(() => {
        if (j < current.length) {
          factEl.textContent += current[j++];
        } else {
          clearInterval(typing);
          setTimeout(() => {
            i++;
            typeFact();
          }, 4000);
        }
      }, 50);
    }
    typeFact();
  }

  // Design Facts
  const designEl = document.getElementById("design-fact-text");
  if (designEl) {
    const designFacts = [
      "Design isn’t how it looks. It’s how it works. – Steve Jobs",
      "Figma was launched in 2016 and changed everything.",
      "Color theory can literally change how users feel.",
      "Design is thinking made visual."
    ];
    let d = 0;
    function typeDesignFact() {
      let current = designFacts[d % designFacts.length];
      let j = 0;
      designEl.textContent = "";
      const typing = setInterval(() => {
        if (j < current.length) {
          designEl.textContent += current[j++];
        } else {
          clearInterval(typing);
          setTimeout(() => {
            d++;
            typeDesignFact();
          }, 4000);
        }
      }, 50);
    }
    typeDesignFact();
  }
});

// Floating logos toggle + opacity
window.addEventListener("scroll", () => {
  const codingLogos = document.querySelector(".logo-float");
  const designLogos = document.querySelector(".logo-float-design");
  const designSection = document.getElementById("designing");

  const scrollY = window.scrollY + window.innerHeight / 2;
  const sectionTop = designSection?.offsetTop || 0;
  const sectionBottom = sectionTop + (designSection?.offsetHeight || 0);

  if (scrollY > sectionTop && scrollY < sectionBottom) {
    codingLogos?.classList.add("hidden");
    designLogos?.classList.remove("hidden");
  } else {
    codingLogos?.classList.remove("hidden");
    designLogos?.classList.add("hidden");
  }

  if (window.scrollY > window.innerHeight * 0.9) {
    codingLogos?.style.setProperty("opacity", "1");
    designLogos?.style.setProperty("opacity", "1");
  } else {
    codingLogos?.style.setProperty("opacity", "0");
    designLogos?.style.setProperty("opacity", "0");
  }
});

function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
