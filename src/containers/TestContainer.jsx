import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"


const TestContainer = () => {
  const [manualCounter, setManualCounter] = useState(0)
  const [timer, setTimer] = useState(-1)
  
  const add = () => {
    setManualCounter(manualCounter + 1)
  } 
  
  //run on mount and when any state changes
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimer(timer + 1)
  //   }, 1000)
  // })
  
  //run only once on mount, no dependencies
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimer(timer + 1)
  //   }, 1000)
  // }, [])
  
  //run on mount and when set dependency changes
  useEffect(() => {
      setTimer(timer + 1)
  },[manualCounter])

  //how to run something on unmount
  // useEffect(() => {
  //   callbackFN(){
  //     return (this runs on unmount)
  //   }
  // },[dependency])

  return (
    <div className="loading-text">
      
      <p>{timer}</p>
      <Button onClick={add} > {manualCounter} </Button>

    </div>
  )
}

export default TestContainer