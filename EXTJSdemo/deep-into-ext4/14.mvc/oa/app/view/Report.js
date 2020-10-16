
Ext.define('WeatherPoint', {
	extend: 'Ext.data.Model',
	fields: ['temperature', 'date']
});

var store = Ext.create('Ext.data.Store', {
	model: 'WeatherPoint',
	data: [
		{ temperature: 48, date: new Date(2011, 1, 1, 8) },
		{ temperature: 63, date: new Date(2011, 1, 2, 9) },
		{ temperature: 43, date: new Date(2011, 1, 3, 10) },
		{ temperature: 78, date: new Date(2011, 1, 4, 11) },
		{ temperature: 71, date: new Date(2011, 1, 5, 12) },
		{ temperature: 70, date: new Date(2011, 1, 6, 12) },
		{ temperature: 76, date: new Date(2011, 1, 7, 12) }
	]
});

Ext.define('app.view.Report', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.report',
    store: store,
	title: '统计报表',
	iconCls: 'icon-chart',
    axes: [
        {
            title: 'Temperature',
            type: 'Numeric',
            position: 'left',
            fields: ['temperature'],
            minimum: 0,
            maximum: 100
        },
        {
            title: 'Time',
            type: 'Time',
            position: 'bottom',
            fields: ['date'],
            dateFormat: 'ga'
        }
	],
    series: [
        {
            type: 'line',
            xField: 'date',
            yField: 'temperature'
        }
    ]
});
