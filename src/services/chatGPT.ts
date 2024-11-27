import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: env.YOUR_SECRET_NAME
});

const chatGPT = async () => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-4o-mini",
  });

  return completion.choices[0];
}

export default chatGPT;