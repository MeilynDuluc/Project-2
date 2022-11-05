# The Adventures of Theodore Blog
### See the World from my POV!

<br>

follow along on all of Theo's adventures! When on blog, visitors will be able to read individual posts simply by clicking on them. 


<br>

## CRUD
<br>

## Create
<br>

![](create.png)

<br>

## Read
<br>

![](read.png)

<br>

## Update
<br>

![](update.png)

<br>

## Delete
<br>

![](delete.png)

<br>

TRELLO

<br>

![](Screen%20Shot%202022-11-04%20at%2010.20.20%20PM.png)

<br>

EDR

<br>

![](Screen%20Shot%202022-11-04%20at%2010.13.38%20PM.png)

<br>

|    Url          |  HTTP Verb    |   Action    |   Method               | View          |
| --------------- | ------------- | ------------|-------------           | --------------|
| /blog/        |    GET        |  Index      |  blog.find            |    Index.jsx  |
|/blog/new      |    GET        |   New       |  none                  |    New.jsx    |
| /blog/:id     |    Delete     |  Destroy    |blog.findByIdAndRemove |    none       |
| /blog/:id     |   PATCH/PUT   |  Update     |blog.findByIdAnddUpdate|    none       |
| /blog         |   POST        |  Create     |blog.create            |    none       |
| /blog/:id/edit|   GET         |  Edit       |blog.findOne           |    Edit.jsx   |
| /blog/:id     |   GET         |  Show       |blog.findOne           |    Show.jsx   |



<br>

Technologies used: Javascript, CSS, HTML, Mongoose, MongoDB, Nodejs