import FilterBar from './FilterBar';
import FilterModal from './FilterModal';
import PropertyCard from './PropertyCard';
import NoProperty from './NoProperty';
import { base_path } from './utils.js';

const App = () => {
  return (
    <>
      <div className="page-container">
        <FilterBar />

        <PropertyCard />
      </div>

      <FilterModal />
    </>
  );
}

export default App;
