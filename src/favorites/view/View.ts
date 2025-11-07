import ejs from "ejs";
import path from "path";
import { NewsItem } from "../../news/types/Types";
export class FavoritesView {
    async render(news: NewsItem[]): Promise<string> {
        const templatePath = path.join(__dirname, "../../template/favorites.ejs");
        return await ejs.renderFile(templatePath, { news });
    }
}
