import { Storage } from '@ionic/storage';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AdvertGaleryComponent } from './galery-component';
import { HeaderModalModule } from '../../header-modal/header-modal.module';

describe('AdvertGaleryComponent', () => {
  let component: AdvertGaleryComponent;
  let fixture: ComponentFixture<AdvertGaleryComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertGaleryComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
        HeaderModalModule,
      ],
      providers: [Storage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvertGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
