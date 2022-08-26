import express, { request, response } from "express";

const app = express();

app.use(express.json()); //definir el metodo en el que se resivira la data

const people = [];


app.get("/", (request, response)=>{
    return response.json({
        ok: true,
        data: 
        //array
        [
            //objeto
            {
                id:  1,
                name: "pepe",
                las_name: "perez",
                age: 25,
            },
            {
                id:  1,
                name: "pepe1",
                las_name: "perez1",
                age: 251,
            }
            
        ],
    });
});

app.listen(6004, ()=> 
    console.log(`El servidor inicio  en http://localhost:6004`)
    );

app.post("/create", (request, response)=>{
    //destructurar un obtjeto {name, email}
   /*  const {name, last_name} = request.body;  */
    people.push(request.body); 

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
