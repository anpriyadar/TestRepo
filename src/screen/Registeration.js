
import React, {Component} from 'react';

import {
  Navigation
} from 'react-native-navigation';
 import {View} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Toast
} from 'native-base';



import {
  registerUser
} from '../redux/actions/registerUserAction';

import {
  connect
} from 'react-redux';


 class Registeration extends Component{
     constructor(props) {
       super(props);
       this.state={
         email:'',
         password: ''
       }
       this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
     }

     onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
       if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
         if (event.id == 'CloseRegisterModal') {
           Navigation.dismissModal({
             animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
           });
         }
       }
     }
     setEmail(em){
       this.setState({
         email:em
       })

     }

     setPassword(pwd) {
       this.setState({
         password:pwd
       })
     }

     displayErrorMessage(){
       if (this.props.RegisterationError){
return(
                <View>
                  < Text style={{color:'red'}}> 
                  There was an Error while registering User, Please try again </Text>
                  </View>
       )
       } else if (this.props.RegisterationSucess) {
        return ( < View >
                  < Text style={{color:'green'}}> 
                  Registeration Sucess, Please countinue with Login </Text>
        </View> )
       }
       
     }

  render() {
    const {
      email,password
    } = this.state;
    console.log("REGStration response", this.props.NewregisterUser)
    console.log("REGStration response sucess", this.props.RegisterationSucess)
     console.log("REGStration response fail", this.props.RegisterationError)
    return (
       <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input enablesReturnKeyAutomatically ={true} onChangeText={(em)=>this.setEmail(em)} enablesReturnKeyAutomatically/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input enablesReturnKeyAutomatically ={true} onChangeText={(pwd)=>this.setPassword(pwd)}/>
            </Item>
          </Form>
          <Button block style={{marginTop:20,marginHorizontal:10}} onPress={()=>this.props.registerUser(email,password)}>
            <Text>Register Me!</Text>
          </Button> 

         { this.displayErrorMessage()}
          

        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  NewregisterUser: state.RegisterUserReducer.registerUserResponse,
  RegisterationSucess: state.RegisterUserReducer.registerationSucess,
  RegisterationError: state.RegisterUserReducer.registerationError
})

const mapDispatchToProps = {
  registerUser
}
export default connect(mapStateToProps,mapDispatchToProps)(Registeration)

