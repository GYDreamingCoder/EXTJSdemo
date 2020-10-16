Ext.application({
    name: 'app',

    autoCreateViewport: true,

    models: ['User', 'Org', 'Auth', 'Catalog', 'Article'],
    stores: ['User', 'Org', 'Auth', 'Catalog', 'Article'],
    controllers: ['User', 'Org', 'Auth', 'Catalog', 'Article', 'ContentLeft']
});
