interface PingResponse {
  message: string;
}

export async function getMessage(): Promise<PingResponse> {
  return {
    message: 'pong'
  };
}
