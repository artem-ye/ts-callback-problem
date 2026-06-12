//type Args = [a: number, b: { k: string }];
//
//function foo(...args: Args) {
//  const [a, b] = args;
//}
//
//type ThermalSettings = {
//  x: string,
//  y: string
//}
//console.log(Bun.argv.length);
//const key = Bun.argv[2];
//console.log({ key });

function foo(p: string) {
  return p;
}

foo(1);
