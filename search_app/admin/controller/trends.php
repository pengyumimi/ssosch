<?php
	require("config/db_config.php");
    require("buildhtml.php");
	header("Content-Type: text/html;charset=utf-8");

	$type=$_GET["type"];

	$id = $_POST["id"];
	$pid = $_POST["pid"];
	$title = $_POST["title"];
	$paixu = $_POST["paixu"];
	$link = $_POST["link"];
	$txt = $_POST["txt"];
	$img_src = $_POST["img_src"];
	$description = $_POST["description"];
    $getID = '';
    $keywords = '';
    $webdescription = '';
	
    $mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
    $mysqli->query("set names utf8");//**设置字符集***

    //取到网站信息，用来生成网站公共内容 begin
    $websitsql = "select * from  web_set";
    $websitresult = $mysqli->query($websitsql);
    if ($websitresult) {
        $jarr = array();
        while ($rows=mysqli_fetch_array($websitresult,MYSQL_ASSOC)){
            $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小
            for($i=0;$i<$count;$i++){
                unset($rows[$i]);//删除冗余数据
            }
            array_push($jarr,$rows);
        }
        $keywords = $jarr[0]['keywords'];
        $webdescription = $jarr[0]['description'];
    }
    //取到网站信息，用来生成网站公共内容 end

    switch ($type) {
        case 1:
            $sql = "select * from  web_news";
            break;
        case 2:
            if($title == ""||$txt == "" || $img_src == ""|| $description == "") {
                echo json_encode(array("msg"=>"请输入完整信息！", "result"=>"0"));
                exit();
            } else {
                $sql = "insert into web_news(pid,paixu,title,description,link,img_src,txt)values('{$pid}','{$paixu}','{$title}','{$description}','{$link}','{$img_src}','{$txt}')";
            }
            break;
        case 3:
            if($title == ""||$txt == "" || $img_src == ""|| $description == "") {
                echo json_encode(array("msg"=>"请输入完整信息！", "result"=>"0"));
                exit();
            } else {
                $sql = "update web_news set title='{$title}',paixu='{$paixu}',link='{$link}',description='{$description}',img_src='{$img_src}',txt='{$txt}' where id='{$id}'";
            }
            break;
        case 4:
            if($id == "") {
                echo json_encode(array("msg"=>"无法删除！", "result"=>"0"));
                exit();
            } else {
                $sql = "delete from web_news where id = '{$id}'";
            }
            break;
    }

    $result = $mysqli->query($sql);
    //取到新增记录的id值并赋值
    $getID = mysqli_insert_id($mysqli);

    if ($result) {
        /*输出变量的方法
        echo json_encode(array(
            'message' => sprintf('Welcome %s',$username),
        ));
        */
        switch ($type) {
            case 1:
                $jarr = array();
                while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
                    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小
                    for($i=0;$i<$count;$i++){
                        unset($rows[$i]);//删除冗余数据
                    }
                    array_push($jarr,$rows);
                }
                //print_r($jarr);//查看数组
                echo $str=json_encode($jarr);//将数组进行json编码
                break;
            case 2:
                buildHtmlNews ($keywords,$webdescription,$getID,$title,$txt);
                break;
            case 3:
                buildHtmlNews ($keywords,$webdescription,$id,$title,$txt);
                break;
            case 4:
                echo json_encode(array("msg"=>"删除成功", "result"=>"1"));
                break;
        }

    }else{
        echo json_encode(array("msg"=>"操作失败！", "result"=>"2"));
    };

    $mysqli->close();//面向对象关闭数据库！

?>  