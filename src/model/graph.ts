class Graph {
  // private Map<E, Vertex<E>> vertices;
  vertices: 

  public AdjacencyGraph() {
    this.vertices = new HashMap<>();
  }

  @Override
  public void add(E value) {
    Vertex<E> vertex = new Vertex<>(value);
    this.vertices.put(value, vertex);

  }

  @Override
  public boolean contains(E value) {
    return this.vertices.containsKey(value);
  }

  @Override
  public int size() {
    return this.vertices.size();
  }

  @Override
  public void connectDirected(E a, E b) {
    this.vertices.get(a).connect(this.vertices.get(b));
  }

  @Override
  public void connectUndirected(E a, E b) {
    this.connectDirected(a, b);
    this.connectDirected(b, a);
  }

  @Override
  public boolean connected(E a, E b) {
    return this.vertices.get(a).connected(this.vertices.get(b));
  }

  @Override
  public boolean bfSearch(E start, E end) {
    Vertex<E> s = this.vertices.get(start);
    Vertex<E> e = this.vertices.get(end);
    Queue<Vertex<E>> toBeVisited = new LinkedList<>();
    Set<Vertex<E>> visited = new HashSet<>();

    toBeVisited.add(s);
    visited.add(s);

    while (!toBeVisited.isEmpty()) {
      Vertex<E> currentV = toBeVisited.poll();
      if (currentV == e) {
        return true;
      } else {
        for (Vertex<E> aVertex : currentV.getNeighbors()) {
          if (!visited.contains(aVertex)) {
            visited.add(aVertex);
            toBeVisited.add(aVertex);
          }
        }
      }
    }

    return false;
  }

  @Override
  public List<E> bfPath(E start, E end) {
    Vertex<E> s = this.vertices.get(start);
    Vertex<E> e = this.vertices.get(end);
    Queue<Vertex<E>> toBeVisited = new LinkedList<>();
    Map<Vertex<E>, Vertex<E>> pred = new HashMap<>();

    toBeVisited.add(s);
    pred.put(s, null);

    while (!toBeVisited.isEmpty()) {
      Vertex<E> currentV = toBeVisited.poll();
      if (currentV == e) {
        break;
      } else {
        for (Vertex<E> aVertex : currentV.getNeighbors()) {
          if (!pred.containsKey(aVertex)) {
            pred.put(aVertex, currentV);
            toBeVisited.add(aVertex);
          }
        }
      }
    }

    return makePath(pred, e);
  }

  private List<E> makePath(Map<Vertex<E>, Vertex<E>> pred, Vertex<E> e) {
    if (pred.containsKey(e)) {
      List<E> path = new LinkedList<>();
      Vertex<E> current = e;
      while (current != null) {
        path.add(0, current.getValue());
        current = pred.get(current);
      }

      return path;
    } else {
      return null;
    }
  }

  @Override
  public boolean dfSearch(E start, E end) {
    Vertex<E> s = this.vertices.get(start);
    Vertex<E> e = this.vertices.get(end);
    Set<Vertex<E>> visited = new HashSet<>();

    visited.add(s);
    visitDFS(s, visited);

    return visited.contains(e);
  }

  private void visitDFS(Vertex<E> aVertex, Set<Vertex<E>> visited) {
    for (Vertex<E> neighbor : aVertex.getNeighbors()) {
      if (!visited.contains(neighbor)) {
        visited.add(neighbor);
        visitDFS(neighbor, visited);
      }
    }
  }

  @Override
  public List<E> dfPath(E start, E end) {
    Vertex<E> s = this.vertices.get(start);
    Vertex<E> e = this.vertices.get(end);

    Set<Vertex<E>> visited = new HashSet<>();

    visited.add(s);
    return visitedDFPath(s, e, visited);
  }

  private List<E> visitedDFPath(Vertex<E> v, Vertex<E> e, Set<Vertex<E>> visited) {
    if (v == e) {
      List<E> path = new LinkedList<>();
      path.add(e.getValue());
      return path;
    } else {
      for (Vertex<E> neighbor : v.getNeighbors()) {
        if (!visited.contains(neighbor)) {
          visited.add(neighbor);
          List<E> path = visitedDFPath(neighbor, e, visited);

          if (path != null) {
            path.add(0, v.getValue());
            return path;
          }
        }
      }

      return null;
    }
  }
}

export { Graph };