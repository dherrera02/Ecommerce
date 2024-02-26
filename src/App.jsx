import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'


function App() {
  return (
    <div className='App dark:bg-gray-900 h-screen'>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      {/* <CartWidget />       */}
    </div>
  )
}

export default App
