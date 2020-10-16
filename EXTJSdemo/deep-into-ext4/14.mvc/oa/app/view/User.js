
var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
	clicksToMoveEditor: 1,
	autoCancel: false
});

Ext.define('app.view.User', {
    extend: 'Ext.grid.GridPanel',
    alias: 'widget.user',
	title: '用户管理',
	iconCls: 'icon-user',
	columns: [
        {header: '学号', dataIndex: 'code'},
        {header: '姓名', dataIndex: 'name'},
        {header: '性别', dataIndex: 'sex', renderer: function(value) {
			if (value == 1) {
				return '<span style="color:red;font-weight:bold;">男</span>';
			} else if (value == 2) {
				return '<span style="color:green;font-weight:bold;">女</span>';
			}
		}},
        {header: '年龄', dataIndex: 'age'},
        {header: '政治面貌', dataIndex: 'political'},
        {header: '籍贯', dataIndex: 'origin'},
        {header: '所属系', dataIndex: 'professional'}
    ],
	store: 'User',
	forceFit: true,
	tbar: [{
		iconCls: 'icon-add',
		text: '添加',
		action: 'add'
	}, {
		iconCls: 'icon-edit',
		text: '修改',
		action: 'edit'
	}, {
		iconCls: 'icon-delete',
		text: '删除',
		action: 'delete'
	}],
	bbar: {
		xtype: 'pagingtoolbar',
		pageSize: 15,
		store: 'User',
		displayInfo: true
	}
});
