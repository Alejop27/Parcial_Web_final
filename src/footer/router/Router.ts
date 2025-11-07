import { Router } from 'express';
import { FooterFactory } from '../factory/Factory';

const router = Router();
const factory = new FooterFactory();

router.get('/footer', (_req, res) => {
    const component = factory.createComponent();
    res.send(component.render());
});

export default router;