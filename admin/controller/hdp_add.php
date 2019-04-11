<?php
	require("config/db_config.php");
	header("Content-Type: text/html;charset=utf-8"); 
	//session_start();//登录状态

	$paixu = $_POST["paixu"];
	$link = $_POST["link"];
	$img_src = $_POST["img_src"];

	if($paixu == "" || $link == "" || $img_src == "")   
	{
		echo json_encode(array("msg"=>"请输入完整信息！", "result"=>"0"));
	}
	else
	{
		$mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
		$mysqli->query("set names utf8");//**设置字符集***
		$sql = "insert into web_hdp(paixu,link,img_src)values('{$paixu}','{$link}','{$img_src}')";
		$result = $mysqli->query($sql);

		if ($result) {
			/*输出变量的方法
			echo json_encode(array(
				'message' => sprintf('Welcome %s',$username),
			));
			*/
			echo json_encode(array("msg"=>"添加成功", "result"=>"1"));
		}else{  
			echo json_encode(array("msg"=>"操作未成功，请稍后再试", "result"=>"2"));
		};

		$mysqli->close();//面向对象关闭数据库！
	}

?>  