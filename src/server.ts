import { InversifyExpressServer } from 'inversify-express-utils';

import { container } from './core/container';
import { getEnv } from './core/constants'
import { initializeApp } from './setup';

//TODO: Controllers and their dependencies
//TODO: Set inversify container
//const server = new InversifyExpressServer(container)

export class Server {
  constructor () {
    this.createServer();
  };

  createServer (): void {
    const server = new InversifyExpressServer(container, null, { rootPath: '/' });

    const app = initializeApp(server);
    const { port, env } = getEnv();

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
      console.log(`Environment: ${env}`);
    });
  };
}