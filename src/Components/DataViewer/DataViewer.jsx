import React from 'react'
import Card from '../Card/Card'
import './DataViewer.scss'

export default function DataViewer(props) {
    const {switchState} = props
    const {gender,race} = props.pageContentData.data
  return (
    //Consists of a card component, to display page content data
    //Sends data based on gender or race
    <div className='Dataviewer-container'>
        {/* data = object of object, based on gender or race */}
        <Card data = {switchState==='Gender'?gender.payEquityGap:race.payEquityGap}/>
        <Card data = {switchState==='Gender'?gender.employeeComparison:race.employeeComparison}/>
        <Card data = {switchState==='Gender'?gender.budget:race.budget}/>
    </div>
  )
}
