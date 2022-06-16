import Shop from './Pages/Shop';
import styled from 'styled-components';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <Shop />
  );
}

export default App;
