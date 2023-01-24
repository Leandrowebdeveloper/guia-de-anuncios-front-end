import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialNetwork } from 'src/app/interface';
import { HttpService } from 'src/app/services/http/http.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SocialNetworkAnnouncementService } from '../../../../social-network/service/social-network.service';

@Injectable()
export class DeleteSocialNetworkService extends HttpService<
  Pick<
    SocialNetwork & { password: string },
    '_csrf' | 'id' | 'password' | 'message'
  >
> {
  constructor(
    http: HttpClient,
    public storageService: StorageService,
    private socialNetworkAnnouncementService: SocialNetworkAnnouncementService
  ) {
    super(http, storageService);
    this.setApi = `admin-announcement/socialNetWork`;
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
      tap(() => (this.socialNetworkAnnouncementService.setSocialNetwork = null))
    );
  }
}
