import { createWebSocketStream, WebSocketServer } from "ws";
import { getMousePosition, moveMouseUp, moveMouseDown, moveMouseLeft, moveMouseRight } from './mouse/mouseMoving';
import { drawCircle, drawSquare, drawRectangle } from "./draw/drawingFigures";
import { getScreenCapture } from "./screen/screenCapture";

const WSS_PORT = 8080;

const server = new WebSocketServer({
    port: WSS_PORT },
    () => console.log(`[Server] Listening on port ${WSS_PORT}`)
);


server.on('connection', res => {
    res.send('Connected');

    const duplexStream = createWebSocketStream(res, { encoding: 'utf-8', decodeStrings: false })

    res.on('close', () => {
        console.log('[Server] Connection closed');
    });

    res.on('message', ws => {
        const args: string[] = ws.toString().split(' ');
        switch(args[0]) {
            case 'mouse_position': {
                const { x, y } = getMousePosition();
                duplexStream.write(`mouse_position {${x}px},{${y}px}`);
                break;
            }
            case 'mouse_up': {
                moveMouseUp(parseInt(args[1]));
                duplexStream.write(`mouse_up`);
                break;
            }
            case 'mouse_down': {
                moveMouseDown(parseInt(args[1]));
                duplexStream.write(`mouse_down`);
                break;
            }
            case 'mouse_left': {
                moveMouseLeft(parseInt(args[1]));
                duplexStream.write(`mouse_left`);
                break;
            }
            case 'mouse_right': {
                moveMouseRight(parseInt(args[1]));
                duplexStream.write(`mouse_right`);
                break;
            }
            case 'draw_circle': {
                drawCircle(parseInt(args[1]));
                duplexStream.write(`draw_circle`);
                break;
            }
            case 'draw_square': {
                drawSquare(parseInt(args[1]));
                duplexStream.write(`draw_square`);
                break;
            }
            case 'draw_rectangle': {
                drawRectangle(parseInt(args[1]), parseInt(args[2]));
                duplexStream.write(`draw_rectangle`);
                break;
            }
            case 'prnt_scrn': {
                getScreenCapture(duplexStream);
                break;
            }
        }
    });
});
