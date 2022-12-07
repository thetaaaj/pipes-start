import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, fileredString: string, propertName: string) {
    if (value.length === 0 || fileredString === '') {
      return value;
    }
    const resultArray = [];
    value.forEach(item => {
      if (item[propertName] === fileredString) {
        resultArray.push(item);
      }
    });
    return resultArray;

  }

}
