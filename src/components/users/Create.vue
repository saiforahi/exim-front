<template>
  <CContainer>
 

     <CRow>
      
      <CCol md="6">
        <CCard>
          <CCardHeader>
            <strong>User Create</strong> Form
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CFormGroup>
                <label>Name</label>
                <CInput type="text"
                v-model="name"
                />
              </CFormGroup>
              <CInput
                type="text"
                description="Please enter Username."
                autocomplete="Username"
                label="Username"
                horizontal
                placeholder="Enter Username ..."
                v-model="username"
              />
               <CInput
                type="email"
                description="Please enter Email."
                autocomplete="Email"
                label="Email"
                horizontal
                placeholder="Enter Email ..."
                v-model="email"
              />
              <CInput
                type="text"
                description="Please enter Phone no."
                autocomplete="Phone"
                label="Phone"
                horizontal
                placeholder="Enter Phone no ..."
                v-model="phone"
              />
              <CInput
                type="password"
                description="Please enter user password."
                autocomplete="Password"
                label="Password"
                horizontal
                placeholder="Enter password ..."
                v-model="password"
              />
              <CInput
                type="password"
                description="Please confirm user password."
                autocomplete="Confirm Password"
                label="Confirm Password"
                horizontal
                placeholder="Confirm password ..."
               
              />
            <!-- <CSelect
                label="Select Role"
                size="sm"
                horizontal
                :options="options"
                placeholder="Please select user role"
                custom
              /> -->

            
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton v-on:click="handle_user_creation" type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            &nbsp;<CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
       
        
      
      </CCol>
    </CRow>
  </CContainer>
</template>
<script>

import {API_URL,API} from '../../Config'
import swal from 'sweetalert'
export default {
  name:'User_Create',
  data(){
    return{
      name:'',
      username:'',
      email:'',
      phone:'',
      password:'',

     

    }
  },
  methods:{
    handle_user_creation:function(){
      let data=JSON.stringify({name:this.name,username:this.username,email:this.email,password:this.password,phone:this.phone})
      console.log(data);
      API.post(API_URL+'/user/store',data).then(response=>{
        if(response.data.status===true){
          this.name="";
          this.username="";
          this.email="";
          this.password="";
          this.phone="";
          this.password="";
          this.$router.push('/user/all_users');
          swal('Created!',response.data.message,'success');
        }
        else if(response.data.status===false){
          swal('Failed!',response.data.message,'error');
        }
      }).catch(error=>{
        console.log(error.message);
      })
    }
  }
}

</script>