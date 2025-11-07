import fs from "fs";
import path from "path";

export class FavoriteRepository {
    private filePath = path.join(__dirname, "favorites.json");

    constructor() {
        // Inicializa el archivo si no existe
        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, JSON.stringify({}), "utf-8");
        }
    }

    getFavorites(userId: string): number[] {
        const allFavs = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
        return allFavs[userId] || [];
    }

    addFavorite(userId: string, newsId: number): void {
        const allFavs = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
        if (!allFavs[userId]) {
            allFavs[userId] = [];
        }
        if (!allFavs[userId].includes(newsId)) {
            allFavs[userId].push(newsId);
        }
        fs.writeFileSync(this.filePath, JSON.stringify(allFavs, null, 2), "utf-8");
    }

    removeFavorite(userId: string, newsId: number): void {
        const allFavs = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
        if (allFavs[userId]) {
            allFavs[userId] = allFavs[userId].filter((id: number) => id !== newsId);
            fs.writeFileSync(this.filePath, JSON.stringify(allFavs, null, 2), "utf-8");
        }
    }
}
