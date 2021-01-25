<template>
    <CContainer>
        <h3>Create a New Company</h3>
        <hr/>
        <CRow alignVertical>
            <CCol md="6">
                <CCard>
                    <CCardHeader>
                        <strong>Company</strong> Details
                    </CCardHeader>
                    <CForm>
                        <CCardBody>
                        <CInput
                            type="text"
                            description="Please enter company name."
                            autocomplete="companyName"
                            label="Company Name *"
                            placeholder="Enter company name..."
                            required
                            was-validated
                            v-model="companyName"
                        />
                        <CInput
                            type="email"
                            description="Please enter company email."
                            autocomplete="companyEmail"
                            label="Company Email *"
                            placeholder="Enter company email..."
                            required
                            was-validated
                            v-model="companyEmail"
                        />
                        <CInput
                            type="text"
                            description="Please enter company phone number."
                            autocomplete="companyPhone"
                            label="Company Phone *"
                            required
                            was-validated
                            placeholder="Enter company phone..."
                            v-model="companyPhone"
                        />
                        <CInput
                            type="text"
                            description="Please enter company incorporation number."
                            autocomplete="inc_no"
                            label="Incorporation Number *"
                            required
                            was-validated
                            placeholder="Enter company's incorporation number..."
                            v-model="inc_no"
                        />
                        <CInput
                            type="text"
                            description="Please enter company's trade license number."
                            autocomplete="trade_license_no"
                            label="Trade License Number *"
                            required
                            was-validated
                            placeholder="Enter company's trade license number..."
                            v-model="trade_license_no"
                        />
                        <CInput
                            type="text"
                            description="Please enter company TIN number."
                            autocomplete="TIN"
                            label="TIN *"
                            required
                            was-validated
                            placeholder="Enter company's TIN number..."
                            v-model="TIN"
                        />
                        <CInput
                            type="text"
                            description="Please enter company BIN number."
                            autocomplete="BIN"
                            label="BIN *"
                            required
                            was-validated
                            placeholder="Enter company's BIN number..."
                            v-model="BIN"
                        />
                        </CCardBody>
                        <CCardFooter>
                            <CButton type="button" v-on:click="handle_submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
                        </CCardFooter>
                    </CForm>
                </CCard>
            </CCol>
            <CCol md="6">
                <CCard>
                    <CCardHeader>
                        <strong>Admin</strong> Details
                    </CCardHeader>
                    <CForm novalidate>
                        <CCardBody>
                        <CInput
                            type="text"
                            description="Please enter admin name."
                            autocomplete="adminName"
                            label="Admin Name *"
                            placeholder="Enter admin name..."
                            required
                            was-validated
                            v-model="adminName"
                        />
                        <CInput
                            type="email"
                            description="Please enter admin email."
                            autocomplete="email"
                            label="Email"
                            placeholder="Enter Email..."
                            required
                            was-validated
                            v-model="adminEmail"
                        />
                        <CInput
                            type="password"
                            description="Please enter admin's password."
                            autocomplete="current-password"
                            label="Password"
                            placeholder="Enter Password..."
                            required
                            was-validated
                            v-model="adminPassword"
                        />
                        </CCardBody>
                    </CForm>
                </CCard>
            </CCol>
        </CRow>
    </CContainer>
</template>
<script>
import swal from 'sweetalert'
import { API, API_URL } from '../../Config'
export default {
    name: 'CreateCompany',
    data(){
        return{
            valid_form:false,
            companyName:'',
            TIN:'',
            BIN:'',
            inc_no:'',
            trade_license_no:'',
            companyEmail:'',
            companyPhone:'',
            adminName: '',
            adminEmail:'',
            adminPassword: '',
            adminPasswordError: '',
            companyEmailError:''
        }
    },
    watch:{
        companyName:function(){
            if(this.companyName!==undefined && this.companyName){
                this.valid_form=true;
            }
        },
        adminName:function(){
            if(this.adminName!==undefined && this.adminName){
                this.valid_form=true;
            }
        },
        adminEmail:function(){
            if(this.adminEmail!==undefined && this.adminEmail){
                this.valid_form=true;
            }
        },
        adminPassword:function(){
            if(this.adminPassword!==undefined && this.adminPassword && this.adminPassword.length>=8){
                this.adminPasswordError=false;
                this.valid_form=true;
            }
            else{
                this.adminPasswordError=true;
                this.valid_form=false;
            }
        },
        companyEmail:function(){
            if(this.companyEmail!==undefined && this.companyEmail){
                this.companyEmailError=true;
                this.valid_form=true;
            }
        }
    },
    methods:{
        handle_submit:function(){
            if(this.valid_form){
                if(this.$route.params.company){
                this.update_company();
            }
                else{
                    this.create_company();
                }
            }
        },
        update_company:function(){
            //console.log(JSON.stringify({companyName:this.companyName,companyEmail:this.companyEmail,companyPhone:this.companyPhone,inc_no:this.inc_no,trade_license_no:this.trade_license_no,TIN:this.TIN,BIN:this.BIN,adminName:this.adminName,adminEmail:this.adminEmail,adminPassword:this.adminPassword}))
            API.put(API_URL+'/company/update/'+this.$route.params.company.id,JSON.stringify({companyName:this.companyName,companyEmail:this.companyEmail,companyPhone:this.companyPhone,inc_no:this.inc_no,trade_license_no:this.trade_license_no,TIN:this.TIN,BIN:this.BIN,adminName:this.adminName,adminEmail:this.adminEmail,adminPassword:this.adminPassword})).then(response=>{
                if(response.data.status===true){
                    this.reset_form();
                    swal('Updated!',response.data.message,'success').then((value)=>{
                        this.$router.go(-1);
                    })
                }
                else if(response.data.status===false){
                    swal('Failed',response.data.message,'error')
                }
            }).catch(error=>{
                console.log(error)
            })
        },
        create_company:function(){
            //console.log(JSON.stringify({companyName:this.companyName,companyEmail:this.companyEmail,companyPhone:this.companyPhone,inc_no:this.inc_no,trade_license_no:this.trade_license_no,TIN:this.TIN,BIN:this.BIN,adminName:this.adminName,adminEmail:this.adminEmail,adminPassword:this.adminPassword}))
             API.post(API_URL+'/company/create',JSON.stringify({companyName:this.companyName,companyEmail:this.companyEmail,companyPhone:this.companyPhone,inc_no:this.inc_no,trade_license_no:this.trade_license_no,TIN:this.TIN,BIN:this.BIN,adminName:this.adminName,adminEmail:this.adminEmail,adminPassword:this.adminPassword})).then(response=>{
                if(response.data.status===true){
                    this.reset_form();
                    swal('Created!',response.data.message,'success')
                }
                else if(response.data.status===false){
                    swal('Failed',response.data.message,'error')
                }
            }).catch(error=>{

            })
        },
        reset_form:function(){
            this.BIN="";
            this.TIN="";
            this.trade_license_no="";
            this.companyEmail="";
            this.companyPhone="";
            this.companyName="";
            this.adminName="";
            this.adminPassword="";
            this.adminEmail="";
            this.inc_no="";
        }
    },
    mounted(){
        if(this.$route.params.company!==undefined){
            console.log(this.$route.params.company)
            this.companyName=this.$route.params.company.name
            this.companyEmail=this.$route.params.company.email
            this.companyPhone=this.$route.params.company.phone
            this.TIN=this.$route.params.company.TIN
            this.BIN=this.$route.params.company.BIN
            this.inc_no=this.$route.params.company.inc_no
            this.trade_license_no=this.$route.params.company.trade_license_no
            API.get(API_URL+'/company/admin/'+this.$route.params.company.id).then(response=>{
                this.adminName=response.data.admin.name;
                this.adminEmail=response.data.admin.email;
            })
        }
    }
}
</script>