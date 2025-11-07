import { Router } from 'express';
import multer from 'multer';
import { SponsorFactory } from '../factory/Factory';

const router = Router();
const upload = multer({ dest: 'uploads/' });
const factory = new SponsorFactory();

router.get('/pauta', (_req, res) => {
    const component = factory.createComponent();
    res.render('layout', {
        title: 'Pauta con Nosotros - UPB',
        body: component.render()
    });
});

router.post('/pauta', upload.single('foto'), (req, res) => {
    const component = factory.createComponent();
    component.saveForm(req.body, req.file);
    res.json({ success: true, message: 'Solicitud enviada' });
});

export default router;