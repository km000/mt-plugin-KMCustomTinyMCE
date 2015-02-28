
(function($) {
  var config   = MT.Editor.TinyMCE.config;
  var base_url = StaticURI + 'plugins/KMCustomTinyMCE/';
//
//ツールボタンの3行目に表示するコントロールの設定。
  buttons3 = (config.plugin_mt_wysiwyg_buttons3 || '')
    + ',fontsizeselect'
    + ',|'
    + ',sub,sup'
    + ',|'
    + ',charmap'
    + ',|'
    + ',tablecontrols';
//
  $.extend(config, {
//読み込むTinyMCE向けプラグインの設定。
    plugins: config.plugins + ',table',
//
//エディタの編集領域に読み込むスタイルの設定。
//    content_css: config.content_css + ',' + base_url + 'skin/content.css',
//
//ツールボタンの3行目に表示する項目の設定。
    plugin_mt_wysiwyg_buttons3 : buttons3,
//
//ツールボタンの見出しの選択肢の設定。
    theme_advanced_blockformats : "h2,h3,h4,p",
//
//ツールボタンのフォントサイズの選択肢の設定。
    theme_advanced_font_sizes : "10px,12px,14px,16px,24px,36px",
//
//入力時に改行が<p>にならないようにする。
    force_br_newlines : true,
    force_p_newlines : false,
    forced_root_block : '',
//
//挿入されるアイテムのURLをルート相対にする。
    convert_urls : true,
    relative_urls : false
  });
//
//>>ツールボタンよりtableを操作する機能の設定。
  $.extend(config.plugin_mt_inlinepopups_window_sizes, {
      'table/table.htm': {
          width: 600,
          height: 300
      },
      'table/row.htm': {
          width: 450,
          height: 300
      },
      'table/cell.htm': {
          width: 450,
          height: 300
      },
      'table/merge_cells.htm': {
          width: 250,
          height: 140
      }
  });
//

/*
//>> カスタムフィールドにTinyMCEを適用する
if( mtappVars.screen_id == 'edit-entry' ){
//
    // カスタムフィールドで追加したテキストエリアにTinyMCEを適用
    var _esm = MT.App.EditorStrategy.Multi;
    var _create = _esm.prototype.create;
    var _set = _esm.prototype.set;
//
    _esm.prototype.create = function(app, ids, format) {
        jQuery('textarea[id^="customfield_"]').each(function(i) {
            ids.push(this.id);
        });
        jQuery('textarea[id="excerpt"]').each(function(i) {
            ids.push(this.id);
        });
        _create.apply(this, arguments);
    };
//
}
//<<カスタムフィールドにTinyMCEを適用する
*/

})(jQuery);

