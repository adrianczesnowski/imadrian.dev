import Image from "next/image";

export default function Home() {
  return (
      <section className="relative flex flex-col gap-4">
          <h1 className="font-medium text-3xl mb-8 tracking-tighter">
              hi, I&apos;m Adrian 👋
          </h1>
            <div>
              <Image
                  src={'/adrian-czesnowski2.jpg'}
                  alt='Adrian Czesnowski - my photo'
                  width={400}
                  height={1000}
                  quality={100}
                  style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '400px',
                  }}
              />
            </div>
          <p className="prose prose-neutral dark:prose-invert">
              I&apos;m Frontend Developer specializing in <strong>React</strong> & <strong>Flutter</strong>.
              I also work with <strong>React Native</strong> and <strong>Vue</strong>.
          </p>
          <p>In my free time, I learn Kotlin and spend time at the <strong>gym</strong> 🏋️‍♂️</p>
          <p>
              This is my temporary website, in my spare time I will take care of it to make it nicer here 😅
          </p>
          <p>Feel free to contact me:</p>
          <ul className='flex flex-row gap-4 underline'>
              <li><a href="mailto:adrian.czesnowski22@gmail.com" className='py-4' rel="noopener noreferrer">E-mail</a></li>
              <li><a href="https://www.linkedin.com/in/adrian-czesnowski/" target="_blank" className='py-4' rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/adrianczesnowski" target="_blank" className='py-4' rel="noopener noreferrer">GitHub</a></li>
          </ul>
      </section>
);
}
