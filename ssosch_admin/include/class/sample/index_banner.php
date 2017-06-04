<?php
if (!defined('ACCESS')) {exit('Access denied.');}

class Banner extends SampleBase
{
//class Banner extends Base {
	private static $table_name = 'osa_banner';

	private static $columns = 'id, title, content, simg_src, img_src';

	public static function getTableName()
	{
		return self::$table_name;
	}

	public static function getBanner() {

		// 以下两种方式均可以访问 osa_banner 的 DB
		$db = self::__instance();
		// $db = self::__instance(SAMPLE_DB_ID);

		$sql = "select ".self::$columns." from ".self::getTableName();
		$list = $db->query($sql)->fetchAll();
		if ($list) {
			return $list;
		}
		return array();		
	}
}
