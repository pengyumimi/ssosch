<?php
    require("config/db_config.php");
    header("Content-Type: text/html;charset=utf-8");

    $title = '';
    $keywords = '';
    $description = '';
    $mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
    $mysqli->query("set names utf8");//**设置字符集***

    $sql = "select * from web_set";
    $result = $mysqli->query($sql);

    if ($result) {
        $jarr = array();
        while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
            $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小
            for($i=0;$i<$count;$i++){
                unset($rows[$i]);//删除冗余数据
            }
            array_push($jarr,$rows);
        }
        //print_r($jarr[0]);//查看数组
        $title = $jarr[0][title];
        $keywords = $jarr[0][keywords];
        $description = $jarr[0][description];
    }else{
        $keywords = '';
        $description = '';
    };
    $mysqli->close();//面向对象关闭数据库！
?>