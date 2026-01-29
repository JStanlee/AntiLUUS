
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAJOjJH7JByAMDf4nH3gJx15_GcRQvGo-A";

async function checkModels() {
    console.log("Checking available models for key ending in ...RQvGo-A");
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.models) {
            console.log("Successfully retrieved models:");
            data.models.forEach(m => {
                if (m.name.includes("generateContent")) {
                    console.log(`- ${m.name.replace('models/', '')}`);
                } else if (m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent")) {
                    console.log(`- ${m.name.replace('models/', '')}`);
                }
            });
        } else {
            console.log("No models found or error structure:", JSON.stringify(data, null, 2));
        }
    } catch (e) {
        console.error("Fetch error:", e);
    }
}

checkModels();
