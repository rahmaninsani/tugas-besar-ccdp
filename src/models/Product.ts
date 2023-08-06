// File: src/models/Product.ts

import Visitor from "../visitors/Visitor";

class Product {
  private name: string;
  private description: string;
  private stock: number;
  private price: number;

  constructor(name: string, description: string, stock: number, price: number) {
    this.name = name;
    this.description = description;
    this.stock = stock;
    this.price = price;
  }

  // Creational Design Pattern: Prototype
  // Membuat kloning dari produk
  clone(): Product {
    return new Product(this.name, this.description, this.stock, this.price);
  }

  // Structural Design Pattern: Private Class Data
  // Mengambil nama produk
  getName(): string {
    return this.name;
  }

  // Structural Design Pattern: Private Class Data
  // Mengambil deskripsi produk
  getDescription(): string {
    return this.description;
  }

  // Structural Design Pattern: Private Class Data
  // Mengambil stok produk
  getStock(): number {
    return this.stock;
  }

  // Structural Design Pattern: Private Class Data
  // Mengubah stok produk
  setStock(stock: number): void {
    this.stock = stock;
  }

  // Structural Design Pattern: Private Class Data
  // Mengambil harga produk
  getPrice(): number {
    return this.price;
  }

  // Structural Design Pattern: Private Class Data
  // Mengubah harga produk
  setPrice(price: number): void {
    this.price = price;
  }

  // Behavioral Design Pattern: Visitor
  // Menerima visitor untuk melakukan operasi pada produk
  accept(visitor: Visitor): void {
    visitor.visitProduct(this);
  }
}

export default Product;
