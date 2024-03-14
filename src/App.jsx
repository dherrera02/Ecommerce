import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
//import CartWidget from './components/CartWidget/CartWidget'
//import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App dark:bg-gray-900 h-screen'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route path='/category/:categoryId' element={ItemListContainer} greeting={'Productos de la categoría:'}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
