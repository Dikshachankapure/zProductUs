sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/Dialog",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/m/Button",
	"sap/m/Popover"
], function (Controller, JSONModel, Dialog, List, StandardListItem, Button, Popover) {
	"use strict";

	return Controller.extend("productUs.zProductUs.controller.View1", {

		dataPath: "jsondata/",

		EndCustomerModel: {
			dataset: {
				name: "Dataset1",
				defaultSelected: 2,
				values: [{
					name: "Large",
					value: "/chart.json"
				}]
			},

			dataLabel: {
				name: "Revenue",
				defaultState: true
			},
			axisTitle: {
				name: "Revenue",
				defaultState: true
			},
			dimensions: {
				Large: [{
					name: 'Month',
					value: "{Month}"
				}]
			},
			measures: [{
				name: 'Company 1',
				value: '{Company 1}'
			}, {
				name: 'Company 2',
				value: '{Company 2}'
			}, {
				name: 'Company 3',
				value: '{Company 3}'
			}, {
				name: 'Company 4',
				value: '{Company 4}'
			}, {
				name: 'Company 5',
				value: '{Company 5}'
			}, {
				name: 'Company 6',
				value: '{Company 6}'
			}, {
				name: 'Company 7',
				value: '{Company 7}'
			}, {
				name: 'Company 8',
				value: '{Company 8}'
			}, {
				name: 'Company 9',
				value: '{Company 9}'
			}, {
				name: 'Company 10',
				value: '{Company 10}'
			}]

		},
		oVizFrame: null,
		oVizFrame1: null,
		oVizFrame2: null,
		oVizFrame3: null,

		onInit: function (evt) {

			var oModelChart = this.getOwnerComponent().getModel("ChartDataSet");
			this.getView().setModel(oModelChart);

		},

		press: function (oEvent) {

			// var oTile = this.getView().byId("tlTile");
			var oChart = this.getView().byId("idVizFrame");
			oChart.setVisible(true);

		},

		Onpress: function (oEvent) {

			// var oTile = this.getView().byId("tlTile");
			var oChart = this.getView().byId("idVizFrame1");
			oChart.setVisible(true);

		},
		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		OnSelect: function () {
			this.getRouter().navTo("Tile", {}, true);
			//var that = this;
			//that.OnClear();
		},

		OnPressNavToPage3: function () {
			this.getRouter().navTo("view3", {}, true);
			//var that = this;
			//that.OnClear();
		},
		
		
			OnPressNavToPage4: function () {
			this.getRouter().navTo("view4", {}, true);
			//var that = this;
			//that.OnClear();
		},

		onSideNavButtonPress: function () {
			var toolPage = this.byId("toolPage");
			var sideExpanded = toolPage.getSideExpanded();

			this._setToggleButtonTooltip(sideExpanded);

			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		},

		_setToggleButtonTooltip: function (bLarge) {
			var toggleButton = this.byId('sideNavigationToggleButton');
			if (bLarge) {
				toggleButton.setTooltip('Large Size Navigation');
			} else {
				toggleButton.setTooltip('Small Size Navigation');
			}
		},

		OnSearch: function () {
			var oBttnSearch = this.getView().byId("obtnSearch");

			var oSearchFeild = this.getView().byId("txtSearch");
			oSearchFeild.setVisible(true);
			oBttnSearch.setVisible(false);

		},

		pressDialog: null,
		fixedSizeDialog: null,

		OnDialogPress: function () {
			if (!this.pressDialog) {
				this.pressDialog = new Dialog({
					title: "Give Feedback",
					content: [

						new sap.m.Label({
							text: "Give Your Feedback"
						}),
						new sap.m.Input()

					],
					beginButton: new Button({
						text: 'OK',
						press: function () {
							this.pressDialog.close();
						}.bind(this)
					}),
					endButton: new Button({
						text: 'Close',
						press: function () {
							this.pressDialog.close();
						}.bind(this)
					})
				});

				//to get access to the global model
				this.getView().addDependent(this.pressDialog);
			}

			this.pressDialog.open();
		},

		OnUser: function (event) {

			var popover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content: [

					new Button({
						text: 'Setting',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Logout',
						type: sap.m.ButtonType.Transparent
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			popover.openBy(event.getSource());
		},

		/*	OnLogin: function () {
				if (!this.fixedSizeDialog) {
					this.fixedSizeDialog = new Dialog({
						title: "User Profile",
						content: [

						],
						beginButton: new Button({
							text: 'Close',
							press: function () {
								this.fixedSizeDialog.close();
							}.bind(this)
						}),

					});

					//to get access to the global model
					this.getView().addDependent(this.fixedSizeDialog);
				}

				this.fixedSizeDialog.open();
			}*/

		/*onInit: function () {

		}*/
	});
});