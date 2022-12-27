import {
  WrenchScrewdriverIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Tukang yang Profesional",
    description:
      "Dikerjakan oleh Tukang yang sudah profesional dan berpengalaman dalam bidangnya.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Harga yang Terjangkau",
    description:
      "Kami memberikan harga yang murah dengan kualitas yang memuaskan.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Tepat Waktu",
    description:
      "Waktu pengerjaan yang cepat sesuai estimasi target pengerjaan.",
    icon: ClockIcon,
  },
  {
    name: "Pengerjaan yang Rapi",
    description:
      "Hasil pengerjaan yang dilakukan sesuai dengan permintaan klien dan rapi.",
    icon: CheckCircleIcon,
  },
];

const KenapaKami = () => {
  return (
    <div className="my-16">
      <h1 className="text-center text-4xl font-bold uppercase">
        Kenapa Harus Memilih Kami?
      </h1>

      <div className="mx-auto mt-6 w-1/2 border-b-2 border-green-700/80 lg:w-1/6"></div>

      <div className="px-5 py-12 sm:py-24 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-800 text-white sm:shrink-0">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-lg font-semibold leading-8 text-gray-900">
                      {feature.name}
                    </p>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
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

export default KenapaKami;
