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
import {PUBLIC_API,API_URL, TOKEN,API} from '../../Config'
import swal from 'sweetalert'
export default {
    name:'Login',
    data(){
      return{
        username:'saiforahi@gmail.com',
        password:'12345678'
      }
    },
    methods:{
      handle_login_submit:function(){
        this.setSession({});
        this.$router.push('/dashboard');
        // PUBLIC_API.post(API_URL+'/login',JSON.stringify({username:this.username,password:this.password})).then(public_response=>{
        //   console.log(public_response.data);
        //   if(public_response.data.status===true){
        //     localStorage.setItem(TOKEN,public_response.data.api_token)
        //     API.get(API_URL+'/user/details').then(auth_response=>{
        //       console.log(auth_response.data);
        //       this.setSession(auth_response.data);
        //       this.$router.push('/dashboard');
        //     })
        //   }
        //   else if(public_response.data.status===false){
        //     swal('Failed',response.data.message,'error')
        //   }
        // }).catch(error=>{
        //   console.log(error)
        //   swal('Error',error.message,'error');
        // })
      },
      setSession:function(data) {
        //const payload = <JWTPayload>jwt_decode(token);
        //console.log(authResult);
        //const expiresAt = moment.unix(payload.exp);
        localStorage.setItem(TOKEN,'public_response.data.api_token')
        localStorage.setItem('email', 'abc@mail.com');
        localStorage.setItem('name', 'ABC');
        localStorage.setItem('phone', '12345678');
        //localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
      }
    }
}
</script>