import React from 'react'
import Card from '../Card/Card'

export default function DataViewer(props) {
    const {switchState} = props
    const {gender,race} = props.pageContentData.data
    console.log(switchState)
  return (
    <div className='Dataviewer-container'>
        <Card data = {switchState==='Gender'?gender.payEquityGap:race.payEquityGap}/>
        <Card data = {switchState==='Gender'?gender.employeeComparison:race.employeeComparison}/>
        <Card data = {switchState==='Gender'?gender.budget:race.budget}/>
    </div>
  )
}
