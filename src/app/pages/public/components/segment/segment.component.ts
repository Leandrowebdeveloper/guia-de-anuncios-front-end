import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from 'src/app/interface';
import { Share } from '@capacitor/share';
import { Clipboard } from 'ts-clipboard';
import { ToastService } from 'src/app/utilities/toast/toast.service';

@Component({
  selector: 'app-segment-component',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
})
export class SegmentComponent implements OnInit {
  @Input() announcement!: Pick<Announcement, 'title'>;
  public isSupportShare: boolean;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.canShare();
  }

  public async share(announcement: Announcement) {
    try {
      if (this.isSupportShare) {
        await Share.share({
          title: `Site ${announcement?.title}`,
          text: `O link a baixo para o site ${announcement?.title}`,
          url: location?.href,
          dialogTitle: 'Compartilhar página.',
        });
      }
    } catch (error) {}
  }

  public async clipboard(): Promise<void> {
    const url = location?.href;
    try {
      Clipboard.copy(url);
      (
        await this.toastService.show(
          'Link copiado.',
          'bottom',
          'thumbs-up',
          1000
        )
      ).present();
    } catch (error) {}
  }

  private async canShare(): Promise<boolean> {
    const { value } = await Share.canShare();
    return (this.isSupportShare = value);
  }
}
