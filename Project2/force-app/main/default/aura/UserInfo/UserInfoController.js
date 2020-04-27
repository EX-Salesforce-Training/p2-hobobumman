({
    ObtainUserInfo : function(component, event, helper) {
        var input = component.get("v.userInput")
      	var action = component.get("c.getUserInfo");
        action.setParams({"person":input});
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.theUser", response.getReturnValue());
            }
        });
     $A.enqueueAction(action);
    },
    CreateAccount: function(component, event, helper) {
		var newAccount = component.get("v.newAccount");
        var action = component.get("c.SaveAccount");        
        action.setParams({
            "acc": newAccount
        });
        
        action.setCallback(this, function(response) {
        	console.log(JSON.stringify(newAccount));
            var state = response.getState();
            if (state === "SUCCESS") {
                
            }
        });
        $A.enqueueAction(action);

        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'Success',
            message: 'Account Saved!',
            duration:' 5000',
            key: 'info_alt',
            type: 'success',
            mode: 'pester'
        });
        toastEvent.fire();
	},
})