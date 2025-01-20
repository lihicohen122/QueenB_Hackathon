//import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Articles.module.css';

const image1 = {src: '/images/1.jpg', link: 'https://drive.google.com/file/d/15Fw0RsX3JU6d9QkHeKRlsZx4KrMqi1OV/view', text: 'עשרת הדיברות לגלישה בטוחה'};
const image2 = {src: '/images/2.jpg', link: 'https://sahar.org.il/blog/%D7%9E%D7%94%D7%99-%D7%91%D7%A8%D7%99%D7%95%D7%A0%D7%95%D7%AA-%D7%91%D7%A8%D7%A9%D7%AA/', text: 'בריונות ברשת'};
const image3 = {src: '/images/3.jpg', link: 'https://www.netivei-reshet.org/he/node/14', text: 'ילדים ברשת כל מה שצריך לדעת'};
const image4 = {src: '/images/4.jpg', link: 'https://pmgt.org.nz/online-safety/?utm_term=online%20safety&utm_campaign=Crime+Prevention+Topics&utm_source=adwords&utm_medium=ppc&hsa_acc=3901438876&hsa_cam=7792641513&hsa_grp=89966328948&hsa_ad=397674328230&hsa_src=g&hsa_tgt=kwd-325595530964&hsa_kw=online%20safety&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiAv628BhC2ARIsAIJIiK-szwzazmfxs_5ApWf1YaGd02urJnkiG8m4bbduVQ8Y8ekUz3Mu1XgaAgQ9EALw_wcB', text: 'Rules for cyber safety'};
const image5 = {src: '/images/5.jpg', link: 'https://www.unicef.org/end-violence/how-to-stop-cyberbullying', text: 'Cyberbullying'};
const image6 = {src: '/images/6.jpg', link: 'https://www.unicef.org/parenting/child-care/keep-your-child-safe-online', text: 'How to keep your child safe online'};

const Articles = () => {
    const images = [image1, image2, image3, image4, image5, image6];
    //const [clickedLinks, setClickedLinks] = useState(new Set()); // סט לשמירת הקישורים שכבר נלחצו

    const handle_link_click = (event, link) => {
        console.log(`Navigating to: ${link}`);
        //if (clickedLinks.has(link)) {
            // אם הקישור כבר נלחץ, לא נוסיף נקודות
        //    console.log(`Points were already added for: ${link}`);
        //    return;
        //}
        // addin points
            axios.post('http://localhost:3000/api/account/add-points', { points: 10 })
                .then(response => console.log(response.data))
                .catch(error => console.error('Error:', error));
    
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Articles Page</h1>
            <h3>Read the articles and earn points</h3>
            <div className={styles['images-grid']}>
                {images.map((img, index) => (
                    <div key={index} className={styles['image-container']}>
                        <p className={styles['image-text']}>{img.text}</p> {/* טקסט מעל התמונה */}
                        <a
                            href={img.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles['image-link']} // מחלקת CSS לקישור
                            onClick={(event) => handle_link_click(event, img.link)} 
                        >
                            <img
                                src={img.src}
                                alt={`Duck ${index + 1}`}
                                className={styles.image} // מחלקת CSS לתמונה
                            />
                        </a>
                    </div>
                ))}
            </div>
            <Link to="/welcome" className={styles['back-button']}> Back to welcome page </Link>
        </div>
    );
};

export default Articles;

