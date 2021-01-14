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
                :itemsPerPage="10"
                footer
                striped hover itemsPerPageSelect
                clickableRows
            >
            <template #edit="{item}">
              <td class="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  square
                  size="sm"
                >
                  Edit
                </CButton>
              </td>
            </template>
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
  { key: 'guard_name', label: 'Guard' },
  'Action'
  
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
    });
  }
}
</script>