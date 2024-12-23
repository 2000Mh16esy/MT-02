<template>
 <b-div ratio="16x9">
  <LMap
   :zoom="10"
   :center="center"
   :use-global-leaflet="false"
  >
   <LTileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    layer-type="base"
    name="OpenStreetMap"
   />
  </LMap>
 </b-div>
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
    <b-td>@mdo</b-td>
   </b-tr>

   <b-tr>
    <b-th scope="row">
     2
    </b-th>
    <b-td>Mount Popa</b-td>
    <b-td>Pegu</b-td>
    <b-td>@fat</b-td>
   </b-tr>

    <b-tr>
     <b-th scope="row">
     3
    </b-th>
    <b-td>Shwedagon Pagoda</b-td>
    <b-td>Yangon</b-td>
    <b-td>@fat</b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     4
    </b-th>
    <b-td>Bagan Golden Palace</b-td>
    <b-td>Bagan</b-td>
    <b-td>@fat</b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     5
    </b-th>
    <b-td>Inle Floating Gardens</b-td>
    <b-td>Inle</b-td>
    <b-td>@fat</b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     6
    </b-th>
    <b-td>Mwe Taw Kakku Pagodas</b-td>
    <b-td>Inle</b-td>
    <b-td>@fat</b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     7
    </b-th>
    <b-td>Mandalay Palace</b-td>
    <b-td>Mandalay</b-td>
    <b-td>@fat</b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     8
    </b-th>
    <b-td>Macleod Island</b-td>
    <b-td>Mergui</b-td>
    <b-td>@fat</b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     9
    </b-th>
    <b-td>Mingun Temple</b-td>
    <b-td>Sagaing</b-td>
    <b-td>@fat</b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     10
    </b-th>
    <b-td>Htilominlo Temple</b-td>
    <b-td>Bagan</b-td>
    <b-td>@fat</b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     11
    </b-th>
    <b-td>Ananda Temple</b-td>
    <b-td>Bagan</b-td>
    <b-td>@fat</b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     12
    </b-th>
    <b-td>Dhammayangyi Temple</b-td>
    <b-td>Bagan</b-td>
    <b-td>@fat</b-td>
   </b-tr>


    <b-tr>
     <b-th scope="row">
     13
    </b-th>
    <b-td>Shwezigon Pagoda</b-td>
    <b-td>Bagan</b-td>
    <b-td>@fat</b-td>
   </b-tr>  
  </b-tbody>
 </b-table>


 <nav aria-label="Page navigation example">
  <Pagination>
   <PageItem>
    <PageLink aria-label="Previous">
     <span aria-hidden="true">&laquo;</span>
    </PageLink>
   </PageItem>
   <PageItem>
    <PageLink>1</PageLink>
   </PageItem>
   <PageItem>
    <PageLink>2</PageLink>
   </PageItem>
   <PageItem>
    <PageLink>3</PageLink>
   </PageItem>
   <PageItem>
    <PageLink aria-label="Next">
     <span aria-hidden="true">&raquo;</span>
    </PageLink>
   </PageItem>
  </Pagination>
 </nav>

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