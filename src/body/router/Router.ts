import { Router } from "express";
import { BodyFactory } from "../factory/Factory";
import { NewsRepository } from "../../repository/newsRepository";
const router = Router();
const factory = new BodyFactory(new NewsRepository());

router.get("/api/news", (req, res) => {
    const page = parseInt(req.query["page"] as string) || 1;
    const filter = req.query["filter"] as string || 'all';
    const search = req.query["search"] as string || '';
    const component = factory.createComponent(page, filter, search);
    const vm = component.getViewModel();
    res.json({ html: component.render(), pagination: vm.totalPages });
});
export default router;
