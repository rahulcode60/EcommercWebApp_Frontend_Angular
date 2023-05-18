export class Product {
    id: any;
  name: any;
  description: any;
  actualPrice: any;
  discountedPrice: any;
  image: any;
  categoryId: any;

  constructor(
    id: any,
    name: any,
    description: any,
    actualPrice: any,
    discountedPrice: any,
    image: any,
    categoryId: any
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.actualPrice = actualPrice;
    this.discountedPrice = discountedPrice;
    this.image = image;
    this.categoryId = categoryId;
  }
}
