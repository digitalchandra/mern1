const async = require('hbs/lib/async');
const ProductModule = require('../models/productModel');
const ProductModel = require('../models/productModel');

const returnAllProduct = async (req,res)=>{


    // this is the code for json data format .())
    // const {category} = req.query;
    // if(category){
    //     const filteredProducts = productData.filter((product)=>{
    //         return product.category === category
    //     }) 
    //     if(filteredProducts.length !==0){
    //         res.json(filteredProducts)
    //     } else{
    //         res.send("category not fonund")
    //     }
    // } else{
    //     res.json(productData)
    // }
    // form Data base Mongo DB

    const productData = await ProductModule.find();
   
    res.json(productData);
   

};
 
const returnSingleProduct =(req,res)=>{
    const {productID}= req.params;
   if(productID<=productData.length){
    res.json(productData[productID-1]);
   }else{
       res.send("<h1> Prodct Data is not found on the daraz.com </h1>")
   }
   // 

}

const createProduct = (req, res)=>{
    // console.log(req.body);
    res.send("POST")
}

const updateProduct =(req,res)=>{
    res.send("PATHCH")
}

const deleteProduct = (req,res)=>{
    res.send("DELETE")
}


module.exports={returnAllProduct , returnSingleProduct, createProduct, updateProduct, deleteProduct};