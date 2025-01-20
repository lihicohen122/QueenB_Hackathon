import { useState } from 'react';
import { Link } from 'react-router-dom'; // ייבוא Link לניווט
import styles from './ReportsPage.module.css'; // ייבוא מחלקות ה-CSS עם styles

const Reports = () => {
    const [email, setEmail] = useState(''); // State לשמירת המייל
    const [text, setText] = useState(''); // State לשמירת הטקסט
    const [file, setFile] = useState(null); // State לשמירת הקובץ שהועלה

    const handleEmailChange = (event) => {
        setEmail(event.target.value); // עדכון ה-State עם הערך שהוזן
    };

    const handleInputChange = (event) => {
        setText(event.target.value); // עדכון ה-State עם הערך שהוזן
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // שמירת הקובץ שהועלה
    };

    const handleSubmit = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // ביטוי רגולרי לבדיקת מייל תקין
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address!');
            return;
        }

        console.log('Submitted Email:', email); // הדפסת המייל בקונסול
        console.log('Submitted Text:', text); // הדפסת הטקסט בקונסול
        console.log('Uploaded File:', file); // הדפסת פרטי הקובץ בקונסול
        alert(`Your report submitted successfully to: ${email}\nThank you!`);
    };

    return (
        <div className={styles['reports-container']}>
            <h1>Reports Page</h1>
            <h5>To report, please describe the incident and add a photo if available.</h5>
            <div className={styles['input-container']}>
                {/* תיבת טקסט להזנת מייל */}
                <input
                    type="email"
                    placeholder="Enter the recipient email"
                    value={email}
                    onChange={handleEmailChange} // מאזין לשינויי הערך
                    className={styles['email-input']}
                />
            </div>
            <div className={styles['input-container']}>
                {/* תיבת טקסט רגילה */}
                <input
                    type="text"
                    placeholder="Enter your report"
                    value={text}
                    onChange={handleInputChange} // מאזין לשינויי הערך
                    className={styles['text-input']}
                />
            </div>
            <div className={styles['input-container']}>
                {/* העלאת קובץ */}
                <input
                    type="file"
                    accept=".jpg,.png,.pdf,.docx" // סוגי הקבצים המותרים
                    onChange={handleFileChange}
                    className={styles['file-input']}
                />
            </div>
            <button
                onClick={handleSubmit} // מאזין ללחיצה על הכפתור
                className={styles['submit-button']}
            >
                Submit
            </button>
            {/* כפתור חזרה לדף הבית */}
            <div className={styles['back-container']}>
                <Link to="/welcome" className={styles['back-button']}>
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Reports;
