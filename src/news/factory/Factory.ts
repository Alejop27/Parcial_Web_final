import { NewsModel } from '../model/Model';
import { NewsView } from '../view/View';
import { NewsRepository } from '../../repository/newsRepository';

export class NewsFactory {
    constructor(private repository: NewsRepository) { }

    createComponent(newsId: number) {
        const model = new NewsModel(newsId, this.repository);
        const view = new NewsView(this.repository);

        return {
            model,
            view,
            // ahora render devuelve una promesa
            render: async () => await view.render(newsId),
            addLike: () => model.addLike()
        };
    }
}
