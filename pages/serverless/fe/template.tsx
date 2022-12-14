import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Builtopia</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    nextjs_serverless
                </h1>

                <p className={styles.description}>
                    这是一个部署next.js至腾讯云serverless的githubAction例子.
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>这是测试1 &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>这是测试1 &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://builtopia.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Builtopia
                </a>
            </footer>
        </div>
    )
}