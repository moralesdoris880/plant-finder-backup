import * as React from 'react';
import '../css/Resources.css';
function Resources() {
  return (
  <div >
    <div>
        <h11> HELPFUL RESOURCES </h11>
        <br/>
        <br/>
        <br/>
        <h2> 1. <a href="https://plants.usda.gov/home"> USDA PLANTS Database: </a></h2>
        <br/>
        <p1>This database allows users to search by their county for native or introduced species. It also allows for separate searches to find species that provide some ecosystem services (food-producing and lumber characteristics). It does not directly allow users to put a location in and filter based on ecosystem services, rather it requires a search of native plants and then the user checking those records across the food-producing list.  </p1>
        <br/>
        <br/>
        <br/>
        <h2>2. <a href="http://www.bonap.org/">The Biota of North America Program (BONAP) - North American Vascular Flora: </a></h2>
        <br/>
        <p1>The BONAP database has a wealth of information. Through its taxonomic data center, users can filter by location, and further filter for ecosystem services. It has a depth of characteristics represented, including shade trees, street trees, saltwater adapted plants, noxious and invasive plants, economic viability (for lumber), and edibility information including what kind of sustenance it provides (use in drinks or food, and whether it comes from nuts, seeds, leaves, flowers, etc). The downside of BONAP is that it is not very user-friendly. For our project, we hope to have a better-designed interface and make it easier for users to filter their searches.</p1>
        <br/>
        <br/>
        <br/>
        <h2>3. <a href="https://nativeplantfinder.nwf.org/Plants">National Wildlife Federation (NWF) - Native Plant Finder:</a></h2>
        <br/>
        <p1>The National Wildlife Federation’s plantfinder is simple to use and gives lots of native plants based on just a zip code. However, there are no filtering options, and all results are ranked based on their ability to attract butterfly and moth species. It is good to attract the insects, however that will just be one aspect of plantFinders operability. We also hope to include a map based on search results, which the Native Plant Finder does not include. </p1>
        <br/>
        <br/>
        <br/>
        <h2>4. <a href="https://www.gardenia.net/plant-finder">Plant Finder - Gardenia Creating Gardens:</a></h2>
        <br/>
        <p1>Gardenia Creating Gardens is an online source for individuals to reference when designing and planning their gardens. They have implemented a feature on their website which operates similarly to our concept, in that the program will help you find the most ideal plants for your garden based on specified parameters. Despite this similar concept, this program certainly diverges from the concept of our program. The Gardenia program (like ours intends to) prompts the user to input their property conditions, but unlike our concept, this program lacks a geographical element and also doesn’t account for the ecosystem services provided. </p1>
    </div>
  </div>
  )
}
export default Resources;