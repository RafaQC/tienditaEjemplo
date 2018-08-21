const mongoose = require('mongoose');

let url= 'mongodb://rafa:rafa1234@ds125932.mlab.com:25932/lachona_rq288'

mongoose.connect(
    url,  
    {useNewUrlParser: true}, 
    () => console.log("Conexión exitosa"));

let Schema = mongoose.Schema;
let ObjectId= Schema.ObjectId;

const articuloSchema = new Schema ({
   articulo:ObjectId,
   nombre: String,
   precio: Number,
   existencia: String,
   descripcion: String,
});


const ticketSchema = new Schema ({
    ticket:ObjectId,
    RFC:String,
    articulos: {
        
    },
    subtotal: number,
    IVA: string,
    total: boolean,
 });