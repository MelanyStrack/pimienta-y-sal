const productos = [
    {
        id: 1,
        name: "Carpaccio fresco" ,
        description:"Entrada Carpaccio de salmón con cítricos" ,
        price: 65.50,
        image: "Carpaccio-de-salmon.jpg",
    },
    {
        id: 2 ,
        name: "Risotto de berenjena",
        description: "Risotto de berenjena y queso de cabra" ,
        price: 47.00 ,
        image: "Risotto-berenjena-queso-cabra.jpg",
    },
    {
        id: 3 ,
        name: "Mousse de arroz" ,
        description:"Mousse de arroz con leche y aroma de azahar",
        price: 27.50 ,
        image: "Mousse-de-arroz-con-leche.jpg",
    },
    {
        id: 4 ,
        name:"Espárragos blancos" ,
        description: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        price: 37.50,
        image: "esparragos.png",
    },

]

const about = 
    {
        image: "principal.jpg",
        principalDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use",
        ingredients: "seasonal", 
        subDescription: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui  officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }



const indexController = {
    home: (req,res)=>{
        res.render("home", {title:"Pimienta & Sal", productos, about});
    },
    detail: (req,res)=>{
        const id = req.params.id;
        const product = productos.find(product=> product.id == id)
        res.render("detalle", {title: product.name, product});
    }
}

module.exports = indexController;