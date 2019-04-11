<?php
	require("config/db_config.php");
	header("Content-Type: text/html;charset=utf-8"); 
	//session_start();//登录状态

	$delid = $_POST["delid"];
	$imgs_src = $_POST["imgs_src"];
	if($delid == "")   
	{
		echo json_encode(array("msg"=>"删除失败！", "result"=>"0"));
	}
	else
	{
		//echo json_encode(array("msg"=>$delid, "result"=>$index));

		$mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
		$mysqli->query("set names utf8");//**设置字符集***

		
		$sql = "update web_imgs set imgs_src = '{$imgs_src}' where id = '{$delid}'";
		$result = $mysqli->query($sql);
		if($result) {
			echo json_encode(array("msg"=>"删除成功", "result"=>"1"));
		}else{  
			echo json_encode(array("msg"=>"操作未成功，请稍后再试", "result"=>"2"));
		};

		$mysqli->close();//面向对象关闭数据库！

	}

?>  