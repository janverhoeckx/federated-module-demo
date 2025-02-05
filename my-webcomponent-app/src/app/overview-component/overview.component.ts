import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-overview-component',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  imports: [CommonModule]
})
export class OverviewComponent {
  complaintAreas: string[] = [
    'Headache', 'Chest Pain', 'Back Pain', 'Stomach Ache', 'Fatigue', 'Shortness of Breath'
  ];

  @Output() areaSelected = new EventEmitter<string>(); // Output for selected area

  onSelect(area: string) {
    this.areaSelected.emit(area); // Emit the selected complaint area
  }
}
