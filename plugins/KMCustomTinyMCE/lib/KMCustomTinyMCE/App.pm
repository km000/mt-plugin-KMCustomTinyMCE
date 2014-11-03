package KMCustomTinyMCE::App;

use strict;
use warnings;
use MT::Util;

#use MT::Log;


sub add_custom_tmpl_code {
  my ( $cb, $app, $tmpl ) = @_;

  my $blog_id = 'blog:'.$app->blog->id;
  my $plugin = $app->component('KMCustomTinyMCE');
  my $plugin_data_ctmce_config_js_code = $plugin->get_config_value('plg_blg_kmctmce_config_js_code', $blog_id);
  my $plugin_data_ctmce_config_head_code = $plugin->get_config_value('plg_blg_kmctmce_config_head_code', $blog_id);

    $$tmpl .= <<__HTML__;
<mt:setvarblock name="js_include" append="1">
$plugin_data_ctmce_config_js_code
</mt:setvarblock>
<mt:setvarblock name="html_head" append="1">
$plugin_data_ctmce_config_head_code
</mt:setvarblock>
__HTML__

=comment
  my $log = MT::Log->new;
  $log->message( $$tmpl );
  $log->save or die $log->error;
=cut

}


1;