Node Task Manager API: 

- Back-end APIs to manage tasks for a user. 
- Leverages MongoDB (using mongoose ODM)
- Implments Authentication - JWT Tokens
- Implements upload functionality for user avatars.
- Implements pagination and sorting functionality for retrieval of tasks

1) Create User:

/POST {{url}}/users

{
    "name": "name",
    "email": "name.last@gmail.com",
    "password": "password123!"
}

2) Create Task:

/POST {{url}}/tasks

{
    "description": "Use these APIs",
    "completed": false
}

3) Login:

/POST {{url}}/users/login

{
    "name": "name",
    "email": "name.last@gmail.com"
}

4) Logout:

/POST {{url}}/users/logout

5) Logout on all Devices:

{{url}}/users/logoutAll

6) Retrieve Logged in User Profile:

/GET {{url}}/users/me

7) Retrieve Tasks for logged in user (optional pagination and sorting query paramaters):

/GET {{url}}/tasks?sortBy=createdAt:asc&limit=2&skip=2

8) Update User:

/PATCH {{url}}/users/me

{
    "name": "Bob",
    "age": 27    
}

9) Update Task by Id:

/PATCH {{url}}/tasks/:id

{
    "completed": true
}

10) Delete logged in User:

/DELETE {{url}}/users/me

11) Delete Task by Id:

/DELETE {{url}}/tasks/:id

11) Upload User Avatar:

/POST {{url}}/users/me/avatar

-Requres passing form data. Key = Avatar, Value = Any image (automatically will convert other image formats to .png)

12) Delete User Avatar:

/DELETE {{url}}/users/me/avatar



You can hit the API server I have deployed on Heroku using the following base URL:
https://rami-task-manager.herokuapp.com/