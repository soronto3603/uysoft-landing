export interface Piece {
	id: number;
	x: number;
	y: number;
	isEmpty: boolean;
}

interface Vector {
	x: number;
	y: number;
}

export class SlidingPuzzle {
	pieces: Piece[];
	directions: [Vector, Vector, Vector, Vector] = [
		{
			x: 0,
			y: 1
		},
		{
			x: 0,
			y: -1
		},
		{
			x: 1,
			y: 0
		},
		{
			x: -1,
			y: 0
		}
	];

	size: number;

	constructor(size = 5) {
		this.size = size;
		const array = [...new Array(5 * 5).keys()];
		const emptyIndex = Math.round(Math.random() * (array.length - 1));

		this.pieces = array.map((v) => {
			const x = v % size;
			const y = Math.floor(v / size);

			return {
				id: v,
				x,
				y,
				isEmpty: v === 0 ? true : false
			};
		});
	}

	get empty() {
		return this.pieces.find((v) => v.isEmpty);
	}

	move(id: number) {
		const piece = this.pieces.find((piece) => piece.id === id);

		if (!piece || !this.empty || piece === this.empty) {
			return false;
		}

		const distance = Math.sqrt(
			Math.pow(piece.x - this.empty.x, 2) + Math.pow(piece.y - this.empty.y, 2)
		);

		if (distance !== 1) {
			return false;
		}

		const pieceX = piece.x;
		const pieceY = piece.y;

		piece.x = this.empty.x;
		piece.y = this.empty.y;

		this.empty.x = pieceX;
		this.empty.y = pieceY;

		return true;
	}
}
