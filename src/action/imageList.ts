"use server";

export  async function getImageListActionServer() {
  const novoOrcamento = await fetch(
    `${process.env.BASE_URL}/image/list`,
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(async (resp) => {
    return await resp.json();
  });

  return novoOrcamento;
}
