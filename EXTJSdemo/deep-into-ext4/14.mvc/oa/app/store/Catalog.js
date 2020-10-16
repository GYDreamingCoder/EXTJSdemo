Ext.define('app.store.Catalog', {
    extend: 'Ext.data.Store',
    requires: 'app.model.Catalog',
    model: 'app.model.Catalog',
	pageSize: 15,

	proxy: {
		type: 'ajax',
		url: './data/catalog.txt',
		reader: {
			type: 'json',
			totalProperty: 'totalCount',
			root: 'result',
			idProperty: 'id'
		}
	},
	remoteSort: true
});