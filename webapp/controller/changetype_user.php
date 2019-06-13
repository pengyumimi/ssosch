<?php
require("../../admin/controller/config/db_config.php");
header("Content-Type: text/html;charset=utf-8");
//session_start();//登录状态

$idtype = $_POST["idtype"];
$vid = $_POST["id"];
$uid = $_POST["uid"];

$mysqli = mysqli_connect($mysql_server_name, $mysql_username, $mysql_password, $mysql_database);
$mysqli->query("set names utf8");//**设置字符集***

if ($idtype == 3)  {
    $sql = "update web_formshengchan set uid='{$uid}' where id='{$vid}'";
    $result = $mysqli->query($sql);

    if ($result) {
        echo json_encode(array("msg" => "修改成功", "result" => "1"));
    } else {
        echo json_encode(array("msg" => "修改失败稍后再试", "result" => "2"));
    };
}else if($idtype == 4){
    $sql = "update web_formshengchan set cid='{$uid}' where id='{$vid}'";
    $result = $mysqli->query($sql);

    if ($result) {
        echo json_encode(array("msg" => "修改成功", "result" => "1"));
    } else {
        echo json_encode(array("msg" => "修改失败稍后再试", "result" => "2"));
    };
}else if($idtype == 5){
    $sql = "update web_formshengchan set pid='{$uid}' where id='{$vid}'";
    $result = $mysqli->query($sql);

    if ($result) {
        echo json_encode(array("msg" => "修改成功", "result" => "1"));
    } else {
        echo json_encode(array("msg" => "修改失败稍后再试", "result" => "2"));
    };
}

$mysqli->close();//面向对象关闭数据库！
?>