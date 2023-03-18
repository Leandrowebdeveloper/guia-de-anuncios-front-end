import { Input } from '@angular/core';
import { Component } from '@angular/core';
import attrButton from 'src/app/utilities/functions';
import { AttrButton } from './interface';

@Component({
    selector: 'app-buttons-sccess-component',
    templateUrl: './buttons-sccess-component.html',
    styleUrls: ['./buttons-sccess-component.scss'],
})
export class ButtonsAccessComponent {
    @Input() route!: string;
    public readonly attrButton: AttrButton[] = attrButton;
}
