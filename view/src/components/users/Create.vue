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
                <CInput type="text"/>
              </CFormGroup>
              <CInput
                type="text"
                description="Please enter Username."
                autocomplete="Username"
                label="Username"
                horizontal
                placeholder="Enter Username ..."
                v-model="name"
              />
               <CInput
                type="email"
                description="Please enter Email."
                autocomplete="Email"
                label="Email"
                horizontal
                placeholder="Enter Email ..."
                v-model="name"
              />
              <CInput
                type="password"
                description="Please enter user password."
                autocomplete="Password"
                label="Password"
                horizontal
                placeholder="Enter password ..."
                v-model="name"
              />
              <CInput
                type="password"
                description="Please confirm user password."
                autocomplete="Confirm Password"
                label="Confirm Password"
                horizontal
                placeholder="Confirm password ..."
                v-model="name"
              />
            <CSelect
                label="Select Role"
                size="sm"
                horizontal
                :options="options"
                placeholder="Please select user role"
                custom
              />

            
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton v-on:click="handle_role_creation" type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
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
  name:'Role_Create',
  data(){
    return{
      name:''
    }
  },
  methods:{
    handle_role_creation:function(){
      API.post(API_URL+'/role/create',JSON.stringify({name:this.name})).then(response=>{
        if(response.data.status===true){
          this.name="";
          this.$router.push('/role/all');
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