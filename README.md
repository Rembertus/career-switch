# career-switch
Challenge técnico: Career Switch

## Instructions
npm install  

## Test
npm run test  

![Result Test](career-switch-test.jpg)

### EndPoints for Postman
npm run dev  
  
<strong>Get Token From Email  </strong>  
GET http://127.0.0.1:3000/api/gettokenemail  

<strong>Sort Block List  </strong>  
POST http://127.0.0.1:3000/api/check  
Body-Json
```javascript 
{
    "data": ["string1", "string2", "string3", "string4", "string5", "string6", "string7", "string8", "string9"]    
}
```
<strong>Verify Block List  </strong>  
http://127.0.0.1:3000/api/verify  
Body-Json
```javascript 
{
    "encoded": ["string1", "string2", "string3", "string4", "string5", "string6", "string7", "string8", "string9"]    
}
```
