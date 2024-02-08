import React, { useState, useEffect } from 'react';
import { Button, Grid, Icon, List, Menu, Segment } from 'semantic-ui-react';
import './Home.css';
import 'semantic-ui-css/semantic.min.css'; // Import Semantic UI CSS

const Home = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [showWelcome, setShowWelcome] = useState(true);

  const handleItemClick = (name) => setActiveItem(name);

  const members = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Johnson' },
  ];
  const contacts = [
    { id: 1, name: 'John Doe', phoneNumber: '123-456-7890' },
    { id: 2, name: 'Jane Smith', phoneNumber: '987-654-3210' },
    { id: 3, name: 'Michael Johnson', phoneNumber: '456-789-0123' },
  ];
  const handleCall = (phoneNumber) => {
    console.log(`Calling ${phoneNumber}`);
  };
  const persons = [
    { id: 1, name: 'John Doe', status: 'paid' },
    { id: 2, name: 'Jane Smith', status: 'unpaid' },
    { id: 3, name: 'Michael Johnson', status: 'paid' },
  ];
  const icons = [
    'user',
    'camera',
    'music',
    'film',
    'heart',
    'book',
    'code',
    'game',
    'travel',
    'food'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      <h1 className="title">FITNESS CLUB</h1>
      <Menu pointing secondary className="menu" style={{ justifyContent: 'center' }}>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={() => handleItemClick('Home')}
        />
        <Menu.Item
          name='Members'
          active={activeItem === 'Members'}
          onClick={() => handleItemClick('Members')}
        />
        <Menu.Item
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={() => handleItemClick('Contact')}
        />
        <Menu.Item
          name='Fee Dues'
          active={activeItem === 'Fee Dues'}
          onClick={() => handleItemClick('Fee Dues')}
        />
      </Menu>
      <div>
        <h1 className={`welcome-text${showWelcome ? '' : ' hidden'}`} style={{ marginTop: '20px', border: '1px solid', borderRadius: '4px', padding: '4px' }}>WELCOME</h1>
      </div>
      <Segment className="content">
        {activeItem === 'Home' && (
          <div className="home-container">
            <Grid columns={5} divided className="icon-grid">
              {icons.map((icon, index) => (
                <Grid.Column key={index}>
                  <Icon name={icon} size='big' />
                </Grid.Column>
              ))}
            </Grid>
          </div>
        )}
        {activeItem === 'Members' && (
          <div>
            <h2>Members</h2>
            <List divided relaxed>
              {members.map(member => (
                <List.Item key={member.id}>
                  <List.Icon name='user circle' size='large' verticalAlign='middle' />
                  <List.Content floated='left'>
                    <List.Header>{member.name}</List.Header>
                  </List.Content>
                  <List.Content floated='right'>
                    <Button icon color='blue' size='tiny'>
                      <Icon name='pencil' />
                    </Button>
                    <Button icon color='red' size='tiny'>
                      <Icon name='trash' />
                    </Button>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </div>
        )}
        {activeItem === 'Contact' && (
          <div>
            <h2>Contact List</h2>
            <List divided relaxed>
              {contacts.map(contact => (
                <List.Item key={contact.id}>
                  <List.Content floated='left'>
                    <List.Header>{contact.name}</List.Header>
                  </List.Content>
                  <List.Content floated='right'>
                    <Button icon color='green' size='tiny' onClick={() => handleCall(contact.phoneNumber)}>
                      <Icon name='phone' />
                    </Button>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </div>
        )}
        {activeItem === 'Fee Dues' && (
          <div>
            <h2>Fee Dues</h2>
            <List divided relaxed>
              {persons.map(person => (
                <List.Item key={person.id}>
                  <List.Content floated='left'>
                    <List.Header>{person.name}</List.Header>
                  </List.Content>
                  <List.Content floated='right'>
                    {person.status === 'paid' ? (
                      <Icon name='check' color='green' />
                    ) : (
                      <Icon name='times' color='red' />
                    )}
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </div>
        )}
      </Segment>
    </div>
  );
};

export default Home;
