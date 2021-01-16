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
            <template #action="{item}">
              <td class="py-2">
                <CButton color="primary" v-on:click="delete_user(item.id)" variant="outline" square size="sm">Edit</CButton> <CButton color="danger" variant="outline" square size="sm">Delete</CButton>
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
import swal from 'sweetalert'
const fields = [
  { key: 'name', label: 'Name' },
  { key: 'username', label: 'Username'},
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'action', label: 'Action', sorter: false, filter: false}
  
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
    API.get(API_URL+'/user/all_users').then(response=>{
      this.users = response.data.users;
      
    });
  },
  
    delete_user:function(user_id){
      API.delete(API_URL+'/user/delete'+user_id).then(response=>{
        if(response.data.status === true){
          swal('Deleted !',response.data.message,'success')
        }
        else if(response.data.status===false){
          swal('Failed!',response.data.message,'error')
        }
      })
    }
  
}
</script>