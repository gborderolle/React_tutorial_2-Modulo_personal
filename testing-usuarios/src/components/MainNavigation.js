import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {!token && ( // Logueado NO_OK
            <>
              <li>
                <NavLink
                  to='/'
                  className='hover-effect'
                  activeClassName={classes.active}
                >
                  Landing
                </NavLink>

              </li>
              <li>
                <NavLink
                  to='/auth?mode=login'
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
          {token && ( // Logueado OK
            <>
              <li>
                <NavLink
                  to='/home'
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/events'
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Eventos
                </NavLink>
              </li>
              <li>
                <Form action='/logout' method='post'>
                  <button>Logout</button>
                </Form>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
