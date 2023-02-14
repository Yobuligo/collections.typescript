export interface IHashable {
    readonly hash: string;
}
export declare const IHashable: {
    (): void;
    is(object: any): object is IHashable;
};
