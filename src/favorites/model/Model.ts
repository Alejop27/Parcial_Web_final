import { NewsRepository } from "../../repository/newsRepository";
import { FavoriteRepository } from "../../repository/FavoriteRepository ";
export class FavoritesModel {
    constructor(private repo: FavoriteRepository, private newsRepo: NewsRepository) { }
    getFavoriteNews(userId: string) {
        const favIds = this.repo.getFavorites(userId);
        return this.newsRepo.getAllNews().filter(n => favIds.includes(n.id));
    }
    addFavorite(userId: string, id: number) {
        this.repo.addFavorite(userId, id);
    }
}
