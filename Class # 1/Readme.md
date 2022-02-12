# [MongoDB](https://www.mongodb.com/)



## [Download mongoDB:](https://www.mongodb.com/try/download/community)

- Search mongoDB and go to products.
- CLick Community Server and install about your p.c
- Recommend download msi version most of configuration its download automatically.



## Installation:

* ## Click on next.
<img src = "./assets/Mi-1.png">

* ##  Check box i accept the terms in the licenses agreement.
<img src = "./assets/Mi-2.png">

* ## Click on Complete.
<img src = "./assets/Mi-3.png">

* ## Check the Install mongoDB as a Servive | Choose first option | Run service as Network Service User. if you have any solid reason to change the directory then change else set in default directory.
<img src = "./assets/Mi-4.png">

* ## In windows you can check Install mongoDB Compass.
<img src = "./assets/Mi-5.png">

* ## Click on Install.
<img src = "./assets/Mi-6.png">

* ## Wait for Install.
<img src = "./assets/Mi-7.png">

* ## Congratulations mongoDB has been Installed.
<img src = "./assets/Mi-8.png">



# Compass


* ## if you download windows the compass included in community server. Other p.c example Mac'Os and linux you can download seperately.
* ## Compass is a tool that can make you a gui. GUI means is Graphical user Interface.
* ## Compass is a good representive tool that can show a all database data you can also perform query & you can change data.
* ## Time of Installation mongoDB ask you to download compass if you check then download compass automatically.

### How Compass looks like?

<img src = "./assets/C-1.png">


# [Download MongoDB Shell](https://www.mongodb.com/try/download/shell)

* ## Click on Next.

<img src = "./assets/S-1.png">

* ## if you have any solid reason to change the directory then change else set in default directory and Click on Next. 

<img src = "./assets/S-2.png">

* ##  Click to Install.

<img src = "./assets/S-3.png">

* ##  Congratulations mongoDB Shell is ready to use.

<img src = "./assets/S-4.png">




# Basic Shell Commands

* ## Show dbs

### Show dbs shows 3 default databases.
   
     admin
     config
     local

<img src = "./assets/bs-1.png">

* ## Create new Database

### Use shop create a new database shop is a database name you can place any word after use.

<img src = "./assets/bs-2.png">









# MongoDB Crud

* ## Insert Data in Collection

        db.collectionName.insertOne({Hello : "World"})


        db.collectionName.insertMany([{name : "a"}, {name : "b"}])


* ## Find Data in Collection

          db.collectionName.findOne({Hello : "World"})

          db.collectionName.find([{name : "a"}, {name : "b"}])


* ## Updata Data in Collection
           
        db.collectionName.updateOne({Hello : "World"}, {$set : {HelloWorld : true}})

        db.collectionName.updateMany({Hello : "World"}, {$set : {HelloWorld : true}})


* ## Delete Data in Collection
           
        db.collectionName.deleteOne({Hello : "World"}, {$set : {HelloWorld : true}})

        db.collectionName.deleteMany({Hello : "World"}, {$set : {HelloWorld : true}})


