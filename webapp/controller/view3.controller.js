sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Dialog",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/m/Button",
		"sap/m/Popover"
], function (Controller, Dialog, List, StandardListItem, Button,Popover) {
	"use strict";

	return Controller.extend("productUs.zProductUs.controller.view3", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf productUs.zProductUs.view.view3
		 */
		onInit: function () {
			var oModelList = this.getOwnerComponent().getModel("ListData");
			this.getView().setModel(oModelList);
		},

		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		OnPressNavToPage2: function () {
			this.getRouter().navTo("Tile", {}, true);
			//var that = this;
			//that.OnClear();
		},


	OnSearch: function () {
			var oBttnSearch = this.getView().byId("obtnSearch");

			var oSearchFeild = this.getView().byId("txtSearch");
			oSearchFeild.setVisible(true);
			oBttnSearch.setVisible(false);

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
						text: "Close",
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

	});

});