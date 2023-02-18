export class HashGenerator {
  private index: number = -1;

  generate(): string {
    this.index++;
    return this.index.toString();
  }
}
