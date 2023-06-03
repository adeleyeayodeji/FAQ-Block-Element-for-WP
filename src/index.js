import "./scss/style.scss";
import "./scss/editor.scss";
import Home from "./components/Home";

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 * Register block
 */
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
      type: "string",
      default: "Frequently Asked Questions"
    },
    faqDatas: {
      type: "array",
      default: [
        {
          question: "",
          answer: ""
        }
      ]
    },
    headertitleColor: {
      type: "string",
      default: "#333333"
    },
    faqwidth: {
      type: "string",
      default: "48rem"
    },
    faqpadding: {
      type: "string",
      default: "4rem"
    },
    innerheadertitleColor: {
      type: "string",
      default: "#7288a2"
    },
    innerheaderhoveractiveColor: {
      type: "string",
      default: "#03b5d2"
    },
    innertextColor: {
      type: "string",
      default: "#4d5974"
    }
  },
  /**
   * Edit the attributes and markup
   * @param {*} props
   * @returns
   */
  edit: function (props) {
    const { attributes } = props;
    return (
      <Fragment>
        <Home {...props} />
      </Fragment>
    );
  },
  /**
   * Save the attributes and markup
   * @param {*} props
   * @returns
   */
  save: function (props) {
    return null;
  }
});
