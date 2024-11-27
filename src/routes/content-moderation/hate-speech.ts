import type { Handler, Context } from "hono";

const handler: Handler = async (context: Context): Promise<Response> => {
    return context.json({
        status: "success",
        data: {
            Hello: "World"
        }
    });
};

export default {
    method: "GET",
    path: "/content-moderation/hate-speech",
    handler: handler
};