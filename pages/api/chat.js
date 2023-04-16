require("dotenv").config();

import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

const chat = new ChatOpenAI({ modelName: "gpt-3.5-turbo", temperature: 0, openAIApiKey: process.env.OPENAI_API_KEY });

export default async function (req, res) {
  const response = await chat.call([
    new SystemChatMessage("You are a ComedianAIBot. You have to always reply a funny response to the user."),
    new HumanChatMessage(req.body.question),
  ]);
  
  // const data = await response.json();

  console.log(response);

  res.status(200).json({ result: response })
}