import express from "express";

const app = express();

app.use(express.json()); //definir el metodo en el que se resivira la data

const people = [
    {
        id:  1,
        name: "pepe",
        las_name: "perez",
        age: 25,
    },
    {
        id:  2,
        name: "pepe1",
        las_name: "perez1",
        age: 251,
    }
];

//http://localhost:6004/
app.get("/", (request, response)=>{
    return response.json({
        ok: true,
        data: people,
    });
});

//http://localhost:6004/read/1
app.get("/read/:id", (request, response)=>{
    const id = parseInt(request.params.id);
    let n;

    people.forEach((element, index) => {   
        if(element.id === id){
            n = index;
        } 
    });

    if(n >= 0){
        return response.status(201).json(
            {
                ok: true,
                data: people[n]
            }
        );
    }else{
        return response.status(404).json(
            {
                ok: false,
                data: people[n]
            }
        ); 
    }
    
});

http://localhost:6004/create
app.post("/create", (request, response)=>{
    //destructurar un obtjeto {name, email}
   /*  const {name, last_name} = request.body;  */
    const data = request.body;
    data.id = people.length + 1;
    people.push(data); 

    //404 cuando no se encuentra el archivo
    //201 creacion exitosa
    //500 error en el servidor

    return response.status(201).json(
        {
            ok: true,
            data: "Persona creada"
        }
    );
})

http://localhost:6004/update
app.put("/update", (request, response)=>{
    const data = request.body;
    let n;

    people.forEach((element, index) => {   
        if(element.id === data.id){
            data.id = people[index].id;
            people[index] = data;
            n = index;
        } 
    });

    if(n >= 0){
        return response.status(201).json(
            {
                ok: true,
                data: people[n]
            }
        );
    }else{
        return response.status(404).json(
            {
                ok: false,
                data: people[n]
            }
        );
    }
    
    
})

http://localhost:6004/delete/1
app.delete("/delete/:id", (request, response)=>{
    const id = parseInt(request.params.id);
    let removedEl;
    people.forEach((element, index) => {
        if(element.id === id) {
            removedEl = people.splice(index, index + 1);
        }
    });

    if(removedEl){
        return response.status(201).json(
            {
                ok: true,
                data: removedEl
            }
        );
    }else{
        return response.status(404).json(
            {
                ok: false,
                data: removedEl
            }
        );     
    }   
})


app.listen(6004, ()=> 
    console.log(`El servidor inicio  en http://localhost:6004`)
);