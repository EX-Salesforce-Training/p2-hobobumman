({
    FlowBasicOperations : function (component) {
        // Find the component whose aura:id is "LikeTermsFlow"
        var flow = component.find("BasicOperationsFlow");
        // In that component, start your flow. Reference the flow's API Name.
        flow.startFlow("The_Four_Basic_Operations");
    },
    FlowFractions : function (component) {
        // Find the component whose aura:id is "LikeTermsFlow"
        var flow = component.find("FractionsFlow");
        // In that component, start your flow. Reference the flow's API Name.
        flow.startFlow("Fractions");
    },
    FlowDecimals : function (component) {
        // Find the component whose aura:id is "LikeTermsFlow"
        var flow = component.find("DecimalsFlow");
        // In that component, start your flow. Reference the flow's API Name.
        flow.startFlow("Decimals");
    },
})