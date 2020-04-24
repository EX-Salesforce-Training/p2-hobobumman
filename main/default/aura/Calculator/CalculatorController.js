({
    //For simple evaluation of an expression
    Evaluate : function(component, event, helper) {
		var input = component.get("v.userInput");
        var action = component.get("c.simplify");
        action.setParams({ "input" : input });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.results", response.getReturnValue());
            }
        });
     $A.enqueueAction(action);
    },
    //For simple factoring
    Factoring : function(component, event, helper) {
		var input = component.get("v.userInput");
        var action = component.get("c.apexFactor");
        action.setParams({ "input" : input });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.results", response.getReturnValue());
            }
        });
     $A.enqueueAction(action);
        
    },
    //For finding roots
    findRoots : function(component, event, helper) {
		var input = component.get("v.userInput");
        var action = component.get("c.apexRoots");
        action.setParams({ "input" : input });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.results", response.getReturnValue());
            }
        });
     $A.enqueueAction(action);
        
    },

    //For finding the area under the curve
    AreaUnderCurve : function(component, event, helper) {
		var input = component.get("v.userInput");
        var action = component.get("c.apexArea");
        action.setParams({ "input" : input });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.results", response.getReturnValue());
            }
        });
     $A.enqueueAction(action);
    },

    //For finding the equation of the tangent line
    TangentLine : function(component, event, helper) {
		var input = component.get("v.userInput");
        var action = component.get("c.apexTangentLine");
        action.setParams({ "input" : input });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.results", response.getReturnValue());
            }
        });
     $A.enqueueAction(action);
    },
    //For Sine function
    Sine : function(component, event, helper) {
		var input = component.get("v.userInput");
        component.set("v.userInput", input + "sin()");
        
    },

    //For Cosine function
    Cosine : function(component, event, helper) {
		var input = component.get("v.userInput");
        component.set("v.userInput", input + "cos()");
        
    },
    //For Tangent function
    Tangent : function(component, event, helper) {
		var input = component.get("v.userInput");
        component.set("v.userInput", input + "tan()");
        
    },
    //For the derivative
    Derivative : function(component, event, helper) {
		var input = component.get("v.userInput");
        var action = component.get("c.apexDerivative");
        action.setParams({ "input" : input });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.results", response.getReturnValue());
            }
        });
     $A.enqueueAction(action);
        
    },
    
    ////For the Integral
    Integral:function(component,event,helper){
        var input = component.get("v.userInput");
        var action = component.get("c.apexIntegral");
        action.setParams({ "input" : input });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.results", response.getReturnValue());
            }
        });
     $A.enqueueAction(action);

    },

    Add : function(component, event, helper) {
        var input = component.get("v.userInput");
        component.set("v.userInput", input + "+");
            },
    Sub : function(component, event, helper) {
        var input = component.get("v.userInput");
        component.set("v.userInput", input + "-");
       
                    },
    Mul : function(component, event, helper) {
        var input = component.get("v.userInput");
        component.set("v.userInput", input + "*");
                            },
    Divi : function(component, event, helper) {
        var input = component.get("v.userInput");
        component.set("v.userInput", input + "/");
    },     
    openParanthesis: function(component, event, helper) {
        var input = component.get("v.userInput");
        component.set("v.userInput", input + "(");
    },  
    closeParanthesis: function(component, event, helper) {
        var input = component.get("v.userInput");
        component.set("v.userInput", input + ")");
    },                  
    Clear : function(component, event, helper) {
        component.set("v.results","");
        component.set("v.userInput","");
        
    }
                   
                
})
