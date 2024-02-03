export const MENU_NAVBAR = [
  {
    name: 'Home',
    path: '/'
  },
  {
    key: 'about',
    name: 'About Us',
    icon: 'mdi-chevron-down',
    sub_items: [
      {
        key: 'about',
        name: 'Profile',
        path: '/about/profile'
      },
      {
        key: 'about',
        name: 'Managements',
        path: '/about/managements'
      }
    ]
  },
  {
    key: 'services',
    name: 'Services',
    icon: 'mdi-chevron-down',
    sub_items: [
      {
        key: 'services',
        name: 'Assembly Factory',
        path: '/services/assembly-factory'
      },
      {
        key: 'services',
        name: 'Other Services',
        path: '/services/other-services'
      }
    ]
  },
  {
    name: 'Careers',
    path: '/careers'
  },
  {
    name: 'Contact Us',
    path: '/contact'
  }
]

export const DROPDOWN_MENU = [
  {
    key: 'service-network',
    name: 'Network Infrastructure',
    path: '/services/network-infrastructure',
    sub_items: [
      {
        key: 'service',
        name: 'New Roll Out',
        path: '/services/network-infrastructure#new-roll-out'
      },
      {
        key: 'service',
        name: 'Network Maintenance',
        path: '/services/network-infrastructure#network-repair-and-maintenance'
      },
      {
        key: 'service',
        name: 'Home Connect',
        path: '/services/network-infrastructure#home-connect'
      }
    ]
  },

  {
    key: 'manage-service',
    name: 'Manage Service',
    path: '/services/manage-services',
    sub_items: [
      {
        key: 'service',
        name: 'Contact Center',
        path: '/services/manage-services#contact-center'
      },
      {
        key: 'service',
        name: 'Direct Sales',
        path: '/services/manage-services#direct-sales'
      },
      {
        key: 'service',
        name: 'Telesales',
        path: '/services/manage-services#telesales'
      }
    ]
  }
]

export const DROPDOWN_MENU_MOBILE = {
  network: {
    sub_items: [
      {
        name: 'New Roll Out',
        path: '/services/network-infrastructure#new-roll-out'
      },
      {
        name: 'Network Maintenance',
        path: '/services/network-infrastructure#network-repair-and-maintenance'
      },
      {
        name: 'Home Connect',
        path: '/services/network-infrastructure#home-connect'
      }
    ]
  },

  service: {
    sub_items: [
      {
        name: 'Contact Center',
        path: '/services/manage-services#contact-center'
      },
      {
        name: 'Direct Sales',
        path: '/services/manage-services#direct-sales'
      },
      {
        name: 'Telesales',
        path: '/services/manage-services#telesales'
      }
    ]
  }
}

export const BANNERS = [
  {
    src: '/images/banner/isol1.png'
  },
  {
    src: '/images/banner/isol2.png'
  },
  {
    src: '/images/banner/isol3.png'
  },
  {
    src: '/images/banner/isol1.png'
  },
  {
    src: '/images/banner/isol2.png'
  },
  {
    src: '/images/banner/isol3.png'
  }
]

export const BANNER_MANAGEMENT = [
  {
    src: '/images/banner/managements.webp'
  }
]

export const SERVICES = [
  {
    src: '/images/services/ser1.png',
    src_full: '/images/services/hov1.webp',
    title: 'Network Infrastructures',
    title_about:
      'I-Solution provides end to end solution in telecommunication industries to develop your network infrastructure.',
    title_desc:
      'Fiber optic network (FTTx) with various of services include Engineering & Construction (New Roll Out), Network Maintenance & Repair, and Home Connect (Residential and Multi Dwelling Unit).'
  },
  {
    src: '/images/services/ser2.png',
    src_full: '/images/banner/cs.webp',
    title: 'Manage Services',
    title_about:
      'We can provide various Manage Services such as Contact Center including manpower, premises, workstation, and  application to support your business.',
    title_desc:
      'Contact Center, Tele-sales,  Direct Sales, Information Technology, and Other Key Function.'
  },
  {
    src: '/images/services/ser3.png',
    src_full: '/images/banner/assembly.webp',
    title: 'Assembly Factory',
    title_about:
      'We offer a comprehensive range of products and services to fulfill the needs of Telecommunication & Multimedia.',
    title_desc:
      'Customer Premise Equipment (CPE) such Set Top Box (STB), Cable Modem, Optical Network Terminal (ONT).'
  },
  {
    src: '/images/services/ser4.png',
    src_full: '/images/banner/other.webp',
    title: 'Other Services',
    title_about:
      'With our expertise in Network Infrastructure we can provide Network Material and Equipment : ',
    title_desc:
      'FTTx Poles, Passive Materials, Optical Distribution Network (ODN).'
  }
]

export const CAREERS = [
  {
    src: '/images/careers/diy.webp'
  },
  {
    src: '/images/careers/bantul.png'
  }
]

export const ABOUT_PROFILE = [
  {
    icon: '/images/icon/ic1.svg',
    title: 'Peace Of Mind',
    subtitle:
      'Our employees/service will do the right things straight from the first day'
  },
  {
    icon: '/images/icon/ic2.svg',
    title: 'Trusted Partner',
    subtitle:
      ' Respecting and honoring rules, and regulations with an integrity mindset'
  },
  {
    icon: '/images/icon/ic3.svg',
    title: 'Achieve Your Dreams and Work',
    subtitle: 'Growth and always support the Customer‘s Business'
  },
  {
    icon: '/images/icon/ic4.svg',
    title: 'Continuously Improving',
    subtitle: 'Always find better ways to deliver and achieve the result'
  }
]

export const OUR_CLIENT = [
  {
    title: 'Peace Of Mind',
    subtitle:
      'Our employees/service will do the right things straight from the first day'
  },
  {
    title: 'Trusted Partner',
    subtitle:
      'Respecting and honoring rules, and regulations with an integrity mindset'
  },
  {
    title: 'Achieve Your Dreams and Work',
    subtitle: 'Growth and always support the Customer‘s Business'
  },
  {
    title: 'Continuously Improving',
    subtitle: 'Always find better ways to deliver and achieve the result'
  }
]

export const PROGRAMS = [
  {
    src: 'wireframe.png'
  },
  {
    src: 'wireframe.png'
  },
  {
    src: 'wireframe.png'
  },
  {
    src: 'wireframe.png'
  },
  {
    src: 'wireframe.png'
  },
  {
    src: 'wireframe.png'
  }
]

export const FOOTER = {
  company: [
    {
      name: 'Profile',
      url: '/about/profile'
    },
    {
      name: 'Management',
      url: '/about/managements'
    }
  ],

  services: [
    {
      name: 'Network Infrastructure',
      url: '/services/network-infrastructure'
    },
    {
      name: 'Manage Sevice',
      url: '/services/manage-services'
    },
    {
      name: 'Assembly',
      url: '/services/assembly-factory'
    },
    {
      name: 'Others',
      url: '/services/other-services'
    }
  ],

  careers: [
    {
      name: 'Careers',
      url: '/careers'
    }
  ],

  contact: [
    {
      key: 'location',
      icon: 'mdi-map-marker',
      name: 'PT Infra Solusi Indonesia, Lippo Cyberpark, Boulevard Gajah Mada No. 2062 Tangerang 15811',
      url: 'https://www.google.com/maps/dir//PT+Infra+Solusi+Indonesia+(i-Solution)+Lippo+Cyberpark+Boulevard+Gajah+Mada+No.+2160+Tangerang+15811/@-6.2308529,106.3848027,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e69ff4ea2a40121:0xcdceb7e4dd7b2128!2m2!1d106.6212672!2d-6.2197895'
    },

    {
      key: 'email',
      icon: 'mdi-email',
      name: 'sales@i-solution.co.id'
    }
  ],

  socials: [
    {
      icon: '/images/icon/social01.svg',
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100067006857167'
    },
    {
      icon: '/images/icon/social04.svg',
      name: 'Linkedln',
      url: 'https://www.linkedin.com/company/pt-infra-solusi-indonesia/mycompany/'
    },
    {
      icon: '/images/icon/social05.svg',
      name: 'Instagram',
      url: 'https://www.instagram.com/isolution.indonesia/'
    },
    {
      icon: '/images/icon/social03.svg',
      name: 'Tiktok',
      url: 'https://www.tiktok.com/@isolution_official'
    }
  ]
}

export const ICCI = [
  {
    name: 'I',
    title: 'Integrity',
    subtitle:
      'Prioritize professionalism, openness, responsibility and ethics as performance guidelines consistently.'
  },
  {
    name: 'C',
    title: 'Collaboration',
    subtitle: 'Aligning diversity as a strength to achieve common goals.'
  },
  {
    name: 'C',
    title: 'Customer Focus',
    subtitle:
      'Build and maintain relationships with customers and strive to understand their needs, and provide solutions that can meet customer expectations.'
  },
  {
    name: 'I',
    title: 'Innovative',
    subtitle:
      'Courage to look for new, more efficient and more effective ways to achieve goals.'
  }
]

export const LOCATIONS = [
  {
    city: 'tangerang',
    desc1: 'IT Services(Helpdesk & Developer)',
    desc2: 'Telesales Services > 90 person'
  },
  {
    city: 'jakarta',
    desc1: '58.007 Homepass'
  },
  {
    city: 'bekasi'
  },
  {
    city: 'cikarang'
  },
  {
    city: 'sukabumi'
  },
  {
    city: 'purwakarta'
  },
  {
    city: 'bandung',
    desc1: '8.573 Homepass'
  },
  {
    city: 'cirebon'
  },
  {
    city: 'subang',
    desc1: '17.743 Homepass'
  },
  {
    city: 'kuningan',
    desc1: '1.200 Homepass'
  },
  {
    city: 'tegal'
  },
  {
    city: 'purwokerto'
  },
  {
    city: 'DIY'
  },
  {
    city: 'semarang'
  },
  {
    city: 'sukoharjo',
    desc1: 'Contact Center',
    desc2: '150 Workstation'
  },
  {
    city: 'malang'
  },
  {
    city: 'kediri'
  },
  {
    city: 'surabaya',
    desc1: '32.750 Homepass'
  }
]

export const GALLERIES = [
  {
    src: '/images/galleries/1.webp'
  },
  {
    src: '/images/galleries/2.webp'
  },
  {
    src: '/images/galleries/3.webp'
  },
  {
    src: '/images/galleries/4.webp'
  },
  {
    src: '/images/galleries/5.webp'
  }
]
