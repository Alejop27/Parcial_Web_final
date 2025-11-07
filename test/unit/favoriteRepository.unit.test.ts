import { FavoriteRepository } from "../../src/repository/FavoriteRepository ";

describe("FavoriteRepository", () => {
    const repo = new FavoriteRepository();
    const userId = "testuser";
    const testId = 99;

    it("debe agregar y retornar favoritos", () => {
        repo.addFavorite(userId, testId);
        const favs = repo.getFavorites(userId);
        expect(favs).toContain(testId);
    });

    it("debe eliminar favoritos", () => {
        repo.removeFavorite(userId, testId);
        const favs = repo.getFavorites(userId);
        expect(favs).not.toContain(testId);
    });
});
