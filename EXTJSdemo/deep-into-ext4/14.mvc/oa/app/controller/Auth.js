Ext.define('app.controller.Auth', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'auth',
        selector: 'auth'
    }],

	models: ['Auth'],
    stores: ['Auth'],

    init: function() {
        this.control({
            'auth': {
                show: this.onAuthShow
            }
        });
    },

	onAuthShow: function() {
		this.getAuthStore().reload();
	}
});
