const OurMitra = () => {
  const ourMitra = [
    {
      id: "1",
      name: "PT. Bina Adidaya",
      Mitraname: "Penta Prima Paint",
    },
    {
      id: "2",
      name: "PT. Propan Paya",
      Mitraname: "Propan Paint",
    },
    {
      id: "3",
      name: "PT. Fanos Asia Bekasi",
      Mitraname: "Maxin Floor",
    },
    {
      id: "4",
      name: "PT. Nipsea Paint And Chemicals",
      Mitraname: "Nippon Paint",
    },
    {
      id: "5",
      name: "PT. Asaba Golden Prima",
      Mitraname: "Top Floor",
    },
    {
      id: "6",
      name: "PT. Arsy Paint Indonesia",
      Mitraname: "Arsy Floor",
    },
    {
      id: "7",
      name: "PT. Kimia Konstruksi Indonesia",
      Mitraname: "Consol Floor",
    },
    {
      id: "8",
      name: "PT. Eltama Prima Indo",
      Mitraname: "Foxa Paint",
    },
    {
      id: "9",
      name: "PT. Jotun Indonesia",
      Mitraname: "Jotun Paint",
    },
    {
      id: "10",
      name: "Warna Agung",
      Mitraname: "Epoxy Floor Coating",
    },
    {
      id: "11",
      name: "Handpaint",
      Mitraname: "Epoxy Floor Coating",
    },
    {
      id: "12",
      name: "PT. International Paint Indonesia",
      Mitraname: "International Paint",
    },
  ];

  return (
    <div className="my-16">
      <h1 className="text-center text-4xl font-bold">Mitra Kami</h1>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
            {ourMitra.map((mitra) => (
              <div
                className="h-20 rounded-md bg-slate-100 shadow-sm"
                key={mitra.id}
              >
                <div className="my-4">
                  <div className="flex justify-center">
                    <p className="text-md text-gray-800">{mitra.name}</p>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-sm text-gray-800">{mitra.Mitraname}</p>
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
export default OurMitra;
