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


// Video Editing Facts
const editEl = document.getElementById("edit-fact-text");
if (editEl) {
  const editFacts = [
    "Every cut you skip took me 3 coffee refills.",
    "Video editing is 10% cutting and 90% playback.",
    "Premiere crashed? That means I’m on the right track.",
    "My timelines look like art installations."
  ];
  let e = 0;
  function typeEditFact() {
    let current = editFacts[e % editFacts.length];
    let j = 0;
    editEl.textContent = "";
    const typing = setInterval(() => {
      if (j < current.length) {
        editEl.textContent += current[j++];
      } else {
        clearInterval(typing);
        setTimeout(() => {
          e++;
          typeEditFact();
        }, 4000);
      }
    }, 50);
  }
  typeEditFact();
}

document.addEventListener("DOMContentLoaded", () => {
  const codingLogos = document.querySelector(".logo-float");
  const designLogos = document.querySelector(".logo-float-design");
  const editLogos = document.querySelector(".logo-float-edit");

  const designSection = document.getElementById("designing");
  const editSection = document.getElementById("editing");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + window.innerHeight / 2;

    let designTop = 0, designBottom = 0;
    let editTop = 0, editBottom = 0;

    if (designSection) {
      designTop = designSection.offsetTop;
      designBottom = designTop + designSection.offsetHeight;
    }

    if (editSection) {
      editTop = editSection.offsetTop;
      editBottom = editTop + editSection.offsetHeight;
    }

    if (scrollY > editTop && scrollY < editBottom) {
      codingLogos?.classList.add("hidden");
      designLogos?.classList.add("hidden");
      editLogos?.classList.remove("hidden");
    } else if (scrollY > designTop && scrollY < designBottom) {
      codingLogos?.classList.add("hidden");
      designLogos?.classList.remove("hidden");
      editLogos?.classList.add("hidden");
    } else {
      codingLogos?.classList.remove("hidden");
      designLogos?.classList.add("hidden");
      editLogos?.classList.add("hidden");
    }

    const show = window.scrollY > window.innerHeight * 0.9;
    codingLogos?.style.setProperty("opacity", show ? "1" : "0");
    designLogos?.style.setProperty("opacity", show ? "1" : "0");
    editLogos?.style.setProperty("opacity", show ? "1" : "0");
  });
});
