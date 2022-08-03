import { 
  EventEmitter, 
  Component, 
  Output,
  Input
} from '@angular/core';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  @Input() account: {name: string, status: string};
  @Input() id: number;

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    console.log('A server status changed, new status: ' + status);
  }
}
