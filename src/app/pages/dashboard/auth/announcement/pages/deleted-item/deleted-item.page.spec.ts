import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletedItemAnnouncementPage } from './deleted-item.page';

describe('DeletedItemAnnouncementPage', () => {
  let component: DeletedItemAnnouncementPage;
  let fixture: ComponentFixture<DeletedItemAnnouncementPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DeletedItemAnnouncementPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(DeletedItemAnnouncementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
