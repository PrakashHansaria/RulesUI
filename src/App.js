import React, { Component } from 'react';
import './App.css';
import RulesComponent from './RulesComponent'

class App extends Component {

  state = {
    rules: [],
    rows: [0],
    count: 0,
    selected: [],
    rowTracker: 0
  }

  componentDidMount() {
    const rules = [
      { id: 'r101', rule: 'Top3', active: false },
      { id: 'r102', rule: 'Top5', active: false },
      { id: 'r103', rule: 'Timely Completion', active: false },
      { id: 'r104', rule: 'Top10', active: false }
    ]
    this.setState({ rules: rules })
  }

  changeHandler = (e, id) => {
    const currIndex = id
    const ruleIndex = e.target.value
    let newSelectedList = [...this.state.selected]
    let newRowTracker = this.state.rowTracker

    const selectedRule = { ...this.state.rules[ruleIndex] }
    selectedRule.active = true

    if (this.state.rowTracker !== this.state.count) {
      newSelectedList.push(selectedRule)
      newRowTracker += 1
    } else {
      newSelectedList.splice(currIndex, 1, selectedRule)
    }

    this.setState({ selected: newSelectedList, rowTracker: newRowTracker })
  }

  statusToggleHandler = (e) => {
    const currIndex = e.target.value

    const newSelectedList = [...this.state.selected]
    newSelectedList[currIndex].active = !newSelectedList[currIndex].active

    this.setState({ selected: newSelectedList })

  }

  newRowHandler = () => {
    let currentCount = this.state.count
    this.setState({ rows: [...this.state.rows, (currentCount + 1)], count: currentCount + 1 })
  }

  deleteRowHandler = (e) => {
    const currIndex = e.target.value
    let newSelectedList = [...this.state.selected]
    let newRows = [...this.state.rows]

    newSelectedList.splice(currIndex,1)
    newRows.splice(currIndex,1)
    

    this.setState({selected:newSelectedList, rows:newRows, count:this.state.count-1})
  }

  render() {
    console.log(this.state)

    return (
      <div className="App" >
        <h1 style={{ marginBottom: '50px' }}>Assign Rules</h1>
        <div style={{ width: '50%', margin: 'auto' }}>
          <button
            className="btn btn-outline-secondary"
            style={{ marginBottom: '15px' }}
            onClick={this.newRowHandler}>NewRow
          </button>
          {this.state.rows.map((num) => {
            return (
              <RulesComponent
                key={num}
                id={num}
                rules={this.state.rules}
                change={(e) => this.changeHandler(e, num)}
                selectedRules={this.state.selected}
                click={this.statusToggleHandler}
                delete={this.deleteRowHandler} />)
          })}
        </div>
      </div>
    )
  }
}

export default App;
