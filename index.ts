type PingPayload = { ping: number };
type BatteryPayload = { voltage: number };

type PingCb = (payload: PingPayload) => void;
type BatteryCb = (payload: BatteryPayload) => void;

type Events = {
  ping: PingCb;
  battery: BatteryCb;
};
type OnInterface = <T extends keyof Events>(event: T, cb: Events[T]) => void;

///

let pingCb: PingCb = (payload) => void payload.ping;
let batteryCb: BatteryCb = (payload) => void payload.voltage;

const on: OnInterface = function (event, callback) {
  if (event === "ping") pingCb = callback;
  if (event === "battery") batteryCb = callback;
};

//const mock = {
//  _voltage: 10,
//  _random: (min: number, max: number) => {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//  },
//  voltage: () => mock._voltage++,
//  ping: () => mock._random(50, 400),
//};
//
//setInterval(() => pingCb({ ping: mock.ping() }), 5_000);
//setInterval(() => batteryCb({ voltage: mock.voltage() }), 7_000);

on("ping", ({ ping }) => void console.log(`ping: ${ping} ms`));
on("battery", ({ voltage }) => void console.log(`voltage: ${voltage} volt`));
// on("")
// on('battery', ({ ping }) => void console.log(`voltage: ${ping} volt`));
