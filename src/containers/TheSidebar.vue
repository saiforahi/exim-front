<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon 
        class="c-sidebar-brand-full" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 556 134"
      />
      <CIcon 
        class="c-sidebar-brand-minimized" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>
    <CSidebarNav>
      <CSidebarNavItem icon="cil-speedometer" name="Dashboard"></CSidebarNavItem>
      <CSidebarNavDropdown icon="cil-user" name="Role Management">
        <CSidebarNavItem name="Roles" to="/role/all"></CSidebarNavItem>
        
      </CSidebarNavDropdown>

        <CSidebarNavDropdown icon="cil-user" name="User Management">
        <CSidebarNavItem name="Users" to="/user/all"></CSidebarNavItem>
        
      </CSidebarNavDropdown>

      <CSidebarNavDropdown name="Accounts" icon="cil-calculator">
        <CSidebarNavDropdown name="Master">
          <CSidebarNavItem name="Category"></CSidebarNavItem>
          <CSidebarNavItem name="Sub Category"></CSidebarNavItem>
          <CSidebarNavItem name="Groups"></CSidebarNavItem>
          <CSidebarNavItem name="Ledger"></CSidebarNavItem>
          <CSidebarNavItem name="Cost-Categories"></CSidebarNavItem>
          <CSidebarNavItem name="Cost-Center"></CSidebarNavItem>
          <CSidebarNavItem name="Type"></CSidebarNavItem>
           <CSidebarNavItem name="Customer"></CSidebarNavItem>
          <CSidebarNavItem name="Supplier"></CSidebarNavItem>
        </CSidebarNavDropdown>
        <CSidebarNavDropdown name="Transaction">
          <CSidebarNavItem name="Payment Voucher"></CSidebarNavItem>
          <CSidebarNavItem name="Received Voucher"></CSidebarNavItem>
          <CSidebarNavItem name="Contra Voucher"></CSidebarNavItem>
          <CSidebarNavItem name="Journal Voucher"></CSidebarNavItem>
          <CSidebarNavItem name="Reversing Journal"></CSidebarNavItem>
          <CSidebarNavItem name="Cash In Transit Voucher"></CSidebarNavItem>
        </CSidebarNavDropdown>
        <CSidebarNavDropdown name="Report">
          <CSidebarNavItem name="Financial Report"></CSidebarNavItem>
          <CSidebarNavItem name="Ledger Summary"></CSidebarNavItem>
          <CSidebarNavItem name="Group Summary"></CSidebarNavItem>
          <CSidebarNavItem name="Trail Balance"></CSidebarNavItem>
          <CSidebarNavItem name="Day Book"></CSidebarNavItem>
          <CSidebarNavItem name="Chart of Accounts"></CSidebarNavItem>
          <CSidebarNavItem name="Cost Center Report"></CSidebarNavItem>
          <CSidebarNavItem name="Receipt Payment Statement"></CSidebarNavItem>
          <CSidebarNavItem name="Budget Variance Report"></CSidebarNavItem>
          <CSidebarNavItem name="Interest Report"></CSidebarNavItem>
          <CSidebarNavItem name="VAT Report"></CSidebarNavItem>
          <CSidebarNavItem name="Exceptional Report"></CSidebarNavItem>
        </CSidebarNavDropdown>
        <CSidebarNavDropdown name="Mushak">
          <CSidebarNavItem name="Mushak 6.3"></CSidebarNavItem>
          <CSidebarNavItem name="Mushak 6.7"></CSidebarNavItem>
          <CSidebarNavItem name="Mushak 6.8"></CSidebarNavItem>
          <CSidebarNavItem name="Mushak 9.1"></CSidebarNavItem>
        </CSidebarNavDropdown>
      </CSidebarNavDropdown>
      <CSidebarNavDropdown name="Inventory" icon="cil-puzzle">
        <CSidebarNavDropdown name="Master">
          <CSidebarNavItem name="Items"></CSidebarNavItem>
          <CSidebarNavItem name="Types"></CSidebarNavItem>
          <CSidebarNavItem name="Category"></CSidebarNavItem>
          <CSidebarNavItem name="Sub Category"></CSidebarNavItem>
          <CSidebarNavItem name="Group"></CSidebarNavItem>
          <CSidebarNavItem name="Unit of Measures"></CSidebarNavItem>
          <CSidebarNavItem name="Brand"></CSidebarNavItem>
          <CSidebarNavItem name="Location"></CSidebarNavItem>
        </CSidebarNavDropdown>
        <CSidebarNavDropdown name="Transaction">
          <CSidebarNavItem name="Purchase Order"></CSidebarNavItem>
          <CSidebarNavItem name="Purchase Invoice"></CSidebarNavItem>
          <CSidebarNavItem name="Purchase Return"></CSidebarNavItem>
          <CSidebarNavItem name="Sales Order"></CSidebarNavItem>
          <CSidebarNavItem name="Sales Invoice"></CSidebarNavItem>
          <CSidebarNavItem name="Sales Return"></CSidebarNavItem>
          <CSidebarNavItem name="Stock Transfer"></CSidebarNavItem>
          <CSidebarNavItem name="Delivery Note"></CSidebarNavItem>
        </CSidebarNavDropdown>
        <CSidebarNavDropdown name="Report">
          <CSidebarNavItem name="Stock Report"></CSidebarNavItem>
          <CSidebarNavItem name="Sales Invoice List"></CSidebarNavItem>
          <CSidebarNavItem name="Sales Cancellation List"></CSidebarNavItem>
          <CSidebarNavItem name="Sales Summary"></CSidebarNavItem>
          <CSidebarNavItem name="Purchase Invoice List"></CSidebarNavItem>
          <CSidebarNavItem name="Purchase Cancellation List"></CSidebarNavItem>
          <CSidebarNavItem name="Purchase Summary"></CSidebarNavItem>
        </CSidebarNavDropdown>
      </CSidebarNavDropdown>
      <CSidebarNavItem name="Pos" icon="cil-chart-pie"></CSidebarNavItem>
      <CSidebarNavDropdown name="HRM" icon="cil-cursor">
          <CSidebarNavDropdown name="Master">
            <CSidebarNavItem name="HRM"></CSidebarNavItem>
            <CSidebarNavItem name="HR Operation"></CSidebarNavItem>
            <CSidebarNavItem name="Disciplinary Management"></CSidebarNavItem>
            <CSidebarNavItem name="Setting"></CSidebarNavItem>
          </CSidebarNavDropdown>
          <CSidebarNavItem name="Report"></CSidebarNavItem>
      </CSidebarNavDropdown>
       <CSidebarNavDropdown name="Bank Management" icon="cil-pencil">
          <CSidebarNavItem name="Check Book Add"></CSidebarNavItem>
          <CSidebarNavItem name="Post Dated Issued Check List"></CSidebarNavItem>
          <CSidebarNavItem name="Today Bank Payment List"></CSidebarNavItem>
          <CSidebarNavItem name="Post Dated Received Check"></CSidebarNavItem>
          <CSidebarNavItem name="Today Received Check List"></CSidebarNavItem>
          <CSidebarNavItem name="Bank Reconciliation"></CSidebarNavItem>
      </CSidebarNavDropdown>
       <CSidebarNavDropdown icon="cib-cashapp" name="Cash Management">
            <CSidebarNavItem name="Payment"></CSidebarNavItem>
            <CSidebarNavItem name="Received"></CSidebarNavItem>
      </CSidebarNavDropdown>

    </CSidebarNav>
    <!-- <CRenderFunction flat :content-to-render="$options.nav"/> -->
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'
export default {
  name: 'TheSidebar',
  nav,
  computed: {
    show () {
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    }
  }
}
</script>
