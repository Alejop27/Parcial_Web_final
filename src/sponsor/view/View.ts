import ejs from "ejs";
import path from "path";
export class SponsorView {
    async render(model: any): Promise<string> {
        const filePath = path.join(__dirname, "../../template/sponsor-form.ejs");
        return await ejs.renderFile(filePath, { model });
    }
}
