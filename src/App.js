import './App.css';


function Header(){
  return(
    <>
    <h2>Header component</h2>
    <Title/>
    <hr></hr>
    </>
  ) 
}

function Footer(){
  return(
    <>
    <h2>Footer component</h2>
    <Title/>
    <hr></hr>
    </>
  ) 
}


function Content(){
  return(
    <>
      <p>Content 1</p>
      <p>Content 2</p>
      <p>Content 3</p>
      <Title/>
      <hr></hr>
    </>
  ) 
}


function Title(){
  return(
    <h6>little text</h6>
  ) 
}



function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
