import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAJOjJH7JByAMDf4nH3gJx15_GcRQvGo-A";

async function listModels() {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
        const data = await response.json();

        if (data.error) {
            console.error("API Error:", data.error);
        } else {
            console.log("Available Models:");
            console.log(JSON.stringify(data.models, null, 2));
        }
    } catch (error) {
        console.error("Network Error:", error);
    }
}

listModels();
