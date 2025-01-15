import React from 'react';
import { Building2, Shield, Award } from 'lucide-react';

function Partners() {
  const partners = [
    {
      name: 'Bravida',
      description: 'Bravida arbetar med alla de funktioner som ger fastigheter liv.',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/bravida.jpg'
    },
    {
      name: 'Pro Kakel',
      description: 'Pro kakel är specialister på kakel, klinker och design.',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/pro-kakel.jpg'
    },
    {
      name: 'Jörgensens Rör',
      description: 'Jörgensens Rör utför stambyten i flerfamiljshus med kvarboende i Stockholm.',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/jorgens-ror.jpg'
    }
  ];

  const certificates = [
    {
      name: 'ID06',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-id06.png'
    },
    {
      name: 'UC',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-uc.png'
    },
    {
      name: 'PER',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-per.png'
    },
    {
      name: 'Gjensidige',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/gjensidige.jpg'
    },
    {
      name: 'BKR',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-bkr.png'
    },
    {
      name: 'Heta Arbeten',
      logo: 'https://solnabyggprojekt.se/assets/uploads/2019/11/certifikat-heta-arbeten.png'
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:16px]" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Building2 className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Våra partners
            </h1>
            <p className="text-xl text-blue-100">
              Vi är stolta över våra samarbetspartners
            </p>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Certifieringar & Kvalitetssäkring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi är stolta över våra certifieringar som garanterar högsta kvalitet och säkerhet i alla våra projekt
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.name}
                className="bg-gray-50 p-4 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 relative">
                  <img
                    src={cert.logo}
                    alt={`${cert.name} Certifikat`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Award className="w-12 h-12 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Vårt kvalitetslöfte
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Genom våra starka partnerskap och certifieringar kan vi garantera högsta kvalitet 
              i varje projekt. Vi väljer våra samarbetspartners med omsorg för att säkerställa 
              att vi alltid levererar enligt, eller överträffar, dina förväntningar.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Certifierad Kompetens</h3>
                <p className="text-gray-300">
                  Alla våra hantverkare är certifierade och har gedigen erfarenhet
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Kvalitetssäkring</h3>
                <p className="text-gray-300">
                  Omfattande garantier och försäkringar för din trygghet
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Premium Material</h3>
                <p className="text-gray-300">
                  Samarbete med marknadens ledande materialleverantörer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partners;