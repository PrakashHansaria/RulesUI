import React from 'react'

const RulesComponent = (props) =>{

    const currIndex = props.id
    console.log(props.selectedRules[currIndex])
    const style = {
      width:'90%',
      margin:'auto',
      marginBottom:'10px',
    }
    let status=true;
    if(props.selectedRules[currIndex]){
        props.selectedRules[currIndex].active?status=true:status=false
    }
    const dropDown =(
      <div className='input-group' style={style}>
        <select className="custom-select" id="rules" onChange={props.change} >
        <option>Select Rule</option>
        {
          props.rules.map((ruleList,index)=>{
            return(<option key={ruleList.id} value={index}>{ruleList.rule}</option>)
          })
        }
        </select>
        <div className="input-group-append">
          <button 
          className="btn btn-outline-secondary" 
          value={currIndex} 
          onClick={props.click}>
        {status?'Enabled':'Disabled'}
        </button>
        <button 
          className="btn btn-outline-secondary" 
          value={currIndex} 
          onClick={props.delete}>
        Delete 
        </button>
        </div>
      </div>
    )
  
    // const button = (props.showStatus[currIndex]?
    // <button value={currIndex} onClick={props.click}>{props.selected[currIndex].active?"Enabled":"Disabled"}</button>
    // :null)
   
  
    return(
      <div>
        {dropDown}
      </div>    
    )
  
  }
export default RulesComponent