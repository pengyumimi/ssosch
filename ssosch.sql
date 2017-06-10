-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 06 月 10 日 04:02
-- 服务器版本: 5.5.20
-- PHP 版本: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `ssosch`
--

-- --------------------------------------------------------

--
-- 表的结构 `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(11) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `message` varchar(500) DEFAULT NULL,
  `inputdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `contact`
--

INSERT INTO `contact` (`id`, `username`, `phone`, `email`, `message`, `inputdate`) VALUES
(9, '王鹏宇', '15622319231', '2238123@qq.com', '我用来判断重复数据', '2017-05-08 08:39:50'),
(4, '王鹏宇', '15622319231', '293847232@qq.com', '我觉得网站很不错啊', '2017-05-08 08:53:09'),
(5, '李琳', '15588221231', 'liling@qq.com', '这样的网站给人一种赏心悦目的感觉啊', '2017-05-08 06:35:13'),
(6, '王文波', '15222112311', 'wangwenbin@xinlang.com', '我来此一游', '2017-05-08 06:37:52'),
(7, '张晓婷', '18611223288', 'xiaoting@sin.com', '当时我就蒙蔽了', '2017-05-08 06:41:58'),
(8, '王玉', '15592231122', 'wangyu@ssosch.com', '其实我是来看下冷水机的', '2017-05-08 06:55:17'),
(0, '鹏鹏', '18655457898', '295879185@qq.com', '我还会再来的', '2017-05-08 15:14:09'),
(0, 'hahah', '18699878752', '269@qq.com', 'hahah', '2017-05-08 15:17:00'),
(0, 'wolaiye', '18655458785', '264645@qq.com', 'wolaiye', '2017-05-09 14:05:43'),
(0, '吓死我了', '18632363993', '295897879@qq.com', 'jsjjsfdf', '2017-05-31 12:05:19');

-- --------------------------------------------------------

--
-- 表的结构 `hdp`
--

CREATE TABLE IF NOT EXISTS `hdp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `paixu` varchar(5) DEFAULT NULL,
  `title` varchar(60) DEFAULT NULL,
  `link` varchar(60) DEFAULT NULL,
  `img_src` varchar(100) DEFAULT NULL,
  `txt` varchar(500) DEFAULT NULL,
  `inputdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `hdp`
--

INSERT INTO `hdp` (`id`, `paixu`, `title`, `link`, `img_src`, `txt`, `inputdate`) VALUES
(1, '1', NULL, 'http://www.baidu.com', '../img/banner/banner_1.gif', NULL, '2017-06-04 08:49:15');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(11) DEFAULT NULL,
  `inputdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `inputdate`) VALUES
(0, 'wangpengyu', 'wangbadan', '2017-05-08 15:21:15');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
