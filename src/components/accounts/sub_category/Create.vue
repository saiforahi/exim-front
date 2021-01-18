<template>
  <CContainer>
     <CRow>
      <CCol md="8">
        <CCard>
          <CCardHeader>
            <strong>Sub Category Create</strong> Form
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                type="text"
                description="Please enter sub_category name."
                autocomplete="SubCategory Name"
                label="SubCategory Name"
                horizontal
                placeholder="Enter SubCategory Name..."
                v-model="name"
              />
              <CSelect
                  label="Category"
                  horizontal
                  :options="options"
                  placeholder="Please select"
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
  name:'SubCategory_Create',
  data(){
    return{
      name:''
    }
  }
}

</script>