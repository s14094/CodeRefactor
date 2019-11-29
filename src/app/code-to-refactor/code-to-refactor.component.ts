import {Component} from '@angular/core';
import {Globals} from '../helpers/globals';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Array<Item>;


  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {
      if (Globals.Dictionary.toString().includes(item.name) || Globals.Methods.between(item.quality, 0, 50)) {
          item.quality += this.changeQualityIfLowSell(item.sellIn, item.quality);
      } else {
        item.quality -= 1;
      }
      item.sellIn = this.calculateSellIn(item);
      if (item.sellIn < 0) {
        item.quality += this.changeQuality(item);
      }
    }
    return this.items;
  }

  changeQualityIfLowSell(sellIn: number, quality: number): number {
    if (quality === 49 ) {
      return 1;
    } else {
      return (sellIn < 11 ? ((sellIn < 6 ? 3 : 2)) : 1);
    }
  }

  calculateSellIn(item: Item): number {
    if (item.name !== Globals.Dictionary.SULFURAS) {
      return item.sellIn -= 1;
    }
    return item.sellIn;
  }

  changeQuality(item: Item): number {
    if (item.name === Globals.Dictionary.AGED && item.quality < 50) {
      return 1;
    } else if (item.name === Globals.Dictionary.BACKSTAGE) {
      return 0;
    } else if (item.name !== Globals.Dictionary.SULFURAS && item.quality > 0) {
      return -1;
    }
    return 0;
  }
}


export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
