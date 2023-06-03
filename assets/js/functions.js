/**
 * Toggle accordion
 * @author Adeleye Ayodeji
 * @version 1.0.0
 */
class AdeleyeAyodejiFAQBlocks {
  constructor() {
    //init on dom ready
    window.addEventListener("DOMContentLoaded", () => {
      //find .faq-block-element-for-wp-frontend
      this.parentElem = document.querySelector(
        ".faq-block-element-for-wp-frontend"
      );
      //if found
      if (this.parentElem) {
        //find .accordion-item button
        this.faqBlocks = this.parentElem.querySelectorAll(
          ".accordion-item button"
        );
        //loop through each
        this.faqBlocks.forEach((faqBlock) => {
          //add click event
          faqBlock.addEventListener("click", (e) => {
            //prevent default
            e.preventDefault();
            //toggle accordion item open/close
            this.toggleAccordion(faqBlock);
          });
        });
      }
    });
  }

  /**
   * Toggle accordion
   * @param {HTMLElement} element
   */
  toggleAccordion(element) {
    //get all accordion items
    let items = this.faqBlocks;
    //get current accordion item toggle state
    const itemToggle = element.getAttribute("aria-expanded");
    //loop through each accordion item
    for (let i = 0; i < items.length; i++) {
      //close all accordion items
      items[i].setAttribute("aria-expanded", "false");
    }
    //if current accordion item is closed
    if (itemToggle == "false") {
      //open current accordion item toggle
      element.setAttribute("aria-expanded", "true");
    }
  }
}

//init class and run on dom ready
new AdeleyeAyodejiFAQBlocks();
