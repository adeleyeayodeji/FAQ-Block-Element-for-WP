<?php

/*
Plugin Name: FAQ Block Element for WP
Description: Easily insert FAQ into the block editor.
Plugin URI: https://wordpress.org/plugins/faq-block-element-for-wp/
Author: Adeleye Ayodeji
Version: 1.0.0
Author URI: http://adeleyeayodeji.com
License: GPLv2 or later
Text Domain: faq-block-element-for-wp
*/

//security
if (!defined('ABSPATH')) {
    exit('You must not access this file directly.');
}

define('FAQ_BLOCK_ELEMENT_FOR_WP_VERSION', time());
define('FAQ_BLOCK_ELEMENT_FOR_WP_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('FAQ_BLOCK_ELEMENT_FOR_WP_PLUGIN_URL', plugin_dir_url(__FILE__));
define('FAQ_BLOCK_ELEMENT_FOR_WP_PLUGIN_BASENAME', plugin_basename(__FILE__));
define('FAQ_BLOCK_ELEMENT_FOR_WP_PLUGIN_TEXT_DOMAIN', 'faq-block-element-for-wp');

/*
 * Init plugin
 */

class FAQBlockElementAdeleye
{

    private $slug;

    /**
     * Constructor
     * @param string $slug
     */
    public function __construct($slug)
    {

        $this->slug = $slug;
        add_action('init', array($this, 'enqueue_block_editor_assets'));
    }

    /**
     * Enqueue block editor assets
     * @return void
     */
    function enqueue_block_editor_assets()
    {

        wp_register_script(
            $this->slug,
            plugin_dir_url(__FILE__) . 'build/index.js',
            array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
            FAQ_BLOCK_ELEMENT_FOR_WP_VERSION
        );

        //register functions.js file
        wp_enqueue_script(
            $this->slug . '-functions-data',
            plugin_dir_url(__FILE__) . 'assets/js/functions.js',
            array('jquery'),
            FAQ_BLOCK_ELEMENT_FOR_WP_VERSION
        );

        wp_enqueue_style(
            $this->slug . '-editor',
            plugin_dir_url(__FILE__) . 'build/index.css',
            array(),
            FAQ_BLOCK_ELEMENT_FOR_WP_VERSION
        );

        wp_enqueue_style(
            $this->slug . '-style',
            plugin_dir_url(__FILE__) . 'build/style-index.css',
            array()
        );

        register_block_type('adeleyeayodeji/' . $this->slug, [
            'editor_script' => $this->slug,
            'render_callback' => array($this, 'render_callback'),
        ]);
    }

    /**
     * Render callback for the block
     * @param array $attributes
     */
    public function render_callback($attributes)
    {
        ob_start();
        // extract attributes
        extract($attributes);
        include_once FAQ_BLOCK_ELEMENT_FOR_WP_PLUGIN_DIR . 'templates/faq-block.php';
        return ob_get_clean();
    }
}

//init
new FAQBlockElementAdeleye('faq-block-element-for-wp');
