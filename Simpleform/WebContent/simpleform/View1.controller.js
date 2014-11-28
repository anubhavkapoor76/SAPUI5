sap.ui.controller("simpleform.View1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf simpleform.View1
*/
	onInit: function() {
		var mModel = new sap.ui.model.json.JSONModel("model/your_data.json"); //initialise your model from a JSON file

		  sap.ui.getCore().setModel(mModel); //set model with a name to use later

		 

		  var oItemSelectTemplate = new sap.ui.core.Item({

		            key : "{dkey}",

		            text : "{dtext}"

		        }); //Define the template for items, which will be inserted inside a select element

		 var mySelectMenu = this.byId("mySelectMenu"); //Get a reference to the UI element, Select to bind data

		//mySelectMenu.setModel(sap.ui.getCore().getModel("your_data_model"));// set model your_data_model to Select element

		mySelectMenu.bindAggregation("items","/mRoot",oItemSelectTemplate);
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf simpleform.View1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf simpleform.View1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf simpleform.View1
*/
//	onExit: function() {
//
//	}
display: function(){
	//var val = $("#idView11--idfname-inner").val();
	//alert('first Name'+val);
	app.to("idView12");
}
});