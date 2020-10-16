Ext.define('app.store.Org', {
    extend: 'Ext.data.TreeStore',

	proxy: {
		type: 'ajax',
		url: 'data/org.txt'
	},
	root: {
		text: '组织机构',
		expanded: true
	}
});