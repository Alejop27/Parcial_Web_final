import { NewsRepository } from "../../repository/newsRepository";
import { BodyViewModel } from "../types/Types";
export class BodyModel {
    collageTitle = "Jornada de Proyectos Integradores - Segundo Semestre 2025";
    constructor(private repository: NewsRepository) { }
    getViewModel(page: number, filter: string, search: string): BodyViewModel {
        let news = this.repository.getAllNews();
        if (search) {
            news = news.filter(n =>
                n.title.toLowerCase().includes(search.toLowerCase())
                || n.summary.toLowerCase().includes(search.toLowerCase())
            );
        }
        const pageSize = 6;
        const totalPages = Math.ceil(news.length / pageSize);
        const paginated = news.slice((page - 1) * pageSize, page * pageSize);
        return {
            collageTitle: this.collageTitle,
            newsItems: paginated,
            categories: ["Integrador I", "Integrador II", "Integrador III", "Software", "Sistemas"],
            currentFilter: filter,
            searchQuery: search,
            currentPage: page,
            totalPages
        };
    }
}
