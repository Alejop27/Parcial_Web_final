import { FavoritesModel } from "../model/Model";
import { FavoritesView } from "../view/View";
import { NewsRepository } from "../../repository/newsRepository";
import { FavoriteRepository } from "../../repository/FavoriteRepository ";
export class FavoritesFactory {
    constructor(private repo: FavoriteRepository, private newsRepo: NewsRepository) { }
    createComponent(userId: string = "demo") {
        const model = new FavoritesModel(this.repo, this.newsRepo);
        const view = new FavoritesView();
        return {
            model,
            view,
            render: async () => await view.render(model.getFavoriteNews(userId))
        };
    }
}
