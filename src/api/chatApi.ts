import axios from "axios";
import { RasaResponseSchema } from "../schemas/chatSchema";
import { z } from "zod";

// const RASA_API = "http://localhost:5005/webhooks/rest/webhook";
const RASA_API = localStorage.getItem("RASA_API") || "http://localhost:5005/webhooks/rest/webhook";

export interface SendMessagePayload {
  sender: string;
  message: string;
}

export const sendMessageToRasa = async (payload: SendMessagePayload) => {
  const res = await axios.post(RASA_API, payload);

  // validate với zod
  const parsed = z.array(RasaResponseSchema).safeParse(res.data);

  if (!parsed.success) {
    console.error("❌ Lỗi validate schema:", parsed.error);
    throw new Error("Response từ Rasa không đúng schema");
  }

  return parsed.data;
};
