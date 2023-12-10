import { query } from "../../../database/dbConnection.js"

const getusers = (req,res)=>{
    query.execute(`select * from users`,(err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}


const Adduser = (req,res)=>{
    let {name,password,email} = req.body
    query.execute(`insert into users (name, email, password) values ('${name}','${email}','${password}')`,(err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"success"})
        }
    })

}

const updateuser = (req,res)=>{
    let {id,name,password,email} = req.body
    query.execute(`update users set name = '${name}', email = '${email}' , password = '${password}' where id = ${id} `,(err,data)=>{
        if (err) {
            res.send(err)
        }else{
            if(data.affectedRows == 0) return res.send("user not found")
            res.send({message:"success"})
        }
    })

}

const deleteuser = (req,res)=>{
    let {id} = req.body
    query.execute(`delete from users where id = '${id}' `,(err,data)=>{
        if (err) {
            res.send(err)
        }else{
            if(data.affectedRows == 0) return res.send("user not found ")
            res.send({message:"success"})
        }
    })
}

export{
getusers,
Adduser,
updateuser,
deleteuser
}