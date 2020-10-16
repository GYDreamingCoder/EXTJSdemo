Ext.define('mvc.model.Demo', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],

    proxy: {
        type: 'ajax',
        url: 'data/demo.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});
