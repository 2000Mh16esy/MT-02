<template>
<Background
  img-src="/undraw_Traveling_yhxq.png"
 >
  <b-h
   level="1"
   margin="5"
   display-headings="1"
   text-color="teal"
  >
   WELCOME to MYANMAR!
  </b-h>
 </Background>
  <div class="home">
    <h1>Let's start now!!</h1>
    <p>Explore the infamous sightseeing palces and amazing places of Myanmer(Burma)</p>
  </div>
  <table>
  <caption>
    Alien football stars
  </caption>
  <tr>
    <th scope="col">City name</th>
    <th scope="col">places</th>
    <th scope="col">see more</th>
  </tr>
  <tr>
    <th scope="row">TR-7</th>
    <td>7</td>
    <td>4,569</td>
  </tr>
  <tr>
    <th scope="row">Khiresh Odo</th>
    <td>7</td>
    <td>7,223</td>
  </tr>
  <tr>
    <th scope="row">Mia Oolong</th>
    <td>9</td>
    <td>6,219</td>
  </tr>
    <tr>
    <th scope="col">City name</th>
    <th scope="col">places</th>
    <th scope="col">see more</th>
  </tr>
  <tr>
    <th scope="row">TR-7</th>
    <td>7</td>
    <td>4,569</td>
  </tr>
  <tr>
    <th scope="row">Khiresh Odo</th>
    <td>7</td>
    <td>7,223</td>
  </tr>
  <tr>
    <th scope="row">Mia Oolong</th>
    <td>9</td>
    <td>6,219</td>
  </tr>
    <tr>
    <th scope="col">City name</th>
    <th scope="col">places</th>
    <th scope="col">see more</th>
  </tr>
  <tr>
    <th scope="row">TR-7</th>
    <td>7</td>
    <td>4,569</td>
  </tr>
</table>
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
</style>
