# Api Endpoints

### Register
Method: POST
Endpoint: /user/register
Payload:
{   "name": "user_name",   "email": "user_email",   "password": "user_password" }

### LOGIN
Method: POST
Endpoint: /user/login
Payload:
{  "email": "user_email",   "password": "user_password" }

### Add Blog
Method: POST
Endpoint: /blog/add
Payload:
{  "title": "blog_title", "desc": "blog_description","img":"blog_img_url",content:"blog_content" }
headers:
{"authorization":`bearer ${token}`}

### Get all Blog
Method: Get
Endpoint: /blog/
Response: All blog Data

### delete Blog By Id
Method: DELETE
Endpoint: /blog/:id
headers:
{"authorization":`bearer ${token}`}
Note: The blog will be deleted if You are the author of the blog

### Update blog by Id

Method: PATCH
Endpoint: /blog/:id
payload: whatever you want to update
headers:
{"authorization":`bearer ${token}`}
Note: The blog will be updated if You are the author of the blog

### Get Specific Blog By Id
Method: GET
Endpoint: /blog/:blogID
Response: blog Data

### Get blogs of Specific User
Method: GET
Endpoint: /myblog/:authorId
headers:
{"authorization":`bearer ${token}`}


