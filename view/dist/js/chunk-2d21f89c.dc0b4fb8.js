(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f89c"],{d9f7:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("CContainer",[t("CRow",[t("CCol",{attrs:{md:"6"}},[t("CCard",[t("CCardHeader",[t("strong",[e._v("User Create")]),e._v(" Form ")]),t("CCardBody",[t("CForm",[t("CFormGroup",[t("label",[e._v("Name")]),t("CInput",{attrs:{type:"text"}})],1),t("CInput",{attrs:{type:"text",description:"Please enter Username.",autocomplete:"Username",label:"Username",horizontal:"",placeholder:"Enter Username ..."},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}}),t("CInput",{attrs:{type:"email",description:"Please enter Email.",autocomplete:"Email",label:"Email",horizontal:"",placeholder:"Enter Email ..."},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}}),t("CInput",{attrs:{type:"password",description:"Please enter user password.",autocomplete:"Password",label:"Password",horizontal:"",placeholder:"Enter password ..."},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}}),t("CInput",{attrs:{type:"password",description:"Please confirm user password.",autocomplete:"Confirm Password",label:"Confirm Password",horizontal:"",placeholder:"Confirm password ..."},model:{value:e.name,callback:function(a){e.name=a},expression:"name"}}),t("CSelect",{attrs:{label:"Select Role",size:"sm",horizontal:"",options:e.options,placeholder:"Please select user role",custom:""}})],1)],1),t("CCardFooter",[t("CButton",{attrs:{type:"submit",size:"sm",color:"primary"},on:{click:e.handle_role_creation}},[t("CIcon",{attrs:{name:"cil-check-circle"}}),e._v(" Submit")],1),e._v(" "),t("CButton",{attrs:{type:"reset",size:"sm",color:"danger"}},[t("CIcon",{attrs:{name:"cil-ban"}}),e._v(" Reset")],1)],1)],1)],1)],1)],1)},r=[],n=t("e3ad"),s=t("1940"),l=t.n(s),c={name:"Role_Create",data:function(){return{name:""}},methods:{handle_role_creation:function(){var e=this;n["a"].post(n["b"]+"/role/create",JSON.stringify({name:this.name})).then((function(a){!0===a.data.status?(e.name="",e.$router.push("/role/all"),l()("Created!",a.data.message,"success")):!1===a.data.status&&l()("Failed!",a.data.message,"error")})).catch((function(e){console.log(e.message)}))}}},i=c,m=t("2877"),d=Object(m["a"])(i,o,r,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d21f89c.dc0b4fb8.js.map