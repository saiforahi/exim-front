<template>
  <CContainer>
     <CRow>
      
      <CCol md="12">
        <CCard>
          <CCardHeader>
            <strong>Ledger Create</strong> Form
          </CCardHeader>
          <CCardBody>
            <CForm>

              <CRow>
              <CCol md="6">
              <CInput
                type="text"
                description="Please enter ledger name."
                autocomplete="Ledger Name"
                label="Ledger Name"
                horizontal
                placeholder="Enter Ledger Name..."
                v-model="name"
              />
              </CCol>

              <CCol md="6">
                <CInput
                    type="text"
                    description="Please enter ledger code."
                    autocomplete="Ledger Code (Optional)"
                    label="Ledger Code (Optional)"
                    horizontal
                    placeholder="Enter Ledger Code..."
                    v-model="name"
                />

              </CCol>
              </CRow>

              <CRow>
                <CCol md="6">
                  <CSelect
                      label="Category"
                      horizontal
                      :options="options"
                      placeholder="Please select"
                  />

                </CCol>
                <CCol md="6">

                  <CSelect
                      label="Sub Category"
                      horizontal
                      :options="options"
                      placeholder="Please select"
                  />
                </CCol>
              </CRow>

              <CRow>
                <CCol md="6">
                  <CSelect
                      label="Select Group"
                      horizontal
                      :options="options"
                      placeholder="Please select"
                  />
                </CCol>
                <CCol md="6">
                  <template v-for="(name, key) in radioNames">
                    <CRow form class="form-group" :key="name">
                      <CCol sm="3">
                        {{name}}
                      </CCol>
                      <CInputRadioGroup
                          class="col-sm-9"
                          :options="options"
                          :custom="key > 1"
                          :checked="`Option ${key}`"
                          :inline="key % 2 === 1"
                      />
                    </CRow>
                  </template>
                </CCol>
              </CRow>

              <CRow form class="form-group">
                <CCol tag="label" sm="3" class="col-form-label">
                  Bank, Fixed Asset, Supplier
                </CCol>
                <CCol sm="9">
                  <CInputCheckbox
                      v-for="(option) in options"
                      :key="option"
                      :label="option"
                      :value="option"
                      :name="option"
                      :checked=false
                      v-on:click="checkbox_click(option)"
                      :id="option"
                  />
                </CCol>
              </CRow>
              <div v-show="show_is_bank_form">
                <CRow>
                  <CCol md="5">
                    <CInput
                        type="text"
                        description="Please enter Bank name."
                        autocomplete="Bank Name"
                        label="Bank Name"
                        horizontal
                        placeholder="Enter Bank Name..."
                        v-model="name"
                    />
                  </CCol>
                  <CCol md="5">
                    <CInput
                        type="text"
                        description="Please enter branch name."
                        autocomplete="Branch Name"
                        label="Branch Name"
                        horizontal
                        placeholder=" Enter Branch Name..."
                        v-model="name"
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="5">
                    <CInput
                        type="text"
                        description="Please enter branch email."
                        autocomplete="Branch Email"
                        label="Branch Email"
                        horizontal
                        placeholder="Enter Branch Email..."
                        v-model="name"
                    />
                  </CCol>

                  <CCol md="5">
                    <CInput
                        type="text"
                        description="Please enter branch phone."
                        autocomplete="Branch Phone"
                        label="Branch Phone"
                        horizontal
                        placeholder=" Enter Branch Phone..."
                        v-model="name"
                    />

                  </CCol>
                  <CCOl md="2">
                    <CInput
                        type="checkbox"
                        label="Add Checkbook"
                        v-on:click="checkbook_click()"
                        id="checkbook"
                    />
                  </CCOl>
                </CRow>
                <div v-show="show_checkbook_form">
                  <CRow>
                    <CCol md="5">
                      <CInput
                          type="text"
                          description="Check Book No"
                          autocomplete="Check Book No"
                          label="Check Book No"
                          horizontal
                          placeholder=" Enter Check Book No..."
                          v-model="name"
                      />
                    </CCol>
                    <CCol md="5">
                      <CInput
                          type="text"
                          description="First Leaf"
                          autocomplete="First Leaf"
                          label="First Leaf"
                          horizontal
                          placeholder=" Enter First Leaf..."
                          v-model="name"
                      />
                    </CCol>
                    <CCol md="5">
                      <CInput
                          type="text"
                          description="Last Leaf"
                          autocomplete="Last Leaf"
                          label="Last Leaf"
                          horizontal
                          placeholder=" Enter Last Leaf..."
                          v-model="name"
                      />
                    </CCol>
                    <CCol md="5">
                      <CInput
                          type="text"
                          description="No of Leaf"
                          autocomplete="No of Leaf"
                          label="No of Leaf"
                          horizontal
                          placeholder=" Enter No of Leaf..."
                          v-model="name"
                      />
                    </CCol>
                  </CRow>
                </div>
              </div>
              <div v-show="show_is_fixed_asset">
                <CRow>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Please enter asset name."
                        autocomplete="Asset Name"
                        label="Asset Name"
                        horizontal
                        placeholder="Enter Asset Name..."
                    />

                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Please enter asset number."
                        autocomplete="Asset Number"
                        label="Asset Number"
                        horizontal
                        placeholder="Enter Asset Number..."
                    />

                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Please enter department name."
                        autocomplete="Department"
                        label="Department"
                        horizontal
                        placeholder="Enter Department Name..."
                    />

                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Please enter section name."
                        autocomplete="Section"
                        label="Section"
                        horizontal
                        placeholder="Enter Section Name..."
                    />

                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Location"
                        autocomplete="Location"
                        label="Location"
                        horizontal
                        placeholder="Enter Location"
                    />

                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Please enter supplier name."
                        autocomplete="Supplier Name"
                        label="Supplier Name"
                        horizontal
                        placeholder="Enter Supplier Name..."
                    />

                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Please enter  supplier address."
                        autocomplete=" Supplier Address"
                        label="Supplier Address"
                        horizontal
                        placeholder="Enter Supplier Address..."
                    />

                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Please enter phone number."
                        autocomplete="Phone Number"
                        label="Phone Number"
                        horizontal
                        placeholder="Enter Phone Number..."
                    />

                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Please enter model no."
                        autocomplete="Model No"
                        label="Model No"
                        horizontal
                        placeholder="Enter Model No..."
                    />

                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Please enter serial no."
                        autocomplete="Serial No"
                        label="Serial No"
                        horizontal
                        placeholder="Enter Serial No..."
                    />

                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Please enter price."
                        autocomplete="Price"
                        label="Price"
                        horizontal
                        placeholder="Price..."
                    />

                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Please enter servicing date."
                        autocomplete="Servicing Date"
                        label="Servicing Date"
                        horizontal
                        placeholder="Enter Servicing Date..."
                    />

                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Please enter life time ."
                        autocomplete="Life Time "
                        label="Life Time"
                        horizontal
                        placeholder="Enter Life Time..."
                    />

                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Please enter Capacity."
                        autocomplete="Capacity"
                        label="Capacity"
                        horizontal
                        placeholder="Capacity..."
                    />

                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Please enter warranty period."
                        autocomplete="Warranty Period"
                        label="Warranty Period"
                        horizontal
                        placeholder="Enter Warranty Period..."
                    />

                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Please enter warranty expired date."
                        autocomplete="Warranty Expired Date"
                        label="Warranty Expired Date"
                        horizontal
                        placeholder="Warranty Expired Date..."
                    />

                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CSelect
                        label="Accumulated Deprecation Ledger Name"
                        horizontal
                        :options="options"
                        placeholder="Please select"
                    />
                  </CCol>
                  <CCol md="6">
                    <CSelect
                        label="Deprecation Method"
                        horizontal
                        :options="options"
                        placeholder="Please select"
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CInput
                        type="number"
                        description="Please enter deprecation rate."
                        autocomplete="Deprecation Rate"
                        label="Deprecation Rate"
                        horizontal
                        placeholder="Enter Deprecation Rate..."
                    />

                  </CCol>
                  <CCol md="2">
                    <CInput
                        type="checkbox"
                        label="Is Transferable"

                    />

                  </CCol>
                </CRow>

                <hr>
                <CRow>
                  <CCol md="5">
                    <CInput
                        type="text"
                        description="Major Parts"
                        autocomplete="Major Parts"
                        label="Major Parts"
                        horizontal
                        placeholder="Major Parts..."
                    />

                  </CCol>
                  <CCol md="5">
                    <CInput
                        type="number"
                        description="Quantity."
                        autocomplete="Quantity"
                        label="Quantity"
                        horizontal
                        placeholder="Quantity..."
                    />

                  </CCol>
                  <CCol md="2">
                    <button class="btn btn-info">More +</button><i class="cib-addthis"></i>
                  </CCol>
                </CRow>

              </div>
              <div v-show="show_is_supplier">
                <CRow>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Supplier Name."
                        autocomplete="Supplier name"
                        label="Supplier Name"
                        horizontal
                        placeholder="Enter Supplier name..."
                    />
                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="email"
                        description="Supplier Email."
                        autocomplete="Supplier Email"
                        label="Supplier Email"
                        horizontal
                        placeholder="Enter Supplier Email..."
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Supplier Address."
                        autocomplete="Supplier Address"
                        label="Supplier Address"
                        horizontal
                        placeholder="Enter Supplier Address..."
                    />
                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Corporate Address."
                        autocomplete="Corporate Address"
                        label="Corporate Address"
                        horizontal
                        placeholder="Enter Corporate Address..."
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CSelect
                        label="Division"
                        horizontal
                        :options="options"
                        placeholder="Please select"
                    />
                  </CCol>
                  <CCol md="6">
                    <CSelect
                        label="District"
                        horizontal
                        :options="options"
                        placeholder="Please select"
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CSelect
                        label="Area"
                        horizontal
                        :options="options"
                        placeholder="Please select"
                    />
                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Postal / Zip Code."
                        autocomplete="Postal / Zip Code"
                        label="Postal / Zip Code"
                        horizontal
                        placeholder="Enter Postal / Zip Code..."
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Factory Address."
                        autocomplete="Factory Address"
                        label="Factory Address"
                        horizontal
                        placeholder="Enter Factory Address..."
                    />
                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Wirehouse Address."
                        autocomplete="Wirehouse Address"
                        label="Wirehouse Address"
                        horizontal
                        placeholder="Enter Wirehouse Address..."
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Supplier Mobile No."
                        autocomplete="Supplier Mobile No"
                        label="Supplier Mobile No"
                        horizontal
                        placeholder="Enter Supplier Mobile No..."
                    />
                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Supplier Phone No."
                        autocomplete="Supplier Phone No"
                        label="Supplier Phone No"
                        horizontal
                        placeholder="Enter Supplier Phone No..."
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CSelect
                        label="Area"
                        horizontal
                        :options="options"
                        placeholder="Please select"
                    />
                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Postal / Zip Code."
                        autocomplete="Postal / Zip Code"
                        label="Postal / Zip Code"
                        horizontal
                        placeholder="Enter Postal / Zip Code..."
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="5">
                    <CInput
                        type="text"
                        description="Supplied Item Name"
                        autocomplete="Supplied Item Name"
                        label="Supplied Item Name"
                        horizontal
                        placeholder="Supplied Item Name..."
                    />

                  </CCol>
                  <CCol md="5">
                    <CInput
                        type="number"
                        description="Supplied Item Quantity."
                        autocomplete="Supplied Item Quantity"
                        label="Supplied Item Quantity"
                        horizontal
                        placeholder="Supplied Item Quantity..."
                    />

                  </CCol>
                  <CCol md="2">
                    <button class="btn btn-info">More +</button><i class="cib-addthis"></i>
                  </CCol>
                </CRow>

                <hr>
                <CRow>
                  <CCol md="6">
                    <CInputFile
                        label="TIN"
                        horizontal
                    />
                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="TIN Number."
                        autocomplete="TIN Number"
                        label="TIN Number"
                        horizontal
                        placeholder="TIN Number..."
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="6">
                    <CInputFile
                        label="BIN"
                        horizontal
                    />
                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="BIN Number."
                        autocomplete="BIN Number"
                        label="BIN Number"
                        horizontal
                        placeholder="BIN Number..."
                    />
                  </CCol>
                </CRow>

                <CRow>
                  <CCol md="12">
                    <CInputFile
                        label="TL"
                        horizontal
                    />
                  </CCol>
                </CRow>

                <CRow>
                  <CCol md="12">
                    <CInputFile
                        label="NID"
                        horizontal
                    />
                  </CCol>

                </CRow>

                <CRow>
                  <CCol md="12">
                    <CInputFile
                        label="Incorporation Certificate"
                        horizontal
                    />
                  </CCol>

                </CRow>

                <br>
                <CRow>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Bank Name."
                        autocomplete="Bank Name"
                        label="Bank Name"
                        horizontal
                        placeholder="Enter Bank Name..."
                    />
                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Bank Branch Name."
                        autocomplete="Bank Branch Name"
                        label="Bank Branch Name"
                        horizontal
                        placeholder="Enter Bank Branch Name..."
                    />
                  </CCol>
                </CRow>

                <CRow>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Bank Account Name."
                        autocomplete="Bank Account Name"
                        label="Bank Account Name"
                        horizontal
                        placeholder="Enter Bank Account Name..."
                    />
                  </CCol>
                  <CCol md="6">
                    <CInput
                        type="text"
                        description="Bank Account Number."
                        autocomplete="Bank Account Number"
                        label="Bank Account Number"
                        horizontal
                        placeholder="Enter Bank Account Number..."
                    />
                  </CCol>
                </CRow>
                <hr>
                <CRow>
                  <CCol md="6" >
                    <CInputCheckbox
                        v-for="(vat_ait) in vat_aits"
                        :key="vat_ait"
                        :label="vat_ait"
                        :value="vat_ait"
                        :name="vat_ait"
                        :checked=false
                        :id="option"
                        inline
                    />
                  </CCol>
                </CRow>

              </div>
              <hr>
              <CRow>
                <CCol md="11">
                  <CTextarea
                      label="Details"
                      placeholder="Content..."
                      horizontal
                      rows="5"
                  />
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
          <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            &nbsp; <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name:'Role_Create',
  data(){
    return{
      name:'Ledger',
      horizontal: { label:'col-3', input:'col-9' },
      options: ['Is Bank', 'Is Fixed Asset','Is Supplier'],
      vat_aits:[' VAT Applicable','AIT Applicable'],
      selectedOption: '',
      formCollapsed: true,
      radioNames: ['Status'],
      show_is_bank_form: false,
      show_checkbook_form:false,
      show_is_fixed_asset: false,
      show_is_supplier: false

    }
  },
  methods:{
    checkbox_click(option){
      if (option === 'Is Bank'){
        if(document.getElementById(option).checked===true){
          this.show_is_bank_form=true;
        }
        else{
          this.show_is_bank_form=false;
        }
      }
      else if(option==="Is Fixed Asset"){
        if(document.getElementById(option).checked===true){
          this.show_is_fixed_asset=true;
        }
        else{
          this.show_is_fixed_asset=false;
        }
      }
      else if(option==="Is Supplier"){
        if(document.getElementById(option).checked===true){
          this.show_is_supplier=true;
        }
        else{
          this.show_is_supplier=false;
        }
      }
    },

    checkbook_click(){
      if (document.getElementById('checkbook').checked === true){
        this.show_checkbook_form = true;
      }
      else{
        this.show_checkbook_form = false;
      }
    }
  },



  mounted() {
    //console.log("check box names "+this.checkboxNames.length)
  }
}
</script>