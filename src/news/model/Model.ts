import { NewsRepository } from '../../repository/newsRepository';
import { NewsDetailModel } from '../types/Types';

export class NewsModel implements NewsDetailModel {
    constructor(public newsId: number, private repository: NewsRepository) { }

    getNews() {
        return this.repository.getNewsById(this.newsId);
    }

    addLike(): void {
        this.repository.addLike(this.newsId);
    }
}