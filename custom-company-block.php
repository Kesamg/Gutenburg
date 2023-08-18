<?php
/**
*Plugin Name: Company Gutenberg Blocks
*Description: Custom Company Details Block
*Author: Kesiena
*Version: 1.0.0
*/

function company_block_script_register () {
    wp_enqueue_script('company-block',
    plugin_dir_url(__FILE__).'company-block.js',
    array('wp-blocks','wp-i18n','wp-editor'),
    true,false
);
}
add_action ('enqueue_block_editor_assets','company_block_script_register');

?>