/**
 * File: index.ts
 * 
 * This file serves as the main entry point for the application,
 * configures core components, applies middleware, and starts the server.
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

import { Hono } from "hono";
import { validateHeaders, validateBody } from "./middleware/validation";
import registerRoutes from "./utilities/routing";

/**
 * 02 - Configure Hono
 * 
 * DESCRIPTION PLACEHOLDER
**/

const app = new Hono().basePath("/api");

app.use("*", validateHeaders);
app.use("*", validateBody);

registerRoutes(app);

// 03 - Export(s)

export default app;