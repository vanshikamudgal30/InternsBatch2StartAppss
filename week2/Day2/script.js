const products=[
    {name:"T-shirt",price:400,category:"Clothing",image:"tshirt.png"},
    {name:"Jeans",price:1000,category:"Clothing",image:"jeans.jpg"},
    {name:"Laptop",price:60000,category:"Electronics",image:"laptop.png"},
    {name:"Tablet",price:50000,category:"Electronics",image:"tablet.png"},
    {name:"Trouser",price:700,category:"Clothing",image:"trouser.png"},
    {name:"Mobile Phone",price:60000,category:"Electronics",image:"mobile.png"},
];

let view="grid";

function renderProducts(list){
    const container = document.getElementById("productContainer");
    container.innerHTML = "";

    if (list.length === 0) {
        container.className = "empty";  
        container.innerHTML = "<h2>No products found</h2>";
        return;
    }

    container.style.display = "";  
    container.className = view;

    list.forEach(product => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="details">
                <h4>${product.name}</h4>
                <p>₹${product.price}</p>
                <p>${product.category}</p>
            </div>
        `;

        container.appendChild(div);
    });
}
function applyFilters(){
    let filtered=[...products];
    const category=document.getElementById('categoryFilter').value;
    const price=Number(document.getElementById('priceFilter').value);
    const search=document.getElementById('search').value.toLowerCase();
    const sort=document.getElementById('sort').value;

    if(category!=="all"){
        filtered=filtered.filter(p=>p.category===category);
    }

    if(price){
        filtered=filtered.filter(p=>p.price<=price);
    }

    if(search){
        filtered=filtered.filter(p=>
            p.name.toLowerCase().includes(search)
        );
    }

    if(sort==='low'){
        filtered.sort((a,b)=>a.price-b.price);
    }
    else if(sort==='high'){
        filtered.sort((a,b)=>b.price-a.price);
    }
    renderProducts(filtered);
}

function setView(type){
    view=type;
    applyFilters();
}

["categoryFilter","priceFilter","search","sort"].forEach(id=>{
    document.getElementById(id).addEventListener("input",applyFilters);
});

renderProducts(products);