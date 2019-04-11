<?php

    $base64_url = $_POST['imgsrc'];//接收base64图片
    $base64_body = substr(strstr($base64_url,','),1);//去除头部
    $img= base64_decode($base64_body);//base64解码
	//$date_new="".date('Ymd')."/"; //取当前日期，注意是没有斜杠的
	$date_s="".date('hms').""; //取当前时间，改变图片默认名称
	//$Path="upload/".$date_new; //路径拼写
	$arr=mt_rand(1,100);//随机数
	$name = $date_s.$arr;
	$uploadfile = $Path.$arr.$name;
	if (!file_exists("upload/".$date_new)){ mkdir ("upload/".$date_new); echo '创建文件夹成功';} else {echo '需创建的文件夹已经存在<br>';}
    //$a = file_put_contents('./aa.jpg', $img);//返回图片
	$a = file_put_contents('../../upload/'.$name.'.jpg', $img);//返回图片
	$urls = '/upload/'.$name.'.jpg';//返回入库地址

	echo json_encode(array("msg"=>"操作成功","src"=>$urls,"result"=>"1"));
    //print_r($a);

?>