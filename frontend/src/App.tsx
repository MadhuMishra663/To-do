
import Home from './Home'
import backgroundImage from './assets/backgroundImage/todo.avif'

function App() {

  return (
    <>
     <div
       style={{
        backgroundImage:`url(${backgroundImage})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat', 
         minHeight: '100vh',
       }}
     >
      <Home/>
     </div>
    </>
  )
}

export default App
