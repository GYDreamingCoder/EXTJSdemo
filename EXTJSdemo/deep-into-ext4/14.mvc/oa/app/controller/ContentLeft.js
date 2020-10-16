Ext.define('app.controller.ContentLeft', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'contentleft',
        selector: 'contentleft'
    }, {
        ref: 'contentcenter',
        selector: 'contentcenter'
    }],

    init: function() {
        this.control({
            'contentleft treepanel': {
                itemclick: this.onClick
            }
        });
    },

	onClick: function(view, record) {
		var tabs = this.getContentcenter();
		tabs.items.each(function(data, index) {
			if (data.iconCls == record.get('iconCls')) {
				tabs.setActiveTab(index);
				return false;
			}
		});
	}
});
