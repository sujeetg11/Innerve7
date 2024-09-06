let nav = document.querySelector('.neww');
let hidden = document.querySelector('.hidden_nav');
let close = document.querySelector('.remove');
let link = document.querySelectorAll('.nav-link');
nav.addEventListener('click', function () {
        hidden.style.left = '0';
})
close.addEventListener('click',function(){
        hidden.style.left = '-100%';
})
link.forEach(function (link) {
        link.addEventListener('click',function(){
                hidden.style.left = '-100%';
        })
})


// images carousel
const track = document.getElementById("image-track");
track.addEventListener("mouseover",(e)=>{
document.onmousemove = e => {
    const x = (e.clientX / window.innerWidth)*100;

    track.animate({
          transform: `translateX(-${100-x}%)`
        }, { duration: 3000, fill: "forwards" });

    for(const image of track.getElementsByClassName("image")) {
      image.animate({
          objectPosition: `${100-x}% center`
      }, { duration: 1200, fill: "forwards" });
      }
}

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
track.dataset.mouseDownAt = "0";  
track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
if(track.dataset.mouseDownAt === "0") return;

const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

track.dataset.percentage = nextPercentage;

track.animate({
  transform: `translateX(${nextPercentage}%)`
}, { duration: 1200, fill: "forwards" });

for(const image of track.getElementsByClassName("image")) {
  image.animate({
    objectPosition: `${100 + nextPercentage}% center`
  }, { duration: 1200, fill: "forwards" });
}
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

})
// FAQ JS

(function timer() {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  
  
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy,
      dayMonth = "3/11/",
      birthday = dayMonth + yyyy;
  
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
  
    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
  
        const now = new Date().getTime(),
          distance = countDown - now;
            // console.log(distance/(day));
        document.getElementById("days").innerText = pad(Math.floor(distance / (day)));
        document.getElementById("hours").innerText = pad(Math.floor((distance % (day)) / (hour)));
        document.getElementById("minutes").innerText = pad(Math.floor((distance % (hour)) / (minute)));
        document.getElementById("seconds").innerText = pad(Math.floor((distance % (minute)) / second));
  
        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "Event is over now!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

function pad(number) {
    return ("0" + number).slice(-2);
}


// FAQ JS FINISH

// JS for time line---------------------------------------- 

var circle1 = document.getElementById('circle1');
var circle2 = document.getElementById('circle2');
var x = new Date();
if (x.getDate() >= 15 && x.getDate() <= 31 && x.getMonth() == 11) {
    // circle1.style.backgroundColor = 'green';
    // circle1.style.fontWeight = "bold";
    circle1.style.borderStyle = "solid";
    // circle1.style.css({
    //     "background": "green"
        
    // })
    // circle1.setAttribute("style", " border:red 1px solid;background:#4AE5EF content-box; z-index:5; font-weight:bold")
    circle1.setAttribute("style", "background: #2590F2;border: 3px solid #FAFAFD;box-shadow: 1px 0px 2px #2590F2, -1px 0px 2px #2A966F;")    
    
}
else if (x.getDate() >= 1 && x.getDate() <= 15 && x.getTime() == 0) {
    circle2.style.borderStyle = "solid";
    circle2.setAttribute("style", " border:red 1px solid;background:#7561FF content-box; z-index:5; font-weight:bold")
}

else if (x.getDate() >= 1 && x.getDate() <= 15 && x.getTime() == 0) {
    circle3.style.borderStyle = "solid";
    circle3.setAttribute("style", " border:red 1px solid;background:#2A966F content-box; z-index:5; font-weight:bold")
}

else if (x.getDate() >= 1 && x.getDate() <= 15 && x.getTime() == 0) {
    circle4.style.borderStyle = "solid";
    circle4.setAttribute("style", " border:red 1px solid;background:#2590F2 content-box; z-index:5; font-weight:bold")
}

else if (x.getDate() >= 1 && x.getDate() <= 15 && x.getTime() == 0) {
    circle5.style.borderStyle = "solid";
    circle5.setAttribute("style", " border:red 1px solid;background:#F72585 content-box; z-index:5; font-weight:bold")
}

else if (x.getDate() >= 1 && x.getDate() <= 15 && x.getTime() == 0) {
    circle6.style.borderStyle = "solid";
    circle6.setAttribute("style", " border:red 1px solid;background:#A8DE45 content-box; z-index:5; font-weight:bold")
}

else if (x.getDate() >= 1 && x.getDate() <= 15 && x.getTime() == 0) {
    circle7.style.borderStyle = "solid";
    circle7.setAttribute("style", " border:red 1px solid;background:#4AE5EF content-box; z-index:5; font-weight:bold")
}

else if (x.getDate() >= 1 && x.getDate() <= 15 && x.getTime() == 0) {
    circle8.style.borderStyle = "solid";
    circle8.setAttribute("style", " border:red 1px solid;background:#7561FF content-box; z-index:5; font-weight:bold")
}

else if (x.getDate() >= 1 && x.getDate() <= 15 && x.getTime() == 0) {
    circle9.style.borderStyle = "solid";
    circle9.setAttribute("style", " border:red 1px solid;background:#4AE5EF content-box; z-index:5; font-weight:bold")
}

// -----------------------------------------------------------------------------------------------------------------

const $ = str => document.querySelector(str);
const $$ = str => document.querySelectorAll(str);



jQuery(document).ready(function($) {
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});
     
// --------------------------------------------------------------------------------------------------------------


