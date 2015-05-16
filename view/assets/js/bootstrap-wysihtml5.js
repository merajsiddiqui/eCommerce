!function(e,t){"use strict";var n={"font-styles":function(e,t){var n=t&&t.size?" btn-"+t.size:"";return"<li class='dropdown'>"+"<a class='btn dropdown-toggle"+n+"' data-toggle='dropdown' href='#'>"+"<i class='icon-font'></i>&nbsp;<span class='current-font'>"+e.font_styles.normal+"</span>&nbsp;<b class='caret'></b>"+"</a>"+"<ul class='dropdown-menu'>"+"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='div' tabindex='-1'>"+e.font_styles.normal+"</a></li>"+"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h1' tabindex='-1'>"+e.font_styles.h1+"</a></li>"+"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h2' tabindex='-1'>"+e.font_styles.h2+"</a></li>"+"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h3' tabindex='-1'>"+e.font_styles.h3+"</a></li>"+"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h4'>"+e.font_styles.h4+"</a></li>"+"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h5'>"+e.font_styles.h5+"</a></li>"+"<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h6'>"+e.font_styles.h6+"</a></li>"+"</ul>"+"</li>"},emphasis:function(e,t){var n=t&&t.size?" btn-"+t.size:"";return"<li>"+"<div class='btn-group'>"+"<a class='btn"+n+"' data-wysihtml5-command='bold' title='CTRL+B' tabindex='-1'>"+e.emphasis.bold+"</a>"+"<a class='btn"+n+"' data-wysihtml5-command='italic' title='CTRL+I' tabindex='-1'>"+e.emphasis.italic+"</a>"+"<a class='btn"+n+"' data-wysihtml5-command='underline' title='CTRL+U' tabindex='-1'>"+e.emphasis.underline+"</a>"+"</div>"+"</li>"},lists:function(e,t){var n=t&&t.size?" btn-"+t.size:"";return"<li>"+"<div class='btn-group'>"+"<a class='btn"+n+"' data-wysihtml5-command='insertUnorderedList' title='"+e.lists.unordered+"' tabindex='-1'><i class='icon-list'></i></a>"+"<a class='btn"+n+"' data-wysihtml5-command='insertOrderedList' title='"+e.lists.ordered+"' tabindex='-1'><i class='icon-th-list'></i></a>"+"<a class='btn"+n+"' data-wysihtml5-command='Outdent' title='"+e.lists.outdent+"' tabindex='-1'><i class='icon-indent-right'></i></a>"+"<a class='btn"+n+"' data-wysihtml5-command='Indent' title='"+e.lists.indent+"' tabindex='-1'><i class='icon-indent-left'></i></a>"+"</div>"+"</li>"},link:function(e,t){var n=t&&t.size?" btn-"+t.size:"";return"<li>"+"<div class='bootstrap-wysihtml5-insert-link-modal modal hide fade'>"+"<div class='modal-header'>"+"<a class='close' data-dismiss='modal'>&times;</a>"+"<h3>"+e.link.insert+"</h3>"+"</div>"+"<div class='modal-body'>"+"<input value='http://' class='bootstrap-wysihtml5-insert-link-url input-xlarge'>"+"<label class='checkbox'> <input type='checkbox' class='bootstrap-wysihtml5-insert-link-target' checked>"+e.link.target+"</label>"+"</div>"+"<div class='modal-footer'>"+"<a href='#' class='btn' data-dismiss='modal'>"+e.link.cancel+"</a>"+"<a href='#' class='btn btn-primary' data-dismiss='modal'>"+e.link.insert+"</a>"+"</div>"+"</div>"+"<a class='btn"+n+"' data-wysihtml5-command='createLink' title='"+e.link.insert+"' tabindex='-1'><i class='icon-share'></i></a>"+"</li>"},image:function(e,t){var n=t&&t.size?" btn-"+t.size:"";return"<li>"+"<div class='bootstrap-wysihtml5-insert-image-modal modal hide fade'>"+"<div class='modal-header'>"+"<a class='close' data-dismiss='modal'>&times;</a>"+"<h3>"+e.image.insert+"</h3>"+"</div>"+"<div class='modal-body'>"+"<input value='http://' class='bootstrap-wysihtml5-insert-image-url input-xlarge'>"+"</div>"+"<div class='modal-footer'>"+"<a href='#' class='btn' data-dismiss='modal'>"+e.image.cancel+"</a>"+"<a href='#' class='btn btn-primary' data-dismiss='modal'>"+e.image.insert+"</a>"+"</div>"+"</div>"+"<a class='btn"+n+"' data-wysihtml5-command='insertImage' title='"+e.image.insert+"' tabindex='-1'><i class='icon-picture'></i></a>"+"</li>"},html:function(e,t){var n=t&&t.size?" btn-"+t.size:"";return"<li>"+"<div class='btn-group'>"+"<a class='btn"+n+"' data-wysihtml5-action='change_view' title='"+e.html.edit+"' tabindex='-1'><i class='icon-pencil'></i></a>"+"</div>"+"</li>"},color:function(e,t){var n=t&&t.size?" btn-"+t.size:"";return"<li class='dropdown'>"+"<a class='btn dropdown-toggle"+n+"' data-toggle='dropdown' href='#' tabindex='-1'>"+"<span class='current-color'>"+e.colours.black+"</span>&nbsp;<b class='caret'></b>"+"</a>"+"<ul class='dropdown-menu'>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='black'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='black'>"+e.colours.black+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='silver'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='silver'>"+e.colours.silver+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='gray'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='gray'>"+e.colours.gray+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='maroon'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='maroon'>"+e.colours.maroon+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='red'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='red'>"+e.colours.red+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='purple'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='purple'>"+e.colours.purple+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='green'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='green'>"+e.colours.green+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='olive'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='olive'>"+e.colours.olive+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='navy'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='navy'>"+e.colours.navy+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='blue'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='blue'>"+e.colours.blue+"</a></li>"+"<li><div class='wysihtml5-colors' data-wysihtml5-command-value='orange'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='orange'>"+e.colours.orange+"</a></li>"+"</ul>"+"</li>"}};var r=function(e,t,r){return n[e](t,r)};var i=function(t,r){this.el=t;var i=r||o;for(var s in i.customTemplates){n[s]=i.customTemplates[s]}this.toolbar=this.createToolbar(t,i);this.editor=this.createEditor(r);window.editor=this.editor;e("iframe.wysihtml5-sandbox").each(function(t,n){e(n.contentWindow).off("focus.wysihtml5").on({"focus.wysihtml5":function(){e("li.dropdown").removeClass("open")}})})};i.prototype={constructor:i,createEditor:function(n){n=n||{};n=e.extend(true,{},n);n.toolbar=this.toolbar[0];var r=new t.Editor(this.el[0],n);if(n&&n.events){for(var i in n.events){r.on(i,n.events[i])}}return r},createToolbar:function(t,n){var i=this;var s=e("<ul/>",{"class":"wysihtml5-toolbar",style:"display:none"});var a=n.locale||o.locale||"en";for(var f in o){var l=false;if(n[f]!==undefined){if(n[f]===true){l=true}}else{l=o[f]}if(l===true){s.append(r(f,u[a],n));if(f==="html"){this.initHtml(s)}if(f==="link"){this.initInsertLink(s)}if(f==="image"){this.initInsertImage(s)}}}if(n.toolbar){for(f in n.toolbar){s.append(n.toolbar[f])}}s.find("a[data-wysihtml5-command='formatBlock']").click(function(t){var n=t.target||t.srcElement;var r=e(n);i.toolbar.find(".current-font").text(r.html())});s.find("a[data-wysihtml5-command='foreColor']").click(function(t){var n=t.target||t.srcElement;var r=e(n);i.toolbar.find(".current-color").text(r.html())});this.el.before(s);return s},initHtml:function(e){var t="a[data-wysihtml5-action='change_view']";e.find(t).click(function(n){e.find("a.btn").not(t).toggleClass("disabled")})},initInsertImage:function(t){var n=this;var r=t.find(".bootstrap-wysihtml5-insert-image-modal");var i=r.find(".bootstrap-wysihtml5-insert-image-url");var s=r.find("a.btn-primary");var o=i.val();var u;var a=function(){var e=i.val();i.val(o);n.editor.currentView.element.focus();if(u){n.editor.composer.selection.setBookmark(u);u=null}n.editor.composer.commands.exec("insertImage",e)};i.keypress(function(e){if(e.which==13){a();r.modal("hide")}});s.click(a);r.on("shown",function(){i.focus()});r.on("hide",function(){n.editor.currentView.element.focus()});t.find("a[data-wysihtml5-command=insertImage]").click(function(){var t=e(this).hasClass("wysihtml5-command-active");if(!t){n.editor.currentView.element.focus(false);u=n.editor.composer.selection.getBookmark();r.appendTo("body").modal("show");r.on("click.dismiss.modal",'[data-dismiss="modal"]',function(e){e.stopPropagation()});return false}else{return true}})},initInsertLink:function(t){var n=this;var r=t.find(".bootstrap-wysihtml5-insert-link-modal");var i=r.find(".bootstrap-wysihtml5-insert-link-url");var s=r.find(".bootstrap-wysihtml5-insert-link-target");var o=r.find("a.btn-primary");var u=i.val();var a;var f=function(){var e=i.val();i.val(u);n.editor.currentView.element.focus();if(a){n.editor.composer.selection.setBookmark(a);a=null}var t=s.prop("checked");n.editor.composer.commands.exec("createLink",{href:e,target:t?"_blank":"_self",rel:t?"nofollow":""})};var l=false;i.keypress(function(e){if(e.which==13){f();r.modal("hide")}});o.click(f);r.on("shown",function(){i.focus()});r.on("hide",function(){n.editor.currentView.element.focus()});t.find("a[data-wysihtml5-command=createLink]").click(function(){var t=e(this).hasClass("wysihtml5-command-active");if(!t){n.editor.currentView.element.focus(false);a=n.editor.composer.selection.getBookmark();r.appendTo("body").modal("show");r.on("click.dismiss.modal",'[data-dismiss="modal"]',function(e){e.stopPropagation()});return false}else{return true}})}};var s={resetDefaults:function(){e.fn.wysihtml5.defaultOptions=e.extend(true,{},e.fn.wysihtml5.defaultOptionsCache)},bypassDefaults:function(t){return this.each(function(){var n=e(this);n.data("wysihtml5",new i(n,t))})},shallowExtend:function(t){var n=e.extend({},e.fn.wysihtml5.defaultOptions,t||{},e(this).data());var r=this;return s.bypassDefaults.apply(r,[n])},deepExtend:function(t){var n=e.extend(true,{},e.fn.wysihtml5.defaultOptions,t||{});var r=this;return s.bypassDefaults.apply(r,[n])},init:function(e){var t=this;return s.shallowExtend.apply(t,[e])}};e.fn.wysihtml5=function(t){if(s[t]){return s[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t==="object"||!t){return s.init.apply(this,arguments)}else{e.error("Method "+t+" does not exist on jQuery.wysihtml5")}};e.fn.wysihtml5.Constructor=i;var o=e.fn.wysihtml5.defaultOptions={"font-styles":true,color:false,emphasis:true,lists:true,html:false,link:true,image:true,events:{},parserRules:{classes:{"wysiwyg-color-silver":1,"wysiwyg-color-gray":1,"wysiwyg-color-white":1,"wysiwyg-color-maroon":1,"wysiwyg-color-red":1,"wysiwyg-color-purple":1,"wysiwyg-color-fuchsia":1,"wysiwyg-color-green":1,"wysiwyg-color-lime":1,"wysiwyg-color-olive":1,"wysiwyg-color-yellow":1,"wysiwyg-color-navy":1,"wysiwyg-color-blue":1,"wysiwyg-color-teal":1,"wysiwyg-color-aqua":1,"wysiwyg-color-orange":1},tags:{b:{},i:{},br:{},ol:{},ul:{},li:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},blockquote:{},u:1,img:{check_attributes:{width:"numbers",alt:"alt",src:"url",height:"numbers"}},a:{check_attributes:{href:"url",target:"alt",rel:"alt"}},span:1,div:1,code:1,pre:1}},stylesheets:["./lib/css/wysiwyg-color.css"],locale:"en"};if(typeof e.fn.wysihtml5.defaultOptionsCache==="undefined"){e.fn.wysihtml5.defaultOptionsCache=e.extend(true,{},e.fn.wysihtml5.defaultOptions)}var u=e.fn.wysihtml5.locale={en:{font_styles:{normal:"Normal text",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",h5:"Heading 5",h6:"Heading 6"},emphasis:{bold:"Bold",italic:"Italic",underline:"Underline"},lists:{unordered:"Unordered list",ordered:"Ordered list",outdent:"Outdent",indent:"Indent"},link:{insert:"Insert link",cancel:"Cancel",target:"Open link in new window"},image:{insert:"Insert image",cancel:"Cancel"},html:{edit:"Edit HTML"},colours:{black:"Black",silver:"Silver",gray:"Grey",maroon:"Maroon",red:"Red",purple:"Purple",green:"Green",olive:"Olive",navy:"Navy",blue:"Blue",orange:"Orange"}}}}(window.jQuery,window.wysihtml5)