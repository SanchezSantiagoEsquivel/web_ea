import { Component, Input } from '@angular/core';
import { EditorialIntroSectionInterface } from './interface/editotial-intro-section.interface';

@Component({
  selector: 'app-editorial-intro-section',
  imports: [],
  templateUrl: './editorial-intro-section.component.html',
  styleUrl: './editorial-intro-section.component.scss'
})
export class EditorialIntroSectionComponent {
@Input() introData!: EditorialIntroSectionInterface;
}
