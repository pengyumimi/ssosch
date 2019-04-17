<?php
	require("../../admin/controller/config/db_config.php");
	header("Content-Type: text/html;charset=utf-8");
	//session_start();//登录状态
	$user = $_POST["s_username"];
	$psw = $_POST["s_password"];
	$userN = base64_decode($user);
	$pswN = base64_decode($psw);
//echo $user;echo $psw;die;
	if($user == "" || $psw == "")
	{
		echo json_encode(array("msg"=>"请输入用户名或密码！", "dm"=>"0"));
	}
	else
	{
		$mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
        $mysqli->query("set names utf8");
		//$mysqli =new MySQLi("localhost","root","","ssosch");
		$sql = "select * from web_user where (phone = '$userN') and (password = '$pswN')";
		$result = $mysqli->query($sql);
		if ($result->num_rows > 0) {
            $jarr = array();
            while ($rows = mysqli_fetch_array($result, MYSQL_ASSOC)) {
                $count = count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小
                for ($i = 0; $i < $count; $i++) {
                    unset($rows[$i]);//删除冗余数据
                }
                array_push($jarr, $rows);
            }
            echo $str = json_encode($jarr, JSON_UNESCAPED_UNICODE);

		}else{
			echo json_encode(array("msg"=>"用户名或密码不正确！", "dm"=>"2"));
		}
	}
?>