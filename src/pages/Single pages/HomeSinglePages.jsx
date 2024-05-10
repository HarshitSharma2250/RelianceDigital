import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import hsinglepage from "./HomeSinglepage.module.css";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoPrintOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { GettingPinCode } from "../../redux/Action";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HomeSinglePages = () => {
  const [data, setdata] = useState({});
  const pincodedata = useSelector((state) => state.PinCode);
  const dispatch = useDispatch();
  const pincode = useRef(null);
const Navigate=useNavigate()

  // for rating-----------------------------
  const rating = Math.random() * 5;
  const filledStars = Math.round(rating * 2) / 2;
  const starsArray = Array.from({ length: 5 }, (_, index) => {
    if (index < filledStars) {
      return <span key={index}>&#9733;</span>;
    } else {
      return <span key={index}>&#9734;</span>;
    }
  });

  // geting data from local stoarge.................................................
  useEffect(() => {
    let storedata = JSON.parse(localStorage.getItem(`storesingledata`));
    setdata(storedata);
  }, []);

  //......add data to local storage...............................................
  function HandleCart(data) {
    if (pincodedata.pincode === "") {
      alert("enter pincode");
    } else {
      let CartData = JSON.parse(localStorage.getItem("storecart")) || [];
      let filterdata = CartData.findIndex((ele) => ele.id === data.id);
      if (filterdata !== -1) {
        toast.success('Item already added to cart');
        return Navigate('/RelianceDigital/cart')
      } else {
        CartData.push(data);
      }
      localStorage.setItem("storecart", JSON.stringify(CartData));
      toast.success('Item added to cart successfully');
      Navigate('/RelianceDigital/cart')
    }
  }

  function HandlePinCode() {
    dispatch(GettingPinCode(pincode.current.value));
  }

  const reviews = [
    {
      name: "Yash Zawar",
      location: "Navi Mumbai",
      date: "4/7/2024",
      helpful: true,
    },
    { name: "Vivek Biswas", location: "", date: "4/7/2024", helpful: true },
    { name: "Manish Tyagi", location: "", date: "12/12/2023", helpful: false },
    {
      name: "Shubham Bhanudas Gaikwad",
      location: "",
      date: "12/11/2023",
      helpful: false,
    },
    {
      name: "Dhruv Pandit",
      location: "Bengaluru",
      date: "12/11/2023",
      helpful: true,
    },
    {
      name: "Mohit Singh",
      location: "Ghaziabad",
      date: "12/11/2023",
      helpful: true,
    },
    {
      name: "Kapil Hooda",
      location: "Rohtak",
      date: "12/11/2023",
      helpful: true,
    },
    {
      name: "Dhanunjai Bheemanapalli",
      location: "Hyderabad",
      date: "12/11/2023",
      helpful: true,
    },
    {
      name: "Zaid Petkar",
      location: "Mumbai",
      date: "12/11/2023",
      helpful: true,
    },
    {
      name: "Yazan Basar",
      location: "Mumbai",
      date: "12/11/2023",
      helpful: true,
    },
  ];

  return (
    <div className={hsinglepage.mainContainer}>
      {data && (
        <div className={hsinglepage.accessingdata}>
          <div className={hsinglepage.leftImgContainer}>
            {" "}
            <img src={data.pic} alt="" />
          </div>

          <div className={hsinglepage.rightContentContainer}>
            <div className={hsinglepage.description}>
              <p>{data.description}</p>
              {/* -------rating.............................................. */}
              <div className={hsinglepage.dummyRatingContent}>
                <div className={hsinglepage.rating}>
                  <p>{starsArray}</p>
                  <p> Rating: {rating.toFixed(1)} / 5</p>
                </div>
                <p>
                  <IoPrintOutline /> print
                </p>
                <p>
                  <FaRegShareFromSquare /> share
                </p>
                <p>
                  {" "}
                  <input type="checkbox" /> add to compare
                </p>
              </div>
            </div>

            <div className={hsinglepage.dynamicLowerContent}>
              <section className={hsinglepage.dynamicLowerleftContent}>
                <h2>
                  Gain more with offer ({Math.floor(Math.random() * 10 + 1)})
                </h2>
                <li>Flat 1000 Discount with OneCard Credit Cards Read-T&C</li>
                <li>
                  Flat 3500 instant Discount with IDFC Credit Card EMI Read-T&C
                </li>
                <li>
                  Get 10% (UpTo Rs.3000) Instant bank Discount on HDFC Bank
                  Credit Cards Non-EMI txn Read-T&C
                </li>
                <li>
                  5% Instant Discount with Citi Credit & Debit Card Read-T&C
                </li>
                <li>10% Instant Discount with Citi Credit Card EMI Read-T&C</li>
                <li>
                  Flat 3500 instant Discount with IDFC Credit Card EMI Read-T&C
                </li>
              </section>
              <section className={hsinglepage.dynamicLowerrightContent}>
                <p>company : {data.company}</p>
                <p>model : {data.model}</p>
                <p>
                  Offer Price :₹ <span>{data.price}</span>
                </p>
                <h2>FREE Shipping!</h2>

                <div className={hsinglepage.pincodesection}>
                  <input
                    type="number"
                    ref={pincode}
                    placeholder="enter pin code"
                  />
                  <button onClick={HandlePinCode}>get pin code</button>
                </div>
                <div className={hsinglepage.Add_BuyBtn}>
                  <button onClick={() => HandleCart(data)}>Add to cart</button>
                  <Link to={`/RelianceDigital/buynow`}>
                    <button>buy now</button>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

      <div className={hsinglepage.customerreviewscontainer}>
        <h2>Customer Reviews</h2>
        <div className={hsinglepage.reviewsummary}>
          <p>4.8/5 (184 Ratings & 19 Reviews)</p>
          <div className={hsinglepage.starratings}>
            <span>5 STAR: 151</span>
            <span>4 STAR: 25</span>
            <span>3 STAR: 8</span>
            <span>2 STAR: 0</span>
            <span>1 STAR: 0</span>
          </div>
        </div>
        <div className={hsinglepage.writereviewbtn}>
          <button>WRITE A REVIEW</button>
          <p>(Read-T&C)</p>
        </div>
        <div className={hsinglepage.customerreviews}>
          {reviews.map((review, index) => (
            <div key={index} className={hsinglepage.reviewitem}>
              <p>{review.name}</p>
              <p>{review.location}</p>
              <p>{review.date}</p>
              <p>{review.helpful && "Helpful"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

//
