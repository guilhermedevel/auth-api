import bodyParser from "body-parser";
import { Application } from "express";
import compress from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import { InversifyExpressServer } from "inversify-express-utils";

export function initializeApp (server: InversifyExpressServer): Application {
  
  server.setConfig((app: Application) => {
    
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: '500mb',
      })
    );

    app.use(
      bodyParser.json({
        limit: '500mb',
      })
    );

    app.use(compress());

    app.use(helmet());

    app.use(cors());
  });

  return server.build();
};