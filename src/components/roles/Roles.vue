<template>
  <CContainer>
    <CRow v-if="canCreateRole===true">
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
                striped hover itemsPerPageSelect sorter=""
                clickableRows
            >
            <template #action="{item}">
              <td class="py-2">
                <CButton v-on:click="goToEditRole(item)" color="primary" variant="outline" square size="sm">Edit</CButton> <CButton v-on:click="delete_role(item.id)" color="danger" variant="outline" square size="sm">Delete</CButton>
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
import {can,hasRole} from '../../Config'
const fields = [
  { key: 'name', label: 'Name' },
  { key: 'guard_name', label: 'Guard' },
  { key: 'action', label: 'Action',_style:'width:20%', sorter: false, filter: false}
]
export default {
  name:"Roles",
  data(){
    return{
      fields,
      roles: [],
      canCreateRole:false
    }
  },
  mounted() {
    this.load_roles();
    this.canCreateRole=can('create roles')?can('create roles'):hasRole('super-admin');
  },
  methods:{
    goToEditRole:function(role){
      this.$router.push({ name: 'Edit_Role', params: { role: role } })
    },
    load_roles:function(){
      API.get(API_URL+'/role/all').then(response=>{
        console.log(response.data.roles)
        this.roles=response.data.roles;
      });
    },
    delete_role:function(role_id){
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this  record!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(willDelete=>{
        if(willDelete){
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
      })
    }
  }
 
 }
</script>