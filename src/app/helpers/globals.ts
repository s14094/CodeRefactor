export namespace Globals {
  export class Dictionary {
    public static AGED = 'Aged Brie';
    public static BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert';
    public static SULFURAS = 'Sulfuras, Hand of Ragnaros';
  }

  export class Methods {
    public static between(i: number, minValueInclusive: number, maxValueInclusive: number): boolean {
      return (i > minValueInclusive && i < maxValueInclusive);
    }
  }
}
