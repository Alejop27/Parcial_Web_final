import { SponsorModel } from "../model/Model";
import { SponsorView } from "../view/View";
export class SponsorFactory {
    createComponent() {
        const model = new SponsorModel();
        const view = new SponsorView();
        return {
            model,
            view,
            render: async () => await view.render(model),
            saveForm: (data: any, file: any) => model.saveForm(data, file)
        };
    }
}
