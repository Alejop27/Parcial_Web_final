import ejs from 'ejs';
import path from 'path';
import { NewsRepository } from '../../repository/newsRepository';

export class NewsView {
    constructor(private repository: NewsRepository) { }

    async render(newsId: number): Promise<string> {
        const news = this.repository.getNewsById(newsId);
        const templatePath = path.join(__dirname, '../../template/news-detail.ejs');

        // Espera el resultado del renderizado (ya no devuelve Promise pendiente)
        return await ejs.renderFile(templatePath, { news });
    }
}
