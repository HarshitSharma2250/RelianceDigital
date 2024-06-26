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
    <Route path='/RelianceDigital/' element={<AppLayOut/>}/>
    <Route path='/RelianceDigital/findstore' element={<FindaStore/>}/>
    <Route path='/RelianceDigital/buyingguides' element={<BuyingGuides/>}/>
    <Route path='/RelianceDigital/contactus' element={<ContactUs/>}/>
    <Route path='/RelianceDigital/cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>
    <Route path='/RelianceDigital/login' element={<Login/>}/>
    <Route path='/RelianceDigital/easyreturn' element={<EasyReturn/>}/>
    <Route path='/RelianceDigital/serviceguarantee' element={<ServiceGuarantee/>}/>
    <Route path='/RelianceDigital/findstore' element={<FindaStore/>}/>
    <Route path='/RelianceDigital/contactus' element={<ContactUs/>}/>
    <Route path='/RelianceDigital/commonbestdeals/:category' element={<CommonBestdeals/>}/>
    <Route path='/RelianceDigital/alldata/:category' element={<AllData/>}/>
    <Route path='/RelianceDigital/homesinglepages' element={<HomeSinglePages/>}/>
    <Route path='/RelianceDigital/commonbestdeals/:category/homesinglepages' element={<HomeSinglePages/>}/>
    <Route path='/RelianceDigital/homesinglepages' element={<HomeSinglePages/>}/>
    <Route path='/RelianceDigital/alldata/AllData/homesinglepages' element={<HomeSinglePages/>}/>
    <Route path='/RelianceDigital/smartphones' element={<SmartPhoness/>}/>
    <Route path='/RelianceDigital/buynow' element={<PrivateRoute><BuyNow/></PrivateRoute>}/>


  </Routes>
  )
}
