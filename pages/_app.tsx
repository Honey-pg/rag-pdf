import '../styles/globals.css';
import ErrorBoundary from '../components/ErrorBoundary';
import type { AppProps } from 'next/app';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@clerk/themes';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ThemeProvider>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </ThemeProvider>
    </ClerkProvider>
  );
}
