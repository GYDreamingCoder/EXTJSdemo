Ext.define('mvc.controller.Demo', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'demo',
        selector: 'demo'
    }],

    stores: ['Demo'],

    init: function() {
        this.control({
            'demo button[action=updatePanelBody]': {
                click: this.onDemoUpdate
            }
        });
    },

	onDemoUpdate: function() {
		this.getDemo().updateBody('body update');
	}
});
