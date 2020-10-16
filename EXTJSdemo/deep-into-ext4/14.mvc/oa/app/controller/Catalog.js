Ext.define('app.controller.Catalog', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'catalog',
        selector: 'catalog'
    }],

	models: ['Catalog'],
    stores: ['Catalog'],

    init: function() {
        this.control({
            'catalog': {
                show: this.onCatalogShow
            }
        });
    },

	onCatalogShow: function() {
		this.getCatalogStore().reload();
	}
});
