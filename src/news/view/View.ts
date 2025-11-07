import ejs from 'ejs';
import path from 'path';
import { NewsRepository } from '../../repository/newsRepository';

export class NewsView {
    constructor(private repository: NewsRepository) { }

    render(newsId: number): string {
        const news = this.repository.getNewsById(newsId);
        return ejs.renderFile(
            path.join(__dirname, '../template/news-detail.ejs'),
            { news }
        ).toString();
    }
}