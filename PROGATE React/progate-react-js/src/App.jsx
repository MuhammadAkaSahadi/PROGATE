import Header from './Header'
import Content from './Content'
import Footer from './Footer'

function App() { // Ini adalah "Function Component" gunanya seperti cetakan kue yang di dalam nya wajib mengembalikan/return JSX. Ada jenis lain dari ini yaitu "Class Component", tapi sudah jarang digunakan.
  // Tanda kurung() pada "Function App()" punya arti bahwa ia tidak memiliki paramater apapun ().
    return ( // Ini adalah isi/kue dari hasil cetakan 'function App()' di atas. Dia menampilkan JSX yang isinya adalah konten dari Header, Content, dan Footer yang dibungkus dengan tag <div>.
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
}

export default App
