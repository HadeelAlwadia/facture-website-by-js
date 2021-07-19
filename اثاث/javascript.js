let header=document.querySelector(".header");
let slider=document.querySelector(".slider");
let category=document.querySelector(".category ");
let container=document.querySelector(".container");
let discount =document.querySelector(".discount");
let generl=document.querySelector(".generl");
let sprites=document.querySelector(".sprites");
let footer=document.querySelector(".generl2");




/*display content*/
let contentheader=`   <div class="container">
<div class="header-content">
  <img src="./images/logo.png" alt="Logo" />
  <nav class="navbar">
    <ul class="list-unstyled">
      <li class="dropdown">
        <a class="link-item" href="#">Furntiure</a>
        <div class="dropdown-menu">
          <ul class="list-unstyled">
            <li><a href="#">Tables</a></li>
            <li><a href="#">Study Table 1</a></li>
            <li><a href="#">Study Table 2</a></li>
            <li><a href="#">Study Table 3</a></li>
            <li><a href="#">Study Table 4</a></li>
          </ul>
          <ul class="list-unstyled">
            <li><a href="#">Tables</a></li>
            <li><a href="#">Study Table 1</a></li>
            <li><a href="#">Study Table 2</a></li>
            <li><a href="#">Study Table 3</a></li>
            <li><a href="#">Study Table 4</a></li>
          </ul>
          <ul class="list-unstyled">
            <li><a href="#">Tables</a></li>
            <li><a href="#">Study Table 1</a></li>
            <li><a href="#">Study Table 2</a></li>
            <li><a href="#">Study Table 3</a></li>
            <li><a href="#">Study Table 4</a></li>
          </ul>
        </div>
      </li>
      <li><a class="link-item" href="#">Armories</a></li>
      <li><a class="link-item" href="#">Study Table</a></li>
      <li><a class="link-item" href="#">Plastic Chair</a></li>
      <li><a class="link-item" href="#">Wardrobes</a></li>
      <li><a class="link-item" href="#">More</a></li>
    </ul>
  </nav>
  <div class="login">
    <ul class="list-unstyled">
      <li><i class="fa fa-search fa-2x"></i></li>
      <li><i class="fa fa-user fa-2x"></i></li>
      <li><i class="fa fa-cart-plus fa-2x"></i> Your Bag</li>
    </ul>
  </div>
</div>
</div>
`;

/*to put content in header*/
header.innerHTML=contentheader;


function Slidercontent(){
return(`      <div class="container">
<img src="images/main-banner-1-1600x700.jpg" alt="" />
</div>`);

}
slider.innerHTML=Slidercontent();




function contentcategory(){
    return(`<div class="section-header">
    <h2 class="section-title">Special Category</h2>
    <span class="line"></span>
  </div>
  `);
    
    }
    category.innerHTML=contentcategory();



    function itemcontent(){
        return(`      <div class="container">
        <div class="category-items">
        <div class="category-item">
          <img src="images/category-banner1.jpg" alt="" />
          <h4 class="category-item-subtitle">Most Popular</h4>
          <h3 class="category-item-title">Modarn Chair Collection</h3>
          <i class="icon fa fa-angle-right fa-lg"></i>
        </div>
        <div class="category-item">
          <img src="./images/category-banner2.jpg" alt="" />
          <h4 class="category-item-subtitle">Most Popular</h4>
          <h3 class="category-item-title">Modarn Chair Collection</h3>
          <i class="icon fa fa-angle-right fa-lg"></i>
        </div>
        <div class="category-item">
          <img src="images/category-banner3.jpg" alt="" />
          <h4 class="category-item-subtitle">Most Popular</h4>
          <h3 class="category-item-title">Modarn Chair Collection</h3>
          <i class="icon fa fa-angle-right fa-lg"></i>
        </div>
        <div class="category-item">
          <img src="images/category-banner4.jpg" alt="" />
          <h4 class="category-item-subtitle">Most Popular</h4>
          <h3 class="category-item-title">Modarn Chair Collection</h3>
          <i class="icon fa fa-angle-right fa-lg"></i>
        </div>
        `);
        
        }
        container.innerHTML=itemcontent();


        function contentdiscount(){
            return(`     <div class="discount-desc">
            <div class="top">
              <i class="icon fa fa-quote-left fa-lg"></i>
              <h2 class="discount-title">Penelope Astrid</h2>
              <span class="discount-subtitle">(Marketing)</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis, tempore rerum! Error illo rem aliquam repellendus
              doloribus! Quibusdam magnam itaque minima odit vel dolores iusto,
              incidunt repellat perferendis, fugit quaerat eaque doloribus ipsam
              voluptates reiciendis saepe quae dignissimos quo, vero est!
              Adipisci quae optio, hic modi laudantium impedit accusamus
              possimus.
            </p>
            <div class="bolletes">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="discount-item">
            <div class="discount-item-info">
              <h3>30% Discount</h3>
              <h2>Designing Interior</h2>
            </div>
          </div>
          <!-- ./discount-item -->
          <div class="discount-item">
            <div class="discount-item-info">
              <h3>30% Discount</h3>
              <h2>Designing Interior</h2>
            </div>
          </div>
          `);
            
            }
            discount.innerHTML=contentdiscountitem();


            function contentdiscountitem(){
                return(`    <div class="discount-item-info">
                <h3>30% Discount</h3>
                <h2>Designing Interior</h2>
              </div>
            </div>
            <!-- ./discount-item -->
            <div class="discount-item">
              <div class="discount-item-info">
                <h3>30% Discount</h3>
                <h2>Designing Interior</h2>
              </div>
            </div>
            <!-- ./discount-item -->
          </div>
          <!-- discount -->
  
          <div class="sprites">
            <div class="sprite-item">
              <div class="sprite-icon sprite-icon-1"></div>
              <div class="sprite-info">
                <h3>Free Delivery</h3>
                <span>Free Shipping On All Order</span>
              </div>
            </div>
            <div class="sprite-item">
              <div class="sprite-icon sprite-icon-2"></div>
              <div class="sprite-info">
                <h3>Free Delivery</h3>
                <span>Free Shipping On All Order</span>
              </div>
            </div>
            <div class="sprite-item">
              <div class="sprite-icon sprite-icon-3"></div>
              <div class="sprite-info">
                <h3>Free Delivery</h3>
                <span>Free Shipping On All Order</span>
              </div>
            </div>
            <div class="sprite-item">
              <div class="sprite-icon sprite-icon-4"></div>
              <div class="sprite-info">
                <h3>Free Delivery</h3>
                <span>Free Shipping On All Order</span>
              </div>
            </div>
            <div class="sprite-item">
              <div class="sprite-icon sprite-icon-5"></div>
              <div class="sprite-info">
                <h3>Free Delivery</h3>
                <span>Free Shipping On All Order</span>
              </div>
            </div>
          </div>
          <hr />
        </div>
      
              `);
                
                }
                generl.innerHTML=contentdiscountitem();

function spritescon(){
    return(`    <div class="sprite-item">
    <div class="sprite-icon sprite-icon-1"></div>
    <div class="sprite-info">
      <h3>Free Delivery</h3>
      <span>Free Shipping On All Order</span>
    </div>
  </div>
  <div class="sprite-item">
    <div class="sprite-icon sprite-icon-2"></div>
    <div class="sprite-info">
      <h3>Free Delivery</h3>
      <span>Free Shipping On All Order</span>
    </div>
  </div>
  <div class="sprite-item">
    <div class="sprite-icon sprite-icon-3"></div>
    <div class="sprite-info">
      <h3>Free Delivery</h3>
      <span>Free Shipping On All Order</span>
    </div>
  </div>
  <div class="sprite-item">
    <div class="sprite-icon sprite-icon-4"></div>
    <div class="sprite-info">
      <h3>Free Delivery</h3>
      <span>Free Shipping On All Order</span>
    </div>
  </div>
  <div class="sprite-item">
    <div class="sprite-icon sprite-icon-5"></div>
    <div class="sprite-info">
      <h3>Free Delivery</h3>
      <span>Free Shipping On All Order</span>
    </div>
  </div>
</div>
<hr />
</div>
`);
}
sprites.innerHTML=spritescon();



function footergen(){
    return(`   <section class="products section-padding">
    <div class="section-header">
      <h2 class="section-title">Featured Products</h2>
      <span class="line"></span>
    </div>
    <div class="container">
      <ul class="list-products list-unstyled">
        <li>Wooden Chair</li>
        <li>Plastic Chair</li>
        <li>Study Table</li>
        <li>Plastic Chair</li>
      </ul>

      <div class="products-items">
        <div class="product-item">
          <div class="product-img">
            <img src="images/chair1.jpg" alt="" />
            <div class="product-overlay">
              <img src="images/chair2.jpg" alt="" />
              <ul class="list-unstyled">
                <li><i class="fa fa-facebook fa-lg"></i></li>
                <li><i class="fa fa-twitter fa-lg"></i></li>
                <li><i class="fa fa-linkedin fa-lg"></i></li>
                <li><i class="fa fa-instagram fa-lg"></i></li>
              </ul>
            </div>
            <div class="product-info">
              <i class="active fa fa-star fa-sm"></i>
              <i class="active fa fa-star fa-sm"></i>
              <i class="active fa fa-star fa-sm"></i>
              <i class="fa fa-star-o fa-sm"></i>
              <span>product item</span>
              <h3>$108.8</h3>
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-img">
            <img src="images/chair3.jpg" alt="" />
            <div class="product-overlay">
              <img src="images/chair4.jpg" alt="" />
              <ul class="list-unstyled">
                <li><i class="fa fa-facebook fa-lg"></i></li>
                <li><i class="fa fa-twitter fa-lg"></i></li>
                <li><i class="fa fa-linkedin fa-lg"></i></li>
                <li><i class="fa fa-instagram fa-lg"></i></li>
              </ul>
            </div>
            <div class="product-info">
              <i class="active fa fa-star fa-sm"></i>
              <i class="active fa fa-star fa-sm"></i>
              <i class="active fa fa-star fa-sm"></i>
              <i class="fa fa-star-o fa-sm"></i>
              <span>product item</span>
              <h3>$108.8</h3>
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-img">
            <img src="images/chair5.jpg" alt="" />
            <div class="product-overlay">
              <img src="images/chair6.jpg" alt="" />
              <ul class="list-unstyled">
                <li><i class="fa fa-facebook fa-lg"></i></li>
                <li><i class="fa fa-twitter fa-lg"></i></li>
                <li><i class="fa fa-linkedin fa-lg"></i></li>
                <li><i class="fa fa-instagram fa-lg"></i></li>
              </ul>
            </div>
            <div class="product-info">
              <i class="active fa fa-star fa-sm"></i>
              <i class="active fa fa-star fa-sm"></i>
              <i class="active fa fa-star fa-sm"></i>
              <i class="fa fa-star-o fa-sm"></i>
              <span>product item</span>
              <h3>$108.8</h3>
            </div>
          </div>
        </div>
      </div>
       <div class="products-items">
        <div class="product-item">
          <div class="product-img">
            <img src="images/chair1.jpg" alt="" />
            <div class="product-overlay">
              <img src="images/chair2.jpg" alt="" />
              <ul class="list-unstyled">
                <li><i class="fa fa-facebook fa-lg"></i></li>
                <li><i class="fa fa-twitter fa-lg"></i></li>
                <li><i class="fa fa-linkedin fa-lg"></i></li>
                <li><i class="fa fa-instagram fa-lg"></i></li>
              </ul>
            </div>
            <div class="product-info">
              <i class="active fa fa-star fa-sm"></i>
              <i class="active fa fa-star fa-sm"></i>
              <i class="active fa fa-star fa-sm"></i>
              <i class="fa fa-star-o fa-sm"></i>
              <span>product item</span>
              <h3>$108.8</h3>
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-img">
            <img src="images/chair3.jpg" alt="" />
            <div class="product-overlay">
              <img src="images/chair4.jpg" alt="" />
              <ul class="list-unstyled">
                <li><i class="fa fa-facebook fa-lg"></i></li>
                <li><i class="fa fa-twitter fa-lg"></i></li>
                <li><i class="fa fa-linkedin fa-lg"></i></li>
                <li><i class="fa fa-instagram fa-lg"></i></li>
              </ul>
            </div>
            <div class="product-info">
              <i class="active fa fa-star fa-sm"></i>
              <i class="active fa fa-star fa-sm"></i>
              <i class="active fa fa-star fa-sm"></i>
              <i class="fa fa-star-o fa-sm"></i>
              <span>product item</span>
              <h3>$108.8</h3>
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-img">
            <img src="images/chair5.jpg" alt="" />
            <div class="product-overlay">
              <img src="images/chair6.jpg" alt="" />
              <ul class="list-unstyled">
                <li><i class="fa fa-facebook fa-lg"></i></li>
                <li><i class="fa fa-twitter fa-lg"></i></li>
                <li><i class="fa fa-linkedin fa-lg"></i></li>
                <li><i class="fa fa-instagram fa-lg"></i></li>
              </ul>
            </div>
            <div class="product-info">
              <i class="active fa fa-star fa-sm"></i>
              <i class="active fa fa-star fa-sm"></i>
              <i class="active fa fa-star fa-sm"></i>
              <i class="fa fa-star-o fa-sm"></i>
              <span>product item</span>
              <h3>$108.8</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  `);
    
    }
    footer.innerHTML=footergen();














































