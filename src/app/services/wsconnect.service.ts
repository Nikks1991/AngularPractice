import { Injectable } from '@angular/core';

@Injectable()
export class WSConnectService {
    private ws: WebSocket = new WebSocket('ws://localhost:8080');

    constructor() {
        this.ws.onmessage = (msg) => {
            console.log(`Server: ${msg.data}`);
            //console.timeEnd('readTime');
        };
    }

    public send = (msg: string) => {

        return new Promise((resolve, reject) => {

            switch (this.ws.readyState) {
                case this.ws.OPEN:
                    {
                        this.ws.send(msg);
                        resolve();
                        break;
                    }

                case this.ws.CONNECTING:
                    {
                        this.ws.onopen = () => {
                            this.ws.send(msg);
                            resolve();
                        };
                        break;
                    }

                case this.ws.CLOSED:
                    {
                        reject();
                        break;
                    }
            }

        });
    }
}
