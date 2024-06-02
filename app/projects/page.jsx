import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <div className="text-black py-8">
        <div className="flex flex-col-reverse py-8  text-white md:flex-row gap-4 bg-[#283429] px-12 md:px-16">
          <h1 className="font-bold text-7xl">
            <span className="l">PROJECTS</span>
          </h1>
        </div>
        <div className="md:mx-16 mx-12 flex flex-col gap-16">
          <h1 className="text-xl mt-8">
            Berikut beberapa projek yang sedang saya kerjakan:
          </h1>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">SYNAPSE</h1>
            <p>
              Projek ini merupakan penugasan dalam mata kuliah Desain Interaksi
              Media Pembelajaran yang saya ampu pada semester 4 ini. Desain
              tersebut ditujukan bagi siswa SMK yang merasa bingung mengenai
              pilihan karir di masa depan mereka. Website ini menyediakan
              berbagai fitur yang dapat membantu siswa SMK dalam mencari
              referensi karir. Salah satu fitur utamanya adalah tes minat bakat,
              di mana hasil tes tersebut dapat membantu siswa menemukan karir
              yang sesuai dengan minat mereka.
            </p>
            <div className="flex flex-col gap-4 md:flex-row md:gap-16">
              <Image
                src={'/synapse1.png'}
                width={600}
                height={400}
                alt="missing img"
                className="rounded-2xl"
              />
              <Image
                src={'/synapse2.png'}
                width={600}
                height={400}
                alt="missing img"
                className="rounded-2xl"
              />
              <Image
                src={'/synapse3.png'}
                width={600}
                height={400}
                alt="missing img"
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">SAVE ANIMAL</h1>
            <p>
              Projek ini adalah tugas dalam mata kuliah Pengembangan Gim
              Pembelajaran yang saya ampu pada semester 4 ini. Gim ini berbentuk
              platformer di mana pengguna diminta untuk menyelamatkan
              hewan-hewan yang terperangkap dengan cara mengumpulkan koin dan
              menjawab pertanyaan. Dalam gim tersebut, pemain juga harus
              menghindari musuh dan menjaga agar tidak kehabisan nyawa.
            </p>
            <div className="flex flex-col gap-4 md:flex-row md:gap-16">
              <Image
                src={'/saveanimal.png'}
                width={1200}
                height={400}
                alt="missing img"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
