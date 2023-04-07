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
  SocialNetwork & { password: string }
> {
  private socialNetworkEvent = new EventEmitter<SocialNetwork | null>(
    undefined
  );
  constructor(
    public override http: HttpClient,
    public override storageService: StorageService,
    private managementService: ManagementAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `social-network`;
  }

  public get getSocialNetworkEvent() {
    return this.socialNetworkEvent.asObservable();
  }

  public set setSocialNetwork(
    socialNetwork: (SocialNetwork & { password: string }) | null
  ) {
    if (this.managementService.getAnnouncement) {
      this.managementService.getAnnouncement.socialNetwork = socialNetwork;
      this.managementService.setAnnouncement =
        this.managementService.getAnnouncement;
    }
  }

  public socialNetwork(socialNetwork: SocialNetwork & { password: string }) {
    if (socialNetwork?.id) {
      return this.patch(socialNetwork).pipe(
        tap(
          (socialNetwork_: SocialNetwork & { password: string }) =>
            (this.setSocialNetwork = socialNetwork_)
        )
      );
    } else {
      return this.create(socialNetwork).pipe(
        tap(
          (socialNetwork_: SocialNetwork & { password: string }) =>
            (this.setSocialNetwork = socialNetwork_)
        )
      );
    }
  }

  public delete(
    socialNetWork: SocialNetwork & { password: string }
  ): Observable<
    Pick<
      SocialNetwork & {
        password: string;
      },
      '_csrf' | 'id' | 'password' | 'message'
    >
  > {
    return this.destroy(socialNetWork).pipe(
      tap((): null => (this.setSocialNetwork = null))
    );
  }
}
