import { Routes , Route } from 'react-router-dom';
import Alert from '../Pages/Alert'
import Analytics from '../Pages/Analytics';
import Areachart from '../Pages/Areachart';
import Calendar from '../Pages/Calendar';
import Chat from '../Pages/Chat';
import Columnchart from '../Pages/Columnchart';
import Ecommerce from '../Pages/Ecommerce';
import Error from '../Pages/Error';
import Feathericon from '../Pages/Feathericon';
import Formcustom from '../Pages/Formcustom';
import Formlayout from '../Pages/Formlayout';
import Formwizard from '../Pages/Formwizard';
import Gredientchart from '../Pages/Gredientchart';
import Linechart from '../Pages/Linechart';
import Login from '../Pages/Login';
import Mail from '../Pages/Mail';
import Modern from '../Pages/Modern';
import Notes from '../Pages/Notes';
import Pricing from '../Pages/Pricing';
import Register from '../Pages/Register';
import Resetpassword from '../Pages/Resetpassword';
import Shop from '../Pages/Shop';
import Timeline from '../Pages/Timeline';
import Tree from '../Pages/Tree';
import Typography from '../Pages/Typography';
import User from '../Pages/User';
import Widgetapp from '../Pages/Widgetapp';
import Widgetfeed from '../Pages/Widgetfeed';
import Layout from '../Components/Layout'
import {useState} from 'react'
import Footer from '../Components/Footer';

const Routers = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)
  return (
    <> 
    <Routes>
    <Route path='/' element={<Layout isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>} />
    <Route path='/alert' element={<Alert />} />
    <Route path='/analytics' element={<Analytics/>} />
    <Route path='/areachart' element={<Areachart />} />
    <Route path='/calendar' element={<Calendar/>} />
    <Route path='/chat' element={<Chat/>} />
    <Route path='/columnchart' element={<Columnchart />} />
    <Route path='/ecommerce' element={<Ecommerce/>} />
    <Route path='/error' element={<Error />} />
    <Route path='/feathericon' element={<Feathericon />} />
    <Route path='/formcustom' element={<Formcustom />} />
    <Route path='/formlayout' element={<Formlayout />} />
    <Route path='/formwizard' element={<Formwizard />} />
    <Route path='/gredientchart' element={<Gredientchart/>} />
    <Route path='/linechart' element={<Linechart />} />
    <Route path='/login' element={<Login />} />
    <Route path='/mail' element={<Mail/>} />
    <Route path='/modern' element={<Modern/>} />
    <Route path='/notes' element={<Notes/>} />
    <Route path='/pricing' element={<Pricing/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/resetpassword' element={<Resetpassword/>} />
    <Route path='/shop' element={<Shop/>} />
    <Route path='/timeline' element={<Timeline/>} />
    <Route path='/tree' element={<Tree/>} />
    <Route path='/typography' element={<Typography/>} />
    <Route path='/user' element={<User/>} />
    <Route path='/widgetapp' element={<Widgetapp/>} />
    <Route path='/widgetfeed' element={<Widgetfeed/>} />
    </Routes>
   <Footer/>
    </>
  )
}

export default Routers