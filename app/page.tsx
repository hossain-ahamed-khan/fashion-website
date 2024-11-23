import BigDeal from '@/components/Home/BigDeal';
import Hero from '../components/Home/Hero';
import NewArrival from '../components/Home/NewArrival';
import MenCollection from '../components/Home/MenCollection';
import WomenCollection from '@/components/Home/WomenCollection';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <NewArrival />
      <BigDeal />
      <MenCollection />
      <WomenCollection />
    </div>
  );
};

export default Homepage;