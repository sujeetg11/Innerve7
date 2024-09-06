faqToggler = () => {
    var faq = document.getElementsByClassName("faq-questions-main");
    [...faq[0].children].forEach(element => {
      element.addEventListener("click", () => {
        //To Remove active state from previous elements
        [...faq[0].children].forEach(el => {
          if (el.children[0].classList.contains("active")) {
            el.children[0].classList.remove("active");
            el.children[1].children[0].classList.remove("active");
          }
        });
  
        //To add  active state to current element
        element.children[0].classList.add("active");
  
        //mobile view
        if (element.children[1].children[0].classList.contains("active")) {
          element.children[1].children[0].classList.remove("active");
        }
        else {
          element.children[1].children[0].classList.add("active");
        }
  
        //laptop view
        var i = 0;
        var j = 0;
        //To get the access of current active element
        [...faq[0].children].forEach(el => {
          if (el.children[0].classList.contains("active")) {
            j = i;
          }
          i++;
        });
        //Removing previous active elements
        for (var k = 0; k < 8; k++) {
          if (element.parentElement.parentElement.nextElementSibling.children[0].children[k].classList.contains("active")) {
            element.parentElement.parentElement.nextElementSibling.children[0].children[k].classList.remove("active");
          }
        }
        element.parentElement.parentElement.nextElementSibling.children[0].children[j].classList.add("active");
      })
  
    });
  }
  
faqToggler();
