import './App.css';
import { UserProvider, useUser } from './UserContext';

const LoggedInUser = () => {
  const { user } = useUser();
  return (
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const { user } = useUser();
  return (
    <div>
      <h2>What is Lorem ipsum?</h2>
      <p>
        Lorem ipsum dolor sit amet. Vel ducimus amet qui exercitationem delectus
        ut earum quibusdam qui odio nulla. Aut magni porro id eaque consequatur
        est repellat tenetur quo doloribus ratione eos quisquam deleniti et
        laborum temporibus. Est quisquam laudantium rem eligendi delectus et
        nisi illum sit voluptatibus rerum non atque ducimus. Et officiis error
        sit accusamus dolorem et quae quidem ad eveniet quia? Lorem ipsum dolor
        sit amet. Vel ducimus amet qui exercitationem delectus ut earum
        quibusdam qui odio nulla. Aut magni porro id eaque consequatur est
        repellat tenetur quo doloribus ratione eos quisquam deleniti et laborum
        temporibus. Est quisquam laudantium rem eligendi delectus et nisi illum
        sit voluptatibus rerum non atque ducimus. Et officiis error sit
        accusamus dolorem et quae quidem ad eveniet quia?
      </p>
      <p>Written by {user.name}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default Root;
