import { HeaderModel } from '../types/Types';
import ejs from 'ejs';
import path from 'path';

export class HeaderView {
    async render(model: HeaderModel): Promise<string> {
        const filePath = path.join(__dirname, '../../template/header.ejs');
        return await ejs.renderFile(filePath, { model });
    }
}
