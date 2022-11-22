import { createServer } from 'node:http';
import { connect } from 'mongoose';
import { Server } from 'socket.io';
import { app } from './app';
import {} from 'dotenv/config';

const port = process.env.PORT || 3000
const db = process.env.MONGO_URL;

const server = createServer(app);
const io = new Server(server,{cors:'*'});

let users = [];

io.on('connection',socket => {
    console.log('A new connection received');
    console.log(socket.id);
    let clients = io.engine.clientsCount;
    console.log({clients})
});





io.on("auth",auth => console.log(auth));

server.listen(port,() => {
    console.log(`Servidor a la escucha por el puerto ${port}`);

    connect(db,err => {
        if(err) return console.log(`Error en Base de datos ${err}`);

        console.log('Conectado a la Base de datos');
    })
});

server.on('error',err => console.log(`Error en servidor ${err}`));
