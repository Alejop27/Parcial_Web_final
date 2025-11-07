import { SponsorFormModel } from '../types/Types';
import ejs from 'ejs';
import path from 'path';

export class SponsorView {
    async render(model: SponsorFormModel): Promise<string> {
        return await ejs.renderFile(
            path.join(__dirname, '../../template/sponsor-form.ejs'),
            { model }
        );
    }
}
