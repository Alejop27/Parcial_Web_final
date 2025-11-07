import { Router } from 'express';
import { NewsFactory } from '../factory/Factory';
import { NewsRepository } from '../../repository/newsRepository';

const router = Router();
const repository = new NewsRepository();
const factory = new NewsFactory(repository);

router.get('/news/:id', (req, res) => {
    const html = factory.createComponent(parseInt(req.params.id)).render();
    res.send(html);
});

router.post('/news/:id/like', (req, res) => {
    const component = factory.createComponent(parseInt(req.params.id));
    component.addLike();
    res.json({ success: true });
});

export default router;