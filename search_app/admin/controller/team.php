<?php
	require("config/db_config.php");
	require("buildhtml.php");
	header("Content-Type: text/html;charset=utf-8");

	$type=$_GET["type"];

	$id = $_POST["id"];
	$pid = $_POST["pid"];
	$name = $_POST["name"];
	$paixu = $_POST["paixu"];
	$job = $_POST["job"];
	$link = $_POST["link"];
	$txt = $_POST["txt"];
	$img_src = $_POST["img_src"];
	$begoodat = $_POST["begoodat"];
    $getID = '';
    $keywords = '';
    $description = '';

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
        $description = $jarr[0]['description'];
    }
    //取到网站信息，用来生成网站公共内容 end

    switch ($type) {
        case 1:
            $sql = "select * from  web_team";
            break;
        case 2:
            if($name == ""||$paixu == "" ||$job == "" || $img_src == "" || $txt == "") {
                echo json_encode(array("msg"=>"请输入完整信息！", "result"=>"0"));
                exit();
            } else {
                $sql = "insert into web_team(pid,paixu,name,job,begoodat,link,img_src,txt)values('{$pid}','{$paixu}','{$name}','{$job}','{$begoodat}','{$link}','{$img_src}','{$txt}')";

//                $datas = (object) [
//                    'pid' => $pid,
//                    'name' => $name,
//                    'job' => $job,
//                    'begoodat' => $begoodat,
//                    'img_src' => $img_src,
//                    'txt' => $txt
//                ];

            }
            break;
        case 3:
            if($id == "" ||$pid == "" ||$name == ""||$paixu == "" || $job == "" || $txt == ""|| $img_src == ""|| $begoodat == "") {
                echo json_encode(array("msg"=>"请输入完整信息！", "result"=>"0"));
                exit();
            } else {
                $sql = "update web_team set name='{$name}',paixu='{$paixu}',job='{$job}',txt='{$txt}',img_src='{$img_src}',begoodat='{$begoodat}' where id='{$id}'";
            }
            break;
        case 4:
            if($id == "") {
                echo json_encode(array("msg"=>"无法删除！", "result"=>"0"));
                exit();
            } else {
                $sql = "delete from web_team where id = '{$id}'";
            }
            break;
    }

    //执行增删改查的语句
    $result = $mysqli->query($sql);
    //取到新增记录的id值并赋值
    $getID = mysqli_insert_id($mysqli);

    if ($result) {
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
                echo $str=json_encode($jarr);//将数组进行json编码
                break;
            case 2:
//                echo json_encode(array("msg"=>"添加成功！", "result"=>"1"));
                buildHtmlLawyer ($keywords,$description,$getID,$img_src,$name,$job,$begoodat,$txt);
                break;
            case 3:
                buildHtmlLawyer ($keywords,$description,$id,$img_src,$name,$job,$begoodat,$txt);
//                echo json_encode(array("msg"=>"修改成功", "result"=>"1"));
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