({
    FlowLikeTerms: function (component) {
        // Find the component whose aura:id is "LikeTermsFlow"
        var flow = component.find("LikeTermsFlow");
        // In that component, start your flow. Reference the flow's API Name.
        flow.startFlow("Like_Terms_Flow");
    },

    FlowLinear: function (component) {
        // Find the component whose aura:id is "LinearFlow"
        var flow = component.find("LinearFlow");
        // In that component, start your flow. Reference the flow's API Name.
        flow.startFlow("Linear_Functions");
    },

    FlowQuadratic: function (component) {
        // Find the component whose aura:id is "LinearFlow"
        var flow = component.find("QuadraticFlow");
        // In that component, start your flow. Reference the flow's API Name.
        flow.startFlow("Quadratic_Functions");
    },

})
