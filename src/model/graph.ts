import { Vertex } from "./vertex";

class Graph <Type> {
  vertices: {
    [key: number]: Vertex<Type>;
  }

  constructor() {
    this.vertices = {};
  }

  add(id: number, value: Type) {
    const vertex = new Vertex<>(value);
    this.vertices[id] = vertex;

  }

  contains(id: number) {
    return id in this.vertices;
  }

  size(): number {
    return Object.keys(this.vertices).length;
  }

  connectDirected(a: number, b: number):void {
    this.vertices[a].connect(this.vertices[b]);
  }

  connectUndirected(a: number, b: number): void {
    this.connectDirected(a, b);
    this.connectDirected(b, a);
  }

  connected(a: number, b: number): boolean{
    return this.vertices[a].connected(this.vertices[b]);
  }

}

export { Graph };