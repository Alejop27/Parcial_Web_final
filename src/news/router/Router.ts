import { Router } from "express";
import { NewsFactory } from "../factory/Factory";
import { NewsRepository } from "../../repository/newsRepository";
const router = Router();
const factory = new NewsFactory(new NewsRepository());

router.get("/news/:id", async (req, res) => {
    const html = await factory.createComponent(Number(req.params.id)).render();
    res.send(html);
});
router.post("/news/:id/like", (req, res) => {
    factory.createComponent(Number(req.params.id)).addLike();
    res.json({ success: true });
});
export default router;
