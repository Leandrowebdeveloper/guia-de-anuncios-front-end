import { Storage } from '@ionic/storage';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { UsersGaleryComponent } from './galery-component';
import { HeaderModalModule } from '../../header-modal/header-modal.module';

describe('UsersGaleryComponent', () => {
    let component: UsersGaleryComponent;
    let fixture: ComponentFixture<UsersGaleryComponent>;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [UsersGaleryComponent],
            imports: [
                IonicModule.forRoot(),
                RouterTestingModule,
                HttpClientTestingModule,
                HeaderModalModule
            ],
            providers: [Storage]
        }).compileComponents();

        fixture = TestBed.createComponent(UsersGaleryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
