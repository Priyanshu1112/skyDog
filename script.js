const s1Banner = document.querySelector(".s1-banner");

//nav show and hide
var prevScrollpos = document.querySelector(".main-container").scrollTop;
document.querySelector(".main-container").onscroll = function () {
  // console.log("called scroll", prevScrollpos);
  var currentScrollPos = document.querySelector(".main-container").scrollTop;
  // console.log(currentScrollPos);
  if (prevScrollpos > currentScrollPos) {
    // console.log("down");
    document.querySelector("nav").style.top = "0vh";
  } else {
    // console.log("up");
    document.querySelector("nav").style.top = "-10vh";
  }
  prevScrollpos = currentScrollPos;
};

// inserting image into banner of section 1
for (var i = 0; i < 7; i++) {
  s1Banner.innerHTML += `<div>
  <img class='s1-banner-img' src="assests/images/s1Banner${i + 1}.png" alt="">
</div>`;
}

//gsap on section1

//gsap on video
gsap.from(".video-container video", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".video-container video",
    scroller: ".main-container",
    start: "top 0%",
    end: "bottom 70%",
    scrub: 1,
    // //markers: true,
  },
});

//gsap on s1-banner
const s1BannerImg = document.querySelectorAll(".s1-banner-img");

if (window.matchMedia("(max-width: 768px)").matches) {
  // Apply animation for screens with max-width: 768px
  gsap.to(s1BannerImg, {
    /* your animation properties here */
    opacity: 1,
    bottom: 0,
    stagger: 0.2,
    delay: 0.3,
  });
} else {
  // Apply animation for screens wider than 768px
  gsap.to(s1BannerImg, {
    opacity: 1,
    bottom: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".s1-banner",
      scroller: ".main-container",
      scrub: 3,
      // //markers: true,
      start: "top 70%",
      end: "bottom 50%",
    },
  });
}

// gsap.to(s1BannerImg, {
//   opacity: 1,
//   bottom: 0,
//   stagger: 0.1,
//   scrollTrigger: {
//     trigger: ".s1-banner",
//     scroller: ".main-container",
//     scrub: 3,
//     // //markers: true,
//     start: "top 70%",
//     end: "bottom 50%",
//   },
// });

// gsap on s1-text

if (window.matchMedia("(max-width: 768px)").matches) {
  // Apply animation for screens with max-width: 768px
  gsap.from(".s1-text h1", {
    opacity: 0,
    y: 20,
    delay: 0.5,
  });
} else {
  // Apply animation for screens wider than 768px
  gsap.from(".s1-text h1", {
    opacity: 0,
    y: 20,
    scrollTrigger: {
      // //markers: true,
      trigger: ".s1-text h1",
      scroller: ".main-container",
      scrub: 1,
      start: "top 80%",
      end: "bottom 60%",
    },
  });
}

// gsap.from(".s1-text h1", {
//   opacity: 0,
//   y: 20,
//   scrollTrigger: {
//     // //markers: true,
//     trigger: ".s1-text h1",
//     scroller: ".main-container",
//     scrub: 1,
//     start: "top 80%",
//     end: "bottom 60%",
//     // onEnter: () => {
//     //   document.querySelector("nav").style.background = "#000";
//     // },
//     // onExit: () => {
//     //   document.querySelector("nav").style.background = "transparent";
//     // },
//     // onUpdate: (self) => {
//     //   if (self.direction === 1) {
//     //     isScrollingDown = true;
//     //   } else if (self.direction === -1) {
//     //     isScrollingDown = false;
//     //   }

//     //   if (isScrollingDown) {
//     //     document.querySelector("nav").style.background = "#000";
//     //   } else {
//     //     document.querySelector("nav").style.background = "transparent";
//     //   }
//     // },
//   },
// });

if (window.matchMedia("(max-width: 768px)").matches) {
  // Apply animation for screens with max-width: 768px
  gsap.from(".s1-text p", {
    opacity: 0,
    y: 20,
    delay: 0.7,
  });
} else {
  // Apply animation for screens wider than 768px
  gsap.from(".s1-text p", {
    opacity: 0,
    y: 20,
    scrollTrigger: {
      // //markers: true,
      trigger: ".s1-text p",
      scroller: ".main-container",
      scrub: 1,
      start: "top 95%",
      end: "bottom 85%",
    },
  });
}

gsap.from(".s1-text .btn2", {
  opacity: 0,
  y: 20,
  scrollTrigger: {
    // //markers: true,
    trigger: ".s1-text .btn2",
    scroller: ".main-container",
    scrub: 1,
    start: "top 100%",
    end: "bottom 95%",
  },
});

// -------------SECTION2--------------------------
gsap.from(".s2-left div img", {
  opacity: 0,
  rotate: 20,
  x: -200,
  scrollTrigger: {
    trigger: ".s2-left div img",
    scroller: ".main-container",
    scrub: 1,
    //markers: true,
    start: "top 90%",
    end: "bottom 80%",
  },
});

gsap.from(".s2-right h1", {
  opacity: 0,
  x: 200,

  scrollTrigger: {
    trigger: ".s2-right h1",
    scroller: ".main-container",
    scrub: 1,
    //markers: true,
    start: "top 90%",
    end: "bottom 80%",
  },
});

gsap.from(".s2-right p", {
  opacity: 0,
  x: 200,
  scrollTrigger: {
    trigger: ".s2-right p",
    scroller: ".main-container",
    scrub: 1,
    //markers: true,
    start: "top 90%",
    end: "bottom 80%",
  },
});

if (window.matchMedia("(max-width:768px)").matches) {
  gsap.from(".s2-right .btn2", {
    opacity: 0,
    x: 200,
    scrollTrigger: {
      trigger: ".s2-right .btn2",
      scroller: ".main-container",
      scrub: 1,
      // markers: true,
      start: "top 95%",
      end: "bottom 85%",
    },
  });
} else {
  gsap.from(".s2-right .btn2", {
    opacity: 0,
    x: 200,
    scrollTrigger: {
      trigger: ".s2-right .btn2",
      scroller: ".main-container",
      scrub: 1,
      //markers: true,
      start: "top 90%",
      end: "bottom 80%",
    },
  });
}

// --------------SECTION3------------------------

const s3Top = document.querySelector(".section3 .s3-top");
const s3Bottom = document.querySelector(".section3 .s3-bottom");
for (let i = 1; i < 5; i++) {
  s3Top.innerHTML += `<div class="card">
  <div class="card-title">
    <div>
      <img src="assests/images/Avtar.png" alt="" />
      <p>@artist_101</p>
    </div>
    <div class="filler"></div>
    <button>Rare</button>
  </div>
  <div class="nft">
  <img src="assests/images/NFT${i}.png" alt="">  
  </div>
  <div class="card-bottom">
    <p class="nft-name">SkyDog 409</p>
    <p>#303030</p>
  </div>
</div>`;
}
for (let i = 5; i < 9; i++) {
  s3Bottom.innerHTML += `<div class="card">
  <div class="card-title">
   <div> 
      <img src="assests/images/Avtar.png" alt="" />
        <p>@artist_101</p>
    </div>
    <button>Rare</button>
  </div>
  <div class="nft">
  <img src="assests/images/NFT${i}.png" alt="">  
  </div>
  <div class="card-bottom">
    <p class="nft-name">SkyDog 409</p>
    <p>#303030</p>
  </div>
</div>`;
}

const s3CardsTop = document.querySelectorAll(".section3 .s3-top .card");
const s3CardsBottom = document.querySelectorAll(".section3 .s3-bottom .card");

gsap.from(s3CardsTop, {
  y: 50,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".s3-top",
    scroller: ".main-container",
    scrub: 2,
    // markers: true,
    start: "top 90%",
    end: "bottom 60%",
  },
});

gsap.from(s3CardsBottom, {
  y: 50,
  opacity: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".s3-bottom",
    scroller: ".main-container",
    scrub: 2,
    // markers: true,
    start: "top 90%",
    end: "bottom 70%",
  },
});

// ----------------SECTION4---------------------
const s4TextInnerElements = document.querySelectorAll(".s4-text>*:not(.btn2");
// console.log(s4TextInnerElements);
gsap.from(s4TextInnerElements, {
  x: -200,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".s4-text",
    scroller: ".main-container",
    scrub: 2,
    // markers: true,
    end: "bottom 50%",
  },
});
gsap.from(".s4-text button", {
  x: -200,
  opacity: 0,
  scrollTrigger: {
    trigger: ".s4-text button",
    scroller: ".main-container",
    scrub: 2,
    // markers: true,
    start: "top 90%",
    end: "bottom 80%",
  },
});

gsap.from(".s4-banner img", {
  scaleY: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: ".section4",
    scroller: ".main-container",
    scrub: 2,
    // markers: true,
    start: "top 90%",
    end: "bottom 100%",
  },
});

//-------------------SECTION5--------------------
const starFilled = `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44" fill="none">
<path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#AAAAAA"/>
</svg>`;
const starOutline = `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44" fill="none">
<path d="M23 1.61804L27.9128 16.7381L28.0251 17.0836H28.3883H44.2865L31.4246 26.4283L31.1307 26.6418L31.243 26.9873L36.1558 42.1074L23.2939 32.7627L23 32.5491L22.7061 32.7627L9.84421 42.1074L14.757 26.9873L14.8693 26.6418L14.5754 26.4283L1.71349 17.0836H17.6117H17.9749L18.0872 16.7381L23 1.61804Z" stroke="#AAAAAA"/>
</svg>`;
const textFilled = `<p>
               ${starFilled} $0.15 sKYDOG PRICE ${starFilled} 1.98M 24H VOLUME ${starFilled} 133.66M FULLY DILUTED MARKET CAP ${starFilled} 35M CIRCULATING SYPPLY ${starFilled} 
              </p>`;
const textOutline = `<p>
${starOutline} $0.15 sKYDOG PRICE ${starOutline} 1.98M 24H VOLUME ${starOutline} 133.66M FULLY DILUTED MARKET CAP ${starOutline} 35M CIRCULATING SYPPLY ${starOutline} 
</p>`;

document.querySelector(".section5").innerHTML = `${textFilled}
${textOutline}
${textFilled}
${textOutline}`;

gsap.to(".section5 p:nth-child(odd)", {
  x: "-100%",
  // duration: 20,
  // repeat: -1,
  scrollTrigger: {
    trigger: ".section5",
    scroller: ".main-container",
    scrub: 2,
    // start: "top 50%",
    // markers: true,
  },
});

gsap.from(".section5 p:nth-child(even)", {
  x: "-100%",
  // duration: 20,
  // repeat: -1,
  scrollTrigger: {
    trigger: ".section5",
    scroller: ".main-container",
    scrub: 2,
    // markers: true,
  },
});

// -------------SECTION6--------------------
const s6InnerHtml = document.querySelectorAll(".section6 > *:not(div)");
const img6 = document.querySelector(".section6 img");

document.querySelector(".section6").addEventListener("mousemove", (e) => {
  let posX = e.clientX - img6.getBoundingClientRect().left;
  let posY = e.clientY - img6.getBoundingClientRect().top;

  posX = posX < 0 ? Math.max(posX, -100) : Math.min(posX, 100);
  posY = posY < 0 ? Math.max(posY, -100) : Math.min(posY, 100);

  img6.style.transform = `translate(${posX}px, ${posY}px)`;
});

gsap.from(s6InnerHtml, {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".section6",
    scroller: ".main-container",
    scrub: 2,
    // markers: true,
    start: "top 60%",
    end: "bottom 70%",
  },
});

gsap.from(".section6 div img", {
  y: 80,
  opacity: 0,
  // stagger: 0.2,
  scrollTrigger: {
    trigger: ".section6 div img",
    scroller: ".main-container",
    scrub: 2,
    // markers: true,
    start: "top 90%",
    end: "bottom 100%",
  },
});

// ---------SECTION7---------------
const s7InnerHtml = document.querySelectorAll(".section7 > *:not(footer)");
gsap.from(s7InnerHtml, {
  y: 50,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".section7",
    scroller: ".main-container",
    scrub: 2,
    // markers: true,
    start: "top 95%",
    end: "bottom 90%",
  },
});
