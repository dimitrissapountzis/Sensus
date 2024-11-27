/**
 * File: routing.ts
 * 
 * This utility dynamically registers API routes and assigns HTTP methods and handlers,
 * simplifying the route management process.
 * 
 * Created: October 22nd, 2024
 * Created by: Dimitris Sapountzis <dimitris.sapountzis@scaleflame.com>
 * 
 * Last modified: November 5th, 2024
 * Modified by: Dimitris Sapountzis
 * 
 * Copyright: (c) 2024 ScaleFlame P.C.C. All Rights Reserved.
**/

// 01 - Import(s)

import type { Hono } from "hono";
import routes from "../routes";

/**
 * 02 - Register API routes
 * 
 * This function iterates through a list of predefined routes, assigning the
 * appropriate HTTP method and handler to each API route.
 *
 * @param {Hono} app - The Hono instance where routes will be registered.
 * @returns {void} - Executes route registration without returning a value.
 * @throws {Error} - An error that will be thrown if an unsupported HTTP method is encountered.
**/

const registerRoutes = (app: Hono): void => {
    for (const route of routes) {
        const { method, path, handler } = route;

        switch (method) {
            case "OPTIONS":
                app.options(path, handler);
                break;
            case "GET":
                app.get(path, handler);
                break;
            case "POST":
                app.post(path, handler);
                break;
            case "PUT":
                app.put(path, handler);
                break;
            case "PATCH":
                app.patch(path, handler);
                break;
            case "DELETE":
                app.delete(path, handler);
                break;
            default:
                throw new Error();
        };
    };
};

// 03 - Export(s)

export default registerRoutes;