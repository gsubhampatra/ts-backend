import express, { Application,Request, Response } from 'express';
import userRoutes from './routes/user.route';
import { errorMiddleware } from './middlewares/error.middleware';
import { logger } from './utils/logger';

export function createApp(): Application {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/', (req: Request, res: Response) => {
    res.json({ 
      success: true,
      message: 'Welcome to the API'
     });
  });

  app.use((req: Request, res: Response, next) => {
    logger.logRequest(req);
    next();
  });

  app.use('/api/users', userRoutes);
  app.use(errorMiddleware);

  return app;
}
