import * as robot from "robotjs";

export const drawCircle = (radius: number) => {
    const { x, y } = robot.getMousePos();
    const mouseX = x + (radius * Math.cos(0));
    const mouseY = y + (radius * Math.sin(0));
    robot.dragMouse(mouseX, mouseY);
    robot.mouseToggle('down');
    for (let i = 0.01; i <= Math.PI * 2; i += 0.01) {
        const mouseX = x + (radius * Math.cos(i));
        const mouseY = y + (radius * Math.sin(i));
        robot.setMouseDelay(1);
        robot.dragMouse(mouseX, mouseY);
        robot.setMouseDelay(0);
    }
    robot.mouseToggle('up');
}

export const drawSquare = (side: number) => {
    robot.mouseToggle('down');
    robot.setMouseDelay(1);
    for (let i = 0; i < side * 4; i++) {
        const { x, y } = robot.getMousePos();
        if (i < side) { const mouseY = y + 1; robot.dragMouse(x, mouseY); }
        else if (i < side * 2) { const mouseX =  x - 1; robot.dragMouse(mouseX, y) }
        else if (i < side * 3) { const mouseY = y - 1; robot.dragMouse(x, mouseY) }
        else { const mouseX = x + 1; robot.dragMouse(mouseX, y) }
    }
    robot.mouseToggle('up');
}

export const drawRectangle = (width: number, height: number) => {
    robot.mouseToggle('down');
    robot.setMouseDelay(1);
    for (let i = 0; i < height * 2 + width * 2; i++) {
        const { x, y } = robot.getMousePos();
        if (i < height) { const mouseY = y + 1; robot.dragMouse(x, mouseY); }
        else if (i < height + width) { const mouseX =  x - 1; robot.dragMouse(mouseX, y) }
        else if (i < height * 2 + width) { const mouseY = y - 1; robot.dragMouse(x, mouseY) }
        else { const mouseX = x + 1; robot.dragMouse(mouseX, y) }
    }
    robot.mouseToggle('up');
}