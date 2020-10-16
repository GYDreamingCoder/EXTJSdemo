Ext.define('app.store.Auth', {
    extend: 'Ext.data.Store',
    requires: 'app.model.Auth',
    model: 'app.model.Auth',
	pageSize: 15,

	proxy: {
		type: 'ajax',
		url: './data/auth.txt',
		reader: {
			type: 'json',
			totalProperty: 'totalCount',
			root: 'result',
			idProperty: 'id'
		}
	},
	remoteSort: true
});