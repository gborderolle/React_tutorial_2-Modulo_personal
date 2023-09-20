import { Outlet } from 'react-router-dom';
import { useRouteLoaderData, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import EventsNavigation from '../components/events/EventsNavigation';

function EventsRootLayout() {
  const token = useRouteLoaderData('root');
  const navigate = useNavigate();

  // check si está logueado
  useEffect(() => {
    if (!token) {
      navigate('/auth');
    }
  }, [token]);

  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
