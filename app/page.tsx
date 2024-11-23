import BigDeal from '@/components/Home/BigDeal';
import Hero from '../components/Home/Hero';
import NewArrival from '../components/Home/NewArrival';
import MenCollection from '../components/Home/MenCollection';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <NewArrival />
      <BigDeal />
      <MenCollection />
    </div>
  );
};

export default Homepage;