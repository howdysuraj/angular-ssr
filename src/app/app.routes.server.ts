import {RenderMode, ServerRoute} from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path:'',
    renderMode: RenderMode.Prerender
  },
  {
    path:':id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams()  {
      return [{id: 'suraj'}, {id : 'kumar'}]
      }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
