import "./../scss/style.scss";
/**
 * @author Adeleye Ayodeji
 * @function FrontEnd
 **/

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }

  console.log(this);
}

export const FrontEnd = (props) => {
  const { attributes } = props;
  return (
    <div className="faq-block-element-for-wp-frontend">
      <div className="container">
        <h2> {attributes.headerTitle}</h2>
        <div className="accordion">
          {attributes.faqDatas.map((faqData, index) => {
            return (
              <div className="accordion-item">
                <button
                  id={"accordion-button-" + index}
                  aria-expanded="false"
                  onClick={toggleAccordion}>
                  <span className="accordion-title">{faqData.question}</span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>{faqData.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
