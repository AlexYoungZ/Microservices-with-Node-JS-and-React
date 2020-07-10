import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser}></Header>
      <div className="container">
        <Component currentUser={currentUser} {...pageProps}></Component>
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async (appContent) => {
  const client = buildClient(appContent.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContent.Component.getInitialProps) {
    pageProps = await appContent.Component.getInitialProps(
      appContent.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
