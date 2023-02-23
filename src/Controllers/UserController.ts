import { Response, Request } from 'express';

import { User } from '../models/Users';

class UserController{
  
  async store(request: Request, response: Response) {
    const { name, email } = request.body;
    const user = new User();

    const users = await user.create({ name, email });

    return response.json(users);
  },
};

export { UserController };

