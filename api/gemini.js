export default async function handler(req, res) {
  const { ask } = req.query;

  if (!ask) return res.status(400).json({ reply: "Missing 'ask' parameter." });

  const url = `https://kaiz-apis.gleeze.com/api/gemini-flash-2.0?q=${encodeURIComponent(ask)}&uid=1&imageUrl=&apikey=0f5c8909-5cf9-4bb0-a099-da2fd1d45a6e`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Update this based on actual response structure
    const reply = data.message || data.response || data.result || JSON.stringify(data);
    res.status(200).json({ reply });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ reply: "⚠️ Error fetching from Gemini Flash API." });
  }
}
