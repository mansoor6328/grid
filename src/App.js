import sonylogo from './Images/header.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Cards from './Cards';
import View from './View';

function App() {
  return (
    <div>
    <Navbar bg="dark" variant="dark" >
    <img alt='logo' src={sonylogo} ></img>
    <Button variant="success">Subscribe</Button>
   <Container>
   <Navbar.Brand href="#home">Shark Tank</Navbar.Brand>
   <Nav className="me-auto">
     <Nav.Link href="#home">TV Movies</Nav.Link>
     <Nav.Link href="#features">Features</Nav.Link>
     <Nav.Link href="#pricing">Pricing</Nav.Link>
   </Nav>
   </Container>
 </Navbar> 
<div>
  <Cards count={4}/>
</div>
<div className='contai'>
  <View/>
</div>
  </div> 
  );
}

export default App;
