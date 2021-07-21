import { GlobalStyle } from './styles/styles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Basics } from './pages/Basics'
import { FunctionsOverview } from './pages/FunctionsOverview'
import { FlipCard } from './pages/FlipCard'
import { CubeSpin } from './pages/CubeSpin'
import { BoxSpin } from './pages/BoxSpin'
import { Carousel } from './pages/Carousel'

import { Header } from './components/Header'
import { Container } from './components/Container'

import { NavContextProvider } from './contexts/NavContext'
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <NavContextProvider>

          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Basics} />
              <Route exact path="/functions" component={FunctionsOverview} />
              <Route exact path="/animation/flip-card" component={FlipCard} />
              <Route exact path="/animation/cube-spin" component={CubeSpin} />
              <Route exact path="/animation/box-spin" component={BoxSpin} />
              <Route exact path="/animation/carousel" component={Carousel} />
            </Switch>
          </BrowserRouter>
        </NavContextProvider>
      </Container>
    </div>
  );
}

export default App;
