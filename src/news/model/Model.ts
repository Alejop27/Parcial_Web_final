import { NewsRepository } from "../../repository/newsRepository";
import { NewsItem } from "../types/Types";
export class NewsModel {
    constructor(private repository: NewsRepository) { }
    getNewsById(id: number): NewsItem | undefined {
        return this.repository.getNewsById(id);
    }
    addLike(id: number): void {
        this.repository.addLike(id);
    }
}
