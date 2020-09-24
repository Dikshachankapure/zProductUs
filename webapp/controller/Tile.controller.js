sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Dialog",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/m/Button",
	"sap/m/Popover",
	"sap/viz/ui5/format/ChartFormatter"
], function (Controller, Dialog, List, StandardListItem, Button, Popover,ChartFormatter) {
	"use strict";

	return Controller.extend("productUs.zProductUs.controller.Tile", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf productUs.zProductUs.view.Tile
		 
		 */

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
					name: 'Sales',
					value: "{Sales}"
				}]
			}

		},
		oVizFrame: null,
		oVizFrame1: null,
		oVizFrame2: null,
		oVizFrame3: null,

		onInit: function () {
			var oModelChart = this.getOwnerComponent().getModel("ChartDataSet");
			this.getView().setModel(oModelChart);

			var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");

			var oPopOver = this.getView().byId("idPopOver");
			oPopOver.connect(oVizFrame.getVizUid());
			oPopOver.setFormatString({
				
			});

			oVizFrame.setVizProperties({
				plotArea: {
					dataLabel: {

						visible: true
					}
				},
				valueAxis: {

					title: {
						visible: true
					}
				},
				categoryAxis: {
					title: {
						visible: true
					}
				},
				title: {
					visible: true,
					text: 'Revenue by City and Store Name'
				}
			});

			var oVizFrameSales = this.oVizFrameSales = this.getView().byId("idVizFrame1");
			oVizFrameSales.setVizProperties({
				plotArea: {
					dataLabel: {

						visible: true
					}
				},
				valueAxis: {

					title: {
						visible: true
					}
				},
				categoryAxis: {
					title: {
						visible: true
					}
				},
				title: {
					visible: true,

				}
			});

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

		press: function (oEvent) {

			// var oTile = this.getView().byId("tlTile");
			var oChart = this.getView().byId("idVizFrame");
			var oChartSales = this.getView().byId("idVizFrame1");

			oChart.setVisible(true);
			oChartSales.setVisible(false);

		},
		Onpress: function (oEvent) {

			// var oTile = this.getView().byId("tlTile");
			var oChart = this.getView().byId("idVizFrame");
			var oChartSales = this.getView().byId("idVizFrame1");
			oChart.setVisible(false);
			oChartSales.setVisible(true);

		},

		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		OnPressNavToPage3: function () {
			this.getRouter().navTo("view3", {}, true);
			//var that = this;
			//that.OnClear();
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
						new sap.m.Input(),

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
		},*/

	});

});