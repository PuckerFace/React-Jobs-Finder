import Hero from '../components/hero';
import Cards from '../components/cards';
import Joblistings from '../components/joblistings';
import AllJobs from '../components/allJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Cards />
      <Joblistings isHome={true} />
      <AllJobs />
    </>
  );
};

export default HomePage;

// (
//     <>
//       <Navbar />
//       <Hero />
//       <Cards />
//       <Joblistings />
//       <AllJobs />
//     </>
//   );
