import * as robot from "robotjs";

export const getMousePosition = () => {
    const { x, y } = robot.getMousePos();
    return { x, y };
}

export const moveMouseUp = (upByY: number) => {
    const { x, y } = robot.getMousePos();
    robot.setMouseDelay(500);
    robot.moveMouse(x, y - upByY);
}

export const moveMouseDown = (downByY: number) => {
    const { x, y } = robot.getMousePos();
    robot.setMouseDelay(500);
    robot.moveMouse(x, y + downByY);
}

export const moveMouseLeft = (leftByX: number) => {
    const { x, y } = robot.getMousePos();
    robot.setMouseDelay(500);
    robot.moveMouse(x - leftByX, y);
}

export const moveMouseRight = (rightByX: number) => {
    const { x, y } = robot.getMousePos();
    robot.setMouseDelay(500);
    robot.moveMouse(x + rightByX, y);
}