const express = require ("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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"
});



const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGPT

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 500,
  });
  res.send(completion.choices[0].text);
  });


const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});