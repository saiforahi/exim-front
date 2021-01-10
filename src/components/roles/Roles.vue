<template>
  <CContainer>
    <CRow>
      <CCol>
        <router-link to="/role/create"><CButton shape="square" color="primary">Add</CButton></router-link>
      </CCol>
    </CRow>
    <hr/>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <h3>Roles</h3>
          </CCardHeader>
          <CCardBody>
            <CDataTable
                :items="roles"
              :fields="fields"
                table-filter
                column-filter
                pagination
                :itemsPerPage="1"
                footer
                striped hover itemsPerPageSelect
                clickableRows
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>
<script>
import {API,API_URL} from '../../Config'
const fields = [
  { key: 'name', label: 'Name' },
  { key: 'guard_name', label: 'Guard' },
  'status'
]
export default {
  name:"Roles",
  data(){
    return{
      fields,
      roles: [],
    }
  },
  mounted() {
    API.get(API_URL+'/role/all').then(response=>{
      this.roles=response.data.roles;
    })
  }
}
</script>