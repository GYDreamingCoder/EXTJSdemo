Ext.define('app.view.ContentLeft', {
    extend: 'Ext.Panel',
    alias: 'widget.contentleft',
	layout: 'accordion',
	items: [{
		iconCls: 'icon-sys',
		title: '系统管理',
		xtype: 'treepanel',
		rootVisible: false,
		root: {
			children: [{
				iconCls: 'icon-user',
				text: '用户管理',
				leaf: true
			}, {
				iconCls: 'icon-org',
				text: '组织机构管理',
				leaf: true
			}, {
				iconCls: 'icon-auth',
				text: '权限管理',
				leaf: true
			}]
		}
	}, {
		iconCls: 'icon-content',
		title: '公文管理',
		xtype: 'treepanel',
		rootVisible: false,
		root: {
			children: [{
				iconCls: 'icon-catalog',
				text: '分类管理',
				leaf: true
			}, {
				iconCls: 'icon-article',
				text: '公文管理',
				leaf: true
			}]
		}
	}, {
		iconCls: 'icon-report',
		title: '统计报表',
		xtype: 'treepanel',
		rootVisible: false,
		root: {
			children: [{
				iconCls: 'icon-chart',
				text: '统计报表',
				leaf: true
			}]
		}
	}]
});