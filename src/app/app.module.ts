import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Graficas
import { ChartsModule, ThemeService } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonaComponent } from './components/dona/dona.component';
import { RadarComponent } from './components/radar/radar.component';

@NgModule({
	declarations: [ AppComponent, LineaComponent, BarraComponent, DonaComponent, RadarComponent ],
	imports: [ BrowserModule, ChartsModule ],
	providers: [ ThemeService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
