Ext.define('app.view.Catalog', {
    extend: 'Ext.grid.GridPanel',
    alias: 'widget.catalog',
	title: '分类管理',
	iconCls: 'icon-catalog',
	columns: [
        {header: '编号', dataIndex: 'id'},
        {header: '名称', dataIndex: 'name'}
    ],
    store: 'Catalog',
	forceFit: true,
	bbar: {
		xtype: 'pagingtoolbar',
		pageSize: 15,
		store: 'Catalog',
		displayInfo: true
	}
});
