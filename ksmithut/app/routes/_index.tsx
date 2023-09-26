import type {
  MetaFunction,
  LoaderFunctionArgs,
  ActionFunctionArgs
} from '@remix-run/node'
import { useLoaderData, useActionData } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'App Title' },
    { name: 'description', content: 'App Description' }
  ]
}

export async function action({ params, request }: ActionFunctionArgs) {
  await request.formData()
  return {}
}

export async function loader({ params }: LoaderFunctionArgs) {
  return {}
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()
  console.log(data, actionData)
  return <h1 className="text-3xl font-bold">Hello World</h1>
}
