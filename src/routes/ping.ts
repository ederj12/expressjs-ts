import express, { Request, Response } from 'express';
import { pingController } from '../controllers';
const router = express.Router();

router.get('/ping', async (_req: Request, res: Response) => {
  const response = await pingController.getMessage();
  return res.send(response);
});

export default router;
