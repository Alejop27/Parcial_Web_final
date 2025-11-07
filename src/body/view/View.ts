import { BodyViewModel } from '../types/Types';
import ejs from 'ejs';
import path from 'path';

export class BodyView {
    render(model: BodyViewModel): string {
        return ejs.renderFile(
            path.join(__dirname, '../template/body.ejs'),
            { model }
        ).toString();
    }
}