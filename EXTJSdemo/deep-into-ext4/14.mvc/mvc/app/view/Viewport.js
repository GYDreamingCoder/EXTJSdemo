Ext.define('mvc.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',

    requires: [
        'mvc.view.Demo'
    ],

    initComponent: function() {
        this.items = [{xtype: 'demo'}];

        this.callParent();
    }
});
