import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "simplepipe",
    pure: false
})
export class SimplePipe implements PipeTransform {

    transform(value1: number, value2: number, value3: number) {
        return value1 + value2 + value3;
    }

}