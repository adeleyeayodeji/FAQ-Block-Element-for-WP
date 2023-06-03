<?php
//security
if (!defined('ABSPATH')) {
    exit('You must not access this file directly.');
}
?>
<style>
    .faq-block-element-for-wp-frontend .container h2 {
        color: <?php echo isset($headertitleColor) ? esc_html($headertitleColor) : '#333333'; ?> !important;
    }

    .faq-block-element-for-wp-frontend .container {
        width: <?php echo isset($faqwidth) ? esc_html($faqwidth) : '48rem'; ?> !important;
        padding: <?php echo isset($faqpadding) ? esc_html($faqpadding) : '4rem'; ?> !important;
    }

    .faq-block-element-for-wp-frontend .accordion button {
        color: <?php echo isset($innerheadertitleColor) ? esc_html($innerheadertitleColor) : '#7288a2'; ?> !important;
    }

    .faq-block-element-for-wp-frontend .accordion button:hover,
    .faq-block-element-for-wp-frontend .accordion button:focus {
        color: <?php echo isset($innerheaderhoveractiveColor) ? esc_html($innerheaderhoveractiveColor) : '#03b5d2'; ?> !important;
    }

    .faq-block-element-for-wp-frontend .accordion button:hover::after,
    .faq-block-element-for-wp-frontend .accordion button:focus::after {
        color: <?php echo isset($innerheaderhoveractiveColor) ? esc_html($innerheaderhoveractiveColor) : '#03b5d2'; ?> !important;
    }

    .faq-block-element-for-wp-frontend .accordion .accordion-item .accordion-content p {
        color: <?php echo isset($innertextColor) ? esc_html($innertextColor) : '#4d5974'; ?> !important;
    }
</style>
<div class="faq-block-element-for-wp-frontend">
    <div class="container">
        <h2><?php echo isset($headerTitle) ? esc_html($headerTitle) : 'Frequently Asked Questions'; ?></h2>
        <div class="accordion">
            <?php
            foreach ($faqDatas as $index => $faqData) :
            ?>
                <div class="accordion-item">
                    <button id="accordion-button-<?php echo esc_attr($index); ?>" aria-expanded="false">
                        <span class="accordion-title"><?php echo esc_html($faqData['question']); ?></span>
                        <span class="icon" aria-hidden="true"></span>
                    </button>
                    <div class="accordion-content">
                        <p><?php echo esc_html($faqData['answer']); ?></p>
                    </div>
                </div>
            <?php
            endforeach;
            ?>
        </div>
    </div>
</div>