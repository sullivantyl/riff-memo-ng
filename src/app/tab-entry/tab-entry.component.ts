import { Component } from '@angular/core';

import { TabService } from '../tab-service/tab-service.service';

@Component({
    selector: 'tab-entry',
    templateUrl: './tab-entry.component.html'
})

export class TabEntryComponent{
    userInput : string;
    hideHelp : boolean = true;
    constructor(private tabService : TabService) {}

    ngOnInit() {
        this.userInput = null;
    }

    onSubmit(tabs : string, st : HTMLInputElement) {
        if (tabs.startsWith("help")) {
            this.hideHelp = !this.hideHelp;
            console.log("help");
        } else {
            this.tabService.add(tabs);
        }
        st.value = null;
        
    }
}