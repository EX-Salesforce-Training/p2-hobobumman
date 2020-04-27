public with sharing class CalculatorController {

    //Apex Controller for the Derivative    
    @AuraEnabled
    public static string simplify(String input){
        //This string will store the result of API consuation.
        String theResult;

        //http Callout stuff.
        Http httpCallout = new Http();
        HttpRequest httpReq = new HttpRequest();
        httpReq.setEndpoint('https://newton.now.sh/simplify/'+input);//x^2-1');
        httpReq.setMethod('GET');
        HttpResponse httpRes = httpCallout.send(httpReq);
        
        //Store the API request in theResult. check for errors. 
        if(httpRes.getStatusCode() == 200) {
            Map<String,Object> responseBody = (Map<String,Object>) JSON.deserializeUntyped(httpRes.getBody());
            
            theResult = (String.valueOf(responseBody.get('result')));
        //If it isn't a success, tell us what it is.
        } else {
            theResult = 'The GET request returned a response with status code ' + httpRes.getStatusCode();
            
        }
        //return
         Return theResult;
    }
    //Apex Controller for the Derivative    
    @AuraEnabled
    public static string apexDerivative(String input){
        //This string will store the result of API consuation.
        String theResult;

        //http Callout stuff.
        Http httpCallout = new Http();
        HttpRequest httpReq = new HttpRequest();
        httpReq.setEndpoint('https://newton.now.sh/derive/'+input);//x^2-1');
        httpReq.setMethod('GET');
        HttpResponse httpRes = httpCallout.send(httpReq);
        
        //Store the API request in theResult. check for errors. 
        if(httpRes.getStatusCode() == 200) {
            Map<String,Object> responseBody = (Map<String,Object>) JSON.deserializeUntyped(httpRes.getBody());
            
            theResult = (String.valueOf(responseBody.get('result')));
        //If it isn't a success, tell us what it is.
        } else {
            theResult = 'The GET request returned a response with status code ' + httpRes.getStatusCode();
            
        }
        //return
         Return theResult;
    }

   //Apex Controller for the Integral  
   @AuraEnabled
   public static string apexIntegral(String input){
       //This string will store the result of API consuation.
       String theResult;

       //http Callout stuff.
       Http httpCallout = new Http();
       HttpRequest httpReq = new HttpRequest();
       httpReq.setEndpoint('https://newton.now.sh/integrate/'+input);//x^2-1');
       httpReq.setMethod('GET');
       HttpResponse httpRes = httpCallout.send(httpReq);
       
       //Store the API request in theResult. check for errors. 
       if(httpRes.getStatusCode() == 200) {
           Map<String,Object> responseBody = (Map<String,Object>) JSON.deserializeUntyped(httpRes.getBody());
           
           theResult = (String.valueOf(responseBody.get('result')));
       //If it isn't a success, tell us what it is.
       } else {
           theResult = 'The GET request returned a response with status code ' + httpRes.getStatusCode();
           
       }
       //return
        Return theResult;
   } 
    
   //Apex Controller for factoring
   @AuraEnabled
   public static string apexFactor(String input){
       //This string will store the result of API consuation.
       String theResult;

       //http Callout stuff.
       Http httpCallout = new Http();
       HttpRequest httpReq = new HttpRequest();
       httpReq.setEndpoint('https://newton.now.sh/factor/'+input);//x^2-1');
       httpReq.setMethod('GET');
       HttpResponse httpRes = httpCallout.send(httpReq);
       
       //Store the API request in theResult. check for errors. 
       if(httpRes.getStatusCode() == 200) {
           Map<String,Object> responseBody = (Map<String,Object>) JSON.deserializeUntyped(httpRes.getBody());
           
           theResult = (String.valueOf(responseBody.get('result')));
       //If it isn't a success, tell us what it is.
       } else {
           theResult = 'The GET request returned a response with status code ' + httpRes.getStatusCode();
           
       }
       //return
        Return theResult;
   } 

   //Apex Controller for finding roots/zeros
   @AuraEnabled
   public static string apexRoots(String input){
       //This string will store the result of API consuation.
       String theResult;

       //http Callout stuff.
       Http httpCallout = new Http();
       HttpRequest httpReq = new HttpRequest();
       httpReq.setEndpoint('https://newton.now.sh/zeroes/'+input);//x^2-1');
       httpReq.setMethod('GET');
       HttpResponse httpRes = httpCallout.send(httpReq);
       
       //Store the API request in theResult. check for errors. 
       if(httpRes.getStatusCode() == 200) {
           Map<String,Object> responseBody = (Map<String,Object>) JSON.deserializeUntyped(httpRes.getBody());
           
           theResult = (String.valueOf(responseBody.get('result')));
       //If it isn't a success, tell us what it is.
       } else {
           theResult = 'The GET request returned a response with status code ' + httpRes.getStatusCode();
           
       }
       //return
        Return theResult;
   } 

   //Apex Controller for finding the equation of the tangent line
   @AuraEnabled
   public static string apexTangentLine(String input){
       //This string will store the result of API consuation.
       String theResult;

       //http Callout stuff.
       Http httpCallout = new Http();
       HttpRequest httpReq = new HttpRequest();
       httpReq.setEndpoint('https://newton.now.sh/tangent/'+input);//x^2-1');
       httpReq.setMethod('GET');
       HttpResponse httpRes = httpCallout.send(httpReq);
       
       //Store the API request in theResult. check for errors. 
       if(httpRes.getStatusCode() == 200) {
           Map<String,Object> responseBody = (Map<String,Object>) JSON.deserializeUntyped(httpRes.getBody());
           
           theResult = (String.valueOf(responseBody.get('result')));
       //If it isn't a success, tell us what it is.
       } else {
           theResult = 'The GET request returned a response with status code ' + httpRes.getStatusCode();
           
       }
       //return
        Return theResult;
   } 

   //Apex Controller for finding the area under the curve
   @AuraEnabled
   public static string apexArea(String input){
       //This string will store the result of API consuation.
       String theResult;

       //http Callout stuff.
       Http httpCallout = new Http();
       HttpRequest httpReq = new HttpRequest();
       httpReq.setEndpoint('https://newton.now.sh/area/'+input);//x^2-1');
       httpReq.setMethod('GET');
       HttpResponse httpRes = httpCallout.send(httpReq);
       
       //Store the API request in theResult. check for errors. 
       if(httpRes.getStatusCode() == 200) {
           Map<String,Object> responseBody = (Map<String,Object>) JSON.deserializeUntyped(httpRes.getBody());
           
           theResult = (String.valueOf(responseBody.get('result')));
       //If it isn't a success, tell us what it is.
       } else {
           theResult = 'The GET request returned a response with status code ' + httpRes.getStatusCode();
           
       }
       //return
        Return theResult;
   } 
   
}