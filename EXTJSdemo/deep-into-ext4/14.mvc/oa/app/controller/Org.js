Ext.define('app.controller.Org', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'org',
        selector: 'org'
    }],

	models: ['Org'],
    stores: ['Org'],

    init: function() {
        this.control({
            'org': {
                show: this.onOrgShow
            },
			'org button[action=add]': {
				click: this.onOrgAdd
			},
			'org button[action=edit]': {
				click: this.onOrgEdit
			},
			'org button[action=delete]': {
				click: this.onOrgDelete
			}
        });
    },

	onOrgShow: function() {
		this.getOrgStore().reload();
	},

	onOrgAdd: function() {
		var view = this.getOrg();
		var selection = view.getSelectionModel().getSelection();
		if (selection.length == 0) {
			return;
		}
		var selected = selection[0];

		selected.appendChild({
			text: ''
		});
	},

	onOrgEdit: function() {
		var view = this.getOrg();
		var selection = view.getSelectionModel().getSelection();
		if (selection.length == 0) {
			return;
		}
		var selected = selection[0];

		cellEditing.startEdit(selected, 0);
	},

	onOrgDelete: function() {
		var view = this.getOrg();
		var selection = view.getSelectionModel().getSelection();
		if (selection.length == 0) {
			return;
		}
		var selected = selection[0];

		selected.parentNode.removeChild(selected);
	}
});
