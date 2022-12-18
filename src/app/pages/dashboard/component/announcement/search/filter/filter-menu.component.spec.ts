import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Storage } from '@ionic/storage-angular';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchMenuAnnouncementComponent } from './filter-menu.component';

describe('SearchMenuAnnouncementComponent', () => {
  let component: SearchMenuAnnouncementComponent;
  let fixture: ComponentFixture<SearchMenuAnnouncementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchMenuAnnouncementComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [Storage],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchMenuAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
