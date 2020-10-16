Ext.define('app.store.Article', {
    extend: 'Ext.data.Store',
    requires: 'app.model.Article',
    model: 'app.model.Article',
	pageSize: 15,

	proxy: {
		type: 'ajax',
		url: './data/article.txt',
		reader: {
			type: 'json',
			totalProperty: 'totalCount',
			root: 'result',
			idProperty: 'id'
		}
	},
	remoteSort: true
});