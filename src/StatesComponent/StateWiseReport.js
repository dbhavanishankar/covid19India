import React from 'react'
import DateComponent from '../DateComponent/TodayDate';

export function StateWiseReport({statewisereport}) {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4">
    <div className="image-flip"
      ontouchstart="this.classList.toggle('hover');">
      <div className="mainflip">
        <div className="frontside">
          <div className="card">
            <div className="card-body text-center mt-4">
              <h5 className="card-title">
              {statewisereport.state}
              </h5>
              <h6 style={{color: 'red'}} >Confirmed:</h6>
                <p style={{color: 'red'}} className="card-text">
                {statewisereport.confirmed}
                </p>
                <h6 style={{color: 'blue'}}>Active:</h6>
                <p style={{color: 'blue'}} className="card-text">
                {statewisereport.active}
                </p>
                <h6 style={{color: 'green'}}>Recovered:</h6>
                <p style={{color: 'green'}} className="card-text">
                {statewisereport.recovered}
                </p>
                <h6 style={{color: 'black'}}>Deaths:</h6>
                <p style={{color: 'black'}} className="card-text">
                {statewisereport.deaths}
                </p>
                <h6 style={{color: 'brown'}}>Last Update:</h6>
                <p style={{color: 'brown'}} className="card-text">
                {statewisereport.lastupdatedtime}
                </p>
            </div>
          </div>
        </div>
        <div className="backside">
          <div className="card">
            <div className="card-body text-center">
                <h5 className="card-title">
                {statewisereport.state} : <DateComponent/>
                </h5>
                <h6 style={{color: 'red'}} >Confirmed:</h6>
                <p style={{color: 'red'}} className="card-text">
                {statewisereport.deltaconfirmed}
                </p>
                <h6 style={{color: 'blue'}}>Active:</h6>
                <p style={{color: 'blue'}} className="card-text">
                {statewisereport.active}
                </p>
                <h6 style={{color: 'green'}}>Recovered:</h6>
                <p style={{color: 'green'}} className="card-text">
                {statewisereport.deltarecovered}
                </p>
                <h6 style={{color: 'black'}}>Deaths:</h6>
                <p style={{color: 'black'}} className="card-text">
                {statewisereport.deltadeaths}
                </p>
                <h6 style={{color: 'brown'}}>Last Update:</h6>
                <p style={{color: 'brown'}} className="card-text">
                {statewisereport.lastupdatedtime}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StateWiseReport;