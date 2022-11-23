import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchComponent } from './search.component';
import { SearchService } from './service/service.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  let service: SearchService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [RouterTestingModule, IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(SearchService);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('SearchService', () => {
    expect(service).toBeTruthy();
  });
});
