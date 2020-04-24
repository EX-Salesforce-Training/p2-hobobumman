({
    
    handleShowActiveSectionName: function (cmp, event, helper) {
        alert(cmp.find("accordion").get('v.activeSectionName'));
    },
    toggleArithmetic: function (cmp) {
        cmp.set('v.arithmeticVisible', !cmp.get('v.arithmeticVisible'));
        cmp.set('v.algebraVisible',false);
        cmp.set('v.calculusVisible',false);
        cmp.set('v.calculatorVisible',false);
        cmp.set('v.userInfoVisible',false);
    },
    toggleAlgebra: function (cmp) {
        cmp.set('v.arithmeticVisible', false);
        cmp.set('v.algebraVisible', !cmp.get('v.algebraVisible'));
        cmp.set('v.calculusVisible',false);
        cmp.set('v.calculatorVisible',false);
        cmp.set('v.userInfoVisible',false);
    },
    toggleCalculus: function (cmp) {
        cmp.set('v.arithmeticVisible', false);
        cmp.set('v.algebraVisible',false);
        cmp.set('v.calculusVisible', !cmp.get('v.calculusVisible'));
        cmp.set('v.calculatorVisible',false);
        cmp.set('v.userInfoVisible',false);
    },
    toggleCalculator: function (cmp) {
        cmp.set('v.arithmeticVisible', false);
        cmp.set('v.algebraVisible',false);
        cmp.set('v.calculusVisible',false);
        cmp.set('v.calculatorVisible', !cmp.get('v.calculatorVisible'));
        cmp.set('v.userInfoVisible',false);
    },
    toggleUserInfo: function (cmp) {
        cmp.set('v.arithmeticVisible', false);
        cmp.set('v.algebraVisible',false);
        cmp.set('v.calculusVisible',false);
        cmp.set('v.calculatorVisible',false);
        cmp.set('v.userInfoVisible', !cmp.get('v.userInfoVisible'));
    },
});
