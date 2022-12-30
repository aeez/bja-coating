import {
  MapIcon,
  Cog6ToothIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";

const steps = [
  {
    id: "1",
    judul: "Survey Lokasi",
    ket: "Pemeriksaan lokasi target pengetcatan secara menyeluruh dan pengukuran volume pekerjaan.",
    icon: MapIcon,
  },
  {
    id: "2",
    judul: "Pengerjaan",
    ket: "Pengerjaan akan dilakukan oleh tim yang ahli dalam bidangnya, mulai dari dasar sampai dengan finishing.",
    icon: Cog6ToothIcon,
  },
  {
    id: "3",
    judul: "Selesai",
    ket: "Laporan hasil pengerjaan kepada klien, kepuasan klien menjadi prioritas BJA Coating.",
    icon: ClipboardDocumentCheckIcon,
  },
];
const Pengerjaan = () => {
  return (
    <div className="my-16">
      <h1 className="text-center text-4xl font-bold uppercase">
        Tahapan Pengerjaan
      </h1>

      <div className="mx-auto mt-6 w-1/2 border-b-2 border-green-700/80 lg:w-1/6"></div>

      <div className="px-5 py-10 sm:py-16 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-16 md:gap-y-14">
              {steps.map((step) => (
                <div className="" key={step.id}>
                  <div className="mt-5 flex justify-center overflow-hidden ">
                    <step.icon
                      className="h-12 w-12 text-green-800"
                      aria-hidden="true"
                    />
                  </div>
                  <div className=" mt-3 flex justify-center">
                    <h3 className="text-xl font-semibold leading-8 text-gray-900">
                      {step.judul}
                    </h3>
                  </div>
                  <div className="mt-3 flex justify-center">
                    <p className="text-center text-gray-600">{step.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengerjaan;
