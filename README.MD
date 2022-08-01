This is a code challenge backend challenge for TBX company

### ========= API ADAPTER BACKEND v1 TBX ========
:::... Author: J. Manuel Muñoz Gutierrez ...:::

The backend stack for this project is:
-  Main Language: Javascript
-  Frameworks/ Libraries: Node(ver. 14.0.0) with ExpressJS(ver. 4.18.1)
-  Package Manager: npm (ver. 8.15.0)
-  ORM: None
-  Relational Data Base Engine: None
-  Container: Docker (Linux Alpine)

To run this project follow as dve environment follow the next steps:

1. Download or clone the github repository into a folder in your local machine with the next GIT command

    ### `https://github.com/manuel-munoz-guti/backend-TBX.git`

2. Create a config file .env like our .sample.env with the following command and fill it  with the bearer token of the external API 

    ### `cp .sample.env .env`

3. Docker compose has already configure for dev environment with nodemon and loggers

4. Create the docker images and run it with the next command:

    ### `docker compose up api`

5. Put the following URL into the web browser http://localhost:9000/ you will see the folowwing message TBX - API (BLOQUEADO)

6. Open the POSTMAN and run the next routes of the basic API:

    Endpoints:
    GET: http://localhost:9000/api/v1/files/list (List all the files of the external API)
    GET: http://localhost:9000/api/v1/files/data (List all the valid files with their respective lines formatted)
    GET: http://localhost:9000/api/v1/files/data?fileName=test2.csv (Get a specifc file with their respective lines formatted)


7. To run the tests run the following command on docker compose:

     ### `docker compose up test`

The next steps that I consider are very importart for this project for the future is implmenting cors and helmet security packeges and caching with redis.

Thank you very much!