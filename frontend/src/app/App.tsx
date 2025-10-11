import { Suspense } from 'react'
import { theme } from '../theme'
import { Outlet } from 'react-router-dom'
import { CircularProgress, Container, Loader, OutletStyle } from './App.style'
import { ThemeProvider } from 'styled-components'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary'
import { Header } from '@/widgets/header/Header'

const FallbackUI: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => (
  <div>
    <p>Что-то пошло не так: {error.message}</p>
    <button onClick={resetErrorBoundary}>Попробовать снова</button>
  </div>
)

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackUI}>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Suspense
            fallback={
              <Loader>
                <CircularProgress />
              </Loader>
            }
          >
            <OutletStyle>
              <Outlet />
            </OutletStyle>
          </Suspense>
        </Container>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
