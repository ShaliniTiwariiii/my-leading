import React from 'react'
import style from "./ClassSelector.module.css"
import {ClassAtom} from '../../Atom'
import { useRecoilState } from 'recoil'
function ClassSelector() {
    const[classValue,setClassValue]=useRecoilState(ClassAtom)

    const classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div className={style.main}>
            <div className={style.heading}>
            <b>Assign Fees to Class</b>
            <p>Class {classValue}</p>
            </div>
            <select className={style.selector} onChange={(e)=>setClassValue(e.target.value)}>
                <option>Select</option>
                {
                    classes.map((value) =>
                        <option key={value} value={value}>{value}</option>
                    )
                }
            </select>
            <p className={style.para}>select your class & pay fees</p>
        </div>
    )
}

export default ClassSelector
