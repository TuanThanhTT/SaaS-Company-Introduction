import { useMutation } from "@tanstack/react-query";
import { sendMessageToRasa } from "../api/chatApi";
import type { SendMessagePayload } from "../api/chatApi";
import type { RasaResponse } from "../schemas/chatSchema";

export const useSendMessage = (
  onSuccess?: (data: RasaResponse[]) => void,
  onError?: (error: unknown) => void
) => {
  return useMutation<RasaResponse[], unknown, SendMessagePayload>({
    mutationFn: sendMessageToRasa,
    onSuccess,
    onError,
  });
};
