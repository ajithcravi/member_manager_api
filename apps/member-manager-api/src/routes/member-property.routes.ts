import { Datatype } from '@member-manager-api/type';
import { MemberPropertyService } from '@member-manager-api/service';
import { Request, Response } from 'express';
import { Router } from 'express';
import { validateBody } from '../middlewares';
import { memberPropertySchema } from '@member-manager-api/type';

const router = Router();
const propertySrc = new MemberPropertyService();

router.post(
  '/',
  validateBody(memberPropertySchema),
  async (req: Request, res: Response) => {
    try {
      const resp = await propertySrc.createMemberProperty(req.body);
      res.status(200).send(resp);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  }
);

export const memberPropertyRoutes = router;
