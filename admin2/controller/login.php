<?php
require("config/db_config.php");
header("Content-Type: text/html;charset=utf-8");
//session_start();//登录状态
$user = $_POST["s_username"];
$psw = $_POST["s_password"];
//echo $user;echo $psw;die;
if($user == "" || $psw == "")
{
    echo json_encode(array("msg"=>"请输入用户名或密码！", "dm"=>"0"));
}
else
{
    $mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
    //$mysqli =new MySQLi("localhost","root","","ssosch");
    $sql = "select * from web_user where (name = '$user') and (password = '$psw')";
    $result = $mysqli->query($sql);
    if ($result->num_rows > 0) {
        while ($attr = $result->fetch_row()){ //将数据以索引方式储存在数组中
            $_SESSION['user'] = $attr[1];//将用户名赋值到session
            $_SESSION['id'] = $attr[0];//将用户名id赋值到session
            echo json_encode(array("msg"=>"登陆成功！", "dm"=>"1", "id"=> $_SESSION['id'], "name"=> $_SESSION['user']));//返回到前台数据
        }
    }else{
        echo json_encode(array("msg"=>"用户名或密码不正确！", "dm"=>"2"));
    }
}

?>  