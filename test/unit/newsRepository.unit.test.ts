import { NewsRepository } from "../../src/repository/newsRepository";

describe("NewsRepository", () => {
    const repo = new NewsRepository();

    it("debe retornar un array de noticias", () => {
        const news = repo.getAllNews();
        expect(Array.isArray(news)).toBe(true);
        expect(news.length).toBeGreaterThan(0);
    });

    it("debe retornar una noticia por id", () => {
        const item = repo.getNewsById(1);
        expect(item).toBeDefined();
        expect(item).toHaveProperty("id", 1);
    });
});
