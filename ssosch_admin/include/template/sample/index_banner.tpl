<{include file ="header.tpl"}>
<{include file ="navibar.tpl"}>
<{include file ="sidebar.tpl"}>
<{* TPLSTART 以上内容不需更改，保证该 TPL 页内的标签匹配即可 *}>
<div class="block">
	<a href="#page-stats" class="block-heading" data-toggle="collapse">首页幻灯片1</a>
	<div id="page-stats" class="block-body collapse in">
	<table class="table table-striped">
			<thead>
			<tr>
				<th>#</th>
				<th>所有者</th>
			</tr>
			</thead>
			<tbody>
			<{foreach name=osa_banner from=$osa_banner item=osa_banner}>
				<tr>
				<td><{$osa_banner.id}></td>
				<td><{$osa_banner.title}></td>
				<td><{$osa_banner.content}></td>
				<td><{$osa_banner.simg_src}></td>
				<td><{$osa_banner.img_src}></td>
				</tr>
			<{/foreach}>
		  </tbody>
		</table>
	</div>
</div>
<{* TPLEND 以下内容不需更改，请保证该 TPL 页内的标签匹配即可 *}>
<{include file="footer.tpl" }>
