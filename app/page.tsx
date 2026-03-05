import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
          src="/logo.svg"
          alt="Blackfield"
          width={147}
          height={21}
          className={styles.logo}
          priority
        />
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            {"Design and technology services for people with high standards."
              .split(" ")
              .map((word, i) => (
                <span
                  key={i}
                  className={styles.titleWord}
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  {word}{" "}
                </span>
              ))}
          </h1>
          <p className={styles.subtitle}>
            We work with a select number of clients to create exceptional products, brands, & experiences.
          </p>
        </section>

        <section className={styles.services}>
          <div className={styles.service}>
            <h2>Strategy</h2>
            <p>Brand and business strategy grounded in market insights and intention</p>
          </div>
          <div className={styles.service}>
            <h2>Design</h2>
            <p>Product, brand, and web design that prioritizes clarity and purpose</p>
          </div>
          <div className={styles.service}>
            <h2>Technology</h2>
            <p>Engineering and development built with precision and care</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a href="mailto:inquire@blackfield.co" className={styles.contact}>
          inquire@blackfield.co
        </a>
      </footer>
    </div>
  );
}
