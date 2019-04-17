<?php
	require("../../admin/controller/config/db_config.php");
	header("Content-Type: text/html;charset=utf-8");

	$uid = $_POST["uid"];
	$fname = $_POST["fname"];
	$fphone = $_POST["fphone"];
	$faddress = $_POST["faddress"];
    $femail = $_POST["femail"];
    $ffsrc = $_POST["ffsrc"];
    $fisrc = $_POST["fisrc"];
    $ftime = $_POST["ftime"];
    $finfo = $_POST["finfo"];

if($fname == '')
	{
		echo json_encode(array("msg"=>"请输入完整信息！", "result"=>"0"));
	}
	else
	{
		$mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
		$mysqli->query("set names utf8");//**设置字符集***
		$sql = "insert into web_formkuaiji(uid,fname,fphone,faddress,femail,ffsrc,fisrc,ftime,finfo)values('{$uid}','{$fname}','{$fphone}','{$faddress}','{$femail}','{$ffsrc}','{$fisrc}','{$ftime}','{$finfo}')";
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