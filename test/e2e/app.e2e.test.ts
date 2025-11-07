import request from "supertest";
import app from "../../src/index";

describe("Rutas principales (e2e)", () => {
    it("GET / debe entregar la home", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Proyectos Integradores UPB");
    });

    it("GET /header debe responder con header", async () => {
        const res = await request(app).get("/header");
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Iniciar Sesión");
    });

    it("GET /api/news debe entregar noticias JSON", async () => {
        const res = await request(app).get("/api/news");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("html");
    });

    it("GET /favoritos debe mostrar 'Tus Favoritos'", async () => {
        const res = await request(app).get("/favoritos");
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Tus Favoritos");
    });

    it("GET /pauta muestra el formulario", async () => {
        const res = await request(app).get("/pauta");
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Pauta tu Proyecto");
    });

    it("GET /news/:id muestra detalle", async () => {
        const res = await request(app).get("/news/1");
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Comentarios del Jurado");
    });
});
