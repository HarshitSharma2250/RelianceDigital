import React from 'react'
// import { List } from '../../components/LIst of products/List'
import styles from './AppLayOut.module.css'
import { ImageCarociel } from '../../components/TopimageCarocel/ImageCarociel'
import { AirCoolar } from '../../components/Best deals components/AirCooler/AirCoolar'
import { Acs } from '../../components/Best deals components/Acs/Acs'
import { HonorAirbudsPic } from '../../components/Honor x3 lite airbuds/HonorAirbudsPic'
import { MobileDeals } from '../../components/Best deals components/TopDealsMobiles/MobileDeals'
import { BestSellingAudoAccess } from '../../components/Best deals components/best selling audo and accesserios/BestSellingAudoAccess'
import { BestSellingCanonPrinters } from '../../components/Best deals components/best selling canon printers/BestSellingCanonPrinters'
import { DealsOnElectronics } from '../../components/Best deals components/greate deals on electronics/DealsOnElectronics'
import { SecondCarosial } from '../../components/Top sesond image carocial/SecondCarosial'
import { BandPromise } from '../../components/the relience digital brand promise/BandPromise'
import { ThirdcarosicalHomePgae } from '../../components/Top third carosal/ThirdcarosicalHomePgae'
import { SmartPhoneBonanja } from '../../components/Best deals components/smartphones bonenja/SmartPhoneBonanja'
import { Link } from 'react-router-dom'




export const AppLayOut = () => {
  return (
    <div>
      
    
      <div className={styles.ToppSingleImage}>
        <img src="https://www.reliancedigital.in/medias/Split-OnePlus-banner-D.jpg?context=bWFzdGVyfGltYWdlc3wxMjE4MDR8aW1hZ2UvanBlZ3xpbWFnZXMvaDMxL2hlMy8xMDEyNTE3MDE0NzM1OC5qcGd8ZWE5MWI2YjZhZWNmMTlhOTJlYzYwZDM1YjQzZTIyMmMzN2VlNmFhYTlmOWU1ZGI2YTMzMTM1MTVkZDgwNzM4MA" alt="" />
      </div>
      <ImageCarociel/>
      <AirCoolar/>
      <Acs/>
  <HonorAirbudsPic/>
  <MobileDeals/>
  <BestSellingAudoAccess/>
  <BestSellingCanonPrinters/>
  <DealsOnElectronics/>
  <SecondCarosial/>
  <BandPromise/>
  <ThirdcarosicalHomePgae/>
  <SmartPhoneBonanja/>
  <Link to={`/RelianceDigital/alldata/AllData`} className={styles.alldata}> <button>view all</button></Link>
    </div>
  )
}
