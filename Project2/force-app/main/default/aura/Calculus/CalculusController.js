({
    LimitsFlow : function (component) {
        // Find the component whose aura:id is "LikeTermsFlow"
        var flow = component.find("FlowLimitsandContinuity");
        // In that component, start your flow. Reference the flow's API Name.
        flow.startFlow("Limits_and_Continuity");
    },
    DerivativeFlow : function (component) {
        // Find the component whose aura:id is "FlowDerivative"
        var flow = component.find("FlowDerivative");
        // In that component, start your flow. Reference the flow's API Name.
        flow.startFlow("The_Derivative");
    },

    IntegralFlow : function (component) {
        // Find the component whose aura:id is "LikeTermsFlow"
        var flow = component.find("FlowIntegral");
        // In that component, start your flow. Reference the flow's API Name.
        flow.startFlow("The_Integral");
    },
})