import "./../scss/editor.scss";
import { Fragment } from "@wordpress/element";
import Inspector from "./Inspector";
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
    let { attributes, setAttributes } = this.props;
    return (
      <Fragment>
        <Inspector {...this.props} />
        <div className="adeleye-faq-block-element">
          <TextControl
            label="Header Title"
            placeholder="Header Title"
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
                    label="Question:"
                    value={faqData.question}
                    placeholder="Question"
                    onChange={(question) => {
                      let faqDatasNew = [...this.props.attributes.faqDatas]; // Create a new array instead of referencing the existing one
                      faqDatasNew[index] = {
                        ...faqDatasNew[index],
                        question: question
                      }; // Update the specific item in the array
                      setAttributes({ faqDatas: faqDatasNew });
                    }}
                  />
                  <TextareaControl
                    label="Answer:"
                    value={faqData.answer}
                    placeholder="Answer"
                    onChange={(answer) => {
                      let faqDatasNew = [...this.props.attributes.faqDatas]; // Create a new array instead of referencing the existing one
                      faqDatasNew[index] = {
                        ...faqDatasNew[index],
                        answer: answer
                      }; // Update the specific item in the array
                      setAttributes({ faqDatas: faqDatasNew });
                    }}
                  />
                  <p
                    className="faq-questions-container--single-faq--remove"
                    onClick={() => {
                      let faqDatasNew = [...this.props.attributes.faqDatas]; // Create a new array instead of referencing the existing one
                      faqDatasNew.splice(index, 1); // Remove the specific element from the array
                      setAttributes({ faqDatas: faqDatasNew });
                      //toast
                      wp.data
                        .dispatch("core/notices")
                        .createNotice("success", "Question has been removed", {
                          type: "snackbar",
                          isDismissible: true
                        });
                    }}>
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
      </Fragment>
    );
  }
}
