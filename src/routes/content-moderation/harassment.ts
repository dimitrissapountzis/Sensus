/**
 * File: harassment.ts
 * 
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

import type { Handler, Context } from "hono";
import chatGPT from "../../services/chatGPT"

/**
 * 02 - Handle harassment detection
 * 

 *
 * @param {Context} context - 
 * @returns {Promise<void>} - 
**/

const handler: Handler = async (context: Context): Promise<Response> => {
    const options = {
        instructions: "",
        schema: ""
    };

    const data = await chatGPT(options);

    return context.json({
        status: "success",
        data: data
    });
};

// 03 - Export(s)

export default {
    method: "POST",
    path: "/content-moderation/harassment",
    handler: handler
};