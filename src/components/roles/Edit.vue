<template>
  <CContainer>
     <CRow>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            <strong>Role Edit</strong> Form
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                type="text"
                description="Please enter role name."
                autocomplete="Role Name"
                label="Role Name"
                horizontal
                placeholder="Enter Role Name..."
                v-model="name"
              />
            
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton v-on:click="handle_role_update" type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            &nbsp;<CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
       
        
      
      </CCol>
    </CRow>
  </CContainer>
</template>
<script>
import swal from 'sweetalert';
import { API, API_URL } from '../../Config';
export default {
  name:"Roles",
  data(){
    return{
      valid_form:false,
      name:''
    }
  },
  watch:{
    name:function(){
      if(this.name!==undefined && this.name){
        this.valid_form=true;
      }
    }
  },
  mounted(){
    if(this.$route.params.role===undefined){
      this.$router.push('/role/all');
    }
    else{
      this.name=this.$route.params.role.name
    }
  },
  methods:{
    handle_role_update:function(){
      if(this.valid_form){
        API.put(API_URL+'/role/update/'+this.$route.params.role.id,JSON.stringify({name:this.name})).then(response=>{
          if(response.data.status===true){
            swal('Updated',response.data.message,'success').then(()=>{
              this.$router.push('/role/all');
            })
          }
        })
      }
    }
  }
}
</script>