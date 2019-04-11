<?php
	require("config/db_config.php");
	header("Content-Type: text/html;charset=utf-8"); 
	//session_start();//登录状态

	$id = $_POST["id"];
	$title = $_POST["title"];
	$txt = $_POST["txt"];
	if($id == "")   
	{
		echo json_encode(array("msg"=>"请输入完整信息！", "result"=>"0"));
	}
	else
	{
		$mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
		$mysqli->query("set names utf8");//**设置字符集***
		$sql = "update web_hz set title='{$title}',txt='{$txt}' where id='{$id}'";
		
		$result = $mysqli->query($sql);

		if ($result) {
			/*输出变量的方法
			echo json_encode(array(
				'message' => sprintf('Welcome %s',$username),
			));
			*/
			echo json_encode(array("msg"=>"修改成功", "result"=>"1"));
		}else{  
			echo json_encode(array("msg"=>"操作未成功，请稍后再试", "result"=>"2"));
		}

		$mysqli->close();//面向对象关闭数据库！
	}

?>  