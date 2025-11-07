import express from "express";
import path from "path";

// Importa los routers de cada componente
import headerRouter from "./header/router/Router";
import bodyRouter from "./body/router/Router";
import newsRouter from "./news/router/Router";
import sponsorRouter from "./sponsor/router/Router";
import favoritesRouter from "./favorites/router/Router";
import footerRouter from "./footer/router/Router";

// Importa las factories para renderizar header, body, sponsor, footer
import { HeaderFactory } from "./header/factory/Factory";
import { BodyFactory } from "./body/factory/Factory";
import { FooterFactory } from "./footer/factory/Factory";
import { SponsorFactory } from "./sponsor/factory/Factory";
import { NewsRepository } from "./repository/newsRepository";

const app = express();
const PORT = process.env["PORT"] || 3000;

// Archivos estáticos y parsers
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "template"));

// Routers por componente (API/acciones específicas)
app.use(headerRouter);
app.use(bodyRouter);
app.use(newsRouter);
app.use(sponsorRouter);
app.use(favoritesRouter);
app.use(footerRouter);

// Factories para renderizar componentes principales (HTML incluido en layout)
const repository = new NewsRepository();
const headerFactory = new HeaderFactory();
const bodyFactory = new BodyFactory(repository);
const footerFactory = new FooterFactory();
const sponsorFactory = new SponsorFactory();

// Render principal (home)
app.get("/", async (_req, res) => {
  const header = await headerFactory.createComponent().render();
  const body = await bodyFactory.createComponent().render();
  const sponsor = await sponsorFactory.createComponent().render();
  const footer = await footerFactory.createComponent().render();

  res.render("layout", {
    title: "Proyectos Integradores UPB 2025",
    header,
    body,
    sponsor,
    footer
  });
});


// Fallback para URLs no encontradas
app.use((_req, res) => {
  res.status(404).send("<h1>Página no encontrada</h1>");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
