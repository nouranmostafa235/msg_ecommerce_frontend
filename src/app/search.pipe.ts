import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: any[], searchTerm: string): any[] {
    if (!products || !searchTerm) {
      return products;
    }

    return products.filter(data => {
      const brandMatch = data.brand?.toLowerCase().includes(searchTerm.toLowerCase());
      const discountMatch = data.discount != null && data.discount.toString().includes(searchTerm);
      
      return brandMatch || discountMatch;
    });
  }

}
