import { NewsItem } from "../../news/types/Types";
export interface BodyViewModel {
    collageTitle: string;
    newsItems: NewsItem[];
    categories: string[];
    currentFilter: string;
    searchQuery: string;
    currentPage: number;
    totalPages: number;
}
