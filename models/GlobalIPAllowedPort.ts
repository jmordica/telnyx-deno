/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GlobalIPAllowedPort = {
    /**
     * Identifies the resource.
     */
    readonly id?: string;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * The Global IP Protocol code.
     */
    readonly protocol_code?: string;
    /**
     * A name for the Global IP ports range.
     */
    name?: string;
    /**
     * First port of a range.
     */
    first_port?: number;
    /**
     * Last port of a range.
     */
    last_port?: number;
};

