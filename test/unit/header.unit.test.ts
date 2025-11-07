import { HeaderModelImpl } from "../../src/header/model/Model";

describe("HeaderModelImpl", () => {
    it("debe exponer el logo y menús correctamente", () => {
        const model = new HeaderModelImpl();
        expect(model.logo).toMatch(/\.(svg|png|jpg)$/);
        expect(model.menuItems.length).toBeGreaterThan(1);
    });
});
