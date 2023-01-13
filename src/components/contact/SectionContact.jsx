const SectionContact = () => {
  return (
    <>
      <div className="container flex justify-between">
        <div className="mx-10 mt-16">
          <h3 className=" flex items-center text-2xl font-bold uppercase">
            BJA Coatings
          </h3>
          <p className="mt-4">
            Jl. Sugeng, komplek sei rotan sakinah no.8 blok C, Kec. Percut Sei
            Tuan, Deli Serdang, Sumatera Utara.
          </p>
        </div>
        <div className="mx-10 mt-10 mb-10">
          <iframe
            className="rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.889644498846!2d98.78049541379077!3d3.6127120511377626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303137c056cca587%3A0xd81171f0403ad3f7!2sGriya%20Sei%20Rotan%20Sakinah!5e0!3m2!1sid!2sid!4v1672398524241!5m2!1sid!2sid"
            width="500"
            height="350"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default SectionContact;
