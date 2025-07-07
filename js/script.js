/***************************** */

const menu = document.querySelector(".toggle");
const gear = document.querySelector(".toggle .test");
const settingsBox = document.querySelector(".settings-box");

menu.addEventListener("click", () => {
  gear.classList.toggle("fa-spin");
  settingsBox.classList.toggle("open");
  // gear.classList.toggle("fa-spin");
});

let mainColor = localStorage.getItem("color-option");
if (mainColor !== null) {
  document.documentElement.style.setProperty(
    "--primary-color",
    localStorage.getItem("color-option")
  );
}

let randomBackgroundOption = true;

let thBackgroundintrval;

let backgroundLocalItem = localStorage.getItem("background-option");
document.addEventListener("DOMContentLoaded", function () {
  let backgroundLocalItem = localStorage.getItem("background_option");

  document.querySelectorAll(".cont span").forEach((span) => {
    span.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    document.querySelector(".yes").classList.add("active");
  } else {
    document.querySelector(".no").classList.add("active");
  }
});

let colorItems = document.querySelectorAll("li");

colorItems.forEach((li) => {
  li.addEventListener("click", (e) => {
    let selectedColor = e.target.dataset.color;
    document.documentElement.style.setProperty(
      "--primary-color",
      selectedColor
    );

    localStorage.setItem("color-option", e.target.dataset.color);
    e.target.parentElement.querySelectorAll(".active").forEach((el) => {
      handleActive(li);
      // el.classList.remove("active");
      // if (e.dataset.color === selectedColor) {
      //   e.target.classList.add("active");
      // }
    });
    //
    // e.target.classList.add("active");
  });
});

/******************start color-item*******************/

let colorItem = document.querySelectorAll(".cont span");

colorItem.forEach((span) => {
  span.addEventListener("click", (e) => {
    // إزالة الكلاس "active" من جميع العناصر داخل نفس العنصر الأب
    // e.target.parentElement.querySelectorAll(".active").forEach((el) => {
    //   el.classList.remove("active");
    // });

    // // إضافة كلاس "active" للعنصر المضغوط
    // e.target.classList.add("active");
    handleActive(span);

    if (e.target.dataset.background === "yes") {
      randomBackgroundOption = true;

      randomizeImgs();
      localStorage.setItem("background-option", true);
    } else {
      randomBackgroundOption = false;
      clearInterval(thBackgroundintrval);
      localStorage.setItem("background-option", false);
    }
  });
});

/******************start **landing-page*******************/
let landingPage = document.querySelector(".landing-page");

console.log(landingPage);
let randomBackground = [
  "../img/pexels-photo-303383.jpeg",
  "../img/pexels-markusspiske-177598.jpg",
  "../img/milky-way-starry-sky-night-sky-star-956981.jpeg",
  "../img/pexels-rafael-guajardo-194140-604684.jpg",
];
/***random background option** */
/***random background option** */
/***random background option** */
/***random background option** */
/***random background option** */
function randomizeImgs() {
  if (randomBackgroundOption === true) {
    thBackgroundintrval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * randomBackground.length);

      landingPage.style.backgroundImage =
        `url("img/` + randomBackground[randomNumber] + `  ")`;
    }, 1000);
  }
}

randomizeImgs();
/***random background option** */
/***random background option** */
/***random background option** */
/***random background option** */

//88888888888888888888888888888888///

window.onload = function () {
  let ourSkills = document.querySelector(".skills");

  window.addEventListener("scroll", function () {
    let skillsOffsetTop = ourSkills.offsetTop;
    let skillsOuterHeight = ourSkills.offsetHeight;
    let windowHeight = window.innerHeight;
    let windowScrollTop = window.pageYOffset;

    if (windowScrollTop >= skillsOffsetTop + skillsOuterHeight - windowHeight) {
      let allSkills = document.querySelectorAll(".skill-box .progress span");
      allSkills.forEach((skill) => {
        skill.style.width = skill.dataset.progress;
      });
    }
  });
};

/*cerate    popup*/

let ourGallery = document.querySelectorAll(".box-images img");

document.addEventListener("DOMContentLoaded", () => {
  ourGallery.forEach((img) => {
    img.addEventListener("click", (e) => {
      let overlay = document.createElement("div");
      overlay.classList = "popup";
      document.body.appendChild(overlay);
      let popupBox = document.createElement("div");

      /*88888888888888888888888*/
      if (img.alt !== null) {
        let imgHeading = document.createElement("h3");
        let imgText = document.createTextNode(img.alt);

        imgHeading.appendChild(imgText);
        popupBox.appendChild(imgHeading);
      }

      popupBox.className = "popup-box-img";
      let popupImg = document.createElement("img");
      popupImg.src = img.src;

      popupBox.appendChild(popupImg);

      document.body.appendChild(popupBox);

      let closBtn = document.createElement("span");
      let closBtnText = document.createTextNode("X");

      closBtn.appendChild(closBtnText);

      closBtn.className = "clos-btn";
      popupBox.appendChild(closBtn);
    });
  });
});

document.addEventListener("click", function (e) {
  if (e.target.className == "clos-btn") {
    e.target.parentNode.remove();

    document.querySelector(".popup").remove();
  }
});

/***start nav-pullets */
/***start nav-pullets */
/***start nav-pullets */
/***start nav-pullets */
/***start nav-pullets */
const navPullets = document.querySelectorAll(".nav-pullets");
const allSkills = document.querySelectorAll(".links a");

function scrollToSomewhere(element) {
  element.forEach((links) => {
    links.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollToSomewhere(allSkills);
scrollToSomewhere(navPullets);

/***sand nav-pullets */
/***sand nav-pullets */
/***sand nav-pullets */
/***sand nav-pullets */
/***sand nav-pullets */

function handleActive(ev) {
  e.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  e.target.classList.add("active");
}

// /*********** */
// let bulletsSpan = document.querySelectorAll(".cont span");
// let navBullets = document.querySelector(".nav-pullets");
// let itemBullets = localStorage.getItem("bullets-option");

// if (itemBullets !== null) {
//   bulletsSpan.forEach((span) => {
//     span.classList.remove("active");
//   });
//   if (itemBullets === "block") {
//     navBullets.style.display = "block";
//   } else {
//     navBullets.style.display = "none";
//   }
// }

// bulletsSpan.forEach((span) => {
//   span.addEventListener("click", (e) => {
//     if (span.dataset.display === "show") {
//       navBullets.style.display = "block";
//       localStorage.setItem("bullets");
//     } else {
//       navBullets.style.display = "none";
//     }
//   });
// });

let bulletsSpan = document.querySelectorAll(".cont span");
let navBullets = document.querySelector(".nav-pullets");
let itemBullets = localStorage.getItem("bullets-option");

// عند تحميل الصفحة، استرجع القيمة واحطها في مكانها
if (itemBullets !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");

    if (
      (itemBullets === "block" && span.dataset.display === "show") ||
      (itemBullets === "none" && span.dataset.display === "hide")
    ) {
      span.classList.add("active");
    }
  });

  navBullets.style.display = itemBullets;
}

// عند الضغط على span
bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    bulletsSpan.forEach((el) => el.classList.remove("active"));
    span.classList.add("active");

    if (span.dataset.display === "show") {
      navBullets.style.display = "block";
      localStorage.setItem("bullets-option", "block");
    } else {
      navBullets.style.display = "none";
      localStorage.setItem("bullets-option", "none");
    }
  });
});

/************************************* */
document.querySelector(".reset-box").onclick = function () {
  localStorage.clear();
  window.location.reload();
};
// window.addEventListener("DOMContentLoaded", function () {
//   const resetBtn = document.querySelector(".reset-box");
//   if (resetBtn) {
//     resetBtn.onclick = function () {
//       localStorage.clear();
//       window.location.reload();
//     };
//   }
// });

/******toggle menu***** */
// let toggleMenu = document.querySelector(".toggle-menu");
// let links = document.querySelector(".links");

// toggleMenu.onclick = function () {
//   this.classList.toggle("menu-active");
// };
let toggleMenu = document.querySelector(".toggle-menu");
let thLinks = document.querySelector(".links");

toggleMenu.onclick = function () {
  this.classList.toggle("menu-active");
  thLinks.classList.toggle("open");
};

document.addEventListener("click", (e) => {
  // لو الضغط مش داخل الزر ولا داخل القائمة
  if (!e.target.closest(".toggle-menu") && !e.target.closest(".links")) {
    if (thLinks.classList.contains("open")) {
      toggleMenu.classList.remove("menu-active");
      thLinks.classList.remove("open");
    }
  }
});
