import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ItemRepresentation} from "../../../../../services/api/models/ItemRepresentation";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent {

  @Input() item: ItemRepresentation = <ItemRepresentation>{}
  @Output() buyItemEvent = new EventEmitter();

  buyItem(id: number) {
    this.buyItemEvent.emit(id);
  }
}
