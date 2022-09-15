const clientes = [
    {
        id:  1,
        name: "pepe",
        las_name: "perez",
        email: "perez@",
        age: 17,
    },
    {
        id:  2,
        name: "pepe1",
        las_name: "perez1",
        email: "perez1@",
        age: 18,
    },
    {
        id:  3,
        name: "pepe2",
        las_name: "perez2",
        email: "perez2@",
        age: 19,
    }
    
];

let idCliente = clientes.length

export const findAll = (req, res) => {
    return res.json({
        ok: true,
        data: clientes,
    })
};

export const findOne = (req, res) => {
    const id = parseInt(req.params.id);
    let n;

    clientes.forEach((element, index) => {   
        if(element.id === id){
            n = index;
        } 
    });

    if(n >= 0){
        return res.status(201).json(
            {
                ok: true,
                data: clientes[n]
            }
        );
    }else{
        return res.status(404).json(
            {
                ok: false,
                data: clientes[n]
            }
        ); 
    }
}

export const create  = (req, res) => {
    const data = req.body;
    idCliente ++;
    data.id = idCliente;
    clientes.push(data); 

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

    clientes.forEach((element, index) => {   
        if(element.id === id){
            data.id = clientes[index].id;
            clientes[index] = data;
            n = index;
        } 
    });

    if(n >= 0){
        return res.status(201).json(
            {
                ok: true,
                data: clientes[n]
            }
        );
    }else{
        return res.status(404).json(
            {
                ok: false,
                data: clientes[n]
            }
        );
    }
}

export const remove  = (req, res) => {
    const id = parseInt(req.params.id);
    let removedEl;
    clientes.forEach((element, index) => {
        if(element.id === id) {
            removedEl = clientes.splice(index, index + 1);
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