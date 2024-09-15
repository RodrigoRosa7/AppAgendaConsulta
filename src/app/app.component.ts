import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule, SplashScreenComponent],
})
export class AppComponent {
  showSplash = true;

  constructor() {
    // Exibe a splash screen por 3 segundos
    setTimeout(() => {
      this.showSplash = false;
    }, 3000);
  }
}
