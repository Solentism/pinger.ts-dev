/**
 * Copyright (c) 2022, Kieran Schuler (picturebooks // kieran@k1e.io)
 *
 * https://github.com/picturebooks/pinger.ts
 *
 * This code is subject to the BSD 3-Clause "New" or "Revised" License authored by Regents of the University of California.
 * Information about this license can be found in the LICENSE.md file.
 
 * Ping a website
 * @param {website} The website to ping
 * @param {interval} The interval per ping (in milli-seconds)
 * @param {logging} Enable logging
 * @param {flipDM} Flip the month/day to day/month in the log
 * @param {noURLFix} If you're pinging a non-http/https url, set this to true
 * @example
 * const pinger = require("pinger.ts")
 * pinger.ping("k1e.io", 60000, true)
 *
 * Start a webserver
 * @param {port} The port in which you want the webserver to run on
 * @param {content} The content to display on the page, if no content is provided, it will be autofilled.
 * @param {flipDM} Flip the date and the month to other formats (American & British)
 * @example
 * const pinger= require("pinger.ts")
 * pinger.webserver(9005, "Welcome!", true)
 *
 */
export declare const ping: (url: string, interval?: number, logging?: boolean, flipDM?: boolean, noURLFix?: boolean) => Promise<void | ReturnType<typeof setInterval>>;
export declare const webserver: (port: number | string, content: any, flipDM?: boolean) => Promise<void>;
export declare const dping: (webhooktoken: string, webhookid: string | number, url: string, interval: number, flipDM?: boolean, noURLFix?: boolean) => Promise<void | ReturnType<typeof setInterval>>;
export declare class Group {
    name: string;
    pingers: Map<number, {
        name: string;
        id: number;
        ping: (url: string, interval: number, logging: boolean, flipDM: boolean, noURLFix: boolean) => Promise<void | ReturnType<typeof setInterval>>;
        started: boolean;
        start: () => void;
        config: {
            url: string;
            interval: number;
            logging: boolean;
            flipDM: boolean;
            noURLFix: boolean;
        };
        stop: () => void;
    }>;
    constructor(name?: string);
    startAll(): void;
    add(url: string, interval: number, logging?: boolean, flipDM?: boolean, noURLFix?: boolean): {
        name: any;
        id: number;
        config: {
            url: string;
            interval: number;
            logging: boolean;
            flipDM: boolean;
            noURLFix: boolean;
        };
        ping: (url: string, interval: number, logging?: boolean, flipDM?: boolean, noURLFix?: boolean) => Promise<void | ReturnType<typeof setInterval>>;
        interval: any;
        stop: any;
        started: boolean;
        start: any;
    };
    addStart(url: string, interval: number, logging?: boolean, flipDM?: boolean, noURLFix?: boolean): void;
    stop(id?: any): void;
}
