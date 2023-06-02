import "./scss/style.scss";
import "./scss/editor.scss";
import Home from "./components/Home";
import { FrontEnd } from "./components/FrontEnd";

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;

registerBlockType("adeleyeayodeji/faq-block-element-for-wp", {
  title: __("FAQ Block", "faq-block-element-for-wp"),
  description: __(
    "Easily insert FAQ block into your post or page using the new FAQ block",
    "faq-block-element-for-wp"
  ),
  keywords: [
    __("faq block", "faq-block-element-for-wp"),
    __("faq", "faq-block-element-for-wp"),
    __("faq block element", "faq-block-element-for-wp"),
    __("faq", "faq-block-element-for-wp"),
    __("frequently asked questions", "faq-block-element-for-wp"),
    __("accordion", "faq-block-element-for-wp")
  ],
  category: "widgets",
  icon: "dashicons dashicons-editor-help",

  supports: {
    anchor: true,
    className: true
  },

  attributes: {
    headerTitle: {
      type: "string"
    },
    faqDatas: {
      type: "array",
      default: [
        {
          question: "",
          answer: ""
        }
      ]
    }
  },

  edit: function (props) {
    const { attributes } = props;
    return (
      <Fragment>
        <Home {...props} />
      </Fragment>
    );
  },

  save: function (props) {
    return <FrontEnd {...props} />;
  }
});
