<template>
  <CContainer>
    <CRow>
      <CCol>
        <router-link to="/account/category/create"><CButton shape="square" color="primary">Add</CButton></router-link>
      </CCol>
    </CRow>
    <hr/>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <h3>Category</h3>
          </CCardHeader>
          <CCardBody>
            <CDataTable
               
                :fields="fields"
                table-filter
                column-filter
                pagination
                :itemsPerPage="10"
                footer
                striped hover itemsPerPageSelect sorter=""
                clickableRows
            >
            <template #action="{item}">
              <td class="py-2">
                <CButton color="primary" variant="outline" square size="sm">Edit</CButton> <CButton  color="danger" variant="outline" square size="sm">Delete</CButton>
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
import swal from 'sweetalert'
import {API,API_URL} from '../../../Config'
const fields = [
  { key: 'name', label: 'Name' },
  { key: 'guard_name', label: 'Guard' },
  { key: 'action', label: 'Action', sorter: false, filter: false}
]
export default {
  name:"Categories",
 
 data(){
    return{
      fields,
     
    }
  }
}
</script>