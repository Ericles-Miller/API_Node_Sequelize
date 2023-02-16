import express, { Request, Response} from 'express';
// import { routes } from './routes';

const app = express();

app.get('/', (request: Request, response: Response ) => {
    return response.json({message: 'World'});
})

// app.use(routes);
app.listen(3333);