export default async function handler(req, res) {
  const { ask } = req.query;

  const response = await fetch(
    `https://kaiz-apis.gleeze.com/api/gemini-pro?ask=${encodeURIComponent(ask)}&uid=1&apikey=c219c951-e6d5-43a0-9b3a-07e037ef88d4`
  );

  const result = await response.json();

  res.status(200).json({
    reply: result.message || result.response || "No response.",
  });
}
