<?php /* Smarty version Smarty-3.1.15, created on 2017-04-04 11:52:31
         compiled from "D:\www\ssosch\ssosch_admin\include\template\footer.tpl" */ ?>
<?php /*%%SmartyHeaderCode:969658e10e410c1204-59691151%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '42ee62832a1115187a0eb525feffd3aabd0c361d' => 
    array (
      0 => 'D:\\www\\ssosch\\ssosch_admin\\include\\template\\footer.tpl',
      1 => 1491277951,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '969658e10e410c1204-59691151',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.15',
  'unifunc' => 'content_58e10e410daf96_87457624',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_58e10e410daf96_87457624')) {function content_58e10e410daf96_87457624($_smarty_tpl) {?>					<footer>
                        <hr>
                        <p class="pull-right">开发人员:<a href="#" target="_blank">295879185@qq.com</a></p>
                    </footer>
				</div>
			</div>
		</div>
    <script src="<?php echo @constant('ADMIN_URL');?>
/assets/lib/bootstrap/js/bootstrap.js"></script>

<!-- 捷径的提示 -->

		<script type="text/javascript">	
			alertDismiss("alert-success", 3);
			alertDismiss("alert-info", 10);

			listenShortCut("icon-plus");
			listenShortCut("icon-minus");

			doSidebar();
		</script>
	</body>
</html>
<?php }} ?>
