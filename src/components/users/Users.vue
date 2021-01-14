<template>
  <CContainer>
    <CRow>
      <CCol>
        <router-link to="/user/create"><CButton shape="square" color="primary">Add</CButton></router-link>
      </CCol>
    </CRow>
    <hr/>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <h3>Users</h3>
          </CCardHeader>
          <CCardBody>
            <CDataTable
                :items="users"
                :fields="fields"
                table-filter
                column-filter
                pagination
                :itemsPerPage="10"
                footer
                striped hover itemsPerPageSelect
                clickableRows
            >
          
            </CDataTable>
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
  { key: 'username', label: 'Username'},
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  'Action'
  
]
export default {
  name:"Users",
  data(){
    return{
      fields,
      users: [],
    }
  },
  mounted() {
    API.get(API_URL+'/user/all').then(response=>{
      this.users = response.data.users;
      console.log(this.users)
    });
  }
}
</script>