import { IShip } from "./main";

export class Cruise extends IShip{
    constructor(
      name: string,
      type: string,
      port: string,
      waterline: number,
      capName: string,
      workerNum: number,
      date: string,
      power: number,
      speed_change: number,
      freeSpace: number,
      notSpace: number)
    {
        super(name, type, port, waterline, capName, workerNum, date, power, speed_change);
        this.freeSpace = freeSpace;
        this.notSpace = notSpace;
    }
    freeSpace: number;
    notSpace: number;
}

export class Tanker extends IShip{
    constructor(
      name: string,
      type: string,
      port: string,
      waterline: number,
      capName: string,
      workerNum: number,
      date: string,
      power: number,
      speed_change: number,
      typeLoads: string,
      loadCapacity: number)
    {
        super(name, type, port, waterline, capName, workerNum, date, power, speed_change);
        this.typeLoads = typeLoads;
        this.loadCapacity = loadCapacity;
    }
    typeLoads: string;
    loadCapacity: number;
}
