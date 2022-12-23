const Pengerjaan = () => {
  const peng = [
    {
      id: "1",
      judul: "Survey Lokasi",
      ket: "Pemeriksaan lokasi target pengetcatan secara menyeluruh dan pengukuran volume pekerjaan.",
      imageSrc: "./src/assets/icons/map.svg",
    },
    {
      id: "2",
      judul: "Pengerjaan",
      ket: "Pengerjaan akan dilakukan oleh tim yang ahli dalam bidangnya, mulai dari dasar sampai dengan finishing.",
      imageSrc: "./src/assets/icons/pengerjaan.svg",
    },
    {
      id: "3",
      judul: "Selesai",
      ket: "Laporan hasil pengerjaan kepada klien, kepuasan klien menjadi prioritas BJA.",
      imageSrc: "./src/assets/icons/time.svg",
    },
  ];
  return (
    <div className="my-16">
      <h1 className="text-center text-4xl font-bold">Tahapan Pengerjaan</h1>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {peng.map((pngrjn) => (
              <div
                className=" h-40 rounded-md bg-slate-100 shadow-sm"
                key={pngrjn.id}
              >
                <div className=" mt-5 flex justify-center overflow-hidden ">
                  <img src={pngrjn.imageSrc} />
                </div>
                <div className=" flex justify-center">
                  <h3 className="text-md mt-2 text-gray-700">{pngrjn.judul}</h3>
                </div>
                <div className="flex justify-center">
                  <p>{pngrjn.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengerjaan;
