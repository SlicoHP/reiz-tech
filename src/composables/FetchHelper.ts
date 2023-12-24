type FetchOptions = {
  method?: string
  headers?: Record<string, string>
  body?: Record<string, any> | string
}

export async function useFetchHelper<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const response = await fetch(url, {
    method: options?.method || 'GET',
    headers: options?.headers || {},
    body: options?.body ? JSON.stringify(options.body) : null
  })

  const data = response.json()

  if (!response.ok) {
    throw new Error('Failed to fetch.')
  }

  return data
}
