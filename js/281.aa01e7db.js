"use strict";(self["webpackChunkadmin2"]=self["webpackChunkadmin2"]||[]).push([[281],{9281:function(e,r,s){s.r(r),s.d(r,{default:function(){return d}});var t=function(){var e=this,r=e._self._c;return r("div",{staticClass:"main_content"},[r("div",{staticClass:"div1"},[r("h3",[e._v("登录系统")]),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"52px"}},[r("el-form-item",{attrs:{label:"账号",prop:"username"}},[r("el-input",{model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password","show-password":e.showPassword},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("登录")]),r("span",{staticStyle:{"margin-right":"90px"}}),r("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1),r("div",{staticClass:"forget"},[e._v("忘记密码")])],1)])},a=[],o=(s(7658),s(7138));function u(e){return(0,o.Z)({url:"/login",method:"post",data:e})}var l={data(){return{showPassword:!0,ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;u({username:this.ruleForm.username,password:this.ruleForm.password}).then((e=>{200==e.data.code?(this.$store.commit("setUserInfo",e.data.data.userInfo),this.$store.commit("setRouterAuthority",e.data.data.menuData),this.$store.commit("addrouter",this.$router),this.$message({message:"登录成功",type:"success"}),localStorage.setItem("token",e.data.data.token),this.$router.push("/home/echart1")):this.$message({message:"账号或密码错误",type:"error"})}))}))},resetForm(e){this.$refs[e].resetFields()}}},m=l,i=s(1001),n=(0,i.Z)(m,t,a,!1,null,"36b3aa17",null),d=n.exports}}]);
//# sourceMappingURL=281.aa01e7db.js.map