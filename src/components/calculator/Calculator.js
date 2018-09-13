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
      frequency: 0,
      initialClean: 0,
      deepClean: 0,
      insideWindows: 0
    }
  }

  componentDidUpdate (prevProps, prevState, snapshot){
    console.log(prevState, this.state);
    for(let key in prevState){
      if(prevState[key] !== this.state[key]){
        this.setState({
          total: this.state.sizeprice + this.state.bathroomPrice 
          + this.state.frequency + this.state.initialClean + this.state.deepClean
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

  extras = (e) => {
    let extra = e.target.innerHTML;
    // console.log('test', test);
    switch(extra){
      case 'Initial Clean':
        this.state.initialClean === 67 
        ?
          this.setState({
            initialClean: 0
          })
        :
        this.setState({
          initialClean: 67
        })
        break;
      case 'Deep Clean':
      this.state.deepClean === 100 
      ?
        this.setState({
          deepClean: 0
        })
      :
      this.setState({
        deepClean: 100
      })
        break;
      case 'Inside Windows':
        this.setState({
          frequency: -21
        })
        break;
    }
  }

  render(){
    console.log(this.state.date);
    return <div className='calculator'>
      <div className='calc-form'>
      {/* <div className='price-result'>
        <p>
          ${this.state.total}
        </p>
      </div> */}
      <div>
        <div className='size-and-bathrooms'>
          <div className='choose-your-service'>
            <h2>Choose Your Service</h2>
            <p>Tell us about your home</p>
            <p>Please select the total size of your entire home. Want to leave a room out or have a different configuration? Book an hourly clean or just call at 555-555-5555.</p>
          </div>

          <select onChange={this.size}>
            <option value='less than 1200 sq ft'>less than 1200 sq ft</option>
            <option value='1200 to 1400 sq ft'>1200 to 1400 sq ft</option>
            <option value='1400 to 2000 sq ft'>1400 to 2000 sq ft</option>
            <option value='2000 to 2400 sq ft'>2000 to 2400 sq ft</option>
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


        <div className='calc-mid-size'>
          <div className='how-often'>
            <h2>How Often?</h2>
            <p>Please select the total size of your entire home. Want to leave a room out or have a different configuration? Book an hourly clean or just call at 555-555-5555.</p>
          </div>

          <div className='frequency'>
            <button onClick={this.frequency} id={this.state.frequency == 0 ? 'freq-chosen' : ''}>
              One Time Cleaning
            </button>
            <button onClick={this.frequency} id={this.state.frequency == -25 ? 'freq-chosen' : ''}>
              Every Week
            </button>
            <button onClick={this.frequency} id={this.state.frequency == -21 ? 'freq-chosen' : ''}>
              Every 2 Weeks
            </button>
            <button onClick={this.frequency} id={this.state.frequency == -10 ? 'freq-chosen' : ''}>
              Every 4 Weeks
            </button>
          </div>
        </div>

        <div className='calc-mid-size'>
          <div className='how-often'>
            <h2>Select Extras</h2>
            <p>For your satisfaction we require an initial or deep cleaning if your home hasn't been professionally cleaned for more than one month. Please visit OUR SERVICES page to see the difference between our cleanings.</p>
          </div>

          <div className='extras'>
            <button onClick={this.extras} id={this.state.initialClean == 67 ? 'freq-chosen' : ''}>
              Initial Clean
            </button>
            <button onClick={this.extras} id={this.state.deepClean == 100 ? 'freq-chosen' : ''}>
              Deep Clean
            </button>
            <button onClick={this.extras}>
              Inside Windows
            </button>
          </div>
        </div>

        <div className='calc-mid-size'>
          <div className='how-often'>
            <h2>Select Extras</h2>
            <p>For your satisfaction we require an initial or deep cleaning if your home hasn't been professionally cleaned for more than one month. Please visit OUR SERVICES page to see the difference between our cleanings.</p>
          </div>
          
          <div className='client-info'>
            <input onChange={(e) => this.changeString('firstName', e)} value={this.state.firstName} type='text' placeholder='First Name'/>
            <input onChange={(e) => this.changeString('lastName', e)} value={this.state.lastName} type='text' placeholder='Last Name'/>
            <input onChange={(e) => this.changeString('email', e)} value={this.state.email} type='email' placeholder='Email'/>
            <input onChange={(e) => this.changeString('phoneNumber', e)} value={this.state.phoneNumber} type='tel' placeholder='Phone Number'/>
          </div>
        </div>
        
        <div className='calc-mid-size'>
          <div className='how-often'>
            <h2>Your Address</h2>
            <p>Where would you like us to clean?</p>
          </div>
          <div className='client-home'>
            <input onChange={(e) => this.changeString('address', e)} value={this.state.address} type='text' placeholder='Address'/>
            <input onChange={(e) => this.changeString('apt', e)} value={this.state.apt} type='text' placeholder='Apt/Suite #'/>
            <input onChange={(e) => this.changeString('state', e)} value={this.state.state} type='email' placeholder='State'/>
            <input onChange={(e) => this.changeString('zipCode', e)} value={this.state.zipCode} type='tel' placeholder='Zip Code'/>
          </div>
        </div>

        <div className='calc-mid-size'>
          <div className='how-often'>
            <h2>Your Address</h2>
            <p>Choose a date and time you would like us to come. *Please note that the times below are arrival windows.</p>
          </div>
          <div className='date-chooser'>
            <input type="date" id="myDate" value={this.state.date} onChange={this.updateDate}/>
          </div>
        </div>

        <div className='calc-mid-size'>
          <div className='how-often'>
            <h2>How will we access your home? *</h2>
          </div>

          <select onChange={(e) => this.changeString('homeAccess', e)}>
            <option value=''></option>
            <option value='I will be home'>I will be home</option>
            <option value='I will leave a key'>I will Leave a key</option>
            <option value='Other'>Other</option>
          </select>

          <div className='how-often'>
            <p>We are happy to keep your key on file if you are signing up for recurring service. Please use the notes section above if you are leaving a lock box or hiding a key.</p>
          </div>
        </div>

        <div className='calc-mid-size how-often'>
          <p>PLEASE READ OUR TERMS</p>
          <p>We estimate a specific number of hours (displayed in labor-hours next to the final price--sending 2 cleaners cuts this time in half) for the service based on the information that is provided by the customer, and if we are unable to complete the work in the estimated amount of time then you will have the option to pay for extra time at our normal hourly rate or provide us with priorities that you would like us to complete in the time we have available. We require 48 hours cancellation notice to avoid the $100 cancellation fee on one time cleans and $50 for recurring cleans. </p>
          <button className='calc-button' onClick={() => this.agree()}>I agree to these terms</button>
        </div>

        <div className='calc-mid-size  terms-of-service'>
          <div className='how-often'>
            <h2>How will we access your home? *</h2>
          </div>
          <textarea onChange={(e) => this.changeString('other', e)} value={this.state.other} placeholder='Special Instructions'></textarea>
        </div>

        {/* <div className='tip'>
          <p>Tip:</p>
          <input onChange={(e) => this.changeString('tip', e)} value={this.state.tip} type='number' />
        </div> */}

        {/* <div className='calc-mid-size'>
        </div> */}

        <div className='calc-mid-size'>
          <button className='book-now-button'>BOOK NOW</button>
        </div>
      </div>
      </div>
      <div className='float-total'>
      <div className='output-container'>
        <h2>Estimate Calculator</h2>
        <p>You can use this calculator to check our prices and order if you're satisfied with the price.</p>
        <div className='testing-bar'>
          <div className='money-bar' style={{width: `${this.state.total / 500 * 100}%`}}>
          <span>${this.state.total}</span>
          </div>
        </div>
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