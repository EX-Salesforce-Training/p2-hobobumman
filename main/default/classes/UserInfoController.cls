public with sharing class UserInfoController {
    @AuraEnabled
    public static Account getUserInfo(String person){
        Account thisUser = [SELECT name, rating FROM Account WHERE name =: person];
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
