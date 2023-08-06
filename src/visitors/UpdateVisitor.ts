// File: src/visitors/UpdateVisitor.ts

import Visitor from "./Visitor";
import Product from "../models/Product";

class UpdateVisitor implements Visitor {
  private newStock: number;
  private newPrice: number;

  constructor(newStock: number, newPrice: number) {
    this.newStock = newStock;
    this.newPrice = newPrice;
  }

  visitProduct(product: Product): void {
    product.setStock(this.newStock);
    product.setPrice(this.newPrice);
  }
}

export default UpdateVisitor;
