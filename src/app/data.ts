import {Category} from "./models";

export const data: Category[] = [{
  "title": "Phones",
  "items": [{
    "vendor": "Samsung",
    "name": "S20",
    "price": 3100
  }, {
    "vendor": "Apple",
    "name": "iPhone",
    "price": 25000
  }, {
    "vendor": "Xiaomi",
    "name": "Poco X3",
    "price": 3500
  }, {
    "vendor": "Huawei",
    "name": "iPhone",
    "price": 4000
  }]
}, {
  "title": "Cars",
  "items": [{
    "vendor": "BMW",
    "name": "X5",
    "price": 195000,
    "is_hybrid": true
  }, {
    "vendor": "Toyota",
    "name": "Rav4",
    "price": 60000,
    "is_hybrid": true
  }, {
    "vendor": "Opel",
    "name": "Corsa",
    "price": 34000,
    "is_hybrid": false
  }]
}, {
  "title": "Laptops",
  "items": [{
    "vendor": "Lenovo",
    "name": "ThinkPad",
    "price": 4000,
    "system": "Linux"
  }, {
    "vendor": "Acer",
    "name": "Aspire",
    "price": 2400,
    "system": "ChromeOS"
  }, {
    "vendor": "Microsoft",
    "name": "Surface Pro",
    "price": 8000,
    "system": "Windows"
  }, {
    "vendor": "Lenovo",
    "name": "IdeaPad",
    "price": 1000,
    "system": "Windows"
  }]
}];
