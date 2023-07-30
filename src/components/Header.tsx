import Navbar from './Navbar';
import Home from './Home';
import FullContainer from './utils/FullContainer';

function Header() {
  return (
    <FullContainer>
        <Navbar />
        <Home />
    </FullContainer>
  )
}

export default Header;