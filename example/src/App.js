import React, { Component } from 'react'

import { Button } from 'npmtest';

import './index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <PrimaryHeader text='Primary Heading' /> */}
        <div>
          {/* Raised Button Start */}
          <div>
            <h1 className="center">Raised Buttons</h1>
            <div className="flex row center-center">
              <div className="m15">
                <Button name="default" type="button" variant="raised" text="Default" click={(e) => console.log(e)} />
              </div>
              <div className="m15">
                <Button name="disabled" type="button" variant="raised" state="disabled" text="Diabled" click={(e) => console.log(e)} />
              </div>
              <div className="m15">
                <Button name="loading" type="button" variant="raised" state="loading" text="Loading" click={(e) => console.log(e)} />
              </div>
              <div className="m15">
                <Button name="submit" type="submit" variant="raised" text="Submit" click={(e) => console.log(e)} />
              </div>
            </div>
          </div>
          {/* Raised Button End */}

        </div>
      </div>
    )
  }
}
