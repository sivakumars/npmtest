import React, { Component } from 'react'

import { Button } from 'npmtest';

import './index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <PrimaryHeader text='Primary Heading' /> */}
        <div>
          {/* flat Button Start */}
          <div>
            <h1 className="center">Raised Buttons</h1>
            <div className="flex row center-center">
              <div className="m15">
                <Button type="button" autoFocus={true} onClick={(e) => console.log(e)}>
                  Default
                </Button>
              </div>
              <div className="m15">
                <Button name="primary" type="button" color="primary" onClick={(e) => console.log(e)}>
                  primary
                </Button>
              </div>
              <div className="m15">
                <Button name="secondary" type="button" color="secondary" onClick={(e) => console.log(e)}>
                  secondary
                </Button>
              </div>
              <div className="m15">
                <Button name="disabled" classes="m15 p15 flex" type="button" color="primary" state="disabled" onClick={(e) => console.log(e)}>
                  disabled
                </Button>
              </div>
              <div className="m15">
                <Button name="loading" type="button" color="primary" state="loading" onClick={(e) => console.log(e)}>
                  loading
                </Button>
              </div>
              <div className="m15">
                <Button name="submit" type="submit" color="primary" onClick={(e) => console.log(e)} >
                  submit
                </Button>
              </div>
            </div>
          </div>
          {/* Raised Button End */}
          {/* Raised Button Start */}
          <div>
            <h1 className="center">Raised Buttons</h1>
            <div className="flex row center-center">
              <div className="m15">
                <Button type="button" variant="raised" onClick={(e) => console.log(e)}>
                  Default
                </Button>
              </div>
              <div className="m15">
                <Button name="primary" type="button" color="primary" variant="raised" onClick={(e) => console.log(e)}>
                  primary
                </Button>
              </div>
              <div className="m15">
                <Button name="secondary" type="button" color="secondary" variant="raised" onClick={(e) => console.log(e)}>
                  secondary
                </Button>
              </div>
              <div className="m15">
                <Button name="disabled" classes="m15 p15 flex" type="button" color="primary" variant="raised" state="disabled" onClick={(e) => console.log(e)}>
                  disabled
                </Button>
              </div>
              <div className="m15">
                <Button name="loading" type="button" color="primary" variant="raised" state="loading" onClick={(e) => console.log(e)}>
                  loading
                </Button>
              </div>
              <div className="m15">
                <Button name="submit" type="submit" color="primary" variant="raised" onClick={(e) => console.log(e)} >
                  submit
                </Button>
              </div>
            </div>
          </div>
          {/* Raised Button End */}

          {/* Outline Button Start */}
          <div>
            <h1 className="center">outline Buttons</h1>
            <div className="flex row center-center">
              <div className="m15">
                <Button name="default" type="button" variant="outline" onClick={(e) => console.log(e)} >
                  default
                </Button>
              </div>
              <div className="m15">
                <Button name="primary" type="button" color="primary" variant="outline" onClick={(e) => console.log(e)} >
                  primary
                </Button>
              </div>
              <div className="m15">
                <Button name="secondary" type="button" color="secondary" variant="outline" onClick={(e) => console.log(e)} >
                  secondary
                </Button>
              </div>
              <div className="m15">
                <Button name="disabled" type="button" color="primary" variant="outline" state="disabled" onClick={(e) => console.log(e)} >
                  disabled
                </Button>
              </div>
              <div className="m15">
                <Button name="loading" type="button" color="primary" variant="outline" state="loading" onClick={(e) => console.log(e)} >
                  loading
                </Button>
              </div>
              <div className="m15">
                <Button name="submit" type="submit" color="primary" variant="outline" onClick={(e) => console.log(e)} >
                  submit
                </Button>
              </div>
            </div>
          </div>
          {/* Outline Button End */}

        </div>
      </div>
    )
  }
}
