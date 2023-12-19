import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import frontPage from './components/frontPage';
import catalogue from './components/catalogue';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              {/* href changes url */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="create">Create</Nav.Link>
              <Nav.Link href="read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          {/* accessed via components folder and hrefs above */}
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/read' element={<Read></Read>}></Route> {/*displays an array of data / imgs using json*/}
          <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
