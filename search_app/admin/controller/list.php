<?php
	require("config/db_config.php");
	header("Content-Type: text/html;charset=utf-8"); 
	//session_start();//登录状态

	$type=$_GET["type"];

	$id = $_POST["id"];
	$pid = $_POST["pid"];
	$title = $_POST["title"];
    $etitle = $_POST["etitle"];
	$paixu = $_POST["paixu"];
	$link = $_POST["link"];
	$tags = $_POST["tags"];
	$img_src = $_POST["img_src"];


		$mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
		$mysqli->query("set names utf8");//**设置字符集***

        switch ($type)
        {
            case 1:
                $sql = "select * from  web_list";
                break;
            case 2:
                if($pid == "" ||$title == ""||$paixu == "" || $link == "" || $tags == "") {
                    echo json_encode(array("msg"=>"请输入完整信息！", "result"=>"0"));
                    exit();
                } else {
                    $sql = "insert into web_list(pid,title,etitle,paixu,link,tags)values('{$pid}','{$title}','{$etitle}','{$paixu}','{$link}','{$tags}')";
                }
                break;
            case 3:
                if($pid == "" ||$title == ""||$paixu == "" || $link == "" || $tags == "") {
                    echo json_encode(array("msg"=>"请输入完整信息！", "result"=>"0"));
                    exit();
                } else {
                    $sql = "update web_list set title='{$title}',etitle='{$etitle}',paixu='{$paixu}',link='{$link}',tags='{$tags}' where id='{$id}'";
                }
                break;
            case 4:
                if($id == "") {
                    echo json_encode(array("msg"=>"无法删除！", "result"=>"0"));
                    exit();
                } else {
                    $sql = "delete from web_list where id = '{$id}'";
                }
                break;
        }

		$result = $mysqli->query($sql);

		if ($result) {
			/*输出变量的方法
			echo json_encode(array(
				'message' => sprintf('Welcome %s',$username),
			));
			*/
            switch ($type)
            {
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
                    echo json_encode(array("msg"=>"添加成功", "result"=>"1"));
  					break;
				case 3:
                    echo json_encode(array("msg"=>"修改成功", "result"=>"1"));
  					break;
				case 4:
                    echo json_encode(array("msg"=>"删除成功", "result"=>"1"));
  					break;
            }
		}else{
			echo json_encode(array("msg"=>"操作未成功，请稍后再试", "result"=>"2"));
		};

		$mysqli->close();//面向对象关闭数据库！


?>  