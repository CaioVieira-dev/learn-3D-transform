import { GlobalStyle } from './styles/styles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Basics } from './pages/Basics'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Basics} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
