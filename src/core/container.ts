import { Container } from 'inversify';
import { HealthController } from '../modules/health/controller';

const container: Container = new Container();

container.bind(HealthController).toSelf();

export { container };