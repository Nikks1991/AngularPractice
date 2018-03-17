import { Component } from '@angular/core';

import { WSConnectService } from '../../services/wsconnect.service';

@Component({
    selector: 'file-picker',
    templateUrl: 'file-reader.component.html'
})
export class FileReaderComponent {
    private fileContents = '';
    private timeStart = 0;
    private timeEnd = 0;
    private worker: Worker = new Worker('workers/fileReadWorker.js');

    constructor() {
        this.worker.onmessage = ((msg: MessageEvent) => {
            this.timeEnd = new Date().valueOf();
            this.fileContents = `Time ealapsed: ${this.timeEnd - this.timeStart}`;
        });
    }

    private fileSelect(e) {
        this.fileContents = 'Loading..';
        this.timeStart = new Date().valueOf();
        this.worker.postMessage(e.srcElement.files[0]);
    }

}
