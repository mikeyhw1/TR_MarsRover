export const DIRECTIONS = ["N", "E", "S", "W"] as const;
export type Direction = typeof DIRECTIONS[number];

// NOTES: 0 & 360 degree = north
export const COMPASS_DEGREES = [0, 90, 180, 270] as const;
export type CompassDegree = typeof COMPASS_DEGREES[number];

export const ROVER_ACTIONS = ["L", "R", "M"] as const;
export type RoverAction = typeof ROVER_ACTIONS[number];

export type Coordinate = {
    x: number;
    y: number;
};

// FAIL NOTES: fail to use 'interfaces extends'
export type RoverCoordinate = {
    x: number;
    y: number;
    direction: Direction;
};

export type MovingCoordinate = {
    x: number;
    y: number;
    degree: CompassDegree;
};
