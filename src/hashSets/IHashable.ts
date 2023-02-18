export interface IHashable {
  readonly hash: string;
}

export const IHashable = function () {};
IHashable.is = function (object: any): object is IHashable {
  return "hash" in object;
};
