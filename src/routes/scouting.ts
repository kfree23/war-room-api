import { Router } from 'express';

const router = Router();



router.post("/summary", async (req, res) => {
    const { ppg, rpg, apg, fieldGoalPercentage, height, weight, position, name } = req.body;
    const prompt = `You are an NBA scout. Based on the following player stats, write a 2-3 sentence tendency summary that a coach or GM would find useful.

Player: ${name}
Position: ${position}
Height: ${height}
Weight: ${weight}
PPG: ${ppg}
RPG: ${rpg}
APG: ${apg}
FG%: ${fieldGoalPercentage}

Write the summary in a professional scouting tone. Focus on tendencies, strengths, and role fit.`;

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.ANTHROPIC_API_KEY!,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-6',
                max_tokens: 1000,
                messages: [{ role: 'user', content: prompt }]
            })
        })

        if(!response.ok) {
            throw new Error(`Something went wrong ${response.status}`)
        }

        const data = await response.json();
        const summary = data.content[0].text;
        res.json({ summary })
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'error'})
    }
})

export default router;