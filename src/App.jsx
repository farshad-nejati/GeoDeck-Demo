import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// redux...
// import { Provider } from 'react-redux';
// import store from '@redux/store';

// GraphQL with appolo ..
import client from '@app/client';
import { ApolloProvider } from '@apollo/client';


// router...
import { routes, privateRoutes } from '@app/routes';
import history from '@app/history';
import Spinner from '@components/spinner';
import LayoutApp from './components/layout-app';
import '@less/main.less';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const  App = () => {
  return (
    <ApolloProvider client={client}>
    {/* <Provider store={store}> //redux store */}
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
    </ApolloProvider>
    // </Provider>
  );
}

export default App;
