import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from './state/index'

function Shop() {
  const dispatch = useDispatch();
  return (
    <div>
        <h5>Deposit or Withdraw Money</h5>
        <button className="btn-primary mx-2" onClick={ ()=>{ dispatch(actionCreators.withdrawmoney(100))}}>-</button>
        Update Your Balance
        <button className="btn-primary mx-2"onClick={ ()=>{ dispatch(actionCreators.depositmoney(100))}}>+</button>

    </div>
  )
}

export default Shop