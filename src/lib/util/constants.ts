import { Color, PieceType } from './enums';
import type { ResourceCollection } from './types';

export const HEX_AXIAL_COORDS: { q: number; r: number }[] = [
	{ q: -12, r: 0 },
	{ q: -12, r: 6 },
	{ q: -12, r: 12 },
	{ q: -6, r: -6 },
	{ q: -6, r: 0 },
	{ q: -6, r: 6 },
	{ q: -6, r: 12 },
	{ q: 0, r: -12 },
	{ q: 0, r: -6 },
	{ q: 0, r: 0 },
	{ q: 0, r: 6 },
	{ q: 0, r: 12 },
	{ q: 6, r: -12 },
	{ q: 6, r: -6 },
	{ q: 6, r: 0 },
	{ q: 6, r: 6 },
	{ q: 12, r: -12 },
	{ q: 12, r: -6 },
	{ q: 12, r: 0 },
];
export const EDGE_AXIAL_COORDS: { q: number; r: number }[] = [
	{ q: -15, r: 0 },
	{ q: -15, r: 6 },
	{ q: -15, r: 12 },
	{ q: -9, r: -6 },
	{ q: -9, r: 0 },
	{ q: -9, r: 6 },
	{ q: -9, r: 12 },
	{ q: -3, r: -12 },
	{ q: -3, r: -6 },
	{ q: -3, r: 0 },
	{ q: -3, r: 6 },
	{ q: -3, r: 12 },
	{ q: 3, r: -12 },
	{ q: 3, r: -6 },
	{ q: 3, r: 0 },
	{ q: 3, r: 6 },
	{ q: 3, r: 12 },
	{ q: 9, r: -12 },
	{ q: 9, r: -6 },
	{ q: 9, r: 0 },
	{ q: 9, r: 6 },
	{ q: 15, r: -12 },
	{ q: 15, r: -6 },
	{ q: 15, r: 0 },
	{ q: -12, r: -3 },
	{ q: -12, r: 3 },
	{ q: -12, r: 9 },
	{ q: -12, r: 15 },
	{ q: -6, r: -9 },
	{ q: -6, r: -3 },
	{ q: -6, r: 3 },
	{ q: -6, r: 9 },
	{ q: -6, r: 15 },
	{ q: 0, r: -15 },
	{ q: 0, r: -9 },
	{ q: 0, r: -3 },
	{ q: 0, r: 3 },
	{ q: 0, r: 9 },
	{ q: 0, r: 15 },
	{ q: 6, r: -15 },
	{ q: 6, r: -9 },
	{ q: 6, r: -3 },
	{ q: 6, r: 3 },
	{ q: 6, r: 9 },
	{ q: 12, r: -15 },
	{ q: 12, r: -9 },
	{ q: 12, r: -3 },
	{ q: 12, r: 3 },
	{ q: -15, r: 3 },
	{ q: -15, r: 9 },
	{ q: -15, r: 15 },
	{ q: -9, r: -3 },
	{ q: -9, r: 3 },
	{ q: -9, r: 9 },
	{ q: -9, r: 15 },
	{ q: -3, r: -9 },
	{ q: -3, r: -3 },
	{ q: -3, r: 3 },
	{ q: -3, r: 9 },
	{ q: -3, r: 15 },
	{ q: 3, r: -15 },
	{ q: 3, r: -9 },
	{ q: 3, r: -3 },
	{ q: 3, r: 3 },
	{ q: 3, r: 9 },
	{ q: 9, r: -15 },
	{ q: 9, r: -9 },
	{ q: 9, r: -3 },
	{ q: 9, r: 3 },
	{ q: 15, r: -15 },
	{ q: 15, r: -9 },
	{ q: 15, r: -3 },
];

export const CORNER_AXIAL_COORDS: { q: number; r: number }[] = [
	{ q: -16, r: 2 },
	{ q: -16, r: 8 },
	{ q: -16, r: 14 },
	{ q: -14, r: -2 },
	{ q: -14, r: 4 },
	{ q: -14, r: 10 },
	{ q: -14, r: 16 },
	{ q: -10, r: -4 },
	{ q: -10, r: 2 },
	{ q: -10, r: 8 },
	{ q: -10, r: 14 },
	{ q: -8, r: -8 },
	{ q: -8, r: -2 },
	{ q: -8, r: 4 },
	{ q: -8, r: 10 },
	{ q: -8, r: 16 },
	{ q: -4, r: -10 },
	{ q: -4, r: -4 },
	{ q: -4, r: 2 },
	{ q: -4, r: 8 },
	{ q: -4, r: 14 },
	{ q: -2, r: -14 },
	{ q: -2, r: -8 },
	{ q: -2, r: -2 },
	{ q: -2, r: 4 },
	{ q: -2, r: 10 },
	{ q: -2, r: 16 },
	{ q: 2, r: -16 },
	{ q: 2, r: -10 },
	{ q: 2, r: -4 },
	{ q: 2, r: 2 },
	{ q: 2, r: 8 },
	{ q: 2, r: 14 },
	{ q: 4, r: -14 },
	{ q: 4, r: -8 },
	{ q: 4, r: -2 },
	{ q: 4, r: 4 },
	{ q: 4, r: 10 },
	{ q: 8, r: -16 },
	{ q: 8, r: -10 },
	{ q: 8, r: -4 },
	{ q: 8, r: 2 },
	{ q: 8, r: 8 },
	{ q: 10, r: -14 },
	{ q: 10, r: -8 },
	{ q: 10, r: -2 },
	{ q: 10, r: 4 },
	{ q: 14, r: -16 },
	{ q: 14, r: -10 },
	{ q: 14, r: -4 },
	{ q: 14, r: 2 },
	{ q: 16, r: -14 },
	{ q: 16, r: -8 },
	{ q: 16, r: -2 },
];

export const ADJACENT_CORNER_TRANSFORMATIONS: { q: number; r: number }[] = [
	{ q: 2, r: -4 },
	{ q: 4, r: -2 },
	{ q: 2, r: 2 },
	{ q: -2, r: 4 },
	{ q: -4, r: 2 },
	{ q: -2, r: -2 },
];

export const ADJACENT_EDGE_TRANSFORMATIONS: { q: number; r: number }[] = [
	{ q: 3, r: 0 },
	{ q: 3, r: -3 },
	{ q: 0, r: 3 },
	{ q: -3, r: 0 },
	{ q: -3, r: 3 },
	{ q: 0, r: -3 },
];

export const ADJACENT_HALFSTEP_TRANSFORMATIONS: { q: number; r: number }[] = [
	{ q: -2, r: 1 },
	{ q: -1, r: 2 },
	{ q: 1, r: 1 },
	{ q: 2, r: -1 },
	{ q: 1, r: -2 },
	{ q: -1, r: -1 },
];

export const ADJACENT_HEX_TRANSFORMATIONS: { q: number; r: number }[] = [
	{ q: 0, r: -6 },
	{ q: 0, r: 6 },
	{ q: 6, r: -6 },
	{ q: 6, r: 0 },
	{ q: -6, r: 6 },
	{ q: -6, r: 0 },
];

export const COLORS = [Color.Blue, Color.Orange, Color.Red, Color.White];

// Percentage constants
export const HEX_WIDTH = 25; // I should figure out this math...
export const HEX_HEIGHT = 20;

export const EDGE_BUTTON_WIDTH = 6;
export const EDGE_BUTTON_HEIGHT = 2;

export const CORNER_BUTTON_WIDTH = 5;
export const CORNER_BUTTON_HEIGHT = 5;

// Costs
export const COST_SETTLEMENT: ResourceCollection = [1, 1, 1, 0, 1];
export const COST_ROAD: ResourceCollection = [1, 0, 1, 0, 0];
export const COST_CITY: ResourceCollection = [0, 0, 0, 3, 2];
// export const COST_DEV_CARD: ResourceCollection = [0, 1, 1, 1, 0];
export const ITEM_COSTS = {
	[PieceType.Road]: COST_ROAD,
	[PieceType.Settlement]: COST_SETTLEMENT,
	[PieceType.City]: COST_CITY,
};

export const TOTAL_NUM_HEXES = 19;
