import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// redux...
import { Provider } from 'react-redux';
import store from '@redux/store';

// router...
import { routes, privateRoutes } from '@app/routes';
import history from '@app/history';
import Spinner from '@components/spinner';
import '@less/main.less';
import LayoutApp from './components/layout-app';
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
            <LayoutApp>
              {privateRoutes.map(({ path, exact, name, component }, index) => (
                <Route
                  path={path}
                  exact={exact}
                  name={name}
                  component={component}
                  key={index}
                />
              ))}
            </LayoutApp>
          </Switch>
        </React.Suspense>
      </Router>
    </Provider>
  );
}

export default App;
