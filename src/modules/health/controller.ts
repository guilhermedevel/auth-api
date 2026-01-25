import { BaseHttpController, controller, httpGet, interfaces } from "inversify-express-utils";

@controller('/health')
export class HealthController extends BaseHttpController implements interfaces.Controller {
  constructor () {
    super();
  };

  @httpGet('/status')
  public healthStatus () {
    return {
      status: 'in progress'
    };
  };
};