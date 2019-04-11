<?php
//print_r($base64);die();
$imgName = $_POST['name'];;
$imgBase64 = $_POST['base64Data'];;
fiximg($imgBase64, $imgName);

//    $callbackurls = array();
//图片处理的工厂
function fiximg($img64data, $imgNameN)
{

    $base64_body = substr(strstr($img64data, ','), 1);//去除头部
    $img = base64_decode($base64_body);//base64解码

    //路径拼写
    $date_new = "" . date('Ymd') . "/"; //取当前日期，注意是没有斜杠的
    $Path = "../imgsupload/" . $date_new; //路径拼写

    //创建文件夹
    if (!file_exists($Path)) {
        mkdir($Path, 0777, true);
    }
    //将图片写入文件
    file_put_contents($Path . $imgNameN, $img);
//    echo json_encode(array("msg" => "test", "result" => "1"));die;
    //返回入库地址
    $urls = $Path . $imgNameN;

//        array_push($callbackurls,$urls);
    echo json_encode(array("msg" => "操作成功", "src" => $urls, "result" => "1"));
}

?>
