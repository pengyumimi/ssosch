<?php /* Smarty version Smarty-3.1.15, created on 2017-04-02 22:47:54
         compiled from "D:\www\ssosch\ssosch_admin\include\template\panel\profile.tpl" */ ?>
<?php /*%%SmartyHeaderCode:584158e10f1ac6bdf2-13374732%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '5bc77a7c16392c6193f975fff52ef45e9a319bf5' => 
    array (
      0 => 'D:\\www\\ssosch\\ssosch_admin\\include\\template\\panel\\profile.tpl',
      1 => 1458377676,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '584158e10f1ac6bdf2-13374732',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'osadmin_action_alert' => 0,
    'osadmin_quick_note' => 0,
    'change_password' => 0,
    'user_info' => 0,
    'quicknoteOptions' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.15',
  'unifunc' => 'content_58e10f1ad25330_51484321',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_58e10f1ad25330_51484321')) {function content_58e10f1ad25330_51484321($_smarty_tpl) {?><?php if (!is_callable('smarty_function_html_options')) include 'D:\\www\\ssosch\\ssosch_admin\\include\\config/../../include/lib/Smarty/plugins\\function.html_options.php';
?><?php echo $_smarty_tpl->getSubTemplate ("header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

<?php echo $_smarty_tpl->getSubTemplate ("navibar.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

<?php echo $_smarty_tpl->getSubTemplate ("sidebar.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>

<!-- START 以上内容不需更改，保证该TPL页内的标签匹配即可 -->

<?php echo $_smarty_tpl->tpl_vars['osadmin_action_alert']->value;?>

<?php echo $_smarty_tpl->tpl_vars['osadmin_quick_note']->value;?>


<div class="well">
    <ul class="nav nav-tabs">
		<?php if ($_smarty_tpl->tpl_vars['change_password']->value) {?>
			<li ><a href="#home" data-toggle="tab">资料</a></li>
			<li class="active"><a href="#profile" data-toggle="tab">密码</a></li>
		<?php } else { ?>
			<li class="active"><a href="#home" data-toggle="tab">资料</a></li>
			<li><a href="#profile" data-toggle="tab">密码</a></li>
		<?php }?>
    </ul>
    <div id="myTabContent" class="tab-content">
		
		<?php if ($_smarty_tpl->tpl_vars['change_password']->value) {?>
		  <div class="tab-pane fade" id="home">
		<?php } else { ?>
		  <div class="tab-pane active in" id="home">
		<?php }?>
			<form id="tab" method="post" action="" autocomplete="off">
				<label>登录名</label>
				<input type="text" name="user_name" value="<?php echo $_smarty_tpl->tpl_vars['user_info']->value['user_name'];?>
" class="input-xlarge" readonly="true">
				<label>姓名</label>
				<input type="text" name="real_name" value="<?php echo $_smarty_tpl->tpl_vars['user_info']->value['real_name'];?>
" class="input-xlarge">
				<label>手机</label>
				<input type="text" name="mobile" value="<?php echo $_smarty_tpl->tpl_vars['user_info']->value['mobile'];?>
" class="input-xlarge">
				<label>邮件</label>
				<input type="text" name="email" value="<?php echo $_smarty_tpl->tpl_vars['user_info']->value['email'];?>
" class="input-xlarge">
				<label>描述</label>
				<textarea name="user_desc" value="Smith" rows="3" class="input-xlarge"><?php echo $_smarty_tpl->tpl_vars['user_info']->value['user_desc'];?>
</textarea>
				<hr />
				<label>显示QuickNote</label>	
				<?php echo smarty_function_html_options(array('name'=>'show_quicknote','id'=>"DropDownTimezone",'class'=>"input-xlarge",'options'=>$_smarty_tpl->tpl_vars['quicknoteOptions']->value,'selected'=>$_smarty_tpl->tpl_vars['user_info']->value['show_quicknote']),$_smarty_tpl);?>

				
				<div class="btn-toolbar">
					<button type="submit" class="btn btn-primary"><i class="icon-save"></i> 保存</button>
					<div class="btn-group"></div>
				</div>
			</form>
		  </div>
		<?php if ($_smarty_tpl->tpl_vars['change_password']->value) {?>
		<div class="tab-pane active in" id="profile">
		<?php } else { ?>
		<div class="tab-pane fade" id="profile">
		<?php }?>
			<form id="tab2" method="post" action="" autocomplete="off">
				<input type="hidden" name="change_password" value="yes" >
				<label>原密码</label>
				<input type="password" name="old" class="input-xlarge">
				<label>新密码</label>
				<input type="password" name="new" class="input-xlarge">
				<div>
					<button class="btn btn-primary">更新</button>
				</div>
			</form>
		</div>
  </div>
</div>
<?php echo $_smarty_tpl->getSubTemplate ("footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array(), 0);?>
<?php }} ?>
