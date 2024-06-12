import {useState} from "react"

function UseForm(steps) {
  // eslint-disable-next-line no-unused-vars
  const [currentStep, setCurrentStep] = useState(0)

  function changeStep(i, e) {
   if(e) e.preventDefault();


    if(i < 0 || i >= steps.length) return 

    setCurrentStep(i)
  }

  return {
    currentStep, 
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
  };    
}

export default UseForm;