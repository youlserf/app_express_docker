const products = [
    {
        id:  1,
        name: "Nachos",
        stock: 15,
        price: 2.3,
    },
    {
        id:  1,
        name: "Doritos",
        stock: 50,
        price: 1.2,
    },
    {
        id:  1,
        name: "Camotito",
        stock: 30,
        price: 2.5,
    }
    
];

let idProduct = products.length

export const findAll = (req, res) => {
    return res.json({
        ok: true,
        data: products,
    })
};

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    let n;

    products.forEach((element, index) => {   
        if(element.id === id){
            n = index;
        } 
    });

    if(n >= 0){
        return res.status(201).json(
            {
                ok: true,
                data: products[n]
            }
        );
    }else{
        return res.status(404).json(
            {
                ok: false,
                data: products[n]
            }
        ); 
    }
}

export const create  = (req, res) => {
    const data = req.body;
    idProduct ++;
    data.id = idProduct;
    products.push(data); 

    return res.status(201).json(
        {
            ok: true,
            data: "Producto creado"
        }
    );
}

export const update = (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;
    let n;

    products.forEach((element, index) => {   
        if(element.id === id){
            data.id = products[index].id;
            products[index] = data;
            n = index;
        } 
    });

    if(n >= 0){
        return res.status(201).json(
            {
                ok: true,
                data: products[n]
            }
        );
    }else{
        return res.status(404).json(
            {
                ok: false,
                data: products[n]
            }
        );
    }
}

export const remove  = (req, res) => {
    const id = parseInt(req.params.id);
    let removedEl;
    products.forEach((element, index) => {
        if(element.id === id) {
            removedEl = products.splice(index, index + 1);
        }
    });

    if(removedEl){
        return res.status(201).json(
            {
                ok: true,
                data: removedEl
            }
        );
    }else{
        return res.status(404).json(
            {
                ok: false,
                data: removedEl
            }
        );     
    }   
}
