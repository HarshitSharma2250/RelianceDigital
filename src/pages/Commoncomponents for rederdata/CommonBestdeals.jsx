import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../db/TopDealsOnMobile.json';
import commondeal from './CommonBestdeal.module.css'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export const CommonBestdeals = () => {
  const[searchparams,setparams]=useSearchParams()
  const [selectedBrands, setSelectedBrands] = useState([]);
  const { category }=useParams()
  const products = data[category];
const[sortprice,setprice]=useState(searchparams.get('sortprice')||'All')
const brandsname = [...new Set(products.map(product => product.company))]
const Navigate=useNavigate()
const[page,setpage]=useState(parseInt(searchparams.get('page'))||1)
const[totalPages,settotalpages]=useState(1)
const[sortitems,setsortItems]=useState(false)
const[filtershowitems,setfiltershowitems]=useState(true)


//......................query params.......................
useEffect(()=>{
setparams((prevparams)=>{
  let newParams=new URLSearchParams(prevparams)
  newParams.set('sortprice',sortprice)
  newParams.set('page',page)
  return newParams
})
},[sortprice,page])





// -----------------for filter by brands------------------------------------------
function ClickBrands(e) {
  const brand = e.target.value;
  if (e.target.checked) {
    setSelectedBrands([...selectedBrands, brand]);
  } else {
    setSelectedBrands(selectedBrands.filter((selected) => selected !== brand));
  }

}

const Filter = products.filter( (ele) =>selectedBrands.length === 0 || selectedBrands.includes(ele.company) 
);

const sortbyPrice=Filter.sort((a,b)=>{
  if(searchparams.get('sortprice')==='asc'){
    return (a.price-b.price)
  }else if (searchparams.get('sortprice')==='desc'){
    return (b.price-a.price)
  }else {
    return 0
  }
})
//...............for sorting price data..........................
function HandlePrice(getdata){
  setprice(getdata)
}

//................for pagination............

const startIndex = (page - 1) * 10;
  const endIndex = startIndex + 10;
  const currentPageItems = sortbyPrice.slice(startIndex, endIndex);

function HandleButton(count){
  setpage(page+count)
}
useEffect(()=>{
  settotalpages(Math.ceil(Filter.length/10))
},[Filter])


function HandleClick(obj){
  localStorage.setItem('storesingledata',JSON.stringify(obj))
  Navigate('./homesinglepages')
  }
function HandlesortbtnShow(){
  setsortItems(true)
  setfiltershowitems(false)
}
function HandleHidefilter(){
  setsortItems(false)
}
function HandlefilterbtnShow(){
  setfiltershowitems(true)
  setsortItems(false)
}
function HandleHidefilteritems(){
  setfiltershowitems(false)
}


  return (

    <div className={commondeal.container}>
      <div className={commondeal.leftSideItems} style={{top:filtershowitems ? '70vh':'96vh'}}>
      <div className={commondeal.brands_name}>filters category <span className={commondeal.hidefilter} onClick={HandleHidefilteritems}>X</span> </div>
      <div className={commondeal.leftcontainerCategorystyle}>
      {brandsname &&
        brandsname.map((ele, index) => (
          <div key={index} className={commondeal.eachrenderItems}>
            <label  className={commondeal.brands_name_ckeckbox}> <input value={ele}  type="checkbox" className='input_check_box' onChange={ClickBrands} />
              <p>{ele}</p>
            </label>
          </div>
        ))}
      </div>
      </div>

      <div className={commondeal.rightSideItems}>
        <div className={commondeal.rightContinercontent}>

<p>showing total {products.length} products</p>
<div className={commondeal.filteration} style={{top:sortitems ? '83.7vh':'96vh'}}>
 <span>sort by price : <span className={commondeal.hidefilter} onClick={HandleHidefilter}>X</span> </span>
  <section>
 <button onClick={()=>HandlePrice('asc')}>price(low to high)</button>
  <button onClick={()=>HandlePrice('desc')}>price(high to low)</button>
 </section>
</div>
        </div>
     
     <div className={commondeal.renderrightContainer}>
     {
        currentPageItems && currentPageItems.map((ele,index)=>(
          <div key={index} className={commondeal.rightcontainerEachitems} onClick={()=>HandleClick(ele)}>
           <img src={ele.pic} alt="" />
           <div>
            <p>{ele.description}</p>
            <p>company : {ele.company}</p>
            <p>model : {ele.model}</p>
            <p>price :₹ {ele.price}</p>
           </div>
          </div>
        ))
      }
     </div>
     <div className={commondeal.buttons}>
     <button onClick={()=>HandleButton(-1)} disabled={page===1}>prev</button>
     <button onClick={()=>HandleButton(+1)} disabled={page===totalPages}>next</button>
     </div>
      </div>

      <div className={commondeal.filtersbuttons}>
<button className={commondeal.filterbtnleft} onClick={HandlesortbtnShow}>sort items</button>
<button className={commondeal.filterbtnright} onClick={HandlefilterbtnShow}>filter item</button>
      </div>
    </div>
  )
}
