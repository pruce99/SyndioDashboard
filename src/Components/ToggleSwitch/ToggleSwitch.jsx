import React,{useState} from 'react'

export default function ToggleSwitch() {
    const [genderSwitchState, setGenderSwitchState] = useState("true")
    const [raceSwitchState, setRaceSwitchState] = useState("false")

  return (
    <div className='Toggle-container'>
        <div className={`Switch-container ${genderSwitchState}`}>
            Gender
        </div>
        <div className={`Switch-container ${raceSwitchState}`}>
            Race
        </div>
    </div>
  )
}
