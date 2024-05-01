import '../css/FAQ.css';

// Accordian code adapted from W3Schools tutorial

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


function FAQ() {
    return (
        <div>
            <h11 className="faqHeader">Frequently Asked Questions</h11>
            <button class="accordion"><hFAQ> How often should I be watering my plants?</hFAQ></button>
            <div class="panel">
                <p1 className='faq'>The watering frequency can vary depending on factors like plant type, weather conditions, and soil moisture levels. As a general rule, it's best to water when the top inch of soil feels dry to the touch. However, specific plants may have different requirements. For personalized advice, consider checking the care instructions provided with your plant or consulting this watering guide by Gardeners.com <a className="faqLink" href="https://www.gardeners.com/how-to/when-to-water/8108.html">here.</a>  </p1>
            </div>
            <button class="accordion"><hFAQ> What is my plant's germination period?</hFAQ></button>
            <div class="panel">
                <p1 className='faq'>Germination periods vary widely among different plant species. Some seeds sprout within a few days, while others may take weeks or even months. Check the seed packet or plant label for an estimate of the germination period. Additionally, check out W.H.Perron's seed germination guide <a className="faqLink" href="https://whperron.com/en/conseils-en/seed-germination-duration-periods/">here </a>for more detailed information for specific plants.</p1>
            </div>
            <button class="accordion"><hFAQ> How much sunlight does my plant need?</hFAQ></button>
            <div class="panel">
                <p1 className='faq'>Sunlight requirements can vary from full sun to partial shade or full shade, depending on the plant species. Most plants will thrive in a location that receives adequate sunlight for their specific needs. Southern Living Plants provides a great guide to sun exposure for your plants that you can visit <a className="faqLink" href="https://southernlivingplants.com/planting-care/a-gardeners-guide-to-sun-exposure/">here</a> for recommendations more tailored to your plant's requirements.</p1>
            </div>
            <button class="accordion"><hFAQ> What type of soil is best for my plant?</hFAQ></button>
            <div class="panel">
                <p1 className='faq'>Soil preferences can vary among plant species, with some preferring well-draining soil while others thrive in more moisture-retentive soil. Check the care instructions for your plant or use our soil guide <a className="faqLink" href="https://www.bombaygreens.com/blogs/news/a-complete-guide-to-find-the-best-soil-for-potted-plants">here</a> from Bombay Greens for recommendations on the best soil type and composition.</p1>
            </div>
            <button class="accordion"><hFAQ> How do I fertilize my plants?</hFAQ></button>
            <div class="panel">
                <p1 className='faq'>Fertilizing requirements can vary depending on the plant's growth stage and nutrient needs. It's important to use the appropriate fertilizer and follow the recommended application rates. Fine Gardening assimilated a great basic guide to plant fertilization <a className="faqLink" href="https://www.finegardening.com/project-guides/container-gardening/fertilizing-basics">here</a>!</p1>
            </div>
            <button class="accordion"><hFAQ> How do I protect my plants from pests and diseases?</hFAQ></button>
            <div class="panel">
                <p1 className='faq'>Preventing and managing pests and diseases is crucial for maintaining healthy plants. Integrated pest management (IPM) techniques, such as monitoring, cultural practices, and natural predators, can help control pest populations. Additionally, proper sanitation and plant care can reduce the risk of disease. The Family Handy Man put out a great resource for managaing pests and disease <a className="faqLink" href="https://www.familyhandyman.com/article/homeowners-guide-to-garden-pest-control/">here</a>!</p1>
            </div>
            <button class="accordion"><hFAQ> How do I propagate my plants?</hFAQ></button>
            <div class="panel">
                <p1 className='faq'>Propagation methods vary among plant species and may include techniques such as seed sowing, division, cuttings, or layering. NC State Extension Publications put out a great comprehensive guide on cutting propogation methods by common plant types that you can check out <a className="faqLink" href="https://content.ces.ncsu.edu/plant-propagation-by-stem-cuttings-instructions-for-the-home-gardener">here</a>.</p1>
            </div>
            <button class="accordion"><hFAQ> What are the best companion plants for my garden?</hFAQ></button>
            <div class="panel">
                <p1 className='faq'>Companion planting involves strategically placing compatible plants together to enhance growth, deter pests, and improve overall garden health. It is very important to make personalized decisions on companion plants based on the plants you've already chosen. The Old Farmer's Almanac produced a great guide <a className="faqLink" href="https://www.almanac.com/companion-planting-guide-vegetables">here</a> that features a comprehensive list of companion vegetable plants!</p1>
            </div>
        </div>
    );
}

export default FAQ;
