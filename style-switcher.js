// style switcher

const styleSwitcherToggle = () => {
  const styleSwitcher = document.querySelector(".js-style-switcher");
  const styleSwitcherToggle = document.querySelector(
    ".js-style-switcher-toggler"
  );

  styleSwitcherToggle.addEventListener("click", function () {
    styleSwitcher.classList.toggle("open");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-cog");
  });
};
styleSwitcherToggle();
// const themeColor = () => {
//   const hueSlider = document.querySelector(".js-hue-slider");
//   const html = document.querySelector("html");

//   const setHue = (value) => {
//     html.style.setProperty("--hue", value);
//     document.querySelector(".js-hue");
//     document.querySelector(".js-hue").innerHTML = value;
//   };

//   hueSlider.addEventListener("input", function () {
//     setHue(this.value);
//     // set user preference in local storage
//     localStorage.setItem("--hue", this.value);
//   });

//   const slider = (value) => {
//     hueSlider.value = value;
//   };

//   // check for saved user preference, if any, on load of the website
//   if (localStorage.getItem("--hue") != null) {
//     setHue(localStorage.getItem("--hue"));
//     slider(localStorage.getItem("--hue"));
//   } else {
//     //   default color
//     const hue = getComputedStyle(html).getPropertyValue("--hue");
//     setHue(hue);
//     slider(hue.replaceAll("-", ""));
//   }
// };

// themeColor();

//    const hue = getComputedStyle(html).getPropertyValue("--hue");
//    setHue(hue);
//    slider(hue.split("").join(""));

const themeColor = () => {
  const hueSlider = document.querySelector(".js-hue-slider");
  const html = document.querySelector("html");

  const setHue = (value) => {
    html.style.setProperty("--hue", value);
    document.querySelector(".js-hue").innerHTML = value;
  };

  hueSlider.addEventListener("input", () => {
    const value = hueSlider.value;
    setHue(value);
    localStorage.setItem("--hue", value);
  });

  const slider = (value) => {
    hueSlider.value = value;
  };

  const savedHue = localStorage.getItem("--hue");
  const defaultHue = getComputedStyle(html).getPropertyValue("--hue");
  const initialHue = savedHue || defaultHue;

  setHue(initialHue);
  slider(initialHue.replaceAll("-", ""));
};

themeColor();

// theme light and dark mode

const themeLightDark = () => {
  const darkModeCheckbox = document.querySelector(".js-dark-mode");

  const themeMode = () => {
    if (darkModeCheckbox.checked) {
      document.body.classList.add("t-dark");
      localStorage.setItem("theme-dark", "true");
    } else {
      document.body.classList.remove("t-dark");
      localStorage.setItem("theme-dark", "false");
    }
  };

  darkModeCheckbox.addEventListener("click", themeMode);

  // Check the user's preference on page load
  if (localStorage.getItem("theme-dark") === "true") {
    darkModeCheckbox.checked = true;
    themeMode();
  }

  // check for saved user prference if any on save of the website
  if (localStorage.getItem("theme-dark") !== null) themeMode();

  if (document.body.classList.contains("t-dark")) {
    darkModeCheckbox.checked = true;
  }
};

themeLightDark();
