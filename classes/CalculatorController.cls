public with sharing class CalculatorController {

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
    
}
