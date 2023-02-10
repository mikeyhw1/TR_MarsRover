export const directions = ["N", "E", "S", "W"] as const;
export type Direction = typeof directions[number];

// 0 & 360 degree = north
export const compassDegrees = [0, 90, 180, 270, 360] as const;
export type CompassDegree = typeof compassDegrees[number];

export const roverActions = ["L", "R", "M"] as const;
export type RoverAction = typeof roverActions[number];
