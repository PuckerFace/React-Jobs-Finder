import Box from './box';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Box>
            <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            <Link
              to="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </Link>
          </Box>
          <Box bg="bg-purple-100">
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <Link
              to="/add-job.html"
              className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600"
            >
              Add Job
            </Link>
          </Box>
        </div>
      </div>
    </section>
  );
};
export default Cards;
