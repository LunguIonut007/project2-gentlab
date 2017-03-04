# Project 2 Gentlab

## Instalation

### Install database

Before starting, make sure you have mysql workbench and mysql server, and also make sure that the server is started.

1. Open mysql workbench;
2. Click the plus button (to the right of "MySQL Connections"). This will initiate a new connection;
3. Give it a name;
4. Click ok (if you modify the hostname, port, username or password, make sure to also modify it in the application.properties file from server/reactproject/resouces)

Now you have a connection in which you can import the sql dump file.

Double click the new form connection.

To import the data: 

1. Go to Server (top menu) > Data import;
2. Click import from self-contained file;
3. Select the file Dump2017304.sql from /root/server/;
4. Click start import.

### Install server

Secondly, we need to run the spring server. Open the "reactproject" project from root/server in Intelij and build it with maven. Now seach for the file "ReactprojectApplication", right-click it and press "Run ReactPoj... main()". The server should be opened on port 8080.


### Install client

Open a terminal in the root/client folder and run:
```
npm install
```
That will install the node dependencies.
Then run:
```
npm start
```
to start the front-end development server. If no error appeared then a website should open in the default browser with the address localhost:8000.


### Buidling blocks

The site was build with react (with redux, saga, react-router, redux-forms) and spring (with hibernate).
