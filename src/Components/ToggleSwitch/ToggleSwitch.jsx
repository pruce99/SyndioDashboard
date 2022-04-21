import React,{useState} from 'react'
import './ToggleSwitch.scss'

export default function ToggleSwitch(props) {
    const [genderSwitchState, setGenderSwitchState] = useState("true")
    const [raceSwitchState, setRaceSwitchState] = useState("false")

    // Function, which helps changing CSS and sets switchState(gender or race)
    // which helps data to be render based on the switchState
    const handleGenderSwitch = () => {
        setGenderSwitchState("true")
        setRaceSwitchState("false")
        props.setSwitchState("Gender")
    }

    const handleRaceSwitch = () =>{
        setGenderSwitchState("false")
        setRaceSwitchState("true")
        props.setSwitchState("Race")

    }

  return (
      //A component which switches between gender and race
    <div className='Toggle-container'>
        <div style={{marginLeft:"30px"}} onClick={handleGenderSwitch} className={`Switch-container ${genderSwitchState}`}>
            Gender
        </div>
        <div onClick={handleRaceSwitch} className={`Switch-container ${raceSwitchState}`}>
            Race
        </div>
    </div>
  )
}
