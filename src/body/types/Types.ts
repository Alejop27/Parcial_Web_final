import { NewsItem } from '../../repository/newsRepository';

export interface BodyViewModel {
    collageTitle: string;
    newsItems: NewsItem[];
    categories: string[];
    currentFilter: string;
    searchQuery: string;
    currentPage: number;
    totalPages: number;
}