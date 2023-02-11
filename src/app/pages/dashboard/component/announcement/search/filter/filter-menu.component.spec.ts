import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Storage } from '@ionic/storage-angular';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnnouncementSearchMenuComponent } from './filter-menu.component';

describe('AnnouncementSearchMenuComponent', () => {
  let component: AnnouncementSearchMenuComponent;
  let fixture: ComponentFixture<AnnouncementSearchMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementSearchMenuComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [Storage],
    }).compileComponents();

    fixture = TestBed.createComponent(AnnouncementSearchMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
