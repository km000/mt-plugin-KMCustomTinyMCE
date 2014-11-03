(function($) {

var config   = MT.Editor.TinyMCE.config;
buttons3 = (config.plugin_mt_wysiwyg_buttons3 || '') + ',fontsizeselect';


$.extend(config, {
	plugin_mt_wysiwyg_buttons3 : buttons3,
	theme_advanced_blockformats : "h2,h3,h4,h5,h6,p,pre",
	theme_advanced_font_sizes : "10px,12px,14px,16px,24px,36px"
});

})(jQuery);
