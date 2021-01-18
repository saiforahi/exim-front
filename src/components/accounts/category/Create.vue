<template>
  <CContainer>
 

     <CRow>
      
      <CCol md="6">
        <CCard>
          <CCardHeader>
            <strong>Category Create</strong> Form
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                type="text"
                description="Please enter category name."
                autocomplete="Category Name"
                label="Category Name"
                horizontal
                placeholder="Enter Category Name..."
                v-model="name"
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

import {API_URL,API} from '../../../Config'
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