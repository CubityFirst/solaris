export class ValidationError extends Error {
    statusCode: number;
    hasCustomMessage: boolean;

    constructor(err: string | string[], statusCode?: number, hasCustomMessage?: boolean) {
        super(err as any);

        this.statusCode = statusCode || 400;
        this.hasCustomMessage = hasCustomMessage || false;

        // necessary because JS is weird.

        Object.setPrototypeOf(this, ValidationError.prototype);

        this.name = "ValidationError";
    }
};
