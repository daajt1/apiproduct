import Product from '../models/Product'

export const createProducts = (req,res) => {
    
    res.json('producto creado')}
export const getProducts = (req,res) => { 
    console.log(req.body)
    res.json('productos obtenidos')}
export const getProductById = (req,res) => {}
export const updateProductsById = (req,res) => {}
export const deleteProductsById = (req,res) => {}