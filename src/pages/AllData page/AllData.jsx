import React, { useEffect } from 'react'
import alldata from './AllData.module.css'
import data from '../../db/AllDataInDbFile.json'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export const AllData = () => {
    const[searchparams,setparams]=useSearchParams()
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategory, setselectedCategory] = useState([]);
    const { category }=useParams()
    const products = data[category];
  const[sortprice,setprice]=useState(searchparams.get('sortprice')||'All')
  const Navigate=useNavigate()
  const[page,setpage]=useState(parseInt(searchparams.get('page'))||1)
  const[totalPages,settotalpages]=useState(1)
  const brandsname = [...new Set(products.map(product => product.company))]
  const categoryname = [...new Set(products.map(product => product.category))]
  const[sortitems,setsortItems]=useState(false)
const[filtershowitems,setfiltershowitems]=useState(false)

  useEffect(()=>{
    setparams((prevparams)=>{
      let newParams=new URLSearchParams(prevparams)
      newParams.set('sortprice',sortprice)
      newParams.set('page',page)
      return newParams
    })
    },[sortprice,page])



    function ClickBrands(e) {
        const brand = e.target.value;
        if (e.target.checked) {
          setSelectedBrands([...selectedBrands, brand]);
        } else {
          setSelectedBrands(selectedBrands.filter((selected) => selected !== brand));
        }
      }
      
    function ClickCategory(e) {
        const brand = e.target.value;
        if (e.target.checked) {
          setselectedCategory([...selectedCategory, brand]);
        } else {
          setselectedCategory(selectedCategory.filter((selected) => selected !== brand));
        }
      }
      
      const Filter = products.filter( (ele) =>(selectedBrands.length === 0 || selectedBrands.includes(ele.company) &&(selectedCategory.length===0||selectedCategory.includes(ele.category))) 
      );
      const FilterCategory= Filter.filter( (ele) =>(selectedCategory.length===0||selectedCategory.includes(ele.category))
      );
      
      const sortbyPrice=FilterCategory.sort((a,b)=>{
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
      
      const startIndex = (page - 1) * 28;
        const endIndex = startIndex + 28;
        const currentPageItems = sortbyPrice.slice(startIndex, endIndex);
      
      function HandleButton(count){
        setpage(page+count)
      }
      useEffect(()=>{
        settotalpages(Math.ceil(Filter.length/30))
      },[Filter])
      
      
      
      
      function HandleClick(ele){
        localStorage.setItem('storesingledata',JSON.stringify(ele))
        Navigate(`./homesinglepages`)
      }
      
     //------------mobile version---------------------
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
    <div className={alldata.container}>
      <div className={alldata.leftSideItems} style={{top:filtershowitems ? '59vh':'96vh'}}>
      <div className={alldata.brands_name}>filters category<span className={alldata.hidefilter} onClick={HandleHidefilteritems}>X</span>  </div>
      <div className={alldata.leftcontainerCategorystyle}>
      <section>
        <h3>company</h3>
      {brandsname &&
        brandsname.map((ele, index) => (
          <div key={index} className={alldata.eachrenderItems}>
            <label  className={alldata.brands_name_ckeckbox}> <input value={ele}  type="checkbox" className='input_check_box' onChange={ClickBrands} />
              <p>{ele}</p>
            </label>
          </div>
        ))}
      </section>
      <section>
        <h3>category</h3>
      {categoryname &&
        categoryname.map((ele, index) => (
          <div key={index} className={alldata.eachrenderItems}>
            <label  className={alldata.brands_name_ckeckbox}> <input value={ele}  type="checkbox" className='input_check_box' onChange={ClickCategory} />
              <p>{ele}</p>
            </label>
          </div>
        ))}
      </section>
      </div>
      </div>

      <div className={alldata.rightSideItems}>
        <div className={alldata.rightContinercontent}>

<p>showing total {products.length} products</p>

<div className={alldata.filteration} style={{top:sortitems ? '85vh':'96vh'}}>
 <span>sort by price : <span className={alldata.hidefilter} onClick={HandleHidefilter}>X</span> </span>
  <section>
 <button onClick={()=>HandlePrice('asc')}>price(low to high)</button>
  <button onClick={()=>HandlePrice('desc')}>price(high to low)</button>
 </section>
</div>
        </div>
     
     <div className={alldata.renderrightContainer}>
     {
        currentPageItems && currentPageItems.map((ele,index)=>(
          <div key={index} className={alldata.rightcontainerEachitems} onClick={()=>HandleClick(ele)}>
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
     <div className={alldata.buttons}>
     <button onClick={()=>HandleButton(-1)} disabled={page===1}>prev</button>
     <button onClick={()=>HandleButton(+1)} disabled={page===totalPages}>next</button>
     </div>
      </div>
      <div className={alldata.filtersbuttons}>
<button className={alldata.filterbtnleft} onClick={HandlesortbtnShow}>sort items</button>
<button className={alldata.filterbtnright} onClick={HandlefilterbtnShow}>filter item</button>
      </div>
    </div>
  )
}
