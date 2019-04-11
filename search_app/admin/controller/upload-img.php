<?php

$base64_url = $_POST['imgData'];//接收base64图片
if ($base64_url) {
    $base64_body = substr(strstr($base64_url, ','), 1);//去除头部
    $img = base64_decode($base64_body);//base64解码
    $date_new = "" . date('Ymd') . "/"; //取当前日期
    $nameleft = "" . date('hms'); //取当前日期拼接文件名
    $Path = "../../upload/" . $date_new; //路径前缀
    $arr = mt_rand(1, 100);//随机数
    $name = $nameleft . $arr;//文件名
    $uploadfile = $Path . $arr . $name;//文件完整路径
    mkdir($Path);//创建文件夹
    $a = file_put_contents($uploadfile . '.jpg', $img);//返回图片
    $urls = $uploadfile . '.jpg';//返回入库地址

    echo json_encode(array("msg" => "操作成功", "src" => $urls, "result" => "1"));
}

?>