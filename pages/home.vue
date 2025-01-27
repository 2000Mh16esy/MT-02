<template>
<LMap
  style="height: 350px"
  :zoom="6"
  :center="[21.9139, 95.9560]"
  :use-global-leaflet="false"
>
  <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
    layer-type="base"
    name="OpenStreetMap"
    :detect-retina="true"
  />
</LMap>


<div class="home">
  <h1>Let's start now!!</h1>
  <p>Explore the infamous sightseeing palces and amazing places of Myanmer(Burma)</p>
</div>

<b-table hover>
  <b-thead>
   <b-tr>
    <b-th scope="col">
     No.
    </b-th>
    <b-th scope="col">
     Place
    </b-th>
    <b-th scope="col">
    City
    </b-th>
    <b-th scope="col">
     About
    </b-th>
   </b-tr>
  </b-thead>

  <b-tbody>

   <b-tr>
    <b-th scope="row">
     1
    </b-th>
    <b-td>Sule Pagoda</b-td>
    <b-td>Yangon</b-td>
    <b-td ><a href="01">see more</a></b-td>
   </b-tr>

   <b-tr>
    <b-th scope="row">
     2
    </b-th>
    <b-td>Mount Popa</b-td>
    <b-td>Pegu</b-td>
    <b-td ><a href="02">see more</a></b-td>
   </b-tr>

    <b-tr>
     <b-th scope="row">
     3
    </b-th>
    <b-td>Shwedagon Pagoda</b-td>
    <b-td>Yangon</b-td>
    <b-td ><a href="03">see more</a></b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     4
    </b-th>
    <b-td>Bagan Golden Palace</b-td>
    <b-td>Bagan</b-td>
    <b-td ><a href="04">see more</a></b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     5
    </b-th>
    <b-td>Inle Floating Gardens</b-td>
    <b-td>Inle</b-td>
    <b-td ><a href="05">see more</a></b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     6
    </b-th>
    <b-td>Mwe Taw Kakku Pagodas</b-td>
    <b-td>Inle</b-td>
    <b-td ><a href="06">see more</a></b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     7
    </b-th>
    <b-td>Mandalay Palace</b-td>
    <b-td>Mandalay</b-td>
    <b-td ><a href="07">see more</a></b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     8
    </b-th>
    <b-td>Macleod Island</b-td>
    <b-td>Mergui</b-td>
    <b-td ><a href="08">see more</a></b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     9
    </b-th>
    <b-td>Mingun Temple</b-td>
    <b-td>Sagaing</b-td>
    <b-td ><a href="09">see more</a></b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     10
    </b-th>
    <b-td>Htilominlo Temple</b-td>
    <b-td>Bagan</b-td>
    <b-td ><a href="10">see more</a></b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     11
    </b-th>
    <b-td>Ananda Temple</b-td>
    <b-td>Bagan</b-td>
    <b-td ><a href="11">see more</a></b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     12
    </b-th>
    <b-td>Dhammayangyi Temple</b-td>
    <b-td>Bagan</b-td>
    <b-td ><a href="12">see more</a></b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     13
    </b-th>
    <b-td>Shwezigon Pagoda</b-td>
    <b-td>Bagan</b-td>
    <b-td ><a href="13">see more</a></b-td>
   </b-tr>  
  </b-tbody>
 </b-table>

</template>


<style scoped>
.home {
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #42b983;
}

p {
  font-size: 18px;
}
th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th[scope='col'] {
  background-color: #505050;
  color: #fff;
}

th[scope='row'] {
  background-color: #d6ecd4;
}

td {
  text-align: center;
}

tr:nth-of-type(even) {
  background-color: #eee;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}

.leaflet-pane{
  z-index: 0 !important;
}
.leaflet-bottom, .leaflet-top {
 z-index: 0 !important;
}
</style>

<script setup> 

const center = ref([100,100]) 

</script> 