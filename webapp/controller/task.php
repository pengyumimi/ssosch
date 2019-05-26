<?php
require("../../admin/controller/config/db_config.php");
header("Content-Type: text/html;charset=utf-8");
//session_start();//登录状态

$uid = $_POST["userId"];
$fsctype = $_POST["sctype"];

$mysqli = mysqli_connect($mysql_server_name, $mysql_username, $mysql_password, $mysql_database);
$mysqli->query("set names utf8");//**设置字符集***

if ($fsctype == '1') {
    $sql = "select * from web_formshengchan where step1 = 1 or step1 = 2 or step1 = 3";
    $result = $mysqli->query($sql);

    if ($result) {
        $jarr = array();
        while ($rows = mysqli_fetch_array($result, MYSQL_ASSOC)) {
            $count = count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小
            for ($i = 0; $i < $count; $i++) {
                unset($rows[$i]);//删除冗余数据
            }
            array_push($jarr, $rows);
        }
//    print_r($jarr);//查看数组
        echo $str = json_encode($jarr);//将数组进行json编码

    } else {
        echo json_encode(array("msg" => "操作未成功，请稍后再试", "result" => "2"));
    };
} else if ($fsctype == '2') {

    $sql = "select * from web_formshengchan where step1 = 4";
    $result = $mysqli->query($sql);

    if ($result) {
        $jarr = array();
        while ($rows = mysqli_fetch_array($result, MYSQL_ASSOC)) {
            $count = count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小
            for ($i = 0; $i < $count; $i++) {
                unset($rows[$i]);//删除冗余数据
            }
            array_push($jarr, $rows);
        }
//    print_r($jarr);//查看数组
        echo $str = json_encode($jarr);//将数组进行json编码

    } else {
        echo json_encode(array("msg" => "操作未成功，请稍后再试", "result" => "2"));
    };
}else if ($fsctype == '3') {

    $sql = "update web_formshengchan set fradio='{$fradio}',fresultisrc='{$fresultisrc}',step1=2 where id='{$vid}'";
    $result = $mysqli->query($sql);

    if ($result) {
        echo json_encode(array("msg" => "修改成功", "result" => "1"));
    } else {
        echo json_encode(array("msg" => "操作未成功，请稍后再试", "result" => "2"));
    };
}

$mysqli->close();//面向对象关闭数据库！
?>