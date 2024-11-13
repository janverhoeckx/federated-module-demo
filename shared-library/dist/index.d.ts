declare class SharedStateService {
    private data;
    constructor();
    getData(): string;
    setData(data: string): void;
}
export declare const stateService: SharedStateService;
export {};
