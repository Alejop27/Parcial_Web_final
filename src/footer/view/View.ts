import { FooterModel } from '../types/Types';
import ejs from 'ejs';
import path from 'path';

export class FooterView {
    render(model: FooterModel): string {
        return ejs.renderFile(
            path.join(__dirname, '../template/footer.ejs'),
            { model }
        ).toString();
    }
}