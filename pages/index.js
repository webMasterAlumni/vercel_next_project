import Link from 'next/link'

function Home() {
    return (
        <div>
            <div>Home</div>
            <Link href="/sobre">
                <a >Acessar página Sobre</a>
            </Link>
            <Link href="/tempo">
                <a >Acessar página tempo</a>
            </Link>
        </div>
    )
}

export default Home