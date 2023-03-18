import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletedItemAdminAnnouncementPage } from './deleted-item.page';

describe('DeletedItemAdminAnnouncementPage', () => {
  let component: DeletedItemAdminAnnouncementPage;
  let fixture: ComponentFixture<DeletedItemAdminAnnouncementPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DeletedItemAdminAnnouncementPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(DeletedItemAdminAnnouncementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
