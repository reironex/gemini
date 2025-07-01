export default async function handler(req, res) {
  const { ask } = req.query;
  if (!ask) {
    return res.status(400).json({ reply: "Missing 'ask' query." });
  }

  const apiUrl = `https://kaiz-apis.gleeze.com/api/gemini-pro?ask=${encodeURIComponent(ask)}&uid=1&apikey=c219c951-e6d5-43a0-9b3a-07e037ef88d4`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const reply = data.message || data.response || "No response.";
    res.status(200).json({ reply });
  } catch (err) {
    res.status(500).json({ reply: "Error contacting Gemini API." });
  }
}
