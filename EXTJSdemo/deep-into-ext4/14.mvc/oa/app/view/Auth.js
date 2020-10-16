Ext.define('app.view.Auth', {
    extend: 'Ext.grid.GridPanel',
    alias: 'widget.auth',
	title: '权限管理',
	iconCls: 'icon-auth',
	columns: [
        {header: '编号', dataIndex: 'id'},
        {header: '名称', dataIndex: 'name'}
    ],
    store: 'Auth',
	forceFit: true,
	bbar: {
		xtype: 'pagingtoolbar',
		pageSize: 15,
		store: 'Auth',
		displayInfo: true
	}
});
