import { test, expect, describe, vi } from 'vitest'
import { useFetchHelper } from '@/composables/FetchHelper'

describe('FetchHelper', () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ data: 'Mocked Data' })
    })
  )

  test('Fetches data successfully', async () => {
    const result = await useFetchHelper('/products')
    expect(result.data).toBe('Mocked Data')
  })

  test('Throws error if response not ok', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve(),
      })
    );

    await expect(useFetchHelper('/products')).rejects.toThrow('Failed to fetch.');
  })
})
