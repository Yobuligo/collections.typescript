export function repeat(times: number, block: (index: number) => void) {
  for (let index = 0; index < times; index++) {
    block(index);
  }
}
