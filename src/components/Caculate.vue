<template>
    <div>
        <div>
            <h1>商品利润计算器</h1><span>广告成本=1/3客单价</span>
        </div>
        <div>
            <label>客单价</label>
            <input type="text" placeholder='' v-model="price">
            <span class="must">*</span>
        </div>
        <div>
            <label>物料</label>
            <input type="text" placeholder='' v-model="material">
            <span class="must">*</span>
        </div>
        <div>
            <label>签收率</label>
            <input type="text" placeholder='' v-model="receive">
            <span>%</span>
        </div>
        <div>
            <label>运费</label>
            <input type="text" placeholder='' v-model="freight">
            <span class="must">*</span>
        </div>
        <div>
            <label>代收</label>
            <input type="text" placeholder='' v-model="agency">
            <span class="must">*</span>
        </div>
        <div>
            <button @click="caculate">计算</button>
            <button @click="create">生成利润表表</button>
            <span class="read">{{read}}</span>
        </div>
        <div class="view" v-show="view">
            <h3>当前签收率利润：{{res}}/单</h3>
            <span>{{co}}</span>
            <span>{{cons}}</span>
        </div>

        <div  v-show="status">
            <h3>签收率-利润表</h3>
            <table>
                <tr>
                    <th>Id</th>
                    <th>签收率%</th>
                    <th>平均利润/单</th>
                </tr>
                <tr v-for="n in (100-temp)" :key="n">
                    <td>{{n}}</td>
                    <td>{{temp+n}}</td>
                    <td>{{(co*(temp+n)/100+cons).toFixed(2)}}</td>
                </tr>
            </table>

        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            price:"",
            material:"",
            receive:100,
            freight:"",
            agency:"",
            res:0,
            co:0,
            cons:0,
            status:0,
            temp:0,
            view:0,
            read:""
        }
    },
    methods:{
        caculate(){
            if(!this.price||!this.material||!this.receive||!this.freight||!this.agency){
                this.readAlter();
                this.view=0;
                this.status=0;
                return;
            }
            var p=parseInt(this.price)
            var m=parseFloat(this.material)
            var r=parseFloat(this.receive)/100;
            var f=parseFloat(this.freight)
            var a=parseFloat(this.agency)

            this.res=(p*r-p/3-m*r-f*(2-r)-a).toFixed(2);
            this.co=p-m+f;
            this.cons=-(2*f+a+p/3);
            this.view=1;
            this.status=0;
            this.read="";

        },
        create(){
            if(this.co==0||this.cons==0){
                this.readAlter();
                this.status=0;
                return ;
            }
            this.caculate();
            this.juge();

           this.status=1;
            
        },
        juge(){
            if(this.co==0||this.cons==0) return;
            for(var i=0;i<100;i++){
                if(this.co*i/100+this.cons>0){
                    this.temp=i;break;
                }
            }
        },
        readAlter(){
            this.read="请完整输入参数！";
        }
    }
}
</script>

<style>
.view{
    height: 100px;
}
.must{
    color: red;
}
.read{
    color: red;
}
table{
border-collapse:collapse;
}
table, th, td
{
border: 1px solid black;
}

</style>
