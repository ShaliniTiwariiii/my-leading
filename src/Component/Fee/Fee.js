import React from 'react'
import style from './Fee.module.css'
import Header from '../Header/Header'
import OldStudent from '../OldStudent/OldStudent'
import ClassSelector from '../Class-Selector/ClassSelector'
import NewStudent from '../NewStudent/NewStudent'
import { useRecoilState } from 'recoil'
import {ClassAtom} from '../../Atom'
function Fee() {
  const[classValue,setClassValue]=useRecoilState(ClassAtom)
  console.log(classValue)
  return (
    <div  className={style.mainFee}>
      <Header/>
      <div className={style.mainFee}>
      <ClassSelector/>
      {classValue!=='' &&
      <div className={style.fee}>
    <OldStudent/>
    <NewStudent/>
    </div>}
    </div></div>
  )
}

export default Fee
