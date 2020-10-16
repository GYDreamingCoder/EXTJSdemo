Ext.define('app.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',

    requires: [
        'app.view.User',
        'app.view.Org',
        'app.view.Auth',
        'app.view.Catalog',
        'app.view.Article',
        'app.view.Report',
        'app.view.ContentLeft',
        'app.view.ContentCenter',
        'app.view.ContentPortal'
    ],

    initComponent: function() {
        this.items = [{
			region: 'north',
			xtype: 'toolbar',
			items: [
				'<h2>EXT OA</h2>',
				'->', {
				text: '登录',
				iconCls: 'icon-login',
				action: 'login'
			}, {
				text: '修改密码',
				iconCls: 'icon-password',
				action: 'password'
			}]
		}, {
			region: 'west',
			width: 150,
			xtype: 'contentleft'
		}, {
			region: 'center',
			xtype: 'contentcenter'
		}];

        this.callParent();
    }
});
