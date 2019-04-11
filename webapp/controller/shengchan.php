<?php
require("../../admin/controller/config/db_config.php");
header("Content-Type: text/html;charset=utf-8");
//session_start();//登录状态

$vid = $_POST["id"];
$fsctype = $_POST["sctype"];
$fname = $_POST["fname"];
$fphone = $_POST["fphone"];
$faddress = $_POST["faddress"];
$femail = $_POST["femail"];
$ffsrc = $_POST["ffsrc"];
$fisrc = $_POST["fisrc"];
$ftime = $_POST["ftime"];
$finfo = $_POST["finfo"];
$fradio = $_POST["fradio"];
$fresultisrc = $_POST["fresultisrc"];
$fanzhuang = $_POST["fanzhuang"];
$fysd = $_POST["fysd"];
$fkhyq = $_POST["fkhyq"];

$mysqli = mysqli_connect($mysql_server_name, $mysql_username, $mysql_password, $mysql_database);
$mysqli->query("set names utf8");//**设置字符集***

if ($fsctype == '1') {
    $sql = "select * from web_formshengchan where id = '{$vid}'";
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

    $sql = "update web_formshengchan set fradio='{$fradio}',fresultisrc='{$fresultisrc}',step1=2,pid='{$fanzhuang}',step2=1 where id='{$vid}'";
    $result = $mysqli->query($sql);

    if ($result) {
        echo json_encode(array("msg" => "提交成功", "result" => "1"));
    } else {
        echo json_encode(array("msg" => "操作未成功，请稍后再试", "result" => "2"));
    };
}else if ($fsctype == '3') {

    $sql = "update web_formshengchan set ysd='{$fysd}',khyq='{$fkhyq}',step2=2 where id='{$vid}'";
    $result = $mysqli->query($sql);

    if ($result) {
        echo json_encode(array("msg" => "提交成功", "result" => "1"));
    } else {
        echo json_encode(array("msg" => "操作未成功，请稍后再试", "result" => "2"));
    };
}

$mysqli->close();//面向对象关闭数据库！
?>