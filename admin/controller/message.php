<?php
	require("config/db_config.php");
	header("Content-Type: text/html;charset=utf-8"); 
	//session_start();//登录状态

	$list = $_POST["list"];

	$mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
	$mysqli->query("set names utf8");//**设置字符集***
	
	if($list == 1){
		
		$sql = "select * from contact where date(inputdate) = curdate()";
		$result = $mysqli->query($sql);

		if ($result) {
			$num=$result->num_rows;//获取记录集条数
			//输出变量的方法
			echo json_encode(array(
				'msg' => sprintf($num),
				'dm' => sprintf(1)
			));
		}else{  
			echo json_encode(array("msg"=>"网络状况不佳请刷新", "dm"=>"2"));
		};
		$mysqli->close();//面向对象关闭数据库！
	};
	
?>  