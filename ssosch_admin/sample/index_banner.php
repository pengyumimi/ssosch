<?php
require ('../include/init.inc.php');
$method = $user_id = $page_no = '';
extract ( $_GET, EXTR_IF_EXISTS );

$osa_banner = Banner::getBanner();
$radio_types=array(0=>"Male",1=>"Female");

Template::assign('osa_banner', $osa_banner);
Template::assign('radio_types', $radio_types);
Template::display('sample/index_banner.tpl');
