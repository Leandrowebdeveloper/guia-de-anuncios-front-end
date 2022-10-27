import { Storage } from '@ionic/storage';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { UserGaleryComponent } from './galery-component';
import { HeaderModalModule } from '../../header-modal/header-modal.module';

describe('UserGaleryComponent', () => {
    let component: UserGaleryComponent;
    let fixture: ComponentFixture<UserGaleryComponent>;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [UserGaleryComponent],
            imports: [
                IonicModule.forRoot(),
                RouterTestingModule,
                HttpClientTestingModule,
                HeaderModalModule
            ],
            providers: [Storage]
        }).compileComponents();

        fixture = TestBed.createComponent(UserGaleryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
