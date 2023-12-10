

import { query } from "../../../database/dbConnection.js"

const getProducts = (req,res)=>{
    query.execute(`select * from products`,(err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"success",data})
        }
    })
}


const AddProduct = (req,res)=>{
    let {name,desc,price} = req.body
    query.execute(`insert into products (name, price, description) values ('${name}','${price}','${desc}')`,(err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"success"})
        }
    })

}

const updateProduct = (req,res)=>{
    let {id,name,desc,price} = req.body
    query.execute(`update products set name = '${name}', price = '${price}' , description = '${desc}' where id = ${id} `,(err,data)=>{
        if (err) {
            res.send(err)
        }else{
            if(data.affectedRows == 0) return res.send("product not found ")
            res.send({message:"success"})
        }
    })

}

const deleteProduct = (req,res)=>{
    let {id} = req.body
    query.execute(`delete from products where id = '${id}' `,(err,data)=>{
        if (err) {
            res.send(err)
        }else{
            if(data.affectedRows == 0) return res.send("product not found ")
            res.send({message:"success"})
        }
    })
}

export{
getProducts,
AddProduct,
updateProduct,
deleteProduct
}