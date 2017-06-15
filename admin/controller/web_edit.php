<?php
	require("config/db_config.php");
	header("Content-Type: text/html;charset=utf-8"); 
	//session_start();//登录状态

	$id = $_POST["id"];
	$title = $_POST["title"];
	$description = $_POST["description"];
	$keywords = $_POST["keywords"];
	$address = $_POST["address"];
	$url = $_POST["url"];
	$tel = $_POST["tel"];
	$phone = $_POST["phone"];
	$email = $_POST["email"];
	$qq = $_POST["qq"];

	if($id == "")   
	{
		echo json_encode(array("msg"=>"请输入完整信息！", "result"=>"0"));
	}
	else
	{
		$mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
		$mysqli->query("set names utf8");//**设置字符集***
		$sql = "update web_set set title='{$title}',description='{$description}',keywords='{$keywords}',address='{$address}',url='{$url}',tel='{$tel}',phone='{$phone}',email='{$email}',qq='{$qq}' where id='{$id}'";
		
		$result = $mysqli->query($sql);

		if ($result) {
			echo json_encode(array("msg"=>"修改成功", "result"=>"1"));
		}else{  
			echo json_encode(array("msg"=>"操作未成功，请稍后再试", "result"=>"2"));
		}

		$mysqli->close();//面向对象关闭数据库！
	}

?>  