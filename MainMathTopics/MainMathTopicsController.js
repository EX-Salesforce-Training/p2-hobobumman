({
    
    handleShowActiveSectionName: function (cmp, event, helper) {
        alert(cmp.find("accordion").get('v.activeSectionName'));
    },
    toggleArithmetic: function (cmp) {
        cmp.set('v.arithmeticVisible', !cmp.get('v.arithmeticVisible'));
    },
    toggleAlgebra: function (cmp) {
        cmp.set('v.algebraVisible', !cmp.get('v.algebraVisible'));
    },
    toggleCalculus: function (cmp) {
        cmp.set('v.calculusVisible', !cmp.get('v.calculusVisible'));
    },
    handleToggleSectionD: function (cmp) {
        cmp.set('v.isDVisible', !cmp.get('v.isDVisible'));
    }
});
