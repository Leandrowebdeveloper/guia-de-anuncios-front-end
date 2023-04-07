import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from 'src/app/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private $storage: Storage | null = null;
  private token = new BehaviorSubject<string>('');
  constructor(private storage: Storage) {}

  public get getAsObservableToken(): Observable<string> {
    return this.token.asObservable();
  }

  public get getToken(): string {
    return this.token.value;
  }

  public set setAuthToken(value: string) {
    this.token.next(value);
  }

  public async init(): Promise<void> {
    const storage = await this.storage.create();
    this.$storage = storage;
  }

  public create(
    key: string,
    value: string | object
  ): Promise<any> | null | undefined {
    if (key && value) {
      if (typeof value === 'string') {
        return this.$storage?.set(key, value);
      }
      return this.$storage?.set(key, JSON.stringify(value, null, ' '));
    }
    return null;
  }

  public update(key: string, value: string | object) {
    if (key && value) {
      if (typeof value === 'string') {
        return this.$storage?.set(key, value);
      }
      return this.$storage?.set(key, JSON.stringify(value, null, ' '));
    }
    return null;
  }

  public async find(key: string): Promise<any> {
    const result = await this.$storage?.get(key);
    if (this.isJson(result)) {
      return JSON.parse(result);
    }
    return result;
  }

  public destroy(key: string): Promise<any> | undefined | null {
    if (key) {
      sessionStorage.clear();
      return this.$storage?.remove(key);
    }
    return null;
  }

  public clean(): void {
    if (this.$storage) {
      sessionStorage.clear();
      this.$storage.clear();
    }
  }

  public async isToken(): Promise<string> {
    return (this.setAuthToken =
      (await this.find('token')) || (await this.getSessionStorage()));
  }

  public isJson(value: string): boolean {
    try {
      JSON.parse(value);
    } catch (e) {
      return false;
    }
    return true;
  }

  public async setAuthUserToken(user: User): Promise<void> {
    return await this.create('token', user?.token);
  }

  private async getSessionStorage(): Promise<string | null> {
    return await Promise.resolve(sessionStorage.getItem('token'));
  }
}
