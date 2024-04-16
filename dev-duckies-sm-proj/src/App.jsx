import './App.css'
import './index.css'
import NavbarRouter from './app-wide-components/Navbar/Router/NavbarRouter'
import Post from './app-wide-components/post'

function App() {
  return (
    <>
      <NavbarRouter>

      </NavbarRouter>
      <Post 
        name = {'Jose Lema'}
        date = {'2024-4-16'}
        time = {'4:00pm'}
        postContent = {'Testing 1 2 3'}
      />
      <Post 
        name = {'John Doe'}
        date = {'2024-4-17'}
        time = {'4:00pm'}
        postContent = {'1 2 3'}
      />
      <Post 
        name = {'Jane Doe'}
        date = {'2024-4-15'}
        time = {'4:00pm'}
        postContent = {'3'}
      />
    </>
  )
}

export default App
