import { FooterModelImpl } from "../model/Model";
import { FooterView } from "../view/View";

export class FooterFactory {
    createComponent() {
        const model = new FooterModelImpl();
        const view = new FooterView();
        return { model, view, render: () => view.render(model) };
    }
}
