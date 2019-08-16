import { route } from 'plumier';

interface ExampleListResponse {
  hello: string;
}

export class ExamplesController {
  @route.get('')
  list(): ExampleListResponse {
    return { hello: 'world!' };
  }
}
