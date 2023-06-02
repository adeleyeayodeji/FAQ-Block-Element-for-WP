/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const { TextareaControl, Button, TextControl, Notice } = wp.components;

/**
 * Internal dependencies
 */
export default class Home extends Component {
  //remove all questions
  removeQuestions() {
    this.props.setAttributes({
      faqDatas: []
    });
    wp.data
      .dispatch("core/notices")
      .createNotice("success", "All questions have been removed", {
        type: "snackbar",
        isDismissible: true
      });
  }

  render() {
    const { attributes, setAttributes } = this.props;
    return (
      <div className="adeleye-faq-block-element">
        <TextControl
          label="Header Title"
          value={attributes.headerTitle}
          onChange={(headerTitle) => setAttributes({ headerTitle })}
          style={{ fontSize: "20px" }}
        />
        <div className="faq-questions-container">
          <div className="faq-questions-container--header">
            <p className="faq-questions-container--header--title">
              Add a question and answer
            </p>
            {attributes.faqDatas.length > 0 ? (
              <p
                className="faq-questions-container--header--remove"
                onClick={() => {
                  this.removeQuestions();
                }}>
                <span className="dashicons dashicons-trash"></span> Remove
                Questions
              </p>
            ) : null}
          </div>
          {attributes.faqDatas.map((faqData, index) => {
            return (
              <div className="faq-questions-container--single-faq">
                <TextControl
                  label="Question"
                  value={faqData.question}
                  placeholder="Question"
                  onChange={(question) => {
                    let faqDatas = attributes.faqDatas;
                    faqDatas[index].question = question;
                    setAttributes({ faqDatas });
                  }}
                />
                <TextareaControl
                  label="Answer"
                  value={faqData.answer}
                  placeholder="Answer"
                  onChange={(answer) => {
                    let faqDatas = attributes.faqDatas;
                    faqDatas[index].answer = answer;
                    setAttributes({ faqDatas });
                  }}
                />
                <p className="faq-questions-container--single-faq--remove">
                  <span className="dashicons dashicons-trash"></span> Remove
                  Question
                </p>
              </div>
            );
          })}
        </div>
        <Button
          isPrimary
          onClick={() => {
            setAttributes({
              faqDatas: attributes.faqDatas.concat({
                question: "",
                answer: ""
              })
            });
          }}>
          Add FAQ
        </Button>
      </div>
    );
  }
}
