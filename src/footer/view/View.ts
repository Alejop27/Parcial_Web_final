import { FooterModel } from '../types/Types';
import ejs from 'ejs';
import path from 'path';

export class FooterView {
    async render(model: FooterModel): Promise<string> {
        const filePath = path.join(__dirname, '../../template/footer.ejs');
        return await ejs.renderFile(filePath, { model });
    }
}
