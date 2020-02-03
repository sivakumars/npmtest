import React from 'react'
import { Avatar } from 'npmtest';
import './index.css';
import Button from './styled-component/Button';

const App = () => {
  return (
    <div>
      <h1 className="center">Buttons</h1>
      <div className="flex row center-center">
        <Button default="green"> Default </Button>
        <Button theme="primary" > Primary </Button>
        <Button theme="secondary" > Secondary </Button>
        <Button theme="success" > Success </Button>
        <Button state="disabled"> Disabled </Button>
        <Button theme="primary" >
          <div className="flex center-center">
            <i className="fa fa-upload"></i>
            <div className="pl10">Upload</div>
          </div>
        </Button>
        <Button theme="success" >
          <div className="flex center-center">
            <i className="fa fa-upload"></i>
            <div className="pl10">Upload</div>
          </div>
        </Button>
        <Button theme="success" state="disabled">
          <div className="flex center-center">
            <i className="fa fa-upload"></i>
            <div className="pl10">Upload</div>
          </div>
        </Button>
      </div>

      <div>
        <h1 className="center">Avatar</h1>
        <div className="flex center-center">
          <Avatar size="xl">
            <img alt="img" src={require("./assests/images.jpg")} />
          </Avatar>

          <Avatar size="lg">
            <img alt="img" src={require("./assests/images.jpg")} />
          </Avatar>

          <Avatar size="sm">
            <img alt="img" src={require("./assests/images.jpg")} />
          </Avatar>

          <Avatar size="xs">
            <img alt="img" src={require("./assests/images.jpg")} />
          </Avatar>

          <Avatar size="xl" theme="primary">PR</Avatar>
          <Avatar size="lg" theme="secondary">SE</Avatar>
          <Avatar size="md" theme="success">SC</Avatar>
          <Avatar size="sm" theme="warn">WR</Avatar>
        </div>
      </div>
    </div>
  )
}

export default App;
