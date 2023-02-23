import { Router } from 'express';

import { UserController } from './Controllers/UserController';

const userController = new UserController();

const routes = Router();

routes.post('/users', userController.store);

export { routes };
