import { GlobalStyle } from './styles/styles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Basics } from './pages/Basics'
import { FunctionsOverview } from './pages/FunctionsOverview'
import { FlipCard } from './pages/FlipCard'
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Basics} />
          <Route exact path="/functions" component={FunctionsOverview} />
          <Route exact path="/animation/flip-card" component={FlipCard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
