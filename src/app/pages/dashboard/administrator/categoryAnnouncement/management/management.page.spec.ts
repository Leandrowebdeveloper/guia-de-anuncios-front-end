import { RouterTestingModule } from '@angular/router/testing';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ManagementPage } from './management.page';
import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';

describe('ManagementPage', () => {
    let component: ManagementPage;
    let fixture: ComponentFixture<ManagementPage>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ManagementPage],
            imports: [
                IonicModule.forRoot(),
                ReactiveFormsModule,
                HeaderModalModule,
                RouterTestingModule,
                HttpClientTestingModule,
                IonicStorageModule.forRoot(),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(ManagementPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
