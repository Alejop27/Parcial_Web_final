import express from 'express';
import path from 'path';
import { NewsRepository } from '../src/repository/newsRepository';
import { HeaderFactory } from '../src/header/factory/Factory';
import { BodyFactory } from '../src/body/factory/Factory';
import { FooterFactory } from '../src/footer/factory/Factory';

// Routers
import headerRouter from '../src/header/router/Router';
import bodyRouter from '../src/body/router/Router';
import newsRouter from '../src/news/router/Router';
import sponsorRouter from '../src/sponsor/router/Router';
import footerRouter from '../src/footer/router/Router';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../assets')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'template'));

// Instancias
const repository = new NewsRepository();
const headerFactory = new HeaderFactory();
const bodyFactory = new BodyFactory(repository);
const footerFactory = new FooterFactory();

// Middleware de componentes globales
app.use((_req, res, next) => {
  res.locals["header"] = headerFactory.createComponent().render();
  res.locals["footer"] = footerFactory.createComponent().render();
  next();
});

// Montar routers
app.use(headerRouter);
app.use(bodyRouter);
app.use(newsRouter);
app.use(sponsorRouter);
app.use(footerRouter);

// Ruta por defecto
app.get('/', (req, res) => {
  const page = parseInt(req.query["page"] as string) || 1;
  const search = req.query["search"] as string || '';
  const filter = req.query["filter"] as string || 'all';
  
  const bodyComponent = bodyFactory.createComponent(page, filter, search);
  res.render('layout', {
    title: 'Proyectos Integradores UPB - 2025',
    body: bodyComponent.render()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});