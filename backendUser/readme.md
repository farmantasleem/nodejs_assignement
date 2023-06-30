## Api Endpoints

Register
Method: POST
Endpoint: /register
Payload:
{ "name": "user_name", "email": "user_email", "password": "user_password" }
Response :
{"msg":"User Registered Successfully"}

LOGIN
Method: POST
Endpoint: /login
Payload:
{ "email": "user_email", "password": "user_password" }
Response:
{"msg":"User Login Successfully"}
