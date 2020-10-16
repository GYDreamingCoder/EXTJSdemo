Ext.define('app.store.User', {
    extend: 'Ext.data.Store',
    requires: 'app.model.User',
    model: 'app.model.User',
	pageSize: 15,

	proxy: {
		type: 'ajax',
		url: './data/user.txt',
		reader: {
			type: 'json',
			totalProperty: 'totalCount',
			root: 'result',
			idProperty: 'id'
		}
	},
	remoteSort: true
});