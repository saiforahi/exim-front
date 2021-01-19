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
                    <CForm novalidate>
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
                        </CCardBody>
                        <CCardFooter>
                            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
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
                            description="Please enter your password."
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
export default {
    name: 'CreateCompany',
    data(){
        return{
            companyName:'',
            adminName: '',
            adminEmail:''
        }
    }
}
</script>