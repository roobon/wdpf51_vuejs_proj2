<template>
   <h1 v-if="score>=8">Score is {{ score }}, Excellent</h1>
   <h1 v-else-if="score>=6">Score is {{ score }}, Good</h1>
   <h1 v-else>Poor</h1>

   <ul v-if="seen">
    <li>Apple</li>
    <li>Orange</li>
    <li>Mango</li>
   </ul>
   <hr>
   {{ ok ? 'Yes': 'No' }}
</template>
<script>
export default{
    data() {
        return {
            score:15,
            seen:false,
            ok:true
        }
    }
}
</script>
