import {
  Navigation
} from 'react-native-navigation';

import React, {Component} from 'react';

import {
  StyleSheet,
} from 'react-native';

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Subtitle
} from 'native-base';
import {connect} from 'react-redux';
import {
  Signin
} from '../redux/actions/authAction'

import Icon from 'react-native-vector-icons/dist/Feather';

class Login extends Component{
  
   constructor(props) {
     super(props);
     this.state={
       username:'',
       password:''
     }
     this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
   }


    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
      if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
        if (event.id == 'Register') { // this is the same id field from the static navigatorButtons definition
        //  Navigation.showModal({
        //    screen: 'RegisterationScreen',
        //    title: 'Registeration',
        //    navigatorButtons: {
        //      rightButtons: [{
        //        title: 'Close', // for a textual button, provide the button title (label)
        //        buttonColor: '#361F00',
        //        id: 'CloseRegisterModal', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        //        disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
        //        buttonFontSize: 18, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        //      }],
        //    }
        //  })
        

            this.props.navigator.push({
              screen: 'RegisterationScreen',
              title: 'Registeration',
              //animated: false,
              //animationType: 'fade',
              //backButtonHidden:true
            })
        }
        if (event.id == 'CloseRegisterModal'){
          Navigation.dismissModal({
            animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
          });
        }
    }
  }

  updateUsername(userName){
    this.setState({
      username: userName
    })

  }

  updatePassword(password){
    this.setState({
      password: password
    })

  }

  render() {

    const {username,password}= this.state
    const {
      loginResponse, isLoginSucess
    } = this.props
    console.log("SINin respose-", loginResponse)
    console.log("SINin respose true/flase-", isLoginSucess)
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input  onChangeText={(username)=>this.updateUsername(username)}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(password)=>this.updatePassword(password)}/>
            </Item>
          </Form>
          < Button block style = {
            {
              marginTop: 20,
              marginHorizontal: 10
            }
          }
          onPress = {
            () => this.props.Signin(username, password)
          } >
            <Text>SignIn</Text>
            <Icon name="activity" size={15}  />
          </Button>

         
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


const mapStateToProps = state => ({
  loginResponse: state.SignInReducer.LognResponse,
  isLoginSucess: state.SignInReducer.isSignInSucess
})

const mapDispatchToProps = {
  Signin
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
