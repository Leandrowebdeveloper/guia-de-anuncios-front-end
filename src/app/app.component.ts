import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private plt: Platform) {}

  ngOnInit() {
    this.plt.ready().then(async () => {
      await this.init();
    });
  }

  private async init(): Promise<void> {
    if (this.plt.is('capacitor')) {
      await StatusBar.setOverlaysWebView({ overlay: false });
      await StatusBar.setBackgroundColor({
        color: '#1E295C',
      });
      await StatusBar.show();
      await SplashScreen.hide();
    }
  }
}
