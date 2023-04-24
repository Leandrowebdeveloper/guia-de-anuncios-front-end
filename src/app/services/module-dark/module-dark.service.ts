import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModuleDarkService {
  private _dark = new BehaviorSubject<{ isDark: boolean }>({ isDark: false });

  public darkAsObservable(): Observable<{ isDark: boolean }> {
    return this._dark.asObservable();
  }

  public set dark(value: boolean) {
    const val = value ? 'dark' : 'light';
    document.body.setAttribute('color-theme', val);
    localStorage.setItem('isModuleDark', `${value}`);
    this._dark.next({ isDark: value });
  }

  public init(): void {
    const isDark = this.isDark();
    this._dark.next({ isDark: isDark });
    if (isDark) return document.body.setAttribute('color-theme', 'dark');
    localStorage.setItem('isModuleDark', `${false}`);
  }

  public isDark(): boolean {
    const isDark = localStorage.getItem('isModuleDark');
    if (typeof isDark === 'string') return isDark.toLowerCase() === 'true';
    return false;
  }
}
