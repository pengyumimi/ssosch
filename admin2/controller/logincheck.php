<?php
require("my_admin/db_config.php");
header("Content-Type: text/html;charset=utf-8"); 
session_start();//登录状态

        $user = $_POST["phone"];  
        $psw = $_POST["password"];  
        if($user == "" || $psw == "")  
        {  
            echo "请输入用户名或密码！";  
        }  
        else  
        {  
            mysql_connect($mysql_server_name, $mysql_username, $mysql_password);  
            mysql_select_db($mysql_database);  
            mysql_query("set names 'utf8'");  
            $sql = "select * from user_list where phone = '$_POST[phone]' and password = '$_POST[password]'"; 
            $result = mysql_query($sql);  
            $num = mysql_num_rows($result);  		
            if($num)  
            {
				
                $row = mysql_fetch_array($result);  //将数据以索引方式储存在数组中  
                $_SESSION['user'] = $row["username"];//将用户名赋值到session
				$_SESSION['id'] = $row["id"];
				$_SESSION['type_id'] = $row["type_id"];
                echo "登录成功！"; 
            }  
            else  
            {  
                echo "用户名或密码不正确！";  
            }  
        }  
  
?>  