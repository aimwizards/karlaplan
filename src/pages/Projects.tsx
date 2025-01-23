import React, { useState, useEffect } from 'react';
import { Filter, MapPin, ChevronLeft, ChevronRight, Wrench } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  category: 'bathroom' | 'kitchen' | 'renovation';
  images: string[];
  details: {
    location: string;
    duration: string;
    scope: string[];
  };
};

const projects: Project[] = [
  {
    id: 11,
    title: "Lyxigt designbadrum i Stockholm",
    description: "Exklusiv badrumsrenovering med högsta kvalitet och unika designlösningar",
    category: "bathroom",
    images: [
      "https://i.ibb.co/85fHwdc/Snapinst-app-470599992-18257247409283548-8569755052803332494-n-1080.jpg",
      "https://i.ibb.co/9cNxfsy/Snapinst-app-470598530-18257247277283548-6845134848514360342-n-1080.jpg",
      "https://i.ibb.co/R7trb8F/Snapinst-app-470204933-18257247406283548-6473482547720220582-n-1080.jpg",
      "https://i.ibb.co/XDgjMcS/Snapinst-app-470579755-18257247388283548-4484673828828568301-n-1080.jpg",
      "https://i.ibb.co/J5N4gW2/Snapinst-app-470803606-18257247283283548-1536684013384807633-n-1080.jpg",
      "https://i.ibb.co/KKRKHvD/Snapinst-app-470201533-18257247403283548-4848093585440022461-n-1080.jpg",
      "https://i.ibb.co/Gk5SQy2/Snapinst-app-470538708-18257247610283548-3289726901350430472-n-1080.jpg"
    ],
    details: {
      location: "Stockholm",
      scope: [
        "Exklusiv badrumsrenovering",
        "Specialdesignad duschvägg",
        "Lyxiga materialval",
        "Golvvärme",
        "Modern LED-belysning",
        "Platsbyggda förvaringslösningar",
        "Högkvalitativa blandare och armaturer"
      ]
    }
  },
  {
    id: 4,
    title: "Badrumsrenovering i Stockholm",
    description: "Elegant badrumsrenovering med moderna detaljer",
    category: "bathroom",
    images: [
      "https://static.wixstatic.com/media/1076bc_45260fab915e4b2598fe083643fc6df6~mv2.jpg/v1/fill/w_720,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/1076bc_45260fab915e4b2598fe083643fc6df6~mv2.jpg",
      "https://static.wixstatic.com/media/1076bc_6effb44261e64e6a9f06db90aa77dbe2~mv2.jpg/v1/fill/w_720,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/1076bc_6effb44261e64e6a9f06db90aa77dbe2~mv2.jpg",
      "https://static.wixstatic.com/media/1076bc_7f99e6e97bac477fbd22998083c7e1b1~mv2.jpg/v1/fill/w_720,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/1076bc_7f99e6e97bac477fbd22998083c7e1b1~mv2.jpg",
      "https://static.wixstatic.com/media/1076bc_dc2f0fee1b124690bab046425ebf696c~mv2.jpg/v1/fill/w_720,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/1076bc_dc2f0fee1b124690bab046425ebf696c~mv2.jpg",
      "https://i.ibb.co/dkRR3HH/10.jpg"
    ],
    details: {
      location: "Stockholm",
      duration: "3 veckor",
      scope: [
        "Komplett badrumsrenovering",
        "Installation av ny dusch",
        "Modern badrumsinredning",
        "Nya vattenledningar",
        "Ny belysning",
        "Högkvalitativa material"
      ]
    }
  },
  {
    id: 3,
    title: "Badrumsrenovering i Solna",
    description: "Modern badrumsrenovering",
    category: "bathroom",
    images: [
      "https://static.wixstatic.com/media/1076bc_63e1796f7cdc4aad9207ce6493b16078~mv2.jpg/v1/fill/w_720,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/1076bc_63e1796f7cdc4aad9207ce6493b16078~mv2.jpg"
    ],
    details: {
      location: "Solna",
      duration: "3 veckor",
      scope: [
        "Komplett badrumsrenovering",
        "Installation av ny dusch",
        "Modern badrumsinredning",
        "Nya vattenledningar",
        "Ny belysning",
        "Högkvalitativa material"
      ]
    }
  },
  {
    id: 16,
    title: "Lyxigt badrum med modern elegans",
    description: "Exklusiv badrumsrenovering med fokus på eleganta detaljer och högkvalitativa material",
    category: "bathroom",
    images: [
      "https://i.postimg.cc/kMZmhzMZ/Snapinst-app-71178839-2594195620624837-2408425663261433426-n-1080.jpg",
      "https://i.postimg.cc/J09CDDdm/Snapinst-app-72618512-410257592982868-1155780140977035983-n-1080.jpg"
    ],
    details: {
      location: "Stockholm",
      duration: "4 veckor",
      scope: [
        "Komplett badrumsrenovering",
        "Exklusiva materialval",
        "Specialdesignad duschvägg",
        "Infälld belysning",
        "Golvvärme",
        "Skräddarsydda förvaringslösningar"
      ]
    }
  },
  {
    id: 10,
    title: "Modernt badrum med skandinavisk design",
    description: "Ljust och luftigt badrum med tidlösa materialval",
    category: "bathroom",
    images: [
      "https://i.ibb.co/xjgFpsT/11.jpg",
      "https://i.ibb.co/cFs57DY/12.jpg"
    ],
    details: {
      location: "Stockholm",
      duration: "3 veckor",
      scope: [
        "Komplett badrumsrenovering",
        "Skandinavisk design",
        "Stora format plattor",
        "Infälld spegel med belysning",
        "Golvvärme",
        "Minimalistiska detaljer"
      ]
    }
  },
  {
    id: 17,
    title: "Spa-inspirerat lyxbadrum",
    description: "Ett avkopplande badrum med spa-känsla och exklusiva detaljer",
    category: "bathroom",
    images: [
      "https://i.postimg.cc/Kjqcj8tD/Snapinst-app-53123473-319367298721537-6449321932112678740-n-1080.jpg"
    ],
    details: {
      location: "Stockholm",
      duration: "4 veckor",
      scope: [
        "Komplett badrumsrenovering",
        "Spa-inspirerad design",
        "Lyxiga materialval",
        "Avkopplande belysning",
        "Golvvärme",
        "Specialanpassade förvaringslösningar",
        "Högkvalitativa blandare"
      ]
    }
  },
  {
    id: 9,
    title: "Lyxigt badrum i Södermalm",
    description: "Stilren och modern badrumsrenovering med industriella inslag",
    category: "bathroom",
    images: [
      "https://i.ibb.co/1LGjRnC/9.jpg",
      "https://i.ibb.co/hBXBsGL/Snapinst-app-125910475-655241725169645-7670005700466912155-n-1080.jpg",
      "https://i.ibb.co/HYBHQCj/Snapinst-app-126338248-290639412245898-7218926971540699177-n-1080.jpg",
      "https://i.ibb.co/FBQh9hs/8.jpg"
    ],
    details: {
      location: "Södermalm",
      duration: "3 veckor",
      scope: [
        "Komplett badrumsrenovering",
        "Svarta detaljer och armaturer",
        "Specialdesignad duschvägg",
        "Industriell stil",
        "LED-belysning",
        "Marmormönstrade plattor"
      ]
    }
  },
  {
    id: 8,
    title: "Smart design för litet badrum",
    description: "Maximalt utnyttjande av minimal yta med smarta lösningar",
    category: "bathroom",
    images: [
      "https://i.ibb.co/2sdW0KM/7.jpg",
      
    ],
    details: {
      location: "Stockholm",
      duration: "2 veckor",
      scope: [
        "Optimerad planlösning",
        "Platsbyggda förvaringslösningar",
        "Väggmonterad toalett",
        "Infällda spotlights",
        "Specialanpassad duschvägg",
        "Yteffektiva materialval"
      ]
    }
  },
  {
    id: 7,
    title: "Badrumsrenovering i Sundbyberg",
    description: "Lyxig badrumsrenovering med moderna inslag och tidlös design",
    category: "bathroom",
    images: [
      "https://i.ibb.co/prPmt7M/5.jpg",
      "https://i.ibb.co/MnZJwqh/6.jpg"
    ],
    details: {
      location: "Sundbyberg",
      duration: "3 veckor",
      scope: [
        "Komplett badrumsrenovering",
        "Specialdesignad duschvägg",
        "Exklusiv badrumsinredning",
        "Golvvärme",
        "LED-belysning",
        "Premiumkakel och klinker"
      ]
    }
  },
  {
    id: 14,
    title: "Stilfullt badrum i Gamla Stan",
    description: "Elegant badrumsrenovering som bevarar historisk charm med moderna bekvämligheter",
    category: "bathroom",
    images: [
      "https://i.ibb.co/R27C25g/Snapinst-app-152279566-285059823040933-5657178807744071006-n-1080.jpg"
    ],
    details: {
      location: "Gamla Stan",
      duration: "4 veckor",
      scope: [
        "Komplett badrumsrenovering",
        "Anpassning till historisk miljö",
        "Modern komfort",
        "Specialanpassade lösningar",
        "Tidstypiska detaljer",
        "Högkvalitativa material"
      ]
    }
  },
  {
    id: 15,
    title: "Badrum med bohemiskt kakel",
    description: "Ett unikt badrum med karakteristiskt mönstrat golv och moderna detaljer",
    category: "bathroom",
    images: [
      "https://i.postimg.cc/bN2yRpPd/Snapinst-app-121236179-735361757018752-3063197745271137616-n-1080.jpg",
      "https://i.postimg.cc/L8KHCw4D/Snapinst-app-121267650-2874724546098090-6455711770411880800-n-1080.jpg",
      "https://i.postimg.cc/0545mrLL/Snapinst-app-121273453-846133282795317-555823588919305909-n-1080.jpg"
    ],
    details: {
      location: "Stockholm",
      duration: "3 veckor",
      scope: [
        "Komplett badrumsrenovering",
        "Bohemiskt mönstrat golvkakel",
        "Modern duschvägg",
        "Specialanpassad förvaring",
        "Infälld belysning",
        "Högkvalitativa material"
      ]
    }
  },
  {
    id: 6,
    title: "Total köksförvandling",
    description: "Total köksförvandling som överträffar alla förväntningar",
    category: "kitchen",
    images: [
      "https://i.ibb.co/kh9k0dg/4.jpg",
      "https://i.ibb.co/xsrttgG/3.jpg"
    ],
    details: {
      location: "Stockholm",
      duration: "5 veckor",
      scope: [
        "Komplett köksrenovering",
        "Nya köksskåp och bänkskivor",
        "Modern köksö",
        "Integrerade vitvaror",
        "Specialdesignad belysning",
        "Premiumfinish på alla ytor"
      ]
    }
  },
  {
    id: 5,
    title: "Köksrenovering i Stockholm",
    description: "Modern köksrenovering med eleganta detaljer och funktionell design",
    category: "kitchen",
    images: [
      "https://i.ibb.co/Fw1sZG1/1.jpg",
      "https://i.ibb.co/bH9PR6h/2.jpg"
    ],
    details: {
      location: "Stockholm",
      duration: "4 veckor",
      scope: [
        "Komplett köksrenovering",
        "Installation av nya vitvaror",
        "Skräddarsydda köksluckor",
        "Modern belysning",
        "Nya elinstallationer",
        "Högkvalitativa material"
      ]
    }
  },
  {
    id: 18,
    title: "Klassiskt kök med modern touch",
    description: "Tidlös köksdesign som kombinerar klassisk elegans med moderna bekvämligheter",
    category: "kitchen",
    images: [
      "https://i.postimg.cc/x10GW0RT/Snapinst-app-38934155-1911957055564366-1682292252656795648-n-1080.jpg",
      "https://i.postimg.cc/K8J7bdq7/Snapinst-app-39215264-275094733217772-6804134361949011968-n-1080.jpg"
    ],
    details: {
      location: "Stockholm",
      duration: "6 veckor",
      scope: [
        "Komplett köksrenovering",
        "Klassisk design med moderna inslag",
        "Skräddarsydda köksluckor",
        "Integrerade vitvaror",
        "Specialanpassad belysning",
        "Högkvalitativa bänkskivor",
        "Funktionell förvaring"
      ]
    }
  },
  {
    id: 20,
    title: "Modern köksdesign med öppen planlösning",
    description: "Elegant kök med perfekt balans mellan funktion och design",
    category: "kitchen",
    images: [
      "https://i.postimg.cc/htKSRY60/Snapinst-app-39328442-851634791705154-6789245900767100928-n-1080.jpg",
      "https://i.postimg.cc/tRVR3WFF/Snapinst-app-40028623-2133177580256479-1797075807693176832-n-1080.jpg"
    ],
    details: {
      location: "Stockholm",
      duration: "5 veckor",
      scope: [
        "Komplett köksrenovering",
        "Öppen planlösning",
        "Skräddarsydda köksluckor",
        "Integrerade vitvaror",
        "Modern belysningslösning",
        "Högkvalitativa bänkskivor",
        "Funktionell förvaring",
        "Specialanpassad köksö"
      ]
    }
  },
  {
    id: 19,
    title: "Total renovering med fläckfri design",
    description: "Komplett renovering med fokus på rena linjer och modern elegans",
    category: "renovation",
    images: [
      "https://i.postimg.cc/rs1nNf8h/Snapinst-app-38656302-286011245337270-4306810251706892288-n-1080.jpg",
      "https://i.postimg.cc/x8DpmwSJ/Snapinst-app-39075494-1092400287585336-5668464280681316352-n-1080.jpg",
      "https://i.postimg.cc/0QJHb8h1/Snapinst-app-39335196-600271133702747-4487390609773953024-n-1080.jpg"
    ],
    details: {
      location: "Stockholm",
      duration: "8 veckor",
      scope: [
        "Totalrenovering av bostad",
        "Moderna ytskikt",
        "Specialanpassad planlösning",
        "Skräddarsydda snickerier",
        "Ny elinstallation",
        "Högkvalitativa material",
        "Minimalistisk design",
        "Integrerade förvaringslösningar"
      ]
    }
  },
  {
    id: 2,
    title: "Badrumsrenovering i Östermalm",
    description: "Modern badrumsrenovering med elegant design",
    category: "bathroom",
    images: [
      "https://static.wixstatic.com/media/1076bc_3d6e6d02189342a68c58ddb4056def35~mv2.jpg/v1/fill/w_576,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/1076bc_3d6e6d02189342a68c58ddb4056def35~mv2.jpg",
      "https://static.wixstatic.com/media/1076bc_9dd535634d7c412cb7fcbeaa9d2a5757~mv2.jpg/v1/fill/w_576,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/1076bc_9dd535634d7c412cb7fcbeaa9d2a5757~mv2.jpg"
    ],
    details: {
      location: "Östermalm",
      duration: "3 veckor",
      scope: [
        "Komplett badrumsrenovering",
        "Installation av ny dusch",
        "Modern badrumsinredning",
        "Nya vattenledningar",
        "Ny belysning",
        "Högkvalitativa material"
      ]
    }
  },
  {
    id: 1,
    title: "Totalrenovering i Järfälla",
    description: "Komplett renovering av badrum med modern design",
    category: "bathroom",
    images: [
      "https://static.wixstatic.com/media/1076bc_e525fbbd066f4431b1fe1501aef57de6~mv2.jpg/v1/fill/w_750,h_938,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Snapinsta_app_369945902_18194599186283548_3092473152736632724_n_1080.jpg",
      "https://static.wixstatic.com/media/1076bc_b345119c2c3b4139b2187a8553f96fe7~mv2.jpg/v1/fill/w_750,h_938,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Snapinsta_app_369966097_18194599159283548_8517681550879665969_n_1080.jpg",
      "https://static.wixstatic.com/media/1076bc_755f1a737f7c49998db0ad16da54a8e2~mv2.jpg/v1/fill/w_750,h_938,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Snapinsta_app_370197705_18194599150283548_4182818048720526717_n_1080.jpg",
      "https://static.wixstatic.com/media/1076bc_5959dd6e21614357a9df947b23d02521~mv2.jpg/v1/fill/w_750,h_938,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Snapinsta_app_370259105_18194599222283548_9068911666646641761_n_1080.jpg"
    ],
    details: {
      location: "Järfälla",
      duration: "4 veckor",
      scope: [
        "Komplett badrumsrenovering",
        "Rivning av befintligt badrum",
        "Ny golvvärme",
        "Nya vattenledningar",
        "Nya elinstallationer",
        "Modern inredning",
        "Högkvalitativa material"
      ]
    }
  },
  {
    id: 12,
    title: "Totalrenovering av lägenhet",
    description: "Omfattande renovering med moderna lösningar och elegant finish",
    category: "renovation",
    images: [
      "https://i.ibb.co/p1bpvk7/Snapinst-app-327618208-576004134065031-7382117166105810186-n-1080.jpg",
      "https://i.ibb.co/1ZWGsHF/Snapinst-app-327673740-896824774850606-7282846438907892941-n-1080.jpg",
      "https://i.ibb.co/RjSFmPk/Snapinst-app-327615232-879151743293322-249586448231443466-n-1080.jpg"
    ],
    details: {
      location: "Stockholm",
      scope: [
        "Totalrenovering av lägenhet",
        "Nya ytskikt",
        "Modern planlösning",
        "Specialanpassade snickerier",
        "Ny elinstallation",
        "Nya golv",
        "Målning och tapetsering"
      ]
    }
  },
  {
    id: 13,
    title: "Badrum med karaktär",
    description: "Ett unikt badrum där modern design möter personlig stil",
    category: "bathroom",
    images: [
      "https://i.ibb.co/YtjtWB7/Snapinst-app-274333904-1898512350537248-7491584871194648246-n-1080.jpg"
    ],
    details: {
      location: "Stockholm",
      duration: "3 veckor",
      scope: [
        "Komplett badrumsrenovering",
        "Unika designlösningar",
        "Specialanpassad inredning",
        "Modern belysning",
        "Högkvalitativa material",
        "Skräddarsydda detaljer"
      ]
    }
  }
];

const categories = [
  { id: 'all', label: 'Alla Projekt' },
  { id: 'bathroom', label: 'Badrum' },
  { id: 'kitchen', label: 'Kök' },
  { id: 'renovation', label: 'Renovering' }
];

function ImageGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative overflow-hidden rounded-lg group cursor-pointer h-[400px]">
      <img
        src={images[currentIndex]}
        alt={`Bild ${currentIndex + 1}`}
        className="w-full h-full object-contain bg-gray-100 transition-transform duration-300 group-hover:scale-105"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1708010549623-37eafb8245b0?q=80&w=1932&auto=format&fit=crop')"
      }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full container mx-auto px-6 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Våra Projekt
            </h1>
            <p className="text-xl text-gray-200">
              Se våra senaste projekt och låt dig inspireras
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 -mt-16 relative z-10 pb-20">
        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Filter className="w-5 h-5 text-amber-500" />
            <h2 className="text-lg font-semibold text-gray-900">Filtrera efter kategori</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedCategory === category.id
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col h-[600px]">
              <div className="flex-shrink-0">
                <ImageGallery images={project.images} />
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.details.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
