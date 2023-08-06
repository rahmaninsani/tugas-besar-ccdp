// File: src/visitors/DiscountVisitor.ts

import Visitor from "./Visitor";
import Product from "../models/Product";

class DiscountVisitor implements Visitor {
  private discountPercentage: number;

  constructor(discountPercentage: number) {
    this.discountPercentage = discountPercentage;
  }

  visitProduct(product: Product): void {
    const discountAmount = (product.getPrice() * this.discountPercentage) / 100;
    const discountedPrice = product.getPrice() - discountAmount;

    product.setPrice(discountedPrice);
  }
}

export default DiscountVisitor;
