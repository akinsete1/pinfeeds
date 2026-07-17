import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'sxcjhgyu',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})

async function test() {
  try {
    const data = await client.fetch(`*[_type == "portfolio"] | order(year desc) { id }`)
    console.log("ITEMS:", data)
  } catch (e) {
    console.error("ERROR:", e.message)
  }
}
test()
