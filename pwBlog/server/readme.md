# Api Endpoints

### Register
Method: POST <br>
Endpoint: /user/register <br>
Payload:<br>
{   "name": "user_name",   "email": "user_email",   "password": "user_password" }

### LOGIN
Method: POST<br>
Endpoint: /user/login<br>
Payload:<br>
{  "email": "user_email",   "password": "user_password" }

### Add Blog
Method: POST<br>
Endpoint: /blog/add <br>
Payload:<br>
{  "title": "blog_title", "desc": "blog_description","img":"blog_img_url",content:"blog_content" }
headers:<br>
{"authorization":`bearer ${token}`}

### Get all Blog
Method: Get<br>
Endpoint: /blog/<br>
Response: All blog Data<br>

### delete Blog By Id
Method: DELETE<br>
Endpoint: /blog/:id<br>
headers:<br>
{"authorization":`bearer ${token}`}<br>
Note: The blog will be deleted if You are the author of the blog

### Update blog by Id

Method: PATCH<br>
Endpoint: /blog/:id<br>
payload: whatever you want to update<br>
headers:<br>
{"authorization":`bearer ${token}`}<br>
Note: The blog will be updated if You are the author of the blog <br>

### Get Specific Blog By Id
Method: GET<br>
Endpoint: /blog/:blogID <br>
Response: blog Data <br>

### Get blogs of Specific User
Method: GET <br>
Endpoint: /myblog/:authorId <br>
headers:<br>
{"authorization":`bearer ${token}`}


