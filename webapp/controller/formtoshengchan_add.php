<?php
	require("../../admin/controller/config/db_config.php");
	header("Content-Type: text/html;charset=utf-8");

	$userid = $_POST["aid"];
	$fcompanyname = $_POST["fcompanyname"];
	$fname = $_POST["fname"];
	$fphone = $_POST["fphone"];
	$faddress = $_POST["faddress"];
    $femail = $_POST["femail"];
    $fordernumber = $_POST["fordernumber"];
    $fjsfj = $_POST["fjsfj"];
    $ffahuodz = $_POST["ffahuodz"];
    $ftime = $_POST["ftime"];
    $fradio = $_POST["fradio"];
	$fhtfj = $_POST["fhtfj"];
	$fimgsht = $_POST["fimgsht"];
	$fbjd = $_POST["fbjd"];
	$ffktj = $_POST["ffktj"];

if(empty($userid))
	{
		echo json_encode(array("msg"=>"请输入完整信息！", "result"=>"0"));
	}
	else
	{
		$mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
		$mysqli->query("set names utf8");//**设置字符集***
		$sql = "insert into web_formshengchan(aid,fcompanyname,fname,fphone,faddress,femail,fordernumber,fjsfj,ffahuodz,ftime,fradio,fhtfj,fimgsht,fbjd,ffktj,step1)values('{$userid}','{$fcompanyname}','{$fname}','{$fphone}','{$faddress}','{$femail}','{$fordernumber}','{$fjsfj}','{$ffahuodz}','{$ftime}','{$fradio}','{$fhtfj}','{$fimgsht}','{$fbjd}','{$ffktj}',1)";
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