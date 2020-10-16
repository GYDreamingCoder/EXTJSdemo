Ext.define('app.view.ContentCenter', {
    extend: 'Ext.TabPanel',
    alias: 'widget.contentcenter',
	items: [{
		xtype: 'contentportal'
	}, {
		xtype: 'user'
	}, {
		xtype: 'org'
	}, {
		xtype: 'auth'
	}, {
		xtype: 'catalog'
	}, {
		xtype: 'article'
	}, {
		xtype: 'report'
	}]
});
