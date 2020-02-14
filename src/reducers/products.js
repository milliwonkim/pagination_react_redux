// src/reducers/products.js

import * as Types from '../actions/actionTypes.js';

const initialState = [
    { id: 1, name: "Apple IPhone 7 128GB" },
  { id: 2, name: "Nokia 105 Single Sim 2017" },
  { id: 3, name: "Xiaomi Redmi 5 2GB/16GB" },
  { id: 4, name: "Apple IPhone Xs Max 256GB" },
  { id: 5, name: "Samsung Galaxy J2 Prime 8GB" },
  { id: 6, name: "Nokia 8110 4G 2 Sim" },
  { id: 7, name: "Samsung Galaxy J6 32GB Ram 3GB" },
  { id: 8, name: "Apple IPhone 8 Plus 64GB" },
  { id: 9, name: "Apple IPhone XR 64GB" },
  { id: 10, name: "Xiaomi Redmi 6A 2GB/16GB" },
  { id: 11, name: "Apple IPhone 6 32GB" },
  { id: 12, name: "Apple IPhone X 256GB" },
  { id: 13, name: "Nokia 5 16GB" },
  { id: 14, name: "Samsung Galaxy S8 Plus G955F" },
  { id: 15, name: "Samsung Galaxy J8 3GB/32GB" },
  { id: 16, name: "Nokia X5 2018 32GB Ram 3GB" },
  { id: 17, name: "Sony Xperia XZ Dual SIM 3GB/64GB" },
  { id: 18, name: "Sony Xperia L2 (H4331)" },
  { id: 19, name: "Sony Xperia XA3 Ultra" },
  { id: 20, name: "Samsung Galaxy Note 9 512GB" },
  { id: 21, name: "Apple IPhone 6S Plus 32GB" },
  { id: 22, name: "Apple IPhone 8 64GB" },
  { id: 23, name: "Apple IPhone 7 32GB" },
  { id: 24, name: "Apple IPhone 7 Plus 128GB" },
  { id: 25, name: "Samsung Galaxy J4+ 2GB/16GB" },
  { id: 26, name: "Samsung Galaxy A7 (2018) 4GB/64GB" },
  { id: 27, name: "Samsung Galaxy A6 Plus 2018 4GB/32GB" },
  { id: 28, name: "Samsung Galaxy Note 8 6GB/64GB" },
  { id: 29, name: "Samsung Galaxy J3 Pro 2017" },
  { id: 30, name: "Samsung Galaxy S9 Plus 64GB" },
  { id: 31, name: "Nokia 216" },
  { id: 32, name: "Nokia 3310 2017" },
  { id: 33, name: "Nokia 230 Dual SIM" },
  { id: 34, name: "Nokia 150 Dual SIM" },
  { id: 35, name: "Nokia 2 (TA-1029) 1GB/8GB Dual SIM" },
  { id: 36, name: "Nokia 1 " },
  { id: 37, name: "Nokia 5.1 Plus 3GB/32GB" },
  { id: 38, name: "Nokia 7 Plus 2 Sim 4GB/64GB" },
  { id: 39, name: "Nokia 6.1 Plus 4GB/64GB Xanh" },
  { id: 40, name: "Nokia X6 2018 64GB Ram 4GB" },
  { id: 41, name: "Xiaomi Redmi Note 5 Pro 32GB Ram 3GB" },
  { id: 42, name: "Xiaomi Mi 8 Lite 4GB/64GB Xám" },
  { id: 43, name: "Xiaomi Mi A2 Lite 4GB/64GB" },
  { id: 44, name: "Xiaomi Redmi 5 Plus 64GB Ram 4GB" },
  { id: 45, name: "Xiaomi Redmi 4X 3GB/32GB" },
  { id: 46, name: "Xiaomi Mi A1 4GB/32GB" },
  { id: 47, name: "Xiaomi Mi 6X 64GB Ram 6GB" },
  { id: 48, name: "Xiaomi Redmi Note 6 Pro 3GB/32GB" },
  { id: 49, name: "Xiaomi Redmi 6 Pro 32GB Ram 3GB" },
  { id: 50, name: "Xiaomi Mi Max 3 64GB Ram 4GB" },
  { id: 51, name: "Sony Xperia L1 - G3312" },
  { id: 52, name: "Sony Xperia L3" },
  { id: 53, name: "Sony Xperia XZ4" },
  { id: 54, name: "Sony Xperia XZs" },
  { id: 55, name: "Sony Xperia M4 Aqua Dual" },
  { id: 56, name: "Sony Xperia C5 Ultra Dual" },
  { id: 57, name: "Sony Xperia XA1 Plus" },
  { id: 58, name: "Sony Xperia M5 Dual" },
  { id: 59, name: "Sony Xperia Z5 Premium" },
  { id: 60, name: "Sony Xperia XA1" },
  { id: 61, name: "Sony Xperia Z5 compact" },
  { id: 62, name: "Sony Xperia XA Ultra" },
  { id: 63, name: "Sony Xperia XA" },
  { id: 64, name: "Sony Xperia XZ Premium" },
  { id: 65, name: "Sony Xperia C4 Dual (E5333)" },
  { id: 66, name: "Sony Xperia X" },
  { id: 67, name: "Sony Xperia XZ1" },
  { id: 68, name: "Sony Xperia XZ2" },
  { id: 69, name: "Sony Xperia Z1" },
  { id: 70, name: "Xiaomi Redmi 1S" },
  { id: 71, name: "Xiaomi Redmi 2" },
  { id: 72, name: "Xiaomi Redmi 3" },
  { id: 73, name: "Xiaomi Redmi 4 16GB" },
  { id: 74, name: "Xiaomi Redmi Note 2" },
  { id: 75, name: "Xiaomi Redmi Note 3" },
  { id: 76, name: "Xiaomi Redmi Note 4" },
  { id: 77, name: "Xiaomi Mi A1 64GB" },
  { id: 78, name: "Xiaomi Mi Mix 2" },
  { id: 79, name: "Xiaomi Mi 2" },
  { id: 80, name: "Xiaomi Mi 3" },
  { id: 81, name: "Xiaomi Mi 4" },
  { id: 82, name: "Xiaomi Mi 5" },
  { id: 83, name: "Xiaomi Mi 6" },
  { id: 84, name: "Xiaomi Mi 7" },
  { id: 85, name: "Samsung Galaxy A8 Star" },
  { id: 86, name: "IPhone Xs 64GB" }
]

const products = (state = initialState, action) => {
    switch(action.type) {
        default:
            return [...state];
    }
};

export default products;