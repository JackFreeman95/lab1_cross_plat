import { Cruise } from "./extends";
import { Tanker } from "./extends";

var sheep1: Cruise = new Cruise('Монако', 'круїзний', 'Леон', 3, 'Козак Василь', 150, '12.06.22', 4000, 32, 6, 500)
var sheep2: Tanker = new Tanker('Летючий Голандець', 'танкер', 'Боснон', 3, 'Козак Василь', 15, '22.06.22', 50000, 40, 'посилки aliexpress', 600000)



console.log(
            'Назва - ' + sheep1.name + '\n' +
            'Тип - ' + sheep1.type + '\n' +
            'Порт - ' + sheep1.port + '\n' +
            'Водотонажність - ' + sheep1.waterline + '\n' +
            'Назва капітана - ' + sheep1.capName + '\n' +
            'Кількість персоналу - ' + sheep1.workerNum + '\n' +
            'Дата виходу - ' + sheep1.date + '\n' +
            'HP - ' + sheep1.power + '\n' +
            'Зміна швидкості - ' + sheep1.speed_change + '\n' +
            'Вільні містя - ' + sheep1.freeSpace + '\n' +
            'Заняті містя - ' + sheep1.notSpace + '\n'
          )

console.log(
            'Назва - ' + sheep2.name + '\n' +
            'Тип - ' + sheep2.type + '\n' +
            'Порт - ' + sheep2.port + '\n' +
            'Водотонажність - ' + sheep2.waterline + '\n' +
            'Назва капітана - ' + sheep2.capName + '\n' +
            'Кількість персоналу - ' + sheep2.workerNum + '\n' +
            'Дата виходу - ' + sheep2.date + '\n' +
            'HP - ' + sheep2.power + '\n' +
            'Зміна швидкості - ' + sheep2.speed_change + '\n' +
            'Тип вантажу - ' + sheep2.typeLoads + '\n' +
            'Вантажоємність - ' + sheep2.loadCapacity + ' тон' + '\n'
          )
