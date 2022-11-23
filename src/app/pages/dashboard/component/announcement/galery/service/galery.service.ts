import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { Galery } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class GaleryAnnouncementService
  extends HttpService<Galery>
  implements OnDestroy
{
  private galery = new BehaviorSubject<Galery[]>(undefined);

  constructor(
    http: HttpClient,
    public storageService: StorageService,
    public messageService: MessageService,
    private loadingService: LoadingService
  ) {
    super(http, storageService);
    this.setApi = `auth-announcement`;
  }

  public get galeryAsObservable() {
    return this.galery.asObservable();
  }

  public set setGalery(value: Galery[]) {
    this.galery.next(value);
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  ngOnDestroy(): void {
    this.galery.unsubscribe();
  }

  public delete(galery: Galery): Observable<number | Galery> {
    return this.destroy(galery, 'galery');
  }

  public order(galery: Galery) {
    return this.patch(galery, 'order');
  }

  public async showLoading(message: string): Promise<HTMLIonLoadingElement> {
    return await this.loadingService.show(message);
  }
}
