public with sharing class UserInfoController {
    @AuraEnabled
    public static Account getUserInfo(String person){
        Account thisUser = [SELECT name, rating, Username__c, Problems_Completed__c FROM Account WHERE (Username__c =: person OR name =: person )];
        return thisUser;
    }
    public UserInfoController() {

    }

    @AuraEnabled
    public static Account SaveAccount(Account acc){
        
        upsert acc;
        //update newUser;
        return acc;
    }
}