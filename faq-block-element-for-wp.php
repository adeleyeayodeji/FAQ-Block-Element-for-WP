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

    public function __construct($slug)
    {

        $this->slug = $slug;
        add_action('enqueue_block_assets', array($this, 'enqueue_block_assets'));
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_block_editor_assets'));
    }

    function enqueue_block_assets()
    {
        wp_enqueue_style(
            $this->slug . '-style',
            plugin_dir_url(__FILE__) . 'build/style-index.css',
            array('wp-editor')
        );
    }

    function enqueue_block_editor_assets()
    {

        wp_enqueue_script(
            $this->slug,
            plugin_dir_url(__FILE__) . 'build/index.js',
            array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
            FAQ_BLOCK_ELEMENT_FOR_WP_VERSION
        );

        wp_enqueue_style(
            $this->slug . '-editor',
            plugin_dir_url(__FILE__) . 'build/index.css',
            array('wp-edit-blocks'),
            FAQ_BLOCK_ELEMENT_FOR_WP_VERSION
        );
    }
}

//init
new FAQBlockElementAdeleye('faq-block-element-for-wp');
