import React from 'react'
import { Links, Meta, Outlet, Scripts } from '@remix-run/react'
import tailwind from './tailwind.css'

/** @type {import('@remix-run/node').LinksFunction} */
export function links() {
  return [{ rel: 'stylesheet', href: tailwind }]
}

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
