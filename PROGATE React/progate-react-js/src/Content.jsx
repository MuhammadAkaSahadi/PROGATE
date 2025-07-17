import Lesson from './Lesson';
import ContactForm from './Contact-Form';

function Content() {
const lessonList = [
      {
        name: 'HTML & CSS',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
        introduction: "HTML dan CSS digunakan untuk menentukan bagaimana sebuah website disusun dan didesign. Ayo pelajari bahasa ini dan langsung membuat halaman situs web!",
      },
      {
        name: 'Sass',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
        introduction: 'Sass adalah sebuah bahasa untuk membuat code CSS lebih gampang dan efisien.',
      },
      {
        name: 'JavaScript',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
        introduction: 'JavaScript adalah bahasa populer yang dapat digunakan untuk membuat website interaktif dan server backend.',
      },
      {
        name: 'React',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
        introduction: 'React adalah library JavaScript yang digunakan untuk membuat penampilan website.',
      },
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>Hello, World.</h1>
            <h2>Selamat datang didunia pemrograman!</h2>
          </div>
          <div className='lesson-container'>
            <h3>Pelajaran</h3>
            {lessonList.map((lessonItem) => { // Menggunakan method map untuk menampilkan component Lesson 
            // .map() adalah method JavaScript yang mengubah setiap elemen dalam array menjadi elemen baru
            // Dalam konteks React, ini digunakan untuk mengubah data menjadi komponen JSX
            // Cara baca nya adalah "Ambil lessonList, lalu untuk setiap lessonItem di dalamnya, 
            // buat komponen Lesson dengan data name, image, dan introduction dari lessonItem tersebut"
              return (
                <Lesson
                // Dari isi konten yang telah di buat di 'lessonItem' di atas, kita dapat memasukkan nya ke dalam cetakan yang sudah dibuat (Lesson.jsx)
                  name={lessonItem.name}
                  image={lessonItem.image}
                  introduction={lessonItem.introduction}
                />
              );
            })}
          </div>
          <div className='contactForm-container'>
            <ContactForm/>
          </div>
        </div>
      </div>
    );
}

export default Content;
