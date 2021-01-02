import Link from 'next/link'

function Home() {
    return (
        <div>
            <div>Home</div>
            <Link href="/sobre">
                <a >Acessar página Sobre</a>
            </Link>
        </div>
    )
}

export default Home