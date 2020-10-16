Ext.define('app.view.Article', {
    extend: 'Ext.grid.GridPanel',
    alias: 'widget.article',
	title: '公文管理',
	iconCls: 'icon-article',
	columns: [
        {header: '编号', dataIndex: 'id'},
        {header: '名称', dataIndex: 'name'}
    ],
    store: 'Article',
	forceFit: true,
	bbar: {
		xtype: 'pagingtoolbar',
		pageSize: 15,
		store: 'Article',
		displayInfo: true
	}
});
