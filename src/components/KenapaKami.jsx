const KenapaKami = () => {
  const whyUs = [
    {
      id: "1",
      why: "1. Dikerjakan oleh Tukang yang sudah profesional dan berpengalaman dalam bidangnya.",
    },
    {
      id: "2",
      why: "2. Harga yang murah dengan kwalitas yang memuaskan.",
    },
    {
      id: "3",
      why: "3. Waktu pengerjaan yang cepat sesuai estimasi target pengerjaan.",
    },
    {
      id: "4",
      why: "4. Pengerjaan yang rapih.",
    },
  ];

  return (
    <div className="my-16">
      <h1 className="text-center text-4xl font-bold">
        Kenapa Harus Memilih Kami?
      </h1>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 ">
            {whyUs.map((us) => (
              <div key={us.id}>
                <div className="flex justify-between">
                  <div className="mx-4">
                    <h3 className="text-gray-700">{us.why}</h3>
                  </div>
                  <div className="flex-justify-between">
                    <img
                      src="/public/bja.png"
                      alt=""
                      className="overflow-hidden"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KenapaKami;
