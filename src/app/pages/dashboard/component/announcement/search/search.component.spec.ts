import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnnouncementSearchComponent } from './search.component';

describe('AnnouncementSearchComponent', () => {
  let component: AnnouncementSearchComponent;
  let fixture: ComponentFixture<AnnouncementSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementSearchComponent],
      imports: [RouterTestingModule, IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AnnouncementSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
