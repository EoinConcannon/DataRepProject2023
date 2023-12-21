import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FrontPage from './components/frontPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalogue from './components/catalogue';
import EditCatalogue from './components/editCatalogue';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar bg="warning" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="/">NotAmazon</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="catalogue">Catalogue</Nav.Link>
              <Nav.Link href="editCatalogue">Edit Catalogue</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<FrontPage></FrontPage>}></Route>
          <Route path='/catalogue' element={<Catalogue></Catalogue>}></Route>
          <Route path='/editCatalogue' element={<EditCatalogue></EditCatalogue>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
