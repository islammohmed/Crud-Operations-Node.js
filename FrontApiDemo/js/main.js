let products =[]
let cuurrentid;
getData()
function getData(){
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(ResponseData => {
        if(ResponseData.message == 'success'){
        products = ResponseData.data;
        showData()
        }
        console.log(products);
    })

}

function showData(){
    var cartona = ``
for (let index = 0; index < products.length; index++) {

    cartona += `
    <tr>
    <td>${products[index].name}</td>
    <td>${products[index].price}</td>
    <td>${products[index].description}</td>
    <td>
    <button onclick = 'deleteProduct(${products[index].id})' class="btn btn-danger">Delete</button>
    <button onclick = 'updateProduct(${products[index].id})' class="btn btn-success">Updata</button>
    </td>
    </tr>
    `
}
document.getElementById('tbody').innerHTML = cartona
}


function addProduct(){
    let productName = document.getElementById('productName').value
    let productPrice =  document.getElementById('productPrice').value
    let productDesc =  document.getElementById('productDesc').value


    let prodectObject ={
        name:productName,
        price:productPrice,
        desc:productDesc
    }
    ApiCrud('post',prodectObject)
    console.log(prodectObject);
    
}

function deleteProduct(id){
    ApiCrud('DELETE',{id})
}

function updateProduct(id){
    ApiCrud('patch',{id})
}

function ApiCrud(point,body){
fetch('http://localhost:3000/product', {
    method: point,
    body: JSON.stringify(body),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((data) =>{
    if(data.message == 'success' ){
        getData()
    }
})};

function updateProduct(id){
    let cuurrentElement = products.filter(elm => (elm.id == id ))[0]
    document.getElementById('productName').value = cuurrentElement.name
    document.getElementById('productPrice').value = cuurrentElement.price
    document.getElementById('productDesc').value = cuurrentElement.description
    document.getElementById('add').classList.add("d-none")
    document.getElementById('update').classList.add("d-block")
    cuurrentid = cuurrentElement.id
}
function updateData(){
    let productName = document.getElementById('productName').value
    let productPrice =  document.getElementById('productPrice').value
    let productDesc =  document.getElementById('productDesc').value


    let updateProduct ={
        id: cuurrentid,
        name:productName,
        price:productPrice,
        desc:productDesc
    }
    ApiCrud('put',updateProduct)
}
