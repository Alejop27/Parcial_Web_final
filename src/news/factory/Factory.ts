import { NewsRepository } from "../../repository/newsRepository";
import { NewsModel } from "../model/Model";
import { NewsView } from "../view/View";
export class NewsFactory {
    constructor(private repository: NewsRepository) { }
    createComponent(newsId: number) {
        const model = new NewsModel(this.repository);
        const view = new NewsView();
        return {
            model,
            view,
            render: async () => {
                const news = model.getNewsById(newsId);
                return news ? await view.render(news) : "<div>Proyecto no encontrado</div>";
            },
            addLike: () => model.addLike(newsId)
        };
    }
}
