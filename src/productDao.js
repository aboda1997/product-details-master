
//import fs module
const { json } = require('express')
const fs  =  require('fs') 



//The getProducts function take done as callback
//It will read the product.json file

const getProducts = function(done){
    

//parse the filecontent and save it in another varible say productdata
//return the callback with first parameter as undefined and second parameter as productdata
     const filecontent  =  fs.readFile("./src/products.json" , (err  ,  data )=>{
             if(err){
              return done("Encounter error while getting products " ) 
             }
             let products =  JSON.parse(data )
             return done(undefined ,  products  ) 
     })

}


//The function getProductById will take two parameters first the id and second the callback
//It will read the product.json file
const getProductById = function(id,done){
    //write all the logical steps
    //return the callback with first parameter as undefined and second parameter as productDetails
    const productData =  fs.readFile("./src/products.json" ,  (err ,  data)=>{
       if (err){
        return done("Encounter error while getting products " ) 

       }
       let products  = JSON.parse(data) 
       let  fetchedProduct =  products.find(u=> u.id == id) 
       if (fetchedProduct === undefined){
        return done ("No user found for requested id")
       }
       return  done(undefined  ,  fetchedProduct) 
    })  
}


//The saveProductDetails method will take productDetails and done as callback
//It will read the product.json file
const saveProductDetails = function (ProductDetails, done) {
  //write all the logical steps
  //parse the filecontent and save it in another varible say productdata
  //push the productDetails in the productData
      
  //Write the productData into the file 
     
  //return the callback with undefined and ProductDetails
  const productData =  fs.readFile("./src/products.json" ,  (err ,  data)=>{
    if (err){
     return done("Encounter error while getting products " ) 

    }
    let products  = JSON.parse(data) 
    products.push(ProductDetails)
    fs.writeFile("./src/products.json" ,  JSON.stringify(products) , (err ,data )=>{
          if(err){
            done("Encountered error while updating  the product")
          }
          done(undefined , ProductDetails  )     
    }) 

 })
    
  }

  //The method deleteProductById will take productId and done as parameters
  //It will read the product.json file

  const deleteProductById = function(productId, done){
    //Write all the logical steps
     //return the callback with first parameter as undefined and second parameter as productDetails
     const productData =  fs.readFile("./src/products.json" ,  (err ,  data)=>{
      if (err){
       return done("Encounter error while getting products " ) 

      }
      let products  = JSON.parse(data) 
      let  index =  products.findIndex(u=> u.id == productId) 
      if (index == -1){
       return done ("No user found for requested id")
      }
      let productDetails =  products.splice(index , 1 ) 
      fs.writeFile("./src/products.json" ,  JSON.stringify(products) , (err ,data )=>{
            if(err){
              done("Encountered error while deleting the product")
            }
            done(undefined , productDetails )     
      }) 

   }) }


module.exports ={
    getProducts,
    getProductById,
    saveProductDetails,
    deleteProductById
    
}