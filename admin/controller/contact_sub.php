<?php
	require("config/db_config.php");
	header("Content-Type: text/html;charset=utf-8"); 
	//session_start();//登录状态

	$username = $_POST['username'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	if($username == "" || $phone == "" || $email == "" || $message == "")   
	{
		echo json_encode(array("msg"=>"请输入完整信息！", "dm"=>"0"));
	}
	else
	{
		$mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
		$mysqli->query("set names utf8");//**设置字符集***
		$sql = "insert into web_contact(username,phone,email,message)values('{$username}','{$phone}','{$email}','{$message}')";
		$result = $mysqli->query($sql);

		if ($result) {
			/*输出变量的方法
			echo json_encode(array(
				'message' => sprintf('Welcome %s',$username),
			));
			*/
			echo json_encode(array("msg"=>"留言成功", "dm"=>"1"));
		}else{  
			echo json_encode(array("msg"=>"操作未成功，请稍后再试", "dm"=>"2"));
		};

		$mysqli->close();//面向对象关闭数据库！
		
	}

?>