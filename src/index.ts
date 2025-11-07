import express from 'express';
import path from 'path';

import { NewsRepository } from '../src/repository/newsRepository';
import { HeaderFactory } from '../src/header/factory/Factory';
import { BodyFactory } from '../src/body/factory/Factory';
import { FooterFactory } from '../src/footer/factory/Factory';
import { SponsorFactory } from '../src/sponsor/factory/Factory';

// Routers
import headerRouter from '../src/header/router/Router';
import bodyRouter from '../src/body/router/Router';
import newsRouter from '../src/news/router/Router';
import sponsorRouter from '../src/sponsor/router/Router';
import footerRouter from '../src/footer/router/Router';

const app = express();
const PORT = 3000;

// Archivos estáticos y parsers
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../assets')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'template'));

// Instancias
const repository = new NewsRepository();
const headerFactory = new HeaderFactory();
const bodyFactory = new BodyFactory(repository);
const footerFactory = new FooterFactory();
const sponsorFactory = new SponsorFactory();

// Middleware global (header, footer y sponsor por defecto)
app.use(async (_req, res, next) => {
  try {
    const headerComponent = headerFactory.createComponent();
    const footerComponent = footerFactory.createComponent();

    const [header, footer] = await Promise.all([
      headerComponent.render(),
      footerComponent.render()
    ]);

    res.locals["header"] = header;
    res.locals["footer"] = footer;

    // Evita ReferenceError en templates si alguna ruta no pasa sponsor
    res.locals["sponsor"] = res.locals["sponsor"] || '';

    next();
  } catch (err) {
    console.error('❌ Error renderizando header/footer:', err);
    next(err);
  }
});

// Rutas
app.use(headerRouter);
app.use(bodyRouter);
app.use(newsRouter);
app.use(sponsorRouter);
app.use(footerRouter);

// Ruta principal
app.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query['page'] as string) || 1;
    const search = (req.query['search'] as string) || '';
    const filter = (req.query['filter'] as string) || 'all';

    const bodyComponent = bodyFactory.createComponent(page, filter, search);
    const sponsorComponent = sponsorFactory.createComponent();

    const [body, sponsor] = await Promise.all([
      bodyComponent.render(),
      sponsorComponent.render()
    ]);

    res.render('layout', {
      title: 'Proyectos Integradores UPB - 2025',
      body,
      sponsor
    });
  } catch (err) {
    console.error('❌ Error renderizando la página principal:', err);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
