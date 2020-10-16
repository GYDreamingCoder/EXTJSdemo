Ext.define('mvc.view.Demo', {
    extend: 'Ext.Panel',
    alias: 'widget.demo',
    store: 'Demo',
    queryMode: 'local',
	title: 'Demo',
	buttons: [{
		text: 'update',
		action: 'updatePanelBody'
	}],

    updateBody: function(html) {
        this.body.setHTML(html);
    }
});
