<template>
  <CContainer>
    <CRow v-if="canCreateCompany===true">
      <CCol>
        <router-link to="/company/create"><CButton shape="square" color="primary">Add</CButton></router-link>
      </CCol>
    </CRow>
    <hr/>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <h3>Companies</h3>
          </CCardHeader>
          <CCardBody>
            <CDataTable
                :items="companies"
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
import swal from 'sweetalert'
import { API, API_URL, can, hasRole } from '../../Config'
const fields = [
  { key: 'name', label: 'Name' },
  { key: 'admin', label: 'Admin' },
  { key: 'action', label: 'Action', sorter: false, filter: false}
]
export default {
    name: 'Companies',
    data(){
        return{
            fields,
            companies:[],
            canCreateCompany:false
        }
    },
    mounted(){
        this.canCreateCompany=can('create companies')?can('create companies'):hasRole('super-admin');
        this.loadCompanies();
    },
    methods:{
        loadCompanies:function(){
            API.get(API_URL+'/company/all').then(response=>{
                if(response.data.status===true){
                    this.companies=response.data.companies
                }
                else if(response.data.status===false){
                    swal('Error',response.data.message,'error')
                }
            }).catch(error=>{
                console.log(error.message)
            })
        }
    }
}
</script>