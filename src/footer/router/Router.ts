import { Router } from "express";
import { FooterFactory } from "../factory/Factory";

const router = Router();
const factory = new FooterFactory();

router.get("/footer", async (_req, res) => {
    const html = await factory.createComponent().render();
    res.send(html);
});

export default router;
