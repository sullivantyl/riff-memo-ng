import { Component, Injectable, Input } from '@angular/core';

import { TabService } from '../tab-service/tab-service.service';
@Component({
    selector: 'tab-view',
    templateUrl: './tab-view.component.html'
})

export class TabViewComponent{
    tabs;

    constructor(private tabService : TabService) {}

    ngOnInit() {
        this.tabs = this.tabService.get();
    }
    
}