import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SocialNetwork } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ManagementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Injectable({
  providedIn: 'root',
})
export class SocialNetworkService extends HttpService<SocialNetwork> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private managementService: ManagementService
  ) {
    super(http, storageService);
    this.setApi = `auth-announcement/socialNetwork`;
  }

  public set setSocialNetwork(socialNetwork: SocialNetwork) {
    this.managementService.getAnnouncement.socialNetwork = socialNetwork;
    this.managementService.setAnnouncement =
      this.managementService.getAnnouncement;
  }

  public socialNetwork(
    socialNetwork: SocialNetwork
  ): Observable<SocialNetwork | number[]> {
    if (socialNetwork?.id) {
      return this.patch(socialNetwork).pipe(
        tap(
          (socialNetwork_: SocialNetwork) =>
            (this.setSocialNetwork = socialNetwork_)
        )
      );
    } else {
      return this.create(socialNetwork).pipe(
        tap(
          (socialNetwork_: SocialNetwork) =>
            (this.setSocialNetwork = socialNetwork_)
        )
      );
    }
  }
}
