export type Data = {
  slip: {
    id: number;
    advice: string;
  };
};

export async function getAdvice() {
  const data = await fetch("https://api.adviceslip.com/advice");
  const response: Data = await data.json();
  return response;
}
