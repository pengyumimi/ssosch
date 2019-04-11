<?php
	require("config/db_config.php");
	//header("Content-Type: text/html;charset=utf-8"); 
	//session_start();//登录状态

	$list = $_POST["list"];

	if($list == 1){
		//echo "wangpengyu";
		echo json_encode(array('msg'=>'wangpengyu', 'result'=>1));
	};
  
?>  