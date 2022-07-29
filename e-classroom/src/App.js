import React from 'react';
import './App.css';
import {AddBoxRounded, CreateRounded, DashboardRounded, FormatListBulletedRounded, HomeWorkRounded, PeopleAltRounded, TocRounded} from '@material-ui/icons';
import Item from './components/Item';

function App() {
  return (
    <div className='App'>
      <div className='sidebar_container'>
      <div className='sidebar'>
      {/* Lines icon */}
        <div className='lines_icon'>
        <TocRounded />
        </div>
        {/* Profile */}
        <div className='profile'>
            <img 
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU'
              alt='Profile Photo'
            />
        </div>
        {/* Groups */}
        <div className='groups'>
          <div className='group'>
          <h3>Class</h3>
          <Item 
          icon={<AddBoxRounded/>}
          name = "Join Class"
          />
          <Item 
          icon={<CreateRounded/>}
          name = "Create Class"
          />
          <Item 
          icon={<HomeWorkRounded/>}
          name = "Classwork"
          />
          <Item 
          icon={<FormatListBulletedRounded/>}
          name = "Classnotes"
          />
          <Item 
          icon={<PeopleAltRounded/>}
          name = "Classmates"
          />
          
          </div>
        </div>

      </div>
      
      </div>
      <div className='body_container'></div>
    </div>
  );
}

export default App;
