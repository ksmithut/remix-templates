import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'App Title' },
    { name: 'description', content: 'App Description' }
  ]
}

export default function Index() {
  return <h1 className="text-3xl font-bold">Hello World</h1>
}
