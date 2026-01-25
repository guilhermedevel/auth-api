import { Server } from './server';
import { initializeConstants } from './core/constants';

async function bootstrap (): Promise<void> {
  initializeConstants();

  new Server();
}

bootstrap().catch((err) => console.log(`bootstrap: ${err.message}`));