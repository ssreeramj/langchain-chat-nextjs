// export default async function (req, res) {

  // const response = await fetch(process.env.LCC_ENDPOINT_URL, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "X-Api-Key": process.env.LCC_TOKEN
  //   },
  //   body: JSON.stringify({
  //     question: req.body.question,
  //     history: req.body.history
  //   }),
  // });

  //   const data = await response.json();

//     const data = {
//       success: "This is a dummy success message",
//       // Other properties as needed
//     }

//     res.status(200).json({ result: data })
// }


import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

const chat = new ChatOpenAI({ temperature: 0, openAIApiKey: "" });

export default async function (req, res) {
  const response = await chat.call([
    new HumanChatMessage(req.body.question),
  ]);
  
  console.log(response);
}