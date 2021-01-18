<template>
  <CContainer>
 

     <CRow>
      
      <CCol md="12">
        <CCard>
          <CCardHeader>
            <strong>Ledger Create</strong> Form
          </CCardHeader>
          <CCardBody>
            <CForm>

              <CRow>
              <CCol md="6">
              <CInput
                type="text"
                description="Please enter ledger name."
                autocomplete="Ledger Name"
                label="Ledger Name"
                horizontal
                placeholder="Enter Ledger Name..."
                v-model="name"
              />
              </CCol>

              <CCol md="6">
                <CInput
                    type="text"
                    description="Please enter ledger code."
                    autocomplete="Ledger Code (Optional)"
                    label="Ledger Code (Optional)"
                    horizontal
                    placeholder="Enter Ledger Code..."
                    v-model="name"
                />

              </CCol>
              </CRow>

              <CRow>
                <CCol md="6">
                  <CSelect
                      label="Category"
                      horizontal
                      :options="options"
                      placeholder="Please select"
                  />

                </CCol>
                <CCol md="6">

                  <CSelect
                      label="Sub Category"
                      horizontal
                      :options="options"
                      placeholder="Please select"
                  />
                </CCol>
              </CRow>

              <CRow>
                <CCol md="6">
                  <CSelect
                      label="Select Group"
                      horizontal
                      :options="options"
                      placeholder="Please select"
                  />
                </CCol>
                <CCol md="6">
                  <template v-for="(name, key) in radioNames">
                    <CRow form class="form-group" :key="name">
                      <CCol sm="3">
                        {{name}}
                      </CCol>
                      <CInputRadioGroup
                          class="col-sm-9"
                          :options="options"
                          :custom="key > 1"
                          :checked="`Option ${key}`"
                          :inline="key % 2 === 1"
                      />
                    </CRow>
                  </template>
                </CCol>
              </CRow>

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
      name:'',

      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label:'col-3', input:'col-9' },
      options: ['Active', 'Inactive'],
      selectOptions: [
        'Option 1', 'Option 2',
        {
          value: 'some value',
          label: 'Selected option'
        }
      ],
      selectedOption: 'some value',

      formCollapsed: true,

      radioNames: ['Status']
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