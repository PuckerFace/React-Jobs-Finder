import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import HomePage from './pages/homePage';
import MainLayout from './layouts/mainLayout';
import JobsPage from './pages/jobsPage';
import NotFoundPage from './pages/notFoundPage';
import SingleJobPage, { jobLoader } from './pages/singleJobPage';
import AddJobsPage from './pages/addJobsPage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobsPage />} />
      <Route path="/jobs/:id" element={<SingleJobPage />} loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
