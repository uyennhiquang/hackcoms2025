import {Vertex} from '../vertex';
import {Graph} from '../graph';

describe('Graph', () => {

    let graph: Graph<number>;

    beforeEach(() => {
        graph = new Graph<number>();
    })

    test('Initialize', () => {
        expect(graph.size()).toBe(0);
    });

    test('Add one vertex', () => {
        graph.add(1, 100);
        expect(graph.size()).toBe(1);
        expect(graph.contains(1)).toBe(true);
        expect(graph.contains(2)).toBe(false);
    });

    test('Conect directed', () => {
        graph.add(1, 100);
        graph.add(2, 200);
        graph.connectDirected(1, 2);
        expect(graph.connected(1, 2)).toBe(true);
        expect(graph.connected(2, 1)).toBe(false);
    });

    test('Connect undirected', () => {
        graph.add(1, 100);
        graph.add(2, 200);
        graph.connectUndirected(1, 2);
        expect(graph.connected(1, 2)).toBe(true);
        expect(graph.connected(2, 1)).toBe(true);
    });

});
