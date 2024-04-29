import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppLayOut } from '../pages/Apployout/AppLayOut'
import { FindaStore } from '../pages/find store/FindaStore'
import { BuyingGuides } from '../pages/buying guides/BuyingGuides'
import { ContactUs } from '../pages/contact us/ContactUs'
import { Cart } from '../pages/cart/Cart'
import { Login } from '../pages/login/Login'
import { EasyReturn } from '../components/easy return/EasyReturn'
import { ServiceGuarantee } from '../components/service guarantee/ServiceGuarantee'
import { PrivateRoute } from './PrivateRoute'
import { CommonBestdeals } from '../pages/Commoncomponents for rederdata/CommonBestdeals'
import { HomeSinglePages } from '../pages/Single pages/HomeSinglePages'
import { AllData } from '../pages/AllData page/AllData'
import { SmartPhoness } from '../components/Sublistitems/smart phones/SmartPhoness'
import { BuyNow } from '../components/Buy product/BuyNow'



export const AllRoutes = () => {
  return (
  <Routes>
    <Route path='/' element={<AppLayOut/>}/>
    <Route path='/findstore' element={<FindaStore/>}/>
    <Route path='/buyingguides' element={<BuyingGuides/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/easyreturn' element={<EasyReturn/>}/>
    <Route path='/serviceguarantee' element={<ServiceGuarantee/>}/>
    <Route path='/findstore' element={<FindaStore/>}/>
    <Route path='/contactus' element={<ContactUs/>}/>
    <Route path='/commonbestdeals/:category' element={<CommonBestdeals/>}/>
    <Route path='/alldata/:category' element={<AllData/>}/>
    <Route path='/homesinglepages' element={<HomeSinglePages/>}/>
    <Route path='/commonbestdeals/:category/homesinglepages' element={<HomeSinglePages/>}/>
    <Route path='/smartphones' element={<SmartPhoness/>}/>
    <Route path='/buynow' element={<PrivateRoute><BuyNow/></PrivateRoute>}/>


  </Routes>
  )
}
