<template>
  <CContainer>
    <CRow>
      <CCol>
        <router-link to="/account/sub_category/create"><CButton shape="square" color="primary">Add</CButton></router-link>
      </CCol>
    </CRow>
    <hr/>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <h3>Sub Categories</h3>
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
                <CButton color="primary" variant="outline" square size="sm">Edit</CButton> <CButton v-on:click="delete_role(item.id)" color="danger" variant="outline" square size="sm">Delete</CButton>
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

import {API,API_URL} from '../../../Config'
const fields = [
  { key: 'name', label: 'Name' },
  { key: 'guard_name', label: 'Guard' },
  { key: 'action', label: 'Action', sorter: false, filter: false}
]
export default {
  name:"SubCategory_Create",
  data(){
    return{
      fields,

    }
  },
  mounted() {

  }

 
 }
</script>