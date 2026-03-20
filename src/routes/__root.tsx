import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'
import { AppNavbar } from '@/components/layouts/AppNavbar'
import { AppFooter } from '@/components/layouts/AppFooter'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Smart Quartrix | Business Consulting',
      },
      {
        name: 'description',
        content:
          'Smart Quartrix — bridging technology and business through expert hardware and software consulting.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <AppNavbar />
        {children}
        <AppFooter />
        <Scripts />
      </body>
    </html>
  )
}
