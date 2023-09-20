import HomePage from '../pages/Home';
import EditEventPage from '../pages/EditEvent';
import NewEventPage from '../pages/NewEvent';
import ErrorPage from '../pages/Error';
import EventsRootLayout from '../pages/EventsRoot';
import RootLayout from '../pages/Root';
import Authentication, { action as authAction } from '../pages/Authentication';
import EventsPage, { loader as eventsLoader } from '../pages/Events';
import { createBrowserRouter } from 'react-router-dom';
import { tokenLoader, checkAuthLoader } from './auth/auth';
import { action as manipulateEventAction } from '../components/events/EventForm';
import { action as logoutAction } from '../pages/Logout';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from '../pages/EventDetail';
import LandingPage from '../pages/Landing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    id: 'root',
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'landing', element: <LandingPage /> },
      { path: 'home', element: <HomePage /> },
      { path: 'auth', element: <Authentication />, action: authAction },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);
