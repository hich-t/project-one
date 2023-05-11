import App from './App';
import Tokyo from "./TokyoComponents/Tokyo"
import { Routes, Route } from 'react-router-dom';

const Router = () => {
    return (
       <Routes>
              <Route path="/" element={<App />} />
            <Route path="/tokyo" element={<Tokyo />} />
       </Routes>
    )
}

export default Router;