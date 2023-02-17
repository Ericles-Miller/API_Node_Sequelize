import { Router, Response, Request } from 'express';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  response.json({ message: 'hello World' });
});

export { routes };
