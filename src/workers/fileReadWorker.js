var ws = new WebSocket('ws://localhost:8080');
var fileReader = new FileReader();

ws.onmessage = (msg) => {
    postMessage(`Server: ${msg.data}`);
};

onmessage = (messageEvent) => fileReader.readAsArrayBuffer(messageEvent.data);

fileReader.onload = () => {
    ws.send(fileReader.result);
};
