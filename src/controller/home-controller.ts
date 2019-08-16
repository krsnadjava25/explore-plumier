import { route } from 'plumier';

interface HomeIndexResponse {
  hello: string;
}

export class HomeController {
  @route.get('/')
  index(): HomeIndexResponse {
    return { hello: 'world' };
  }
}
