import { SponsorFormModel } from '../types/Types';
import ejs from 'ejs';
import path from 'path';

export class SponsorView {
    render(model: SponsorFormModel): string {
        return ejs.renderFile(
            path.join(__dirname, '../template/sponsor-form.ejs'),
            { model }
        ).toString();
    }
}