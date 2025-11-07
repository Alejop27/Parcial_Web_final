import { BodyModel } from '../model/Model';
import { BodyView } from '../view/View';
import { NewsRepository } from '../../repository/newsRepository';

export class BodyFactory {
    constructor(private repository: NewsRepository) { }

    createComponent(page: number = 1, filter: string = 'all', search: string = '') {
        const model = new BodyModel(this.repository);
        const view = new BodyView();

        return {
            model,
            view,
            render: async () => await view.render(model.getViewModel(page, filter, search)),
            getViewModel: () => model.getViewModel(page, filter, search)
        };
    }
}
