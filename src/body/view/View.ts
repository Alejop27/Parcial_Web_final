import { BodyViewModel } from '../types/Types';
import ejs from 'ejs';
import path from 'path';

export class BodyView {
    async render(model: BodyViewModel): Promise<string> {
        const filePath = path.join(__dirname, '../../template/body.ejs');
        return await ejs.renderFile(filePath, { model });
    }
}
