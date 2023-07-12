const route = require('express').Router()

const user = require('../../controller/product_catgories/product-categories.controller')

route.post('/add-Product-Category',user.addProductCategory)

route.get('/get-All-Categories',user.getAllCategories)


route.get('/get-Categories',user.getCategories)

route.patch('/update-Category',user.updateCategory)

route.delete('/delete-Categories',user.deleteCategories)

route.get('/get-Category-With-User',user.getCategoryWithUser)

module.exports = route