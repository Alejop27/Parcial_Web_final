import ejs from "ejs";
import path from "path";
import { HeaderModel } from "../types/Types";

export class HeaderView {
    async render(model: HeaderModel): Promise<string> {
        const filePath = path.join(__dirname, "../../template/header.ejs");
        return await ejs.renderFile(filePath, { model });
    }
}
