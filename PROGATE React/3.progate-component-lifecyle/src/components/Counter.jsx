import { useState, useEffect } from "react";

const Counter = ({setFinishGame}) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // Efek ini akan dijalankan setiap kali komponen di-render
        // Misalnya, bisa digunakan untuk logging atau side effects lainnya
        window.addEventListener('keydown', handleKeyPress)
        return () => {
            // Fungsi ini akan dipanggil ketika komponen di-unmount
            // atau sebelum efek ini dijalankan lagi pada render berikutnya. Ini sangat penting untuk membersihkan event listener agar tidak terjadi memory leak.
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, []) // Array kosong sebagai dependensi berarti efek ini hanya dijalankan sekali saat komponen pertama kali di-render

    // useEffect diperlukan ketika kamu membutuhkan sistem eksternal, seperti menggambil data dari API dan manipulasi DOM secara manual yang berasal dari browser.

    const handleClick = () => {
        setCount(count + 1)
    }

    const handleKeyPress = (event) => {
        const key = event
        if (key == 'Enter') {
            setCount(count + 1)
        }
    } // Karena event keydown telah ditambahkan pada seluruh window, Hal ini melewati cakupan yang bisa ditangani oleh component React dan inilah dimana useEffect itu dibutuhkan.

    return (
        <div>
            <h1 style={{ fontSize: '64px' }}>
                {count}
            </h1>
            <button style={buttonStyle} onClick={() => {handleClick()}}> {/* Arrow function kosong disini berfungsi sebagai toggle untuk buttonnya, ketika arorow function dihapus dan langsung "handleClick", maka fungsi akan langsung di laksanakan ketika di render, bukan saat button di pencet. Itulah gunanya arrow function kosong */}
            + Tambah
            </button>
            <div>
                <button onClick={() => {setFinishGame()}} style={buttonStyle}>
                    Finish Game
                </button>
            </div>
        </div>
    )
}

const buttonStyle = {
    fontSize: '32px',
    width: '200px',
    height: '48px',
    borderRadius: '4px',
    marginRight: '24px',
    marginLeft: '24px',
    marginTop: '30px',
    color: '#fff',
    backgroundColor: '#66ccff',
}

export default Counter