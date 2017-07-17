-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-07-17 14:00:01
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
-- 表的结构 `web_contact`
--

CREATE TABLE IF NOT EXISTS `web_contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `message` varchar(500) DEFAULT NULL,
  `inputdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `web_contact`
--

INSERT INTO `web_contact` (`id`, `username`, `phone`, `email`, `message`, `inputdate`) VALUES
(9, '王鹏宇', '15622319231', '2238123@qq.com', '我用来判断重复数据', '2017-05-08 08:39:50'),
(4, '王鹏宇', '15622319231', '293847232@qq.com', '我觉得网站很不错啊', '2017-05-08 08:53:09'),
(5, '李琳', '15588221231', 'liling@qq.com', '这样的网站给人一种赏心悦目的感觉啊', '2017-05-08 06:35:13'),
(6, '王文波', '15222112311', 'wangwenbin@xinlang.com', '我来此一游', '2017-05-08 06:37:52'),
(7, '张晓婷', '18611223288', 'xiaoting@sin.com', '当时我就蒙蔽了', '2017-05-08 06:41:58'),
(8, '王玉', '15592231122', 'wangyu@ssosch.com', '其实我是来看下冷水机的', '2017-05-08 06:55:17'),
(10, 'dddf', '18632363993', '231232@qq.com', 'ddf', '2017-07-10 03:10:59');

-- --------------------------------------------------------

--
-- 表的结构 `web_hdp`
--

CREATE TABLE IF NOT EXISTS `web_hdp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `paixu` varchar(5) DEFAULT NULL,
  `title` varchar(60) DEFAULT NULL,
  `link` varchar(60) DEFAULT NULL,
  `img_src` varchar(100) DEFAULT NULL,
  `txt` varchar(500) DEFAULT NULL,
  `inputdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- 转存表中的数据 `web_hdp`
--

INSERT INTO `web_hdp` (`id`, `paixu`, `title`, `link`, `img_src`, `txt`, `inputdate`) VALUES
(4, '1', '图一', '#', '/img/banner/banner_1.jpg', '图一说明', '2017-06-20 06:40:46'),
(11, '2', '图二', '#', '/img/banner/banner_2.jpg', '图二说明', '2017-06-20 06:39:29'),
(12, '3', '图三', '#', '/img/banner/banner_3.jpg', '图三说明', '2017-06-20 06:40:53'),
(13, '4', '图四', '#', '/img/banner/banner_4.jpg', '图四说明', '2017-06-20 06:40:21');

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
(1, '1', '合作伙伴标题', '#', '/img/partners/partners1.jpg', '', '2017-06-20 06:02:07'),
(2, '2', '合作伙伴标题', '#', '/img/partners/partners2.jpg', '', '2017-06-20 06:02:11'),
(3, '3', '合作伙伴标题', '#', '/img/partners/partners3.jpg', '', '2017-06-20 06:02:13'),
(4, '4', '合作伙伴标题', '#', '/img/partners/partners4.jpg', '', '2017-06-20 06:02:18'),
(5, '5', '合作伙伴标题', '#', '/img/partners/partners5.jpg', '', '2017-06-20 06:02:21'),
(6, '6', '合作伙伴标题', '#', '/img/partners/partners6.jpg', '', '2017-06-20 06:02:24'),
(7, '7', '合作伙伴标题', '#', '/img/partners/partners7.jpg', '', '2017-06-20 06:02:29'),
(8, '8', '合作伙伴标题', '#', '/img/partners/partners8.jpg', '', '2017-06-20 06:02:32'),
(9, '9', '合作伙伴标题', '#', '/img/partners/partners9.jpg', '', '2017-06-20 06:02:34');

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
(1, '1', '冷水机组系统', '', '/img/tu1.png', 'aaa', '2017-06-20 06:01:51'),
(3, '2', '环境箱维修维保服务', '', '/img/tu2.png', '', '2017-06-20 06:01:54'),
(4, '3', '工业定制设计服务', '', '/img/tu3.png', '', '2017-06-20 06:01:57'),
(5, '4', '冷却水塔', '', '/img/tu4.jpg', '', '2017-06-20 06:01:59'),
(6, '5', '环境试验的代理', '', '/img/tu5.jpg', '', '2017-06-20 06:02:02');

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
-- 表的结构 `web_products`
--

CREATE TABLE IF NOT EXISTS `web_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) DEFAULT NULL,
  `img_src1` varchar(100) DEFAULT NULL,
  `img_src2` varchar(100) DEFAULT NULL,
  `img_src3` varchar(100) DEFAULT NULL,
  `img_src4` varchar(100) DEFAULT NULL,
  `img_src5` varchar(100) DEFAULT NULL,
  `txt` varchar(2000) DEFAULT NULL,
  `inputdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `web_products`
--

INSERT INTO `web_products` (`id`, `title`, `img_src1`, `img_src2`, `img_src3`, `img_src4`, `img_src5`, `txt`, `inputdate`) VALUES
(1, '冷水机组', '/images/products/img1/img0.jpg', '/images/products/img1/img1.jpg', '/images/products/img1/img2.jpg', '/images/products/img1/img3.jpg', '/images/products/img1/img4.jpg', '	\n冷水机组\n1.首家全系标配压缩机降压启动系统,极大降低压缩机启动电流和冲击噪音\n2.首家全系标配美国菲尼克斯接线组件符合欧洲电气标准\n3.首家全系标配西门子S7-PLC+8寸彩色触摸屏,去除大量按键的累赘,并保存报警信息和温度曲线备查 \n4.首家全系标配漫画动态即时展示系统,显示所有部件运行情况\n5.首家全系标配ABB接触器和继电器,假一罚十\n6.首家全系标配压缩机高压温度显示报警\n7.首家全系标配不锈钢水箱和水温上下双向超限报警(市场同类设备只有单向)\n8.首家全系标配外转子静音风机\n9.首家全系标配不锈钢编制网软管,所有铜管由模具块固定,稳定安全牢固无噪音\n10.首家全系选配压缩机普通模式和启停模式由客户自由选择\n11.首家全系选配降噪金字塔形吸音棉\n12.首家设备保内维修更换部件保修一年，不受原机保修期限制\n', '2017-06-20 06:01:20'),
(2, '环境箱维修维保服务', '/images/products/img2/img0.jpg', '/images/products/img2/img1.jpg', '/images/products/img2/img2.jpg', '/images/products/img2/img3.jpg', '/images/products/img2/img4.jpg', '	\r\n环境箱维修维保服务\r\n\r\n因为我们在空调、制冷、环境试验箱领域具有16年的实际经验，我们的员工都在国际大品牌设备厂家工作十年以上，我们能够承接北方地区进口试验箱品牌为热测、环测、伟思、富奇、CTS、泰尼的如下业务\r\n1.环境试验箱控制主板维修和更换、屏幕维修（主驱动软件损坏的除外）\r\n2.环境试验箱制冷制热等日常维修、调试、咨询、承担维保服务\r\n3.环境试验箱控制器100%更换升级\r\n4.环境试验箱机体硬件改造\r\n5.环境试验箱屏蔽升级改造\r\n6.环境试验箱降噪升级改造\r\n7.环境试验箱风冷改水冷改造或反之\r\n', '2017-06-20 06:01:38');

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
(1, '北京市通州区张家湾垡头村', '010-65407746', '13311115810', 'ssoschbeijing@sina.com', 'www.ssosch.com', '601916409', '弗立兹官方网站', '弗立兹德国工业技术专业生产冷水设备', '弗立兹官网,弗立兹,冷水机,冷水设备', '2017-07-07 10:12:37');

-- --------------------------------------------------------

--
-- 表的结构 `web_user`
--

CREATE TABLE IF NOT EXISTS `web_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET latin1 NOT NULL,
  `password` varchar(50) CHARACTER SET latin1 NOT NULL,
  `aaa` int(15) NOT NULL,
  `intime` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `web_user`
--

INSERT INTO `web_user` (`id`, `name`, `password`, `aaa`, `intime`) VALUES
(1, 'wangpengyu', 'wangbadan', 0, '2017-05-04 16:09:24');

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
(1, '1', '富齐', 'http://www.voetsch-china.com/', '/img/friendlylink/link1.jpg', '', '2017-06-20 06:00:39'),
(2, '2', '环测', 'http://weiss-na.com/', '/img/friendlylink/link2.jpg', '', '2017-06-20 06:00:43'),
(3, '3', '克莱梅', 'http://www.climats-tec.com/', '/img/friendlylink/link3.jpg', '', '2017-06-20 06:00:47'),
(4, '4', '伟思', 'https://www.weiss-technik.com/en/', '/img/friendlylink/link4.jpg', '', '2017-06-20 06:00:51');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
