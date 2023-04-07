import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModuleDarkService {
  private event = new EventEmitter<boolean>(undefined);

  public toggleEvent(): Observable<boolean> {
    return this.event.asObservable();
  }

  public setEvent(value: boolean): void {
    this.event.emit(value);
  }

  public toggleTemplateLigthDark(): void {
    if (!this.isDark()) {
      document.body.setAttribute('color-theme', 'dark');
      localStorage.setItem('isModuleDark', `${true}`);
    } else {
      document.body.setAttribute('color-theme', 'light');
      localStorage.setItem('isModuleDark', `${false}`);
    }
  }

  public init(): void {
    if (this.isDark()) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      localStorage.setItem('isModuleDark', `${false}`);
    }
  }

  public isDark(): boolean | '' | null {
    const isDark = localStorage.getItem('isModuleDark');
    return isDark && isDark.toLowerCase() === 'true';
  }
}
