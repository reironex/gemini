export default async function handler(req, res) {
  const { ask } = req.query;
  if (!ask) return res.status(400).json({ reply: "Missing prompt." });

  const url = `https://kaiz-apis.gleeze.com/api/gemini-pro?ask=${encodeURIComponent(ask)}&uid=1&apikey=c219c951-e6d5-43a0-9b3a-07e037ef88d4`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("🧪 Gemini raw response:", data); // for debugging logs

    res.status(200).json({
      reply: data.message || data.response || JSON.stringify(data),
    });
  } catch (error) {
    console.error("❌ API error:", error);
    res.status(500).json({ reply: "API error occurred." });
  }
}
