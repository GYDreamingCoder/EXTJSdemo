
Ext.onReady(function(){
    Ext.Direct.addProvider(Ext.app.REMOTING_API);

    var store = new Ext.data.DirectStore({
        paramsAsHash:false,
        root:'',
        directFn: Grid.getResult,
        fields: [
          {name: 'id' },
          {name: 'title'},
          {name: 'content'}
        ]
    });

    var grid = new Ext.grid.GridPanel({
        width: 400,
        autoHeight: true,
        renderTo: document.body,
        store: store,
        columns: [{
            header: 'ID',
            dataIndex: 'id'
        }, {
            header: 'Title',
            dataIndex: 'title'
        }, {
            header: 'Content',
            dataIndex: 'content'
        }]
    });
    store.load();
});
