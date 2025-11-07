import { HeaderModel } from '../types/Types';
import ejs from 'ejs';
import path from 'path';

export class HeaderView {
    render(model: HeaderModel): string {
        return ejs.renderFile(
            path.join(__dirname, '../template/header.ejs'),
            { model }
        ).toString();
    }
}