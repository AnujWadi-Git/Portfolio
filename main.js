document.addEventListener("DOMContentLoaded", () => {
  // LOCK SCROLL INITIALLY
  document.body.classList.add("lock-scroll");

  // PRELOADER TYPE EFFECT
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

  // === FACT TYPEWRITERS ===

  const handleFacts = (elementId, factArray) => {
    const el = document.getElementById(elementId);
    if (!el) return;

    let index = 0;
    function typeNext() {
      const text = factArray[index % factArray.length];
      let char = 0;
      el.textContent = "";
      const typing = setInterval(() => {
        if (char < text.length) {
          el.textContent += text[char++];
        } else {
          clearInterval(typing);
          setTimeout(() => {
            index++;
            typeNext();
          }, 4000);
        }
      }, 50);
    }
    typeNext();
  };

  handleFacts("coding-fact-text", [
    "The first computer programmer was Ada Lovelace — in the 1800s.",
    "A typo in code once caused a $1B rocket to self-destruct.",
    "JavaScript was created in just 10 days.",
    "The first computer bug was literally a bug (a moth)."
  ]);

  handleFacts("design-fact-text", [
    "Design isn’t how it looks. It’s how it works. – Steve Jobs",
    "Figma was launched in 2016 and changed everything.",
    "Color theory can literally change how users feel.",
    "Design is thinking made visual."
  ]);

  handleFacts("edit-fact-text", [
    "Every cut you skip took me 3 coffee refills.",
    "Video editing is 10% cutting and 90% playback.",
    "Premiere crashed? That means I’m on the right track.",
    "My timelines look like art installations."
  ]);

  handleFacts("entre-fact-text", [
    "Entrepreneurship is my version of 'why not?'",
    "Ideas don’t wait for business hours.",
    "Side hustles are my cardio.",
    "This site? Yeah, it's a startup too."
  ]);

  // === FLOATING LOGO SCROLL LOGIC ===

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + window.innerHeight / 2;

    const sections = {
      coding: {
        section: document.getElementById("coding"),
        logo: document.querySelector(".logo-float")
      },
      designing: {
        section: document.getElementById("designing"),
        logo: document.querySelector(".logo-float-design")
      },
      editing: {
        section: document.getElementById("editing"),
        logo: document.querySelector(".logo-float-edit")
      },
      entrepreneurship: {
        section: document.getElementById("entrepreneurship"),
        logo: document.querySelector(".logo-float-entre")
      },
      orgs: {
        section: document.getElementById("orgs"),
        logo: document.querySelector(".logo-float-orgs")
      }
    };

    // Hide all first
    Object.values(sections).forEach(({ logo }) => logo?.classList.add("hidden"));

    // Then show the one in view
    Object.entries(sections).forEach(([key, { section, logo }]) => {
      if (!section || !logo) return;

      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollY > top && scrollY < bottom) {
        logo.classList.remove("hidden");
      }
    });

    // Fade in effect after landing page
    const show = window.scrollY > window.innerHeight * 0.9;
    Object.values(sections).forEach(({ logo }) => {
      logo?.style.setProperty("opacity", show ? "1" : "0");
    });
  });
});

// SCROLL TO ABOUT SECTION
function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// At end of main.js
console.log("You made it to the multiverse's end. Welcome to the easter zone 🐸");

// Reveal outro when user scrolls to bottom
window.addEventListener("scroll", () => {
  const outro = document.getElementById("outro");
  const triggerPoint = window.scrollY + window.innerHeight;
  if (triggerPoint > outro.offsetTop + 100) {
    outro.classList.add("reveal-outro");
  }
});

// 👀 Easter egg key trigger (press "M" for multiverse mode)
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "m") {
    alert("🚀 Welcome to Multiverse Mode: You just unlocked the chaos core.");
    document.body.style.background = "#111";
    document.body.style.transition = "background 1s ease";
  }
});


// Page 8: Reveal Outro on Scroll
window.addEventListener("scroll", () => {
  const outro = document.getElementById("outro");
  const triggerPoint = window.scrollY + window.innerHeight;
  if (triggerPoint > outro.offsetTop + 100) {
    outro.classList.add("reveal-outro");
  }
});

// Easter Egg: Press "M" for Multiverse Mode
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "m") {
    alert("🚀 Welcome to Multiverse Mode: Chaos Unlocked!");
    document.body.style.background = "#111";
    document.body.style.transition = "background 1s ease";
  }
});


// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scroll-progress-bar").style.width = scrollPercent + "%";
});

// Dark Mode Toggle
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});


// Custom Cursor Logic
const cursor = document.querySelector(".custom-cursor");
const orb = document.querySelector(".cursor-orb");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  orb.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});
