//========================
//Puerto
//========================

process.env.PORT = process.env.PORT || 3000



//========================
//  Entorno 
//========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//mongodb+srv://emanuelG:<icoscla>@cafe-zck1e.mongodb.net/test?retryWrites=true

//========================
//  Base de datos 
//========================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {

    urlDB = 'mongodb+srv://emanuelG:icoscla@cafe-zck1e.mongodb.net/test?retryWrites=true'
}

process.env.URLDB = urlDB;