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
      sizeprice: 127,
      bathroomPrice: 0,
      squareFeet: 0,
      date: currentDate,
      size: 'less than 1200 sq ft',
      bathrooms: 1,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      apt: '',
      state: '', 
      zipCode: '',
      homeAccess: '',
      other: '',
      tip: '',
      agree: false,
      total: 127,
      frequency: 0
    }
  }

  componentDidUpdate (prevProps, prevState, snapshot){
    console.log(prevState, this.state);
    for(let key in prevState){
      if(prevState[key] !== this.state[key]){
        this.setState({
          total: this.state.sizeprice + this.state.bathroomPrice + this.state.frequency
        })   
        return;
      }
    }
  }


  squareFeet = (e) => {
    console.log(e.target.value);
   


    this.setState({
      squareFeet: e.target.value
    })
  }

  updateDate = (e) => {
    let date = e.target.value;
    this.setState({
      date
    })
  }

  size = (e) => {
    let size = e.target.value;
    let sizeprice;
    switch(e.target.value){
      case 'less than 1200 sq ft':
      sizeprice = 127
        break;
      case '1200 to 1400 sq ft':
      sizeprice = 152 
        break;
      case '1400 to 2000 sq ft':
      sizeprice = 149
        break;
      case '2000 to 2400 sq ft':
      sizeprice = 169
        break;
      case '2400 to 2800 sq ft':
      sizeprice = 184
        break;
      case '2800 to 3200 sq ft':
      sizeprice = 204
        break;
      case '3200 to 3600 sq ft':
      sizeprice = 229
        break;  
      default: 
        return;
    }
    this.setState({
      size,
      sizeprice
    })
  }

  bathrooms = (e) => {
    let bathrooms = parseInt(e.target.value,10);
    let bathroomPrice;
    switch(bathrooms){
      case 1:
      bathroomPrice = 0
        break;
      case 2:
      bathroomPrice = 15 
        break;
      case 3:
      bathroomPrice = 30
        break;
      case 4:
      bathroomPrice = 45
        break;
      case 5:
      bathroomPrice = 60
        break;
      case 6:
      bathroomPrice = 75
        break;  
      default: 
        return;
    }
    this.setState({
      bathrooms,
      bathroomPrice
    })
  }

  changeString = (name,e) => {
    let string = e.target.value;
    let property = name;
    let obj = {
      [property]: string
    };
    this.setState(obj)
  }

  agree = () => (
    this.setState({
      agree: !this.state.agree
    })
  )

  frequency = (e) => {
    console.log(e.target.innerHTML);
    let week = e.target.innerHTML;
    // console.log('test', test);
    switch(week){
      case 'One Time Cleaning':
        this.setState({
          frequency: 0
        })
        break;
      case 'Every Week':
        this.setState({
          frequency: -25
        })
        break;
      case 'Every 2 Weeks':
        this.setState({
          frequency: -21
        })
        break;
      case 'Every 4 Weeks':
        this.setState({
          frequency: -10
        })
        break;
      
    }
  }

  render(){
    console.log(this.state.date);
    return <div className='calculator'>
      <div className='output-container'>
        <div className='scale-in-ver-top'></div>
      </div>
      <div className='price-result'>
        <p>
          ${this.state.total}
        </p>
      </div>
      <div>
        <div className='size-and-bathrooms'>
          <select onChange={this.size}>
            <option value='less than 1200 sq ft'>less than 1200 sq ft</option>
            <option value='1200 to 1400 sq ft'>1200 to 1400 sq ft</option>
            <option value='1400 to 2000 sq ft'>1400 to 2000 sq ft</option>
            <option value='2000 t0 2400 sq ft'>2000 t0 2400 sq ft</option>
            <option value='2400 to 2800 sq ft'>2400 to 2800 sq ft</option>
            <option value='2800 to 3200 sq ft'>2800 to 3200 sq ft</option>
            <option value='3200 to 3600 sq ft'>3200 to 3600 sq ft</option>
          </select>

          <select onChange={this.bathrooms}>
            <option value='1 Bathroom'>1 Bathroom</option>
            <option value='2 Bathroom'>2 Bathroom</option>
            <option value='3 Bathroom'>3 Bathroom</option>
            <option value='4 Bathroom'>4 Bathroom</option>
            <option value='5 Bathroom'>5 Bathroom</option>
            <option value='6 Bathroom'>6 Bathroom</option>
          </select>

        </div>


        <div className='frequency'>
          <button onClick={this.frequency} className={this.state.frequency == 0 ? 'freq-chosen' : ''}>
            One Time Cleaning
          </button>
          <button onClick={this.frequency} className={this.state.frequency == -25 ? 'freq-chosen' : ''}>
            Every Week
          </button>
          <button onClick={this.frequency} className={this.state.frequency == -21 ? 'freq-chosen' : ''}>
            Every 2 Weeks
          </button>
          <button onClick={this.frequency} className={this.state.frequency == -10 ? 'freq-chosen' : ''}>
            Every 4 Weeks
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
          <input onChange={(e) => this.changeString('firstName', e)} value={this.state.firstName} type='text' placeholder='First Name'/>
          <input onChange={(e) => this.changeString('lastName', e)} value={this.state.lastName} type='text' placeholder='Last Name'/>
          <input onChange={(e) => this.changeString('email', e)} value={this.state.email} type='email' placeholder='Email'/>
          <input onChange={(e) => this.changeString('phoneNumber', e)} value={this.state.phoneNumber} type='tel' placeholder='Phone Number'/>
        </div>
        
        <div className='client-home'>
          <input onChange={(e) => this.changeString('address', e)} value={this.state.address} type='text' placeholder='Address'/>
          <input onChange={(e) => this.changeString('apt', e)} value={this.state.apt} type='text' placeholder='Apt/Suite #'/>
          <input onChange={(e) => this.changeString('state', e)} value={this.state.state} type='email' placeholder='State'/>
          <input onChange={(e) => this.changeString('zipCode', e)} value={this.state.zipCode} type='tel' placeholder='Zip Code'/>
        </div>

        <div className='date-to-come'>
        <input type="date" id="myDate" value={this.state.date} onChange={this.updateDate}/>
        </div>

        <div className='how-to-access-home'>
          <select onChange={(e) => this.changeString('homeAccess', e)}>
            <option value=''></option>
            <option value='I will be home'>I will be home</option>
            <option value='I will leave a key'>I will Leave a key</option>
            <option value='Other'>Other</option>
          </select>
        </div>

        <div className='terms-and-conditions'>
          <p>PLEASE READ OUR TERMS</p>
          <p>We estimate a specific number of hours (displayed in labor-hours next to the final price--sending 2 cleaners cuts this time in half) for the service based on the information that is provided by the customer, and if we are unable to complete the work in the estimated amount of time then you will have the option to pay for extra time at our normal hourly rate or provide us with priorities that you would like us to complete in the time we have available. We require 48 hours cancellation notice to avoid the $100 cancellation fee on one time cleans and $50 for recurring cleans. </p>
          <button onClick={() => this.agree()}>I agree to these terms</button>
        </div>

        <div className='customer-comments'>
          <textarea onChange={(e) => this.changeString('other', e)} value={this.state.other} placeholder='Special Instructions'></textarea>
        </div>

        <div className='tip'>
          <p>Tip:</p>
          <input onChange={(e) => this.changeString('tip', e)} value={this.state.tip} type='number' />
        </div>

        <div className='payment-details'>
        </div>

        <div>
          <button>BOOK NOW</button>
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