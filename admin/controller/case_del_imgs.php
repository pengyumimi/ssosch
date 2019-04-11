<?php
	require("config/db_config.php");
	header("Content-Type: text/html;charset=utf-8"); 
	//session_start();//登录状态

	$delid = $_POST["delid"];
	$index = $_POST["index"];
	if($delid == "")   
	{
		echo json_encode(array("msg"=>"删除失败！", "result"=>"0"));
	}
	else
	{
		//echo json_encode(array("msg"=>$delid, "result"=>$index));

		$mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
		$mysqli->query("set names utf8");//**设置字符集***
		//$sql = "insert into hdp(paixu,link,img_src)values('{$paixu}','{$link}','{$img_src}')";        
        //$sql = "delete from web_imgs where id = '{$delid}'"; 
		$imgsrc = "select imgs_src from web_imgs where id = '{$delid}'";
		$imgsrc_result = $mysqli->query($imgsrc);

		if ($imgsrc_result) {
		$jarr = array();
		while ($rows=mysqli_fetch_array($imgsrc_result,MYSQL_ASSOC)){
		    $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小  
		    for($i=0;$i<$count;$i++){  
		        unset($rows[$i]);//删除冗余数据  
		    }
		    array_push($jarr,$rows);
		}
		//print_r($jarr);//查看数组
			$str=json_encode($jarr);
			//echo $str=json_encode($jarr);//将数组进行json编码
			echo json_encode(array("msg"=>$jarr, "result"=>"1"));

		}else{  
			echo json_encode(array("msg"=>"操作未成功，请稍后再试", "result"=>"2"));
		};
/*
		$result = $mysqli->query($sql);
		$sql = "update web_imgs set imgs_src ="new" where id = '{$delid}'";

		$result = $mysqli->query($sql);

		if ($result) {
			echo json_encode(array("msg"=>"删除成功", "result"=>"1"));
		}else{  
			echo json_encode(array("msg"=>"操作未成功，请稍后再试", "result"=>"2"));
		};
*/
		$mysqli->close();//面向对象关闭数据库！

	}

?>  