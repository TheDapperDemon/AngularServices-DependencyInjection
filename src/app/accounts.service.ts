import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
        ];
        statusUpdated = new EventEmitter<string>();

        constructor(private loggingService: LoggingService){

        }

        addedAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        }

        updatedStatus(id: number, status: string) {
        this.accounts[id].status = status;
        }
}
