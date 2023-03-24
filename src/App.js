import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const style = {
  margin: '1rem', 
  padding: '1rem', 
  border: '2px solid blue',
}

function Home() {
  const nav = useNavigate();
  const handler = () => {
    console.log('Redirecting to login!');
    nav('/login');
  }

  return(
    <div style={style}>
      <h2>Hello, Ashish!</h2>
      <p>Not Ashish? &nbsp;<button onClick={handler}>Click Here!</button></p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <h1>React Router Navigate</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="login" element={<h2 style={style}>Login Form</h2>}/>
      </Routes>
    </BrowserRouter>
  );
}
