console.log('MODULE LOADED');

class SharedStateService {
    private data: string = "";

    constructor() {
    }

    getData(): string {
        return this.data;
    }

    setData(data: string): void {
        this.data = data;
    }
}

export const stateService = new SharedStateService();
