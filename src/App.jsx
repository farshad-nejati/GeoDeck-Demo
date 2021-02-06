import React from 'react';

// redux...
import { Provider } from 'react-redux';
import store from './store/store';

// router...
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import history from './history';
import Spinner from 'components/spinner';
import '@less/main.less';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <React.Suspense fallback={<Spinner />}>
          <Switch>
            {routes.map(({ path, exact, name, component }, index) => (
              <Route
                path={path}
                exact={exact}
                name={name}
                component={component}
                key={index}
              />
            ))}
          </Switch>
        </React.Suspense>
      </Router>
    </Provider>
  );
}

export default App;
