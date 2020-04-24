public with sharing class UserInfoController {
    @AuraEnabled
    public static User getUserInfo(String person){
        User thisUser = [SELECT name, username, alias, communityNickName, Problems_Completed__c FROM User WHERE username =: person];
        return thisUser;
    }
    public UserInfoController() {

    }
}
