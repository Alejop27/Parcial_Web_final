import { Router } from "express";
import multer from "multer";
import { SponsorFactory } from "../factory/Factory";
const router = Router();
const upload = multer({ dest: "uploads/" });
const factory = new SponsorFactory();

router.get("/pauta", async (_req, res) => {
    const html = await factory.createComponent().render();
    res.send(html);
});
router.post("/pauta", upload.single("foto"), (req, res) => {
    factory.createComponent().saveForm(req.body, req.file);
    res.json({ success: true, message: "Solicitud enviada" });
});
export default router;
