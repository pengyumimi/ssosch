<?php /* Smarty version Smarty-3.1.15, created on 2017-04-04 12:18:50
         compiled from "D:\www\ssosch\ssosch_admin\include\template\panel\module_add.tpl" */ ?>
<?php /*%%SmartyHeaderCode:570258e31eaaa6a438-33577980%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c0ff1adbddf0f2e5cdfa12e5ca76c6cca51fc66d' => 
    array (
      0 => 'D:\\www\\ssosch\\ssosch_admin\\include\\template\\panel\\module_add.tpl',
      1 => 1458377676,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '570258e31eaaa6a438-33577980',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'osadmin_action_alert' => 0,
    'osadmin_quick_note' => 0,
    '_POST' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.15',
  'unifunc' => 'content_58e31eaaf06545_14421517',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_58e31eaaf06545_14421517')) {function content_58e31eaaf06545_14421517($_smarty_tpl) {?><?php echo $_smarty_tpl->getSubTemplate ("header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

<?php echo $_smarty_tpl->getSubTemplate ("navibar.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

<?php echo $_smarty_tpl->getSubTemplate ("sidebar.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

<!-- START 以上内容不需更改，保证该TPL页内的标签匹配即可 -->

<?php echo $_smarty_tpl->tpl_vars['osadmin_action_alert']->value;?>

<?php echo $_smarty_tpl->tpl_vars['osadmin_quick_note']->value;?>

    
<div class="well">
    <ul class="nav nav-tabs">
      <li class="active"><a href="#home" data-toggle="tab">请填写菜单模块资料</a></li>
    </ul>	
	
	<div id="myTabContent" class="tab-content">
		  <div class="tab-pane active in" id="home">

           <form id="tab" method="post" action="">
				<label>模块名称</label>
				<input type="text" name="module_name" value="<?php echo $_smarty_tpl->tpl_vars['_POST']->value['module_name'];?>
" class="input-xlarge" required="true" autofocus="true" >
				<label>模块链接</label>
				<input type="text" name="module_url" value="<?php if ($_smarty_tpl->tpl_vars['_POST']->value['module_url']=='') {?>/index.php<?php } else { ?><?php echo $_smarty_tpl->tpl_vars['_POST']->value['module_url'];?>
<?php }?>" class="input-xlarge" required="true">
				<label>模块图标</label>
				<div style="width:20px;padding-bottom:5px">
					<a class="icon" style="width:20px;line-height:2em;">
					<i id="icon_preview" class="icon-th"></i></a>
				</div>
				<input type="text" readonly value="icon-th" name="module_icon" id="icon_id" style="width:180px" >
				<a id="icon_select" class="btn btn-info" style="vertical-align:top" >更改图标</a>
				<!--- 选择图标层--->			
				<?php echo $_smarty_tpl->getSubTemplate ("panel/icon_select.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

				<!--- 选择图标层 结束--->

				
				<label>模块排序数字(数字越小越靠前)</label>
				<input type="text" name="module_sort" value="<?php echo $_smarty_tpl->tpl_vars['_POST']->value['module_sort'];?>
" class="input-xlarge" >
				<label>描述</label>
				<textarea name="module_desc" rows="3" class="input-xlarge"><?php echo $_smarty_tpl->tpl_vars['_POST']->value['module_desc'];?>
</textarea>
				<div class="btn-toolbar">
					<button type="submit" class="btn btn-primary"><strong>提交</strong></button>
				</div>
			</form>
        </div>
    </div>
</div>
<script>
$('#icon_select').click(function(){			
	$('#myModal').modal({
		backdrop:true,
		keyboard:true,
		show:true
    });	
});

$('.icon').click(function(){
		var obj=$(this);
		$('#icon_preview').removeClass().addClass(obj.text());
		$('#icon_id').val(obj.text());
		$('#myModal').modal('toggle');
});
</script>
<!-- END 以下内容不需更改，请保证该TPL页内的标签匹配即可 -->
<?php echo $_smarty_tpl->getSubTemplate ("footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>
<?php }} ?>
