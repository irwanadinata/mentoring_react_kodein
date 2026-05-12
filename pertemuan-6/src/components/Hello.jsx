function Hello ({name, umur, kelas}) {
    return (
        <div className="h-30 w-30 bg-amber-600 mb-5">
            <p>HELLO, {name}</p>
            <p>UMUR, {umur}</p>
            <p>KELAS, {kelas}</p>
        </div>
    )
}

export default Hello;