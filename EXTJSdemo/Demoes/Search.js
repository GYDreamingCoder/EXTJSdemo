Ext.define('Ext.ux.form.SearchField', {
    extend: 'Ext.form.field.Trigger',

    alias: 'widget.searchfield',//别名

    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',//给按钮附加CSS样式

    trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger',//给按钮附加CSS样式

    hasSearch: false,//自定义属性
    paramName: 'query',//自定义属性

    initComponent: function () {//覆盖父类的initComponent()函数,初始化组件
        var me = this;

        me.callParent(arguments); //确保父类的在InitComponent中的方法是传递给构造函数的called
        me.on('specialkey', function (f, e) {//定义键盘按钮来触发搜索事件
            if (e.getKey() == e.ENTER) {
                me.onTrigger2Click();
            }
        });

        // We're going to use filtering
        me.store.remoteFilter = true;

        // Set up the proxy to encode the filter in the simplest way as a name/value pair

        // If the Store has not been *configured* with a filterParam property, then use our filter parameter name
        if (!me.store.proxy.hasOwnProperty('filterParam')) {
            me.store.proxy.filterParam = me.paramName;
        }
        me.store.proxy.encodeFilters = function (filters) {
            return filters[0].value;
        }
    },

    afterRender: function () {//允许完成渲染之后添加行为
        this.callParent();
        this.triggerCell.item(0).setDisplayed(false);
    },

    onTrigger1Click: function () {
        var me = this;

        if (me.hasSearch) {
            me.setValue('');
            me.store.clearFilter();
            me.hasSearch = false;
            me.triggerCell.item(0).setDisplayed(false);
            me.updateLayout();
        }
    },

    onTrigger2Click: function () {
        var me = this,
            value = me.getValue();

        if (value.length > 0) {
            // Param name is ignored here since we use custom encoding in the proxy.
            // id is used by the Store to replace any previous filter
            me.store.filter({
                id: me.paramName,
                property: me.paramName,
                value: value
            });
            me.hasSearch = true;
            me.triggerCell.item(0).setDisplayed(true);
            me.updateLayout();
        }
    }
});