-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-06-15 12:41:57
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ssosch`
--

-- --------------------------------------------------------

--
-- 表的结构 `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `message` varchar(500) DEFAULT NULL,
  `inputdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- 转存表中的数据 `contact`
--

INSERT INTO `contact` (`id`, `username`, `phone`, `email`, `message`, `inputdate`) VALUES
(9, '王鹏宇', '15622319231', '2238123@qq.com', '我用来判断重复数据', '2017-05-08 08:39:50'),
(4, '王鹏宇', '15622319231', '293847232@qq.com', '我觉得网站很不错啊', '2017-05-08 08:53:09'),
(5, '李琳', '15588221231', 'liling@qq.com', '这样的网站给人一种赏心悦目的感觉啊', '2017-05-08 06:35:13'),
(6, '王文波', '15222112311', 'wangwenbin@xinlang.com', '我来此一游', '2017-05-08 06:37:52'),
(7, '张晓婷', '18611223288', 'xiaoting@sin.com', '当时我就蒙蔽了', '2017-05-08 06:41:58'),
(8, '王玉', '15592231122', 'wangyu@ssosch.com', '其实我是来看下冷水机的', '2017-05-08 06:55:17');

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
  `inputdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `hdp`
--

INSERT INTO `hdp` (`id`, `paixu`, `title`, `link`, `img_src`, `txt`, `inputdate`) VALUES
(4, '4', NULL, 'ddd', '../img/img.jpg', NULL, '2017-06-13 07:15:09');

-- --------------------------------------------------------

--
-- 表的结构 `indexp`
--

CREATE TABLE IF NOT EXISTS `indexp` (
  `id` int(11) NOT NULL,
  `paixu` varchar(5) DEFAULT NULL,
  `title` varchar(60) DEFAULT NULL,
  `link` varchar(60) DEFAULT NULL,
  `img_src` varchar(100) DEFAULT NULL,
  `txt` varchar(500) DEFAULT NULL,
  `inputdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `indexp`
--

INSERT INTO `indexp` (`id`, `paixu`, `title`, `link`, `img_src`, `txt`, `inputdate`) VALUES
(4, '4', NULL, 'ddd', '../img/img.jpg', NULL, '2017-06-13 07:15:09'),
(0, '1', '冷水机组', '', '../img/tu1.png', 'aaa', '0000-00-00 00:00:00'),
(0, '2', '环境箱维修维保服务', '', '../img/tu2.png', 'bbb', '0000-00-00 00:00:00'),
(0, '4', '冷却水塔', '', '../img/tu4.jpg', 'ddd', '0000-00-00 00:00:00'),
(0, '1', '冷水机组系统', '', '../img/tu1.png', 'aaa', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET latin1 NOT NULL,
  `password` varchar(50) CHARACTER SET latin1 NOT NULL,
  `aaa` int(15) NOT NULL,
  `intime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `aaa`, `intime`) VALUES
(1, 'wangpengyu', 'wangbadan', 0, '2017-05-04 16:09:24');

-- --------------------------------------------------------

--
-- 表的结构 `web_hz`
--

CREATE TABLE IF NOT EXISTS `web_hz` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `txt` varchar(500) DEFAULT NULL,
  `inputdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `web_hz`
--

INSERT INTO `web_hz` (`id`, `title`, `txt`, `inputdate`) VALUES
(1, '商务合作', '如果贵公司希望与我公司简历商务合作关系，形成优势互补，请将合作意向进行简要描述并发送至ssoschbeijing@sina.com邮箱，我们尽快联系您.', '2017-06-15 10:33:09'),
(2, '媒体采访', '如果贵公司希望与我公司简历商务合作关系，形成优势互补，请将合作意向进行简要描述并发送至ssoschbeijing@sina.com邮箱，我们尽快联系您.', '2017-06-15 08:43:25');

-- --------------------------------------------------------

--
-- 表的结构 `web_hzhb`
--

CREATE TABLE IF NOT EXISTS `web_hzhb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `paixu` varchar(5) DEFAULT NULL,
  `title` varchar(60) DEFAULT NULL,
  `link` varchar(60) DEFAULT NULL,
  `img_src` varchar(100) DEFAULT NULL,
  `txt` varchar(500) DEFAULT NULL,
  `inputdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- 转存表中的数据 `web_hzhb`
--

INSERT INTO `web_hzhb` (`id`, `paixu`, `title`, `link`, `img_src`, `txt`, `inputdate`) VALUES
(1, '1', '合作伙伴标题', '#', '../img/partners/partners1.jpg', '', '0000-00-00 00:00:00'),
(2, '2', '合作伙伴标题', '#', '../img/partners/partners2.jpg', '', '0000-00-00 00:00:00'),
(3, '3', '合作伙伴标题', '#', '../img/partners/partners3.jpg', '', '0000-00-00 00:00:00'),
(4, '4', '合作伙伴标题', '#', '../img/partners/partners4.jpg', '', '0000-00-00 00:00:00'),
(5, '5', '合作伙伴标题', '#', '../img/partners/partners5.jpg', '', '0000-00-00 00:00:00'),
(6, '6', '合作伙伴标题', '#', '../img/partners/partners6.jpg', '', '0000-00-00 00:00:00'),
(7, '7', '合作伙伴标题', '#', '../img/partners/partners7.jpg', '', '0000-00-00 00:00:00'),
(8, '8', '合作伙伴标题', '#', '../img/partners/partners8.jpg', '', '0000-00-00 00:00:00'),
(9, '9', '合作伙伴标题', '#', '../img/partners/partners9.jpg', '', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `web_indexpro`
--

CREATE TABLE IF NOT EXISTS `web_indexpro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `paixu` varchar(5) DEFAULT NULL,
  `title` varchar(60) DEFAULT NULL,
  `link` varchar(60) DEFAULT NULL,
  `img_src` varchar(100) DEFAULT NULL,
  `txt` varchar(500) DEFAULT NULL,
  `inputdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `web_indexpro`
--

INSERT INTO `web_indexpro` (`id`, `paixu`, `title`, `link`, `img_src`, `txt`, `inputdate`) VALUES
(1, '1', '冷水机组系统', '', '../img/tu1.png', 'aaa', '2017-06-14 07:47:19'),
(3, '2', '环境箱维修维保服务', '', '../img/tu2.png', '', '0000-00-00 00:00:00'),
(4, '3', '工业定制设计服务', '', '../img/tu3.png', '', '0000-00-00 00:00:00'),
(5, '4', '冷却水塔', '', '../img/tu4.jpg', '', '0000-00-00 00:00:00'),
(6, '5', '环境试验的代理', '', '../img/tu5.jpg', '', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `web_lxr`
--

CREATE TABLE IF NOT EXISTS `web_lxr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `job` varchar(20) DEFAULT NULL,
  `tel` varchar(18) DEFAULT NULL,
  `phone` varchar(18) NOT NULL,
  `email` varchar(60) DEFAULT NULL,
  `qq` varchar(18) DEFAULT NULL,
  `inputdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `web_lxr`
--

INSERT INTO `web_lxr` (`id`, `name`, `job`, `tel`, `phone`, `email`, `qq`, `inputdate`) VALUES
(1, '王经理', '销售', '01065407746', '13311115810', 'ssoschbeijing@sina.com', '601916409', '2017-06-15 07:33:59'),
(2, '张经理', '服务', '13121546553', '13121546553', 'ssoschbeijing@sina.com', '601916409', '2017-06-15 10:33:02');

-- --------------------------------------------------------

--
-- 表的结构 `web_set`
--

CREATE TABLE IF NOT EXISTS `web_set` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(100) DEFAULT NULL,
  `tel` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `qq` varchar(18) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `keywords` varchar(500) DEFAULT NULL,
  `inputdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `web_set`
--

INSERT INTO `web_set` (`id`, `address`, `tel`, `phone`, `email`, `url`, `qq`, `title`, `description`, `keywords`, `inputdate`) VALUES
(1, '北京市通州区张家湾垡头村', '010-65407746', '13311115810', 'ssoschbeijing@sina.com', 'www.ssosch.com', '601916409', '弗立兹官方网站', '弗立兹德国工业技术专业生产冷水设备', '弗立兹官网,弗立兹,冷水机,冷水设备', '2017-06-15 09:25:36');

-- --------------------------------------------------------

--
-- 表的结构 `web_yqlj`
--

CREATE TABLE IF NOT EXISTS `web_yqlj` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `paixu` varchar(5) DEFAULT NULL,
  `title` varchar(60) DEFAULT NULL,
  `link` varchar(60) DEFAULT NULL,
  `img_src` varchar(100) DEFAULT NULL,
  `txt` varchar(500) DEFAULT NULL,
  `inputdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `web_yqlj`
--

INSERT INTO `web_yqlj` (`id`, `paixu`, `title`, `link`, `img_src`, `txt`, `inputdate`) VALUES
(1, '1', '富齐', 'http://www.voetsch-china.com/', '../img/friendlylink/link1.jpg', '', '0000-00-00 00:00:00'),
(2, '2', '环测', 'http://weiss-na.com/', '../img/friendlylink/link2.jpg', '', '0000-00-00 00:00:00'),
(3, '3', '克莱梅', 'http://www.climats-tec.com/', '../img/friendlylink/link3.jpg', '', '0000-00-00 00:00:00'),
(4, '4', '伟思', 'https://www.weiss-technik.com/en/', '../img/friendlylink/link4.jpg', '', '0000-00-00 00:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
