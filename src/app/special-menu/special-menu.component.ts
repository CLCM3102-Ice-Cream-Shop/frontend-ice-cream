import { Component } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-special-menu',
  templateUrl: './special-menu.component.html',
  styleUrls: ['./special-menu.component.css']
})
export class SpecialMenuComponent {

  public specialArray = [
    {
      id: "01",
      fName: "Frozen caramel nut crunch ice cream",
      desc: "Indulge in the exquisite delight of Frozen Caramel Nut Crunch Ice Cream, a symphony of rich flavors and satisfying textures. Creamy caramel-infused ice cream is generously studded with crunchy nut clusters, creating a harmonious blend of sweet and savory. Each spoonful is a journey through velvety smoothness and delightful crunch, making this frozen treat a perfect balance of indulgence and refreshment. Elevate your dessert experience with the luscious taste of caramel and the irresistible allure of nutty goodness in every bite.",
      additionalRequest: "",
      size: "",
      price: 17.99,
      displayPic: "Frozen_caramel_nut_crunch_ice_cream_pie.png",
    },
    {
      id: "02",
      fName: "Strawberry Lemon Shortcake Sundae",
      desc: "Savor the blissful combination of summer sweetness with our Strawberry Lemon Shortcake Sundae. Immerse yourself in layers of ripe, succulent strawberries and zesty lemon-infused shortcake, crowned with velvety vanilla ice cream. The medley of flavors unfolds with each spoonful, as the tartness of fresh strawberries dances with the citrusy notes of lemon, harmonizing perfectly with the buttery, crumbly shortcake. This sundae is a delightful symphony of textures and tastes, capturing the essence of sunny days and the joy of indulging in a classic dessert with a fruity twist.",
      additionalRequest: "",
      size: "",
      price: 17.99,
      displayPic: "Strawberry-Lemon-Shortcake-Sundae.png"
    },
    {
      id: "03",
      fName: "Vanilla Pudding Cookie Trifle",
      desc: "Experience a heavenly delight with our Vanilla Pudding Cookie Trifle. Layers of velvety vanilla pudding intertwine with delicate, crumbly cookies, creating a symphony of textures and flavors. Each spoonful unveils the perfect balance between the creamy richness of the pudding and the satisfying crunch of the cookies. The vanilla undertones provide a classic sweetness, while the interplay of textures makes for a dessert experience that is both comforting and indulgent. Elevate your dessert cravings with this decadent trifle, where simplicity meets sophistication in a delightful culinary fusion.",
      additionalRequest: "",
      size: "",
      price: 17.99,
      displayPic: "Vanilla-Pudding-Cookie-Trifle.png"
    },
    {
      id: "04",
      fName: "Mile High Birthday Ice Cream Cake",
      desc: "Celebrate in grand style with our Mile High Birthday Ice Cream Cake, a towering masterpiece of pure delight. Layers of premium ice cream, each bursting with vibrant flavors, are meticulously stacked to create a towering confection. Rich chocolate and velvety vanilla harmonize with swirls of indulgent caramel, while chunks of colorful birthday cake add festive flair. Topped with a luscious frosting and a cascade of rainbow sprinkles, this decadent creation promises a celebration like no other. Every slice is a journey through layers of joy, making this cake the perfect centerpiece for a birthday extravaganza.",
      additionalRequest: "",
      size: "",
      price: 17.99,
      displayPic: "Mile-High-Birthday-Ice-Cream-Cake.png"
    }
  ]
  public counterValue: number = 1;
  public priceVal: number = 0;

  constructor(
    private commonservice: CommonserviceService
  ) { }

  public increment() {
    this.counterValue++;
    // this.priceVal = this.originalPrice * this.counterValue
  }

  public decrement() {
    if (this.counterValue > 1) {
      this.counterValue--;
      // this.priceVal = (this.originalPrice * this.counterValue);
    }
  }

  addToCart(name: any, price: any) {
    const splMenuDetail = {
      productType: "Special Menu",
      item: name,
      type: null,
      size: null,
      toppings: null,
      customerComments: null,
      count: this.counterValue,
      price: price
    }
    this.commonservice.addToCart(splMenuDetail);
  }
}