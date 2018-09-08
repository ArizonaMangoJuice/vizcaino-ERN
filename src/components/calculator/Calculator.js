import React, { Component } from 'react'
let currentDate = new Date();
let month = currentDate.getUTCMonth() + 1;
let day = currentDate.getUTCDate();
let year = currentDate.getUTCFullYear();

currentDate = `${year}-${month.length > 1 ? '' : '0'}${month}-${day.length > 1 ? '' : '0'}${day}`.toString();


export default class Calculator extends Component{
  constructor(props){
    super(props);
    this.state = {
      price: 0,
      squareFeet: 0,
      date: currentDate
    }
  }

  squareFeet = (e) => {
    console.log(e.target.value);
    this.setState({
      squareFeet: e.target.value
    })
  }



  render(){
    console.log(this.state.date);
    return <div className='calculator'>
      <div className='output-container'>
        <div class='scale-in-ver-top'></div>
      </div>
      <div className='price-result'>
        <p>
          ${this.state.price}
        </p>
      </div>
      <div>
        <div className='size-and-bathrooms'>
          <select>
            <option value='less than 1200 sq ft'>less than 1200 sq ft</option>
            <option value='1200 to 1400 sq ft'>1200 to 1400 sq ft</option>
            <option value='1400 to 2000 sq ft'>1400 to 2000 sq ft</option>
            <option value='2000 t0 2400 sq ft'>2000 t0 2400 sq ft</option>
            <option value='2400 to 2800 sq ft'>2400 to 2800 sq ft</option>
            <option value='2800 to 3200 sq ft'>2800 to 3200 sq ft</option>
            <option value='3200 to 3600 sq ft'>3200 to 3600 sq ft</option>
          </select>

          <select>
            <option value='1 Bathroom'>1 Bathroom</option>
            <option value='2 Bathroom'>2 Bathroom</option>
            <option value='3 Bathroom'>3 Bathroom</option>
            <option value='4 Bathroom'>4 Bathroom</option>
            <option value='5 Bathroom'>5 Bathroom</option>
            <option value='6 Bathroom'>6 Bathroom</option>
          </select>

        </div>


        <div className='frequency'>
          <button>
            <span>One Time Cleaning</span>
          </button>
          <button>
            <span>Every Week</span>
          </button>
          <button>
            <span>Every 2 Weeks</span>
          </button>
          <button>
            <span>Every 4 Weeks</span>
          </button>
        </div>

        <div className='Extras'>
          <button>
            <span>Initial Clean</span>
          </button>
          <button>
            <span>Deep Clean</span>
          </button>
          <button>
            <span>Inside Windows</span>
          </button>
        </div>

        <div className='client-info'>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='Last Name'/>
          <input type='email' placeholder='Email'/>
          <input type='tel' placeholder='Phone Number'/>
        </div>
        
        <div className='client-home'>
          <input type='text' placeholder='Address'/>
          <input type='text' placeholder='Apt/Suite #'/>
          <input type='email' placeholder='State'/>
          <input type='tel' placeholder='Zip Code'/>
        </div>

        <div className='date-to-come'>
        <input type="date" id="myDate" value={this.state.date} />
          
        </div>

        <div className='heavy-clean'>
          <button>true</button>
        </div>
      </div>
      {/* <OutputContainer /> */}
      {/* <PriceResult /> */}
      {/* <TimePerMonth/> */}
      {/* <SquareFeet/> */}
      {/* <HeavyClean/> */}
      {/* <Submit /> */}
    </div>
  }
}