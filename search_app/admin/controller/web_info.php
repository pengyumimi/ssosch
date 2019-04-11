<?php
	require("config/db_config.php");
	header("Content-Type: text/html;charset=utf-8");

	$type=$_GET["type"];

    $mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
    $mysqli->query("set names utf8");//**设置字符集***

    switch ($type) {
        case 1:
            //$sql = "select * from `web_contact` where to_days(date_format(from_UNIXTIME(`inputdate`),'%Y-%m-%d')) = to_days(now())";
            $sql = "select count(*) as AllNum from `web_contact` where date_sub(curdate(), INTERVAL 30 DAY) <= date(`inputdate`)";
            break;
        case 2:
            if($title == ""||$name == "" ||$casetype == "" || $img_src == ""|| $description == "") {
                echo json_encode(array("msg"=>"请输入完整信息！", "result"=>"0"));
                exit();
            } else {
                $sql = "insert into baohan_imgs(pid,paixu,title,name,casetype,description,link,img_src,txt)values('{$pid}','{$paixu}','{$title}','{$name}','{$casetype}','{$description}','{$link}','{$img_src}','{$txt}')";
            }
            break;
        case 3:
            if($title == ""||$name == "" ||$casetype == "" || $img_src == ""|| $description == "") {
                echo json_encode(array("msg"=>"请输入完整信息！", "result"=>"0"));
                exit();
            } else {
                $sql = "update baohan_imgs set title='{$title}',name='{$name}',paixu='{$paixu}',casetype='{$casetype}',link='{$link}',description='{$description}',img_src='{$img_src}',txt='{$txt}' where id='{$id}'";
            }
            break;
        case 4:
            if($id == "") {
                echo json_encode(array("msg"=>"无法删除！", "result"=>"0"));
                exit();
            } else {
                $sql = "delete from baohan_imgs where id = '{$id}'";
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
                buildHtmlCase ($keywords,$webdescription,$getID,$title,$txt);
                break;
            case 3:
                buildHtmlCase ($keywords,$webdescription,$id,$title,$txt);
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