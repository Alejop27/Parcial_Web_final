import { HeaderModelImpl } from "../model/Model";
import { HeaderView } from "../view/View";

export class HeaderFactory {
    createComponent() {
        const model = new HeaderModelImpl();
        const view = new HeaderView();
        return { model, view, render: () => view.render(model) };
    }
}
