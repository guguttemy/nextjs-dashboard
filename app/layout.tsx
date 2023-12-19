// #1-1. Styling: 전역 CSS 적용
import '@/app/ui/global.css'

// DefaultLayout.jsx
export default function RootLayout({children,}: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

/*
   App.jsx

   <DefaultLayout>
    {children}
   </DefaultLayout>

*/