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
    }
})
