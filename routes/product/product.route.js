const route = require('express').Router()

const product = require('../../controller/product/product.controller');
const upload = require('../../middelware/uploadfile')

route.post('/create-Product',upload.uploadImage('productimages','image'),product.createProduct)


route.get('/get-ProductCategories-With-User',product.getProductCategoriesWithUser)

route.get('/get-All-Product',product.getAllProduct)

route.get('/get-Product',product.getProduct)

route.patch('/update-Product',upload.uploadImage('productimages','image'),product.updateProduct)

route.delete('/delete-Product',product.deleteProduct)

module.exports = route