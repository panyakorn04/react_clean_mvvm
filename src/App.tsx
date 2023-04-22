import { BrowserRouter, Routes, Route } from 'react-router-dom'
// @ts-ignore
import ProductList from './presentation/views/product/list/ProductList';
// @ts-ignore
import ProductNew from './presentation/views/product/new/ProductNew';
// @ts-ignore
import ProductDetail from './presentation/views/product/detail/ProductDetail';


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<ProductList />} />
                  <Route path="/product/new" element={<ProductNew />} />
                  <Route path="/product/detail/:id" element={<ProductDetail />} />
              </Routes>

          </div >
      </BrowserRouter>
  )
}

export default App
