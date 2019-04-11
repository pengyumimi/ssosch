<?php

//律师生成伪静态页面
function buildHtmlLawyer ($keywords,$description,$id,$img_src,$name,$job,$begoodat,$txt){
    $path="../../a/team/articleLawyer-". $id .".html"; //生成文件存放位置
    //替换example内容，并获取内容赋值给$str
    $fp=fopen("../template/articleLawyer.htm","r");//取模板
    $str=fread($fp,filesize("../template/articleLawyer.htm"));//将模板解析
    $str=str_replace("{keywords}",$keywords,$str);//查找相关标签并用读取出来的数据替换
    $str=str_replace("{description}",$description,$str);//查找相关标签并用读取出来的数据替换
    $str=str_replace("{title}",$name,$str);//查找相关标签并用读取出来的数据替换
    $str=str_replace("{txt}",$txt,$str);
    $str=str_replace("{job}",$job,$str);
    $str=str_replace("{begoodat}",$begoodat,$str);
    $str=str_replace("{img_src}",$img_src,$str);
    fclose($fp);
    //新建空白文件，将$str写入
    $handle=fopen($path,"w");
    fwrite($handle,$str);
    fclose($handle);
    noticeLink ($path,$id,"web_team");
}

//案例生成伪静态页面
function buildHtmlCase ($keywords,$description,$id,$title,$txt){
    $path="../../a/case/articleCase-". $id .".html"; //生成文件存放位置
    //替换example内容，并获取内容赋值给$str
    $fp=fopen("../template/articleCase.htm","r");//取模板
    $str=fread($fp,filesize("../template/articleCase.htm"));//将模板解析
    $str=str_replace("{keywords}",$keywords,$str);//查找相关标签并用读取出来的数据替换
    $str=str_replace("{description}",$description,$str);//查找相关标签并用读取出来的数据替换
    $str=str_replace("{title}",$title,$str);//查找相关标签并用读取出来的数据替换
    $str=str_replace("{txt}",$txt,$str);
    fclose($fp);
    //新建空白文件，将$str写入
    $handle=fopen($path,"w");
    fwrite($handle,$str);
    fclose($handle);
    noticeLink ($path,$id,"web_case");
}

//新闻动态生成伪静态页面
function buildHtmlNews ($keywords,$description,$id,$title,$txt){
    $path="../../a/news/articleNews-". $id .".html"; //生成文件存放位置
    //替换example内容，并获取内容赋值给$str
    $fp=fopen("../template/articleNews.htm","r");//取模板
    $str=fread($fp,filesize("../template/articleNews.htm"));//将模板解析
    $str=str_replace("{keywords}",$keywords,$str);//查找相关标签并用读取出来的数据替换
    $str=str_replace("{description}",$description,$str);//查找相关标签并用读取出来的数据替换
    $str=str_replace("{title}",$title,$str);//查找相关标签并用读取出来的数据替换
    $str=str_replace("{txt}",$txt,$str);
    fclose($fp);
    //新建空白文件，将$str写入
    $handle=fopen($path,"w");
    fwrite($handle,$str);
    fclose($handle);
    noticeLink ($path,$id,"web_news");
}

//操作数据库更新生成的页面地址
function noticeLink ($path,$id,$databaseName){
    $mysql_server_name='127.0.0.1'; //改成自己的mysql数据库服务器
    $mysql_username='root'; //改成自己的mysql数据库用户名
    $mysql_password='WANG1129wang'; //改成自己的mysql数据库密码
    $mysql_database='ssosch'; //改成自己的mysql数据库名
    header("Content-Type: text/html;charset=utf-8");
    $mysqli = mysqli_connect($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);
    $mysqli->query("set names utf8");//**设置字符集***
    $sql2 = "update {$databaseName} set link='{$path}' where id='{$id}'";
    $result = $mysqli->query($sql2);
    if($result){
        echo json_encode(array("msg"=>"生成完毕", "result"=>"1"));
    }
    $mysqli->close();//面向对象关闭数据库！
}

?>  