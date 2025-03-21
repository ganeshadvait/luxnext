"use client";
import Image from 'next/image';
import Link from 'next/link';
import './footerstyles.css';
import { useInView } from "react-intersection-observer";

const data = {
  description: 'Lorem ipsum dolor sit amet consectetur. Aliquet morbi amet nec diam. Vel massa commodo viverra.Lorem ipsum dolor sit amet consectetur. Aliquet morbi amet nec diam',
  logo: '/lux logo final .png',
  forpatients: [
    { text: 'About Us', url: '#' },
    { text: 'FAQs', url: '#' },
    { text: 'Contact Us', url: '#' },
    { text: 'Blogs', url: '#' }
  ],
  centerofexcellence: [
    { text: 'Cardiology', url: '#' },
    { text: 'Orthopedics', url: '#' },
    { text: 'Gastroenterology', url: '#' },
    { text: 'Oncology', url: '#' }
  ],
  followus: [
    { text: 'Facebook', url: '#', img: '/youtube logo.png' },
    { text: 'Instagram', url: '#', img: '/youtube logo.png' },
    { text: 'LinkedIn', url: '#', img: '/youtube logo.png' },
    { text: 'YouTube', url: '#', img: '/youtube logo.png' }
  ]
};

const FooterComponent = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="footer bg-white" ref={ref}>
      <div className="inner_footer">
       
        <div className="column c_one">
          <Link href="#" className="footer_logo" >
            <Image src={data.logo} alt="Logo" width={200} height={60}  className={`logo-fade ${inView ? "fade-in" : "opacity-0"}`}/>
          </Link>
          <p className="text-gray-600 mt-2 footer_description">{data.description}</p>
        </div>

       
        <div className="inner_second_footer">
          
          <div className="column c_two">
            <h3 className="font-semibold mb-2">For Patients</h3>
            <ul>
              {data.forpatients.map((item, index) => (
                <li key={index} className="for_patients">
                  <Link href={item.url}>
                    <span className="text-gray-700 hover:text-blue-500 cursor-pointer">
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        
          {/* <div className="column c_three">
            <h3 className="font-semibold mb-2">Center of Excellence</h3>
            <ul>
              {data.centerofexcellence.map((item, index) => (
                <li key={index} className="excellence_list">
                  <Link href={item.url}>
                    <span className="text-gray-700 hover:text-blue-500 cursor-pointer">
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          
          {/* <div className="column c_four">
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="column c_social_footer">
              {data.followus.map((item, index) => (
                <div key={index} className={`socials_div flex ${inView ? "fade-in" : "opacity-0"}`}>
                  <Link href={item.url}>
                    <Image src={item.img} alt={item.text} width={24} height={24} />
                  </Link>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
