// src/visitors/Visitor.ts

import Product from "../models/Product";

interface Visitor {
  visitProduct(product: Product): void;
}

export default Visitor;
