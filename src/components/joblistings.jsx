import { useState, useEffect } from 'react';
import Joblist from './joblist';
import Spinner from '../components/spinner';

const Joblistings = ({ isHome = false }) => {
  // const jobListing = isHome ? jobs.slice(0, 3) : jobs;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        setError(error);

        console.log('error fetching data', error);
      } finally {
        console.log('poop');

        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => {
              return <Joblist key={job.id} job={job} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Joblistings;
