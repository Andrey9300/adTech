import type {Metadata} from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
    title: 'Ad tech',
    description: 'Ad tech',
}

interface LayoutProps {
    children: React.ReactNode
}

export default function RootLayout({children}: LayoutProps) {
    return (
        <html lang="en">
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicons/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicons/32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicons/16x16.png"
            />
            <link rel="manifest" href="manifest.json"/>
            <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            {children}
            </body>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-MXV3H81NJS"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-MXV3H81NJS');
            </script>
        </html>
    )
}
