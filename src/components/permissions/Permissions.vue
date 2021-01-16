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
                :items="permissions"
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
import {API,API_URL} from '../../Config'
const fields = [
  { key: 'name', label: 'Name' },
  { key: 'guard_name', label: 'Guard' },
  { key: 'action', label: 'Action', sorter: false, filter: false}
]
export default {
  name:"Roles",
  data(){
    return{
      fields,
      permissions: [],
    }
  },
  mounted() {
    this.load_roles();
  },
  methods:{
    load_roles:function(){
      API.get(API_URL+'/role/all').then(response=>{
        this.roles=response.data.roles;
      });
    },
    delete_role:function(role_id){
      API.delete(API_URL+'/role/delete/'+role_id).then(response=>{
        if(response.data.status===true){
          this.load_roles();
          swal('Deleted!',response.data.message,'success')
        }
        else if(response.data.status===false){
          swal('Failed!',response.data.message,'error')
        }
      })
    }
  }
 
}
</script>