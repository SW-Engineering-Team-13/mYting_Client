<template>
    <header>
        <div class="menuWrap">
            <v-img
                :src="require('../../assets/logo.png')"
                class="my-3"
                contain
                height="60"
                
            />
            <ul class="menu" >
                <li><router-link to="/login">프로필</router-link></li>
                <li><router-link to="/login">로그아웃</router-link></li>
            </ul>
            <ul class="menu" style="top: 50px">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/intro">Introduction</router-link></li>
                <li><router-link to="/matching">Matching</router-link></li>
                <li><router-link to="/study">Study Group</router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default{

}
</script>

<style scoped>
header{
    width:100%; 
    text-align:center; 
    position:relative; 
    height:120px; 
    background-color: #ffffff; 
    box-shadow: 0px 2px 0px 0px #dddddd;}

header h1{position:absolute; top:0; left:100px;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:20px; right:50px;}
header ul.menu li{float:left; padding:10px 20px; list-style:none;}

a{text-decoration:none; color:#333;}
</style>