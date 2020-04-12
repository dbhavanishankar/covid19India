import React, { Component } from 'react'
import './App.css';
import axios from 'axios'
import StateWiseReport from './StatesComponent/StateWiseReport.js'
import DateComponent from './DateComponent/TodayDate';


 export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      statewisereports:[],
      statewisereportsSelect:[],
      statewisereportsSelected:[]
    }
    this.handleChange = this.handleChange.bind(this);
  }
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
      if(event.target.value==='all' || event.target.value==='Select'){
        const statewisereportsSelect = this.state.statewisereportsSelected;
        this.setState({ statewisereports : statewisereportsSelect})
      }else{
      const statewisereportsAfterSelect = this.state.statewisereportsSelected.filter(prod => prod.state=== event.target.value)
      this.setState({ statewisereports : statewisereportsAfterSelect})
      }
    };
    
  componentDidMount(){
    axios.get('https://api.covid19india.org/data.json').then(response => response.data)
    .then((data) => {
      this.setState({ statewisereports: data.statewise })
      this.setState({ statewisereportsSelect: data.statewise })
      const statewisereportsSelect = this.state.statewisereportsSelect.filter(prod => prod.statecode!== "TT")
      this.setState({statewisereportsSelect})
      this.setState({ statewisereportsSelected: data.statewise })
      console.log(statewisereportsSelect);
     }).catch(error=>{
       console.log(error);
     })
  }
 
   render() {
     const { statewisereports }=this.state
     const { statewisereportsSelect }=this.state
     return (
      <div className="App">
      <section id="team" className="pb-5">
      <div className="container">
        <h5 className="section-title h1">COVID19 INDIA  <p style={{color: 'blue',fontSize: '0.5em'}}><DateComponent/></p></h5>

      <div>
      <h5>States/UT : <select title="Select State"
      value={this.state.selectedTeam}
      onChange={this.handleChange}
    >
    <option
    key='-1'
    value='all'
  >
    ALL
  </option>
    {statewisereportsSelect.length ? statewisereportsSelect.map((team,index) => (
        <option
          key={index}
          value={team.state}
        >
          {team.state}
        </option>
        
      )): <option
      key='1'
      value='Select'
    >
      SELECT
    </option>}
    </select></h5>
      </div>
        <br></br>
        <div className="row">
        {
          statewisereports.length ? 
          statewisereports.map((statewisereport,index)=><StateWiseReport key={index} statewisereport={ statewisereport }/>
            ):null
        }
        </div>
        <div className="row">
          <b>For more information <a href="https://www.covid19india.org/">Click
              here</a>.
          </b>
        </div>
      </div>
    </section>
       </div>
     )
   }
 }
export default App;
