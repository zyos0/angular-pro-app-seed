import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'Join'
})
export class JoinPipe implements PipeTransform {

  transform(value: any) {
    return Array.isArray(value)
      ? value.join(', ')
      : value
  }

}
