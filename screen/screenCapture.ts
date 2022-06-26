import * as Jimp from 'jimp';
import * as robot from 'robotjs';
import internal, {Duplex} from "stream";

export const getScreenCapture = (stream: internal.Duplex) => {
    const { x, y } = robot.getMousePos();
    new Jimp({ data: robot.screen.capture(x, y, 200, 200).image, width: 200, height: 200 }, (err: any, image: Jimp) => {
        if(err) throw err;
        image.getBase64(image.getMIME(), (err:any, data: string) => {
            if(err) throw new Error(err);
            stream.write(`prnt_scrn ${data.slice(22)}`);
        });
    });
}