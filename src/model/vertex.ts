class Vertex<Type> {
  value: Type;
  neighbors: Set<Vertex<Type>>

  constructor (value: Type) {
    this.value = value;
    this.neighbors = new Set<Vertex<Type>>();
  }

  getValue(): Type {
    return this.value;
  }

  getNeighbors(): Set<Vertex<Type>> {
    return new Set(this.neighbors);
  }

  connect(neighbor: Vertex<Type>): void {
    this.neighbors.add(neighbor);
  }

  connected(neighbor: Vertex<Type>): boolean {
    return this.neighbors.has(neighbor);
  }

}

export { Vertex }