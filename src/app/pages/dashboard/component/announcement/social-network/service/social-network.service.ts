import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { SocialNetwork } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ManagementAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/management/service/management.service';

@Injectable()
export class SocialNetworkAnnouncementService extends HttpService<
  | SocialNetwork
  | Pick<
      SocialNetwork & { password: string },
      '_csrf' | 'id' | 'password' | 'message'
    >
> {
  private socialNetworkEvent = new EventEmitter<SocialNetwork>(undefined);
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private managementService: ManagementAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `socialNetwork`;
  }

  public get getSocialNetworkEvent() {
    return this.socialNetworkEvent.asObservable();
  }

  public set setSocialNetwork(socialNetwork: SocialNetwork) {
    this.managementService.getAnnouncement.socialNetwork = socialNetwork;
    this.managementService.setAnnouncement =
      this.managementService.getAnnouncement;
  }

  // public createSocialNetwork(key: string): Observable<SocialNetwork> {
  //   return this.findOne('', { key });
  // }

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

  public delete(
    socialNetWork: Pick<
      SocialNetwork & { password: string },
      '_csrf' | 'id' | 'password'
    >
  ): Observable<
    Pick<
      SocialNetwork & {
        password: string;
      },
      '_csrf' | 'id' | 'password' | 'message'
    >
  > {
    return this.destroy(socialNetWork).pipe(
      tap(
        (
          c: Pick<
            SocialNetwork & {
              password: string;
            },
            '_csrf' | 'id' | 'password' | 'message'
          >
        ) => (this.setSocialNetwork = null)
      )
    );
  }
}
