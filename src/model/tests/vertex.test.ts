import {Vertex} from '../vertex';

describe ('Vertex', () => {
    let vertexA: Vertex<number>; 
    let vertexB: Vertex<number>;
    let vertexC: Vertex<number>;

    beforeEach(() => {
        vertexA = new Vertex(1);
        vertexB = new Vertex(2);
        vertexC = new Vertex(3);
    });

    test('Initialize', () => {
        expect(vertexA.getValue()).toBe(1);
        expect(vertexA.getNeighbors().size).toBe(0);
    });

    test('Connect one vertex', () => {
        vertexA.connect(vertexB);
        expect(vertexA.getNeighbors().size).toBe(1);
        expect(vertexA.connected(vertexB)).toBe(true);
        expect(vertexA.connected(vertexC)).toBe(false);
    });

    test('Connect two vetices', () => {
        vertexA.connect(vertexB);
        vertexA.connect(vertexC);
        expect(vertexA.getNeighbors().size).toBe(2);
        expect(vertexA.connected(vertexB)).toBe(true);
        expect(vertexA.connected(vertexC)).toBe(true);
    });

    test('Duplicate connection', () => {
        vertexA.connect(vertexB);
        vertexA.connect(vertexB);
        expect(vertexA.getNeighbors().size).toBe(1);
        expect(vertexA.connected(vertexB)).toBe(true);
    });
});