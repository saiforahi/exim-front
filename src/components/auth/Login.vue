<template>
    <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="5">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your <strong>EXIM</strong> account</p>
                  <CInput placeholder="Username" autocomplete="username email" v-model="username">
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                    v-model="password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton v-on:click="handle_login_submit" color="primary" class="px-4">Login</CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0">Forgot password?</CButton>
                      <!-- <CButton color="link" class="d-lg-none">Register now!</CButton> -->
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
<script>
import {PUBLIC_API,API_URL} from '../../Config'
export default {
    name:'Login',
    data(){
      return{
        username:'',
        password:''
      }
    },
    methods:{
      handle_login_submit:function(){
        PUBLIC_API.post(API_URL+'/login',JSON.stringify({username:this.username,password:this.password})).then(response=>{
          if(response.data.status===true){
            this.$router.push('/dashboard');
          }
          else if(response.data.status===false){

          }
        })
      }
    }
}
</script>