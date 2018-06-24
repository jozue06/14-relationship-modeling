# Lab 14 Josh
[![Build Status](https://travis-ci.com/jozue06/14-relationship-modeling.svg?branch=josh)](https://travis-ci.com/jozue06/14-relationship-modeling)

* GitHub: https://github.com/jozue06/14-relationship-modeling/pull/1

* Heroku: https://josh-lab14.herokuapp.com/


## Feature Tasks
 - [x]  continue working on the `express` and `mongoDB` REST API 
 - [x]  include an additional resource that contains a "relationship" to the single resource that has already been created
 - [x] create `GET`, `POST`, `PUT`, and `DELETE` routes for your newly added resource
 - [x]   test your application to ensure that it meets the standard criteria of a working **full CRUD** REST API
 - [x]   use `populate` in the `get()` route logic your  `/api/new-resource-name/:id` route to populate the associated property used to house related resources **(ex: `List.findById(req.params.id).populate('notes')`)**
