class IShip{
    constructor(
      name: string,
      type: string,
      port: string,
      waterline: number,
      capName: string,
      workerNum: number,
      date: string,
      power: number,
      speed_change: number
    )
    {
        this.name = name;
        this.type = type;
        this.port = port;
        this.waterline = waterline;
        this.capName = capName;
        this.workerNum = workerNum;
        this.date = date;
        this.power = power;
        this.speed_change = speed_change;
    }
    name: string;
    type: string;
    port: string;
    waterline: number;
    capName: string;
    workerNum: number;
    date: string;
    power: number;
    speed_change: number;
}

export {IShip}
