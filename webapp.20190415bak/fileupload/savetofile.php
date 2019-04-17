<?php
if (isset($_FILES['myFile'])) {
    // Example:
    writeLog($_FILES);
    //路径拼写
    $date_new = "" . date('Ymd') . "/"; //取当前日期，注意是没有斜杠的
    $Path = "../filesupload/" . $date_new; //路径拼写
    //创建文件夹
    if (!file_exists($Path)) {
        mkdir($Path, 0777, true);
    }
    move_uploaded_file($_FILES['myFile']['tmp_name'], $Path. $_FILES['myFile']['name']);
    //返回入库地址
    $urls = $Path . $_FILES['myFile']['name'];
//    echo 'successful';
    echo json_encode(array("msg" => "操作成功", "src" => $urls, "result" => "1"));
}
function writeLog($log){
	if(is_array($log) || is_object($log)){
		$log = json_encode($log);
	}
	$log = $log."\r\n";

	file_put_contents('log.log', $log,FILE_APPEND);
}
?>