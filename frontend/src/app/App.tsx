import { Suspense } from 'react'
import { theme } from '../theme'
import { Outlet } from 'react-router-dom'
import {
  CircularProgress,
  Container,
  ErrorContainer,
  Loader,
  OutletStyle,
} from './App.style'
import { ThemeProvider } from 'styled-components'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary'
import { Sidebar } from '@/widgets/sidebar/Sidebar'

const FallbackUI: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => (
  <ErrorContainer>
    <p>Что-то пошло не так: {error.message}</p>
    <button onClick={resetErrorBoundary}>Попробовать снова</button>
  </ErrorContainer>
)

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackUI}>
      <ThemeProvider theme={theme}>
        <Container>
          <Sidebar />
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
