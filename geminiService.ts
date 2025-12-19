
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFitnessRecommendation = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a professional fitness consultant at 'FitForge'. 
      A user is asking: "${userPrompt}". 
      Provide a concise (2-3 sentences) recommendation on what type of workout or course they should try. 
      Be encouraging and professional.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 150,
      },
    });
    return response.text || "I recommend starting with a balanced HIIT session to boost your metabolism!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our trainers are ready to help you reach your goals. Try exploring our strength courses today!";
  }
};
