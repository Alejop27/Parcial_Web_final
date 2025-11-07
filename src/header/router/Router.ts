import { Router } from 'express';
import { HeaderFactory } from '../factory/Factory';

const router = Router();
const factory = new HeaderFactory();

router.get('/header', (_req, res) => {
    const component = factory.createComponent();
    res.send(component.render());
});

export default router;