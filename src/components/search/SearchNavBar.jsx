import React from 'react'
import styles from "./Search.module.css";
import { CiSearch } from "react-icons/ci";
export const SearchNavBar = () => { 
  return (
    <div className={styles.mainOfSearchBar}>
    <div className={styles.containerOfInput}>
      <input
        className={styles.inputfield}
        type="text"
        placeholder="find your favorite products"
      />
      <CiSearch className={styles.searchIcon} />
    </div>
  </div>
  )
}
