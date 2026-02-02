import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that enables businesses 
            to sell products or services, allowing customers to browse, make purchases, 
            and complete transactions electronically. An e-commerce website, also known as an online store or online shop, is a digital platform that allows businesses to sell products or services over the internet. It serves as a virtual storefront where customers can browse through a wide range of offerings, add items to their cart, and complete transactions online. The primary purpose of an e-commerce website is to facilitate the buying and selling process in a convenient and efficient manner. These websites typically include various features and functionalities such as product catalogs, search filters, shopping carts, secure payment gateways, and order management systems.</p>
            <p>One of the key advantages of e-commerce websites is their ability to reach a global audience. Unlike traditional brick-and-mortar stores, which are limited by geographical boundaries, online stores can be accessed by customers from anywhere in the world as long as they have an internet connection. This expands the potential customer base and allows businesses to tap into new markets.Moreover, e-commerce websites offer convenience to both businesses and customers. Customers can shop at any time and from any location, eliminating the need to visit physical stores. On the other hand, businesses can operate 24/7 without the constraints of opening and closing hours. This flexibility enables businesses to cater to a wider range of customers and increases sales opportunities.</p>
        </div>
    </div>
  )
}

export default DescriptionBox