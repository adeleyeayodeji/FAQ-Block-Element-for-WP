import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
const { __ } = wp.i18n;
import { PanelBody, TextControl } from "@wordpress/components";
/**
 * Internal dependencies
 * Inspector controls
 * @param {*} props
 */
export default function Inspector(props) {
  const { attributes, setAttributes } = props;
  return (
    <InspectorControls>
      <PanelBody title={__("Settings", "faq-block-element-for-wp")}>
        <PanelColorSettings
          title={__("Header title color", "faq-block-element-for-wp")}
          colorSettings={[
            {
              label: __("Select a color", "faq-block-element-for-wp"),
              value: attributes.headertitleColor,
              onChange: (color) => {
                setAttributes({ headertitleColor: color });
              }
            }
          ]}
        />
        <TextControl
          label={__("FAQ Container Width", "faq-block-element-for-wp")}
          value={attributes.faqwidth}
          onChange={(value) => {
            setAttributes({ faqwidth: value });
          }}
        />
        <TextControl
          label={__("FAQ Container Padding", "faq-block-element-for-wp")}
          value={attributes.faqpadding}
          onChange={(value) => {
            setAttributes({ faqpadding: value });
          }}
        />
        <PanelColorSettings
          title={__("Inner header title color", "faq-block-element-for-wp")}
          colorSettings={[
            {
              label: __("Select a color", "faq-block-element-for-wp"),
              value: attributes.innerheadertitleColor,
              onChange: (color) => {
                setAttributes({ innerheadertitleColor: color });
              }
            }
          ]}
        />
        <PanelColorSettings
          title={__(
            "Inner header hover and active color",
            "faq-block-element-for-wp"
          )}
          colorSettings={[
            {
              label: __("Select a color", "faq-block-element-for-wp"),
              value: attributes.innerheaderhoveractiveColor,
              onChange: (color) => {
                setAttributes({ innerheaderhoveractiveColor: color });
              }
            }
          ]}
        />
        <PanelColorSettings
          title={__("Inner text color", "faq-block-element-for-wp")}
          colorSettings={[
            {
              label: __("Select a color", "faq-block-element-for-wp"),
              value: attributes.innertextColor,
              onChange: (color) => {
                setAttributes({ innertextColor: color });
              }
            }
          ]}
        />
      </PanelBody>
    </InspectorControls>
  );
}
