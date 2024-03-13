const SITE = `http://localhost:3000`

export const getApi = async <T>(url: string): Promise<T> => {
  const response = await fetch(`${SITE}${url}`)
  return await response.json()
}

export const postApi = async (url: string, body: object, method = "POST") => {
  const response = await fetch(`${SITE}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  return await response.json()
}

export const putApi = async (url: string, body: object) => {
  await postApi(url, body, "PUT")
}
