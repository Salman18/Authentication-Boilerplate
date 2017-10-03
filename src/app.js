import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

state={ loggedIn: null };

 componentWillMount() {
   firebase.initializeApp({
   apiKey: 'AIzaSyAvMRjBYfjqCU0rtip9fhD60H7N0KAxXWA',
   authDomain: 'authentication-e4e27.firebaseapp.com',
   databaseURL: 'https://authentication-e4e27.firebaseio.com',
   projectId: 'authentication-e4e27',
   storageBucket: 'authentication-e4e27.appspot.com',
   messagingSenderId: '664151520318'
 });

 firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
   });
 }
renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <CardSection>
         <Button onPress={() => firebase.auth().signOut()}>
          Log Out
         </Button>
       </CardSection>
       );
    case false:
        return <LoginForm />;
    default:
      return (<Spinner
      size='small'
      style={styles.spinnerStyle}
      />);

  }
}
 render() {
    return (
      <View>
      <Header headerText="Authentication" />
      {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
  justifyContent: 'center',
  alignItems: 'center'
 }
};

export default App;
