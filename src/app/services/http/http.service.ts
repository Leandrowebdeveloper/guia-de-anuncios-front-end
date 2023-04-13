import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http } from 'src/app/interface';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService<T> implements Http<T> {
  private api!: string;

  private httpOptions = {
    headers: new HttpHeaders({
      Accept: '*/*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'CSRF-Token': '',
      Authorization: `Bearer `,
    }),
  };

  constructor(
    protected http: HttpClient,
    protected storageService: StorageService
  ) {}

  public get getApi(): string {
    return this.api;
  }

  public set setApi(value: string) {
    this.api = `/api/${value}`;
  }

  public set csrf(csrf: string) {
    this.httpOptions.headers = this.httpOptions.headers.set('CSRF-Token', csrf);
  }

  public requirement(token?: string): Observable<T> {
    this.getToken();
    return this.http.get<T>(
      `${this.api}/requirement/${token || ''}`,
      this.httpOptions
    );
  }

  public get<J>(token?: string): Observable<J> {
    this.getToken();
    return this.http.get<J>(
      `${this.api}/requirement/${token || ''}`,
      this.httpOptions
    );
  }

  public search(
    url: string,
    searchBy: { [key: string]: any }
  ): Observable<T[]> {
    this.getToken();
    return this.http.get<T[]>(`${this.api}/${url}`, {
      headers: this.httpOptions.headers,
      params: { ...searchBy },
    });
  }

  public findOne(url: string, searchBy: { [key: string]: any }): Observable<T> {
    this.getToken();
    return this.http.get<T>(`${this.api}/${url}`, {
      headers: this.httpOptions.headers,
      params: { ...searchBy },
    });
  }

  public index(url?: string, search?: { [key: string]: any }): Observable<T[]> {
    this.getToken();
    return this.http.get<T[]>(`${this.api}/${url || ''}`, {
      headers: this.httpOptions.headers,
      params: { ...search },
    });
  }

  public findAll(url?: string): Observable<T> {
    this.getToken();
    return this.http.get<T>(`${this.api}/${url || ''}`, this.httpOptions);
  }

  public create(data: T, url?: string): Observable<T> {
    this.getToken();
    return this.http.post<T>(
      `${this.api}/${url || ''}`,
      data,
      this.httpOptions
    );
  }

  public find(id: string | number): Observable<T> {
    this.getToken();
    return this.http.get<T>(`${this.api}/${id}`, this.httpOptions);
  }

  public update(data: T): Observable<T> {
    this.getToken();
    return this.http.put<T>(`${this.api}/`, data, this.httpOptions);
  }

  public patch(data: T, url?: string): Observable<T> {
    this.getToken();
    return this.http.patch<T>(
      `${this.api}/${url || ''}`,
      data,
      this.httpOptions
    );
  }

  public destroy(data: T, url?: string): Observable<T> {
    this.getToken();
    const { headers } = this.httpOptions;
    return this.http.delete<T>(`${this.api}/${url || ''}`, {
      headers,
      body: data,
    });
  }

  public upload(formData: FormData, url?: string): Observable<any> {
    this.getToken();
    const request = new HttpRequest<any>(
      'POST',
      `${this.api}/${url || ''}`,
      formData,
      {
        headers: new HttpHeaders({
          'CSRF-Token': this.httpOptions.headers.get('CSRF-Token') || '',
          Authorization: this.httpOptions.headers.get('Authorization') || '',
        }),
        reportProgress: true,
        responseType: 'json',
      }
    );
    return this.http.request<T[]>(request);
  }

  private getToken() {
    this.httpOptions.headers = this.httpOptions.headers.set(
      'Authorization',
      `Bearer ${this.storageService.getToken || ''}`
    );
  }
}
