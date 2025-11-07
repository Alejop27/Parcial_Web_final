import { Router } from "express";
import { FavoriteRepository } from "../../repository/favoriteRepository";
import { NewsRepository } from "../../repository/newsRepository";
import { FavoritesFactory } from "../factory/Factory";
const router = Router();
const factory = new FavoritesFactory(new FavoriteRepository(), new NewsRepository());

router.get("/favoritos", async (_req, res) => {
    const html = await factory.createComponent().render();
    res.send(html);
});
export default router;
