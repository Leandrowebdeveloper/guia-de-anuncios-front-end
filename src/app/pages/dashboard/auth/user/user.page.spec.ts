import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserPage } from './user.page';
import { FormComponentModule } from 'src/app/components/form/form.module';

import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { FormComponent } from 'src/app/components/form/form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Storage } from '@ionic/storage';
import { UserGaleryComponentModule } from 'src/app/components/galery/auth/galery-component.module';
import { AuthService } from 'src/app/services/auth/auth.service';

describe('UserPage', () => {
    let component: UserPage;
    let fixture: ComponentFixture<UserPage>;

    let AuthService: AuthService;

    let storageService: StorageService;


    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [
                UserPage
            ],
            imports: [
                IonicModule.forRoot(),
                HttpClientTestingModule,
                RouterTestingModule,
                FormComponentModule,
                HeaderModalModule,
                UserGaleryComponentModule,
            ],
            providers: [FormComponent, StorageService, Storage, AuthService],
        }).compileComponents();

        fixture = TestBed.createComponent(UserPage);
        component = fixture.componentInstance;
        fixture.detectChanges();

    }));

    beforeEach(() => {
        AuthService = TestBed.inject(AuthService);
        storageService = TestBed.inject(StorageService);
    });

    it('AuthService', () => {
        expect(AuthService).toBeTruthy();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});
