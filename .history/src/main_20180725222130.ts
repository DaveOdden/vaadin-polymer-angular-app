import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { webcomponentsReady } from '@codebakery/origami';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'web-animations-js/web-animations-next.min.js';


if (environment.production) {
   enableProdMode();
}
webcomponentsReady().then(() => {
   platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.log(err));
});