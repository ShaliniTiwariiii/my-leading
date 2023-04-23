import React, { useState } from 'react'
import style from './NewStudent.module.css'
import { HiOutlineDownload } from "react-icons/hi"
import AdjustIcon from '@mui/icons-material/Adjust';
import { BsCurrencyRupee, BsPlusLg } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri"
import AddIcon from '@mui/icons-material/Add';
function NewStudent() {
  const [show, setShow] = useState(false)
  const [feeType, setFeeType] = useState('')
  const [feeAmount, setFeeAmount] = useState('')
  const [FeeArray, setFeeArray] = useState([{ Feetype: "Tution Fees", price: 4000 }, { Feetype: "Book Fees", price: 4000 }, { Feetype: "Library Fees", price: 4000 }, { Feetype: "Admission Fees", price: 4000 }])
  function handleAdd() {
    if(feeType.trim().length===0 || feeAmount.trim().length===0){
      alert("Fill All Fields")
    }
    if(feeType.trim().length!==0 && feeAmount.trim().length!==0){
    let obj = { Feetype: feeType, price: feeAmount }
    setFeeArray([...FeeArray, obj])
    
    setShow(false)
    setFeeAmount("")
    setFeeType("")
    }
  }
  function handleDelete(id){
   setFeeArray([...FeeArray.filter((item,i)=>i!==id)])
  }
  return (
    <div className={style.main}>
      <div className={style.divwrap}>
        <div className={style.smallDiv}>
          <b className={style.new}>New Student</b>
          <span className={style.edit}>edit</span>
          <span className={style.add} onClick={() => setShow(!show)}><BsPlusLg /> Add Fees</span>
        </div>  <span className={style.download}><HiOutlineDownload /></span>
      </div>
      <div className={style.your}>
       <span>Your Paying Fee</span>
       <span>Rupees</span>
       </div>
      {FeeArray.map((item,i) => {
        return (
          <> <div key={i} className={style.mainSpan}>
            <div className={style.tution}>
              <span>{item.Feetype}</span>
              <span className={style.money}>
                <span><BsCurrencyRupee />{item.price}</span>
                <span style={{ color: 'gray' }} onClick={()=>handleDelete(i)} className={style.delete}><RiDeleteBin6Line /></span>
              </span>
            </div>
          </div>
          </>)
      })}
      {show ? <div className={style.inps}>
        < input placeholder='Fee Type' value={feeType} onChange={(e) => setFeeType(e.target.value)} />
        <input placeholder='Fee Amount' value={feeAmount} onChange={(e) => setFeeAmount(e.target.value)} />

        <span onClick={handleAdd} ><AddIcon /></span>
      </div> : ''}

      <span className={style.para}>
        <p style={{color:'#5F676A'}}>Do you want to copy this fees structure </p>
        <span style={{color:'#4C6BBD'}}><AdjustIcon /></span></span>
    </div>
  )
}

export default NewStudent