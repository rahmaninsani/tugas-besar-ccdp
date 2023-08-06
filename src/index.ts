// File: src/index.ts

/**
 * NIM    : 10119172
 * Nama   : Rahman Insani
 * Kelas  : CCDP 2
 *
 * Minggu, 06 Agustus 2023
 */

import Product from "./models/Product";
import DiscountVisitor from "./visitors/DiscountVisitor";
import UpdateVisitor from "./visitors/UpdateVisitor";
import { formatRupiah } from "./utils/formatUtils";

// Penggunaan Behavioral Design Pattern: Visitor pada class Product
const ramenKatsu = new Product("Ramen Katsu", "Ramen katsu dengan kuah tomyam", 500, 94000);

console.log("=== Produk Normal ===");
console.log("Nama:", ramenKatsu.getName());
console.log("Deskripsi:", ramenKatsu.getDescription());
console.log("Stok:", ramenKatsu.getStock());
console.log("Harga:", formatRupiah(ramenKatsu.getPrice()));

console.log("----------------------------------------");

// Contoh penggunaan Clone method untuk operasi Create
const newramenKatsu = ramenKatsu.clone();

// Contoh penggunaan Visitor untuk operasi Update Stok dan Harga
const updateVisitor = new UpdateVisitor(100, newramenKatsu.getPrice());
newramenKatsu.accept(updateVisitor);

// Contoh penggunaan Visitor untuk operasi Read
console.log("=== Produk Diskon 17 Agustus 2023 ===");
console.log("Nama:", newramenKatsu.getName());
console.log("Deskripsi:", newramenKatsu.getDescription());
console.log("Stok:", newramenKatsu.getStock());
console.log("Harga:", formatRupiah(newramenKatsu.getPrice()));

// Contoh penggunaan Visitor untuk operasi Update Diskon
const discountPercentage = 17;
const discountVisitor = new DiscountVisitor(discountPercentage);
newramenKatsu.accept(discountVisitor);
console.log(`Harga setelah diskon ${discountPercentage}%:`, formatRupiah(newramenKatsu.getPrice()));
