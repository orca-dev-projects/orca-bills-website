import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Professional Bills
         <br className='sm:block hidden'/>& GST Invoices</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Generate professional-grade bills and GST invoices effortlessly with our cutting-edge app. Whether you're managing a small business or a large enterprise, our intuitive platform empowers you to create accurate and compliant invoices that meet GST standards. Elevate your business operations with seamless billing and taxation solutions, ensuring a smooth and hassle-free experience for both you and your clients
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img
          src="https://i.ibb.co/gSt5FPW/orca1.png"
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
