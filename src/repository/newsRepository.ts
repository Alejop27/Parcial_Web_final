import { readFileSync } from 'fs';
import { join } from 'path';

export interface NewsItem {
    id: number;
    title: string;
    summary: string;
    content: string;
    image: string;
    date: string;
    comments: string;
}

export class NewsRepository {
    private dataPath = join(__dirname, 'news.json');

    getAllNews(): NewsItem[] {
        return JSON.parse(readFileSync(this.dataPath, 'utf-8'));
    }

    getNewsById(id: number): NewsItem | undefined {
        return this.getAllNews().find(n => n.id === id);
    }

    getCategories(): string[] {
        const categories = this.getAllNews()
            .map(n => n.summary.split(' ')[0])
            .filter((cat): cat is string => Boolean(cat)); 
        return [...new Set(categories)];
    }

    addLike(id: number): void {
        // Simulación - En producción usar base de datos
        console.log(`Like agregado a noticia ${id}`);
    }
}