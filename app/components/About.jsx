'use client';

const texts =
  'Saya seorang mahasiswa Fakultas Ilmu Komputer di Universitas Brawijaya, angkatan 2022. Sejak bergabung di fakultas ini, saya semakin tertarik dengan berbagai aspek teknologi dan informatika yang menjadi bagian integral dari kehidupan kita saat ini. \n Di luar kesibukan akademis, saya memiliki hobi traveling. Melalui traveling, saya menikmati keindahan alam dan selalu berusaha mengabadikan setiap momen indah yang saya temui. Bagi saya, perjalanan bukan hanya tentang destinasi, tetapi juga tentang pengalaman dan pembelajaran yang didapatkan di sepanjang jalan.';

const text = texts.split('\n');

export default function About() {
  return (
    <>
      <div className="flex flex-col gap-16 md:w-3/4">
        <div className="flex flex-col gap-4 text-justify">
          {text.map((t) => (
            <p key={t.id}>{t}</p>
          ))}
        </div>
      </div>
    </>
  );
}
