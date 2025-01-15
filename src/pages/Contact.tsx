import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Building } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:16px]" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kontakta oss
            </h1>
            <p className="text-xl text-blue-100">
              Vi finns här för att hjälpa dig med ditt nästa projekt
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Låt oss diskutera ditt projekt
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Vi är alltid redo att hjälpa dig med dina byggprojekt. Kontakta oss för en 
                kostnadsfri konsultation och offert.
              </p>
            </div>

            <div className="grid gap-8">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Ring oss</h3>
                  <a 
                    href="tel:070-464-38-88" 
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    070-464 38 88
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Maila oss</h3>
                  <a 
                    href="mailto:info@karlaplanentrepenad.se" 
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    info@karlaplanentrepenad.se
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Besök oss</h3>
                  <p className="text-gray-600">
                    Andersvägen 4<br />
                    169 69 Solna
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Öppettider</h3>
                  <p className="text-gray-600">
                    Måndag - Fredag: 07:00 - 16:00<br />
                    Lördag - Söndag: Stängt
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Skicka meddelande</h3>
              <p className="text-gray-600">
                Fyll i formuläret nedan så återkommer vi så snart som möjligt
              </p>
            </div>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Namn
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                             focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Ditt namn"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-post
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                             focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Din e-post"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                             focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Ditt telefonnummer"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Typ av tjänst
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                           focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                >
                  <option value="">Välj tjänst</option>
                  <option value="bathroom">Badrumsrenovering</option>
                  <option value="pipes">Stambyte</option>
                  <option value="renovation">Renovering</option>
                  <option value="other">Övrigt</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                           focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Beskriv ditt projekt"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
                         hover:bg-blue-700 transition-all duration-300"
              >
                Skicka meddelande
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;