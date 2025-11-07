import ejs from "ejs";
import path from "path";
import { NewsItem } from "../types/Types";
export class NewsView {
    async render(news: NewsItem): Promise<string> {
        const templatePath = path.join(__dirname, "../../template/news-detail.ejs");
        return await ejs.renderFile(templatePath, { news });
    }
}
