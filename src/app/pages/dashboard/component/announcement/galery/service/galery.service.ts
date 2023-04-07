import { LoadingService } from 'src/app/utilities/loading/loading.service';
import { MessageService } from 'src/app/utilities/message/message.service';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { DataUpload, Galery } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable()
export class GaleryAnnouncementService
  extends HttpService<Galery>
  implements OnDestroy
{
  private galery = new BehaviorSubject<Galery | void>(undefined);

  constructor(
    public override http: HttpClient,
    public override storageService: StorageService,
    public messageService: MessageService,
    private loadingService: LoadingService
  ) {
    super(http, storageService);
    this.setApi = `announcement`;
  }

  public get galeryAsObservable() {
    return this.galery.asObservable();
  }

  public set setGalery(value: Galery) {
    this.galery.next(value);
  }

  public set setCsrf(csrf: string) {
    this.csrf = csrf;
  }

  ngOnDestroy(): void {
    this.galery.unsubscribe();
  }

  public delete(galery: Galery): Observable<Galery> {
    return this.destroy(galery, 'galery');
  }

  public order(galery: Galery) {
    return this.patch(galery, 'management/galery/order');
  }

  public sendFiles(
    dataFile: { file: Blob; fileName: string },
    data: Required<DataUpload>
  ): Observable<any> {
    return this.upload(this.build(dataFile, data), 'upload');
  }

  public async showLoading(message: string): Promise<HTMLIonLoadingElement> {
    return await this.loadingService.show(message);
  }

  private build(
    dataFile: { file: Blob; fileName: string },
    data: Required<DataUpload>
  ): FormData {
    const { file, fileName } = dataFile;
    this.setCsrf = data?._csrf;
    const formData = new FormData();
    formData.append('announcementId', String(data?.id));
    formData.append('_csrf', data?._csrf);
    formData.append('filename', file, fileName);
    return formData;
  }
}
