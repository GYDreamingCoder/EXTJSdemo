Ext.define('app.controller.Article', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'article',
        selector: 'article'
    }],

	models: ['Article'],
    stores: ['Article'],

    init: function() {
        this.control({
            'article': {
                show: this.onArticleShow
            }
        });
    },

	onArticleShow: function() {
		this.getArticleStore().reload();
	}
});
