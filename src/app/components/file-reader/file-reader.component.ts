import { Component } from '@angular/core';

@Component({
    selector: 'file-picker',
    templateUrl: 'file-reader.component.html'
})
export class FileReaderComponent {
    private fileReader: FileReader = new FileReader();
    private fileName = '';
    private fileContents = '';

    constructor() {
        this.fileReader.onload = (e) => this.fileLoad(e);
    }

    private fileSelect(e) {
        this.fileName = e.srcElement.files[0].name;
        this.fileContents = 'Loading..';
        this.fileReader.readAsText(e.srcElement.files[0]);
    }

    private fileLoad(e) {
        this.fileContents = this.fileReader.result;
    }
}
