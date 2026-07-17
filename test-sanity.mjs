import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'sxcjhgyu',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})

async function test() {
  try {
    const data = await client.fetch('*[_type == "portfolio" && id == $id][0]', { id: 'finance-flow' })
    console.log("SUCCESS:", data?.id)
  } catch (e) {
    console.error("ERROR:", e.message)
  }
}
test()
