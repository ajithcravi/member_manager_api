import { Request, Response, Router } from 'express';
import { UnitService } from '@member-manager-api/service';

const router = Router();
const unitSrc = new UnitService();

router.get('/', async (req: Request, res: Response) => {
  try {
    const resp = await unitSrc.getUnit({
      unit: 'dob'
    });
    res.status(200).send(resp);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const resp = await unitSrc.createUnit({
      unit: 'dob'
    });
    res.status(200).send(resp);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

export const unitRoutes = router;
