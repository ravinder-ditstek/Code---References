import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent {
 @Input() text:string;
 @Input() isSidePanelOpened:boolean;
 @Input() loaded:boolean;

}
