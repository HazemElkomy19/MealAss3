import { Route } from '@angular/router';

export interface CustomRoute extends Route {
  getPrerenderParams?: () => Array<{ name: string }>;
}
