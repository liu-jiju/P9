<template>
  <div>
    <input type="text" placeholder="商品名称" v-model="value" @keyup.enter="ss">
    <table cellspacing='1' >
      <thead>
        <tr style="background-color: rgb(214, 214, 214);">
          <th class="bb1">
            <span>编号</span>
            <Icon @click="paixu" />
            
          </th>
          
          <th >名称</th>
          <th class="bb1">
            <span >价格</span>
            <icon-1 @click="paixu1"/>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.goods_name}}</td>
          <td>{{item.price}}</td>
        </tr>
      </tbody>
    </table>
    <div class="a">
      <span>
        每页<input class="a1" type="number" v-model="pagesize" >条，共10条
      </span>
      <span>
        <button  class="btn" v-for="item,index in total" :key="index" @click="qie(item)">{{item}}</button>
      </span>
    </div>
  </div>
</template>
<script>
import Icon from './components/Icon.vue'
import Icon1 from './components/Icon1.vue'
import {data} from './assets/data.json';
export default {
  components:{
    Icon,Icon1
  },
  data() {
    return {
      data:data,//  json文件中请求过来的数据
      list:data,//  渲染到页面的数组
      value:'',
      leftshow:true,
      rightshow:true,
      left:true,

      total:null,//总页数
      pagenum:1,//当前页码
      pagesize:10, //每页条数
      
    };
  },

  mounted() {
    console.log(this.data);
    //总页数
    this.total=Math.ceil(this.list.length/this.pagesize)
    this.qie(1)
    
  },
  watch:{
    //搜索关键字
    value(){
      this.ss()
      if (this.list.length != 0) {
        this.pagesize = this.list.length;
      }
    },
    pagesize(){
      if(this.pagesize!==''){
        //总页数
        this.total=Math.ceil(this.data.length/this.pagesize)
        this.qie(1)
      }
    },
    
  },
  methods: {
    //搜索
    ss(){
      if(this.value.trim().length){
        return this.list=this.data.filter(item=>item.goods_name.includes(this.value))
      }else{
        return this.list=this.data
      }
    },
    //编号点击
    paixu(){

      this.left=!this.left
      if(this.left==false){
        this.list=this.list.sort(function(a,b){
          return b.id-a.id
        })
      }else{
        this.list= this.list.sort(function(a,b){
          return a.id-b.id
        })
      }
    },
    //价格点击
    paixu1(){

      this.left=!this.left
      if(this.left==false){
        this.list=this.list.sort(function(a,b){
          return b.price-a.price
        })
      }else{
        this.list=this.list.sort(function(a,b){
          return a.price-b.price
        })
      }
    },
    //点击右下角切换页数
    qie(item){
      //点击后页码等于当前页码
      this.pagenum=item
      //当前索引
      var aa=(this.pagenum-1)*Number(this.pagesize)
      //从总数据截取出每页的数据
      this.list=this.data.slice(aa,aa+Number(this.pagesize))
      
    }
  },
};
</script>
<style scope>
table{
  width: 100%;
}
.a1{
  width: 50px;
}
.dao{
  transform: rotate(180deg);
}
.bb1{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.a{
  display: flex;
  justify-content: space-between;
}
.btn{
  background-color: white;
  border: 1px solid skyblue;
}
.btn:hover{
  background-color: rgb(218, 243, 253);
}
</style>