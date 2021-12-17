var products = [ 
{
    productName: 'Milk', 
    cost: 48,
    category: 'Food'
},
{
    productName: 'Bread', 
    cost: 20,
    category: 'Food'
},
{
    productName: 'Egg', 
    cost: 11, 
    category: 'Food'
},
{
    productName: 'Axe',
    cost: 180, 
    category: 'Tool'
},
{
    productName: 'Hammer', 
    cost: 170,
    category: 'Tool'
},
{
    productName: 'Bag', 
    cost: 1100, 
    category: 'Clothes'
},
{
    productName: 'Socks', 
    cost: 90,
    category: 'Clothes'
}
]

var list = document.querySelector('.list')

function render(products) {
    products.map(function (products) {
        list.innerHTML += `
            <div class="product">
                <div class="avatar"></div>
                <div class="desc">
                    <h3>${products.productName}</h3>
                    <p>${products.category}</p>
                    <p>${products.cost} сом</p>
                </div>
            </div>
        `
    })
}
render(products)



function filter () {
    var filtered = products.filter(products => {
        if (products.category !== 'Clothes') return true
        return false;
    })
    return filtered;
}

console.log(filter())

function produce () {
    var names = products.map(products => {
    return products.productName
    })
    return names;
}

console.log(produce())




