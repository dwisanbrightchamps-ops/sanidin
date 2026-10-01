export type Language = 'id' | 'en';

export interface TranslationData {
  nav: {
    home: string;
    benefit: string;
    prestasi: string;
    paket: string;
    faq: string;
    kontak: string;
    ctaButton: string;
  };
  hero: {
    tagline: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Label: string;
    stat1Val: string;
    stat2Label: string;
    stat2Val: string;
    stat3Label: string;
    stat3Val: string;
    badgeStudents: string;
    liveBadge: string;
    accountingBadge: string;
    debitCreditBalance: string;
  };
  benefits: {
    tag: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card1Points: string[];
    card2Title: string;
    card2Desc: string;
    card2Points: string[];
    card3Title: string;
    card3Desc: string;
    card3Points: string[];
  };
  workflow: {
    tag: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  achievements: {
    tag: string;
    title: string;
    subtitle: string;
    stats: {
      satisfiedStudents: {
        value: number;
        suffix: string;
        label: string;
        description: string;
      };
      sessionsConducted: {
        value: number;
        suffix: string;
        label: string;
        description: string;
      };
      scoreIncrease: {
        value: number;
        prefix: string;
        suffix: string;
        label: string;
        description: string;
      };
      satisfactionRate: {
        value: number;
        suffix: string;
        label: string;
        description: string;
      };
    };
    highlightBadge: string;
  };
  packages: {
    tag: string;
    title: string;
    subtitle: string;
    monthlyNote: string;
    smaBadge: string;
    smaTitle: string;
    smaDesc: string;
    smaPrice: string;
    smaPeriod: string;
    smaFeatures: string[];
    smaCta: string;
    mhsBadge: string;
    mhsTitle: string;
    mhsDesc: string;
    mhsPrice: string;
    mhsPeriod: string;
    mhsFeatures: string[];
    mhsCta: string;
    packageGuarantee: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    levelLabel: string;
    smaOption: string;
    mhsOption: string;
    sessionLabel: string;
    modeLabel: string;
    onlineMode: string;
    offlineMode: string;
    estTotal: string;
    consultNow: string;
  };
  testimonials: {
    tag: string;
    title: string;
    subtitle: string;
    items: {
      name: string;
      role: string;
      institution: string;
      quote: string;
      grade: string;
    }[];
  };
  faq: {
    tag: string;
    title: string;
    subtitle: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    directChat: string;
    chatDesc: string;
    buttonChat: string;
    emailLabel: string;
    emailValue: string;
    locationLabel: string;
    locationValue: string;
    hoursLabel: string;
    hoursValue: string;
    formTitle: string;
    formName: string;
    formPhone: string;
    formLevel: string;
    formTopic: string;
    formSubmit: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    learningFocus: string;
    contactUs: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  id: {
    nav: {
      home: "Home",
      benefit: "Benefit",
      prestasi: "Prestasi",
      paket: "Paket",
      faq: "FAQ",
      kontak: "Kontak",
      ctaButton: "Konsultasi Gratis",
    },
    hero: {
      tagline: "Bimbingan Belajar Akuntansi Privat #1 Untuk SMA & Mahasiswa",
      title: "Kuasai Akuntansi Bersama",
      titleHighlight: "Sanidin",
      subtitle: "Bimbingan belajar akuntansi privat eksklusif 1-on-1 untuk Mahasiswa & Siswa SMA. Siap taklukkan ujian sekolah, UTBK SNBT, tugas praktikum, hingga ujian semester dengan pemahaman konsep yang mudah dan menyenangkan!",
      ctaPrimary: "Daftar Sekarang",
      ctaSecondary: "Lihat Paket Belajar",
      stat1Label: "Siswa & Mahasiswa",
      stat1Val: "350+",
      stat2Label: "Rata-rata Nilai A/B",
      stat2Val: "98%",
      stat3Label: "Sesi Diskusi Bebas",
      stat3Val: "1-on-1",
      badgeStudents: "Khusus Mahasiswa & SMA",
      liveBadge: "Pendaftaran Gelombang Baru Dibuka",
      accountingBadge: "Konsep Mudah • Cepat Paham",
      debitCreditBalance: "Aktiva = Pasiva (Seimbang / Balanced)",
    },
    benefits: {
      tag: "Keunggulan Kami",
      title: "Mengapa Belajar Akuntansi di Sanidin?",
      subtitle: "Kami merancang metode pembelajaran yang fokus pada logika dasar, bukan sekadar menghafal rumus atau akun.",
      card1Title: "Kurikulum Fleksibel",
      card1Desc: "Menyesuaikan materi sekolah/kampus Anda. Apapun kurikulum SMA (Merdeka/K13) atau silabus program studi akuntansi/manajemen universitas Anda, materi disesuaikan 100%.",
      card1Points: [
        "Materi custom sesuai silabus mata kuliah / sekolah",
        "Atur jadwal belajar fleksibel (pagi, sore, atau malam)",
        "Bisa pilih mode daring (online via Zoom) atau tatap muka",
      ],
      card2Title: "Pendampingan Intensif",
      card2Desc: "Bebas tanya jawab tugas & persiapan ujian. Jangan biarkan tugas akuntansi menumpuk atau bingung saat neraca tidak seimbang. Tutor siap mendampingi sampai tuntas.",
      card2Points: [
        "Konsultasi tanya PR & tugas praktikum via WhatsApp harian",
        "Bedah kisi-kisi UTS, UAS, dan tryout ujian berkala",
        "Pemberian feedback mendalam pada pengerjaan studi kasus",
      ],
      card3Title: "Tips & Trik Praktis",
      card3Desc: "Cara cepat paham debit-kredit dan laporan keuangan. Kuasai 'Logic of Accounting' dengan analogi sederhana yang langsung menempel di kepala tanpa pusing menghafal.",
      card3Points: [
        "Metode 'Golden Rules of Debit-Credit' anti lupa",
        "Jalan pintas pembuatan Jurnal Penyesuaian & Kertas Kerja",
        "Pemahaman praktis Laporan Laba Rugi & Neraca Saldo",
      ],
    },
    workflow: {
      tag: "Alur Pembelajaran",
      title: "4 Langkah Menuju Nilai A di Akuntansi",
      subtitle: "Metode bertahap yang telah terbukti membantu ratusan siswa dari nol sampai mahir.",
      step1Title: "1. Diagnostic Test & Curhat Kasus",
      step1Desc: "Kami petakan kelemahan Anda: apakah di saldo normal, jurnal khusus, atau laporan keuangan.",
      step2Title: "2. Bedah Logika Konseptual",
      step2Desc: "Menanamkan logika akuntansi yang masuk akal tanpa rumus rumit sehingga konsep melekat kuat.",
      step3Title: "3. Simulasi Soal & Praktikum",
      step3Desc: "Latihan intensif kasus riil perusahaan jasa, dagang, hingga kasus praktikum kampus.",
      step4Title: "4. Evaluasi & Siap Ujian",
      step4Desc: "Review mendalam sebelum ujian tiba, memastikan Anda percaya diri meraih nilai terbaik.",
    },
    achievements: {
      tag: "Pencapaian & Statistik",
      title: "Bukti Nyata Kualitas Pembelajaran Sanidin",
      subtitle: "Angka yang mencerminkan komitmen kami dalam membimbing setiap siswa dan mahasiswa meraih potensi akademik terbaiknya di bidang akuntansi.",
      stats: {
        satisfiedStudents: {
          value: 485,
          suffix: "+",
          label: "Siswa & Mahasiswa Puas",
          description: "Tergabung dari berbagai SMA/SMK ternama serta universitas negeri dan swasta se-Indonesia.",
        },
        sessionsConducted: {
          value: 2450,
          suffix: "+",
          label: "Sesi Privat Terlaksana",
          description: "Pertemuan 1-on-1 intensif online & tatap muka dengan kurikulum yang dipersonalisasi.",
        },
        scoreIncrease: {
          value: 38,
          prefix: "+",
          suffix: " Poin",
          label: "Rata-rata Kenaikan Nilai Ujian",
          description: "Lonjakan nilai signifikan pada Penilaian Harian, UTS, UAS, dan Ujian Praktikum Lab.",
        },
        satisfactionRate: {
          value: 99,
          suffix: ".4%",
          label: "Tingkat Kepuasan Belajar",
          description: "Memberikan rating bintang 5 atas keramahan tutor, materi fleksibel, dan kemudahan memahami konsep.",
        },
      },
      highlightBadge: "Terbukti Meningkatkan Pemahaman Konsep & Indeks Prestasi",
    },
    packages: {
      tag: "Pilihan Program",
      title: "Paket Belajar Akuntansi",
      subtitle: "Investasi terbaik untuk prestasi akademik Anda. Tersedia sesi privat intensif sesuai jenjang pendidikan.",
      monthlyNote: "*Tersedia sesi satuan atau paket bulanan bergaransi bimbingan sampai paham.",
      smaBadge: "Paling Populer untuk Siswa",
      smaTitle: "Paket Siswa SMA",
      smaDesc: "Materi akuntansi dasar, perusahaan jasa & dagang. Didesain khusus untuk siswa SMA/MA/SMK kelas 10, 11, dan 12 yang ingin juara kelas atau tembus UTBK SNBT Akuntansi.",
      smaPrice: "Rp 350.000",
      smaPeriod: "/ 4 Sesi Intensif",
      smaFeatures: [
        "Materi Konsep Dasar Persamaan Akuntansi",
        "Siklus Akuntansi Perusahaan Jasa Lengkap",
        "Siklus Akuntansi Perusahaan Dagang (FIFO/LIFO/Average)",
        "Jurnal Khusus, Buku Besar & Neraca Saldo",
        "Trik Jitu Jurnal Penyesuaian & Kertas Kerja (Worksheet)",
        "Persiapan Penilaian Harian, PAS, PAT & UTBK",
        "Modul Ringkasan Rumus & Bank Soal Eksklusif",
      ],
      smaCta: "Daftar Paket SMA via WhatsApp",
      mhsBadge: "Rekomendasi Mahasiswa",
      mhsTitle: "Paket Mahasiswa",
      mhsDesc: "Pengantar akuntansi, akuntansi keuangan menengah, perpajakan dasar. Solusi tepat untuk mahasiswa S1/D3 FEB, Manajemen, Akuntansi, dan Bisnis yang butuh pendampingan tugas kuliah & ujian semester.",
      mhsPrice: "Rp 450.000",
      mhsPeriod: "/ 4 Sesi Intensif",
      mhsFeatures: [
        "Pengantar Akuntansi I & II (Financial Accounting)",
        "Akuntansi Keuangan Menengah (Intermediate Accounting)",
        "Dasar Perpajakan (PPh 21, PPh 23 & PPN Konsep Dasar)",
        "Penyusunan Laporan Keuangan Berstandar SAK / IFRS",
        "Bedah Kasus Tugas Praktikum & Soal UTS / UAS Kampus",
        "Bimbingan Rekonsiliasi Bank & Kas Kecil (Petty Cash)",
        "Sesi Tanya Jawab Langsung Tugas Kuliah Tanpa Batas",
      ],
      mhsCta: "Daftar Paket Mahasiswa via WhatsApp",
      packageGuarantee: "Garansi Pembelajaran: Bebas konsultasi tanya soal tugas di luar jam sesi privat.",
    },
    calculator: {
      title: "Simulasi Belajar & Konsultasi Sesi",
      subtitle: "Hitung estimasi sesi privat akuntansi Anda dan langsung diskusikan jadwal yang cocok bersama tim Sanidin.",
      levelLabel: "Jenjang Pendidikan:",
      smaOption: "Siswa SMA (Dasar, Jasa & Dagang)",
      mhsOption: "Mahasiswa (Pengantar, AKM & Pajak)",
      sessionLabel: "Jumlah Pertemuan (Sesi @90 Menit):",
      modeLabel: "Metode Pertemuan:",
      onlineMode: "Online (Zoom / Meet Interaktif)",
      offlineMode: "Offline (Tatap Muka / Privat Datang)",
      estTotal: "Estimasi Biaya Paket:",
      consultNow: "Konsultasikan Jadwal via WhatsApp",
    },
    testimonials: {
      tag: "Testimoni Siswa",
      title: "Kisah Sukses Bersama Sanidin",
      subtitle: "Dengarkan pengalaman siswa SMA dan mahasiswa yang telah merasakan lonjakan pemahaman akuntansi.",
      items: [
        {
          name: "Rizky Pratama",
          role: "Siswa SMA Kelas 12",
          institution: "SMAN 3 Bandung",
          quote: "Dulu pusing banget sama Jurnal Penyesuaian dan Neraca Lajur. Setelah 3 kali privat di Sanidin, langsung paham logikanya. Ujian Akhir kemarin dapet nilai 96!",
          grade: "Nilai Ujian 96",
        },
        {
          name: "Annisa Larasati",
          role: "Mahasiswi Manajemen S1",
          institution: "Universitas Padjadjaran",
          quote: "Sebagai anak manajemen yang wajib ambil Pengantar Akuntansi dan AKM, Sanidin penolong banget buat lulus matkul ini dengan nilai A. Penjelasannya to the point!",
          grade: "Indeks A Matkul AKM",
        },
        {
          name: "Dimas Anggoro",
          role: "Mahasiswa Akuntansi Semester 3",
          institution: "Universitas Indonesia",
          quote: "Bimbingan di Sanidin sangat mendalam. Tugas praktikum lab akuntansi yang rumit dibongkar satu-satu sampai saya paham alur transaksinya. Recommended banget!",
          grade: "IPK 3.85 Semester Ini",
        },
        {
          name: "Maya Safitri",
          role: "Siswi SMA Kelas 11 IPS",
          institution: "SMAN 8 Jakarta",
          quote: "Paling suka metode 'Golden Rules of Debit-Credit' di Sanidin! Dari yang awalnya selalu minus di kuis akuntansi perusahaan dagang, sekarang jadi yang tercepat ngerjain soal.",
          grade: "Nilai 100 Penilaian Harian",
        },
        {
          name: "Kevin Wijaya",
          role: "Mahasiswa Akuntansi S1",
          institution: "Universitas Airlangga",
          quote: "Materi perpajakan dasar dan laporan rekonsiliasi bank diajarin pake simulasi riil perusahaan. Tutornya ramah banget dan bebas tanya PR kapan aja lewat WhatsApp.",
          grade: "Predikat A+ Praktikum Lab",
        },
      ],
    },
    faq: {
      tag: "Pertanyaan Umum",
      title: "Sering Ditanyakan (FAQ)",
      subtitle: "Punya pertanyaan seputar les privat akuntansi di Sanidin? Temukan jawabannya di bawah ini.",
      items: [
        {
          q: "Apakah kelas di Sanidin benar-benar 1-on-1 (Privat)?",
          a: "Ya! Sanidin fokus pada pendampingan privat 1 tutor untuk 1 siswa sehingga kecepatan belajar disesuaikan dengan kemampuan Anda. Tersedia juga opsi small group (2-3 orang) jika Anda ingin belajar bareng teman sekelas.",
        },
        {
          q: "Bagaimana jika materi di kampus atau sekolah saya berbeda dengan buku umum?",
          a: "Tidak masalah! Kami mengusung Kurikulum Fleksibel. Cukup kirimkan silabus, modul dosen, atau materi sekolah Anda, tutor kami akan langsung menyesuaikan bahan ajar khusus untuk Anda.",
        },
        {
          q: "Apakah saya bisa bertanya tugas atau PR di luar jam les?",
          a: "Tentu saja! Fitur Pendampingan Intensif kami memberikan akses tanya jawab via WhatsApp untuk tugas sekolah atau kuis kuliah Anda.",
        },
        {
          q: "Apakah tersedia les akuntansi secara online untuk luar kota?",
          a: "Ya, kami melayani bimbingan online di seluruh Indonesia menggunakan Zoom/Google Meet dengan digital whiteboard interaktif dan rekaman materi pembelajaran.",
        },
      ],
    },
    contact: {
      tag: "Hubungi Kami",
      title: "Mulai Langkah Sukses Akuntansi Anda",
      subtitle: "Konsultasikan kebutuhan belajar Anda sekarang. Tim Sanidin siap membantu menentukan jadwal dan materi terbaik.",
      directChat: "Chat WhatsApp Langsung",
      chatDesc: "Respons cepat setiap hari (08.00 - 21.00 WIB)",
      buttonChat: "Hubungi via WhatsApp",
      emailLabel: "Email Resmi",
      emailValue: "halo.sanidin@gmail.com",
      locationLabel: "Lokasi Layanan",
      locationValue: "Bandung, Jawa Barat & Online Se-Indonesia",
      hoursLabel: "Jam Operasional",
      hoursValue: "Senin - Minggu: 08.00 - 21.30 WIB",
      formTitle: "Form Cepat Registrasi / Konsultasi",
      formName: "Nama Lengkap Anda",
      formPhone: "Nomor WhatsApp (Aktif)",
      formLevel: "Jenjang Anda",
      formTopic: "Materi / Topik yang Ingin Dikuasai",
      formSubmit: "Kirim Konsultasi ke WhatsApp",
    },
    footer: {
      about: "Sanidin adalah penyedia bimbingan belajar akuntansi privat terpercaya untuk siswa SMA dan mahasiswa perguruan tinggi. Membantu Anda menguasai logika keuangan dengan mudah, praktis, dan menyenangkan.",
      quickLinks: "Navigasi Cepat",
      learningFocus: "Fokus Pembelajaran",
      contactUs: "Kontak & Layanan",
      copyright: "© 2026 Sammy Krizpy. All rights reserved.",
    },
  },
  en: {
    nav: {
      home: "Home",
      benefit: "Benefits",
      prestasi: "Achievements",
      paket: "Packages",
      faq: "FAQ",
      kontak: "Contact",
      ctaButton: "Free Consultation",
    },
    hero: {
      tagline: "#1 Private Accounting Tutoring for High School & University Students",
      title: "Master Accounting with",
      titleHighlight: "Sanidin",
      subtitle: "Exclusive 1-on-1 private accounting tutoring for College & High School Students. Get ready to conquer school exams, university entrance tests, practical assignments, and semester finals with crystal-clear conceptual mastery!",
      ctaPrimary: "Register Now",
      ctaSecondary: "View Study Packages",
      stat1Label: "Students Tutored",
      stat1Val: "350+",
      stat2Label: "Average Grade A/B",
      stat2Val: "98%",
      stat3Label: "Custom Discussion",
      stat3Val: "1-on-1",
      badgeStudents: "Dedicated for College & High School",
      liveBadge: "New Enrollment Cohort Open",
      accountingBadge: "Smart Concepts • Rapid Mastery",
      debitCreditBalance: "Assets = Liabilities + Equity (Balanced)",
    },
    benefits: {
      tag: "Our Advantages",
      title: "Why Learn Accounting with Sanidin?",
      subtitle: "We design our learning methods around core logical principles, rather than mindless memorization of accounts.",
      card1Title: "Flexible Curriculum",
      card1Desc: "Tailored to your specific school or campus curriculum. Whether it is High School national curriculum or your university's accounting/management syllabus, materials are 100% customized.",
      card1Points: [
        "Custom materials aligned with your course syllabus",
        "Flexible study schedule (morning, afternoon, or evening)",
        "Choose between interactive online (Zoom) or in-person sessions",
      ],
      card2Title: "Intensive Mentorship",
      card2Desc: "Unlimited Q&A for homework, assignments & exam prep. Never let assignments pile up or struggle with unbalanced balance sheets. Your tutor is by your side until complete mastery.",
      card2Points: [
        "Daily WhatsApp Q&A support for homework and lab tasks",
        "Midterm and Final exam mock tests with comprehensive reviews",
        "In-depth personalized feedback on practical case studies",
      ],
      card3Title: "Practical Tips & Tricks",
      card3Desc: "Fast-track understanding of debits-credits and financial statements. Master the 'Logic of Accounting' through intuitive real-world analogies that stick effortlessly.",
      card3Points: [
        "Intuitive 'Golden Rules of Debit-Credit' framework",
        "Time-saving shortcuts for Adjusting Entries & Working Papers",
        "Practical mastery of Income Statements & Trial Balances",
      ],
    },
    workflow: {
      tag: "Learning Workflow",
      title: "4 Steps to Scoring an A in Accounting",
      subtitle: "A proven, step-by-step methodology that has guided hundreds of students from beginner to top performer.",
      step1Title: "1. Diagnostic & Problem Mapping",
      step1Desc: "We identify your learning gaps: normal balances, specialized journals, or statement consolidation.",
      step2Title: "2. Conceptual Logic Deep Dive",
      step2Desc: "Instilling the underlying logic of accounting so you understand the 'why' without rote memorization.",
      step3Title: "3. Real Cases & Practice Lab",
      step3Desc: "Hands-on problem solving on service companies, merchandising firms, and university lab assignments.",
      step4Title: "4. Review & Exam Ready",
      step4Desc: "Comprehensive revision before your exam, ensuring you walk into the test room with total confidence.",
    },
    achievements: {
      tag: "Track Record & Achievements",
      title: "Proven Results in Accounting Tutoring",
      subtitle: "Measurable metrics highlighting our dedication to empowering every high school and university student to reach academic peak performance.",
      stats: {
        satisfiedStudents: {
          value: 485,
          suffix: "+",
          label: "Satisfied Students",
          description: "From top national high schools and premier state and private universities across Indonesia.",
        },
        sessionsConducted: {
          value: 2450,
          suffix: "+",
          label: "Sessions Conducted",
          description: "Intensive 1-on-1 private mentoring sessions delivered online & in-person with bespoke syllabi.",
        },
        scoreIncrease: {
          value: 38,
          prefix: "+",
          suffix: " Pts",
          label: "Average Exam Score Increase",
          description: "Substantial score improvements in Daily Quizzes, Midterms, Semester Finals, and University Lab Practicums.",
        },
        satisfactionRate: {
          value: 99,
          suffix: ".4%",
          label: "Student Satisfaction Rate",
          description: "5-star rating for tutor clarity, conceptual logic simplification, and flexible session scheduling.",
        },
      },
      highlightBadge: "Proven Impact on Academic Grades & Conceptual Mastery",
    },
    packages: {
      tag: "Study Programs",
      title: "Accounting Learning Packages",
      subtitle: "The highest-yield investment for your academic success. Intensive private sessions tailored to your grade level.",
      monthlyNote: "*Single sessions or monthly packages available with full comprehension guarantee.",
      smaBadge: "Most Popular for High Schoolers",
      smaTitle: "High School Package",
      smaDesc: "Basic accounting, service & merchandising companies. Tailored for grades 10, 11, and 12 aiming for top academic ranks and university entrance success.",
      smaPrice: "IDR 350,000",
      smaPeriod: "/ 4 Intensive Sessions",
      smaFeatures: [
        "Core Accounting Equation Fundamentals",
        "Full Accounting Cycle for Service Enterprises",
        "Accounting Cycle for Merchandising (FIFO/LIFO/Average)",
        "Special Journals, General Ledgers & Trial Balance",
        "Mastery of Adjusting Entries & Comprehensive Worksheet",
        "Preparation for Daily Quizzes, Midterms, Finals & Entrance Exams",
        "Exclusive Formula Summary Sheets & Practice Question Bank",
      ],
      smaCta: "Enroll High School Package via WhatsApp",
      mhsBadge: "Recommended for Undergrads",
      mhsTitle: "University Student Package",
      mhsDesc: "Introductory accounting, intermediate financial accounting, basic taxation. The ultimate solution for Business, Economics, and Accounting undergraduates needing assignment and exam excellence.",
      mhsPrice: "IDR 450,000",
      mhsPeriod: "/ 4 Intensive Sessions",
      mhsFeatures: [
        "Introductory Financial Accounting I & II",
        "Intermediate Financial Accounting (IFRS / GAAP standards)",
        "Fundamentals of Taxation (Income Tax & VAT concepts)",
        "Comprehensive Financial Statement Preparation",
        "Deconstruction of Campus Lab Practice & Exam Questions",
        "Bank Reconciliation & Petty Cash Imprest System",
        "Dedicated Unlimited Homework Guidance via Direct Chat",
      ],
      mhsCta: "Enroll College Package via WhatsApp",
      packageGuarantee: "Learning Guarantee: Free continuous Q&A support for assignments outside class hours.",
    },
    calculator: {
      title: "Session Calculator & Booking",
      subtitle: "Estimate your personalized private accounting tuition and directly consult your preferred schedule with Sanidin.",
      levelLabel: "Academic Level:",
      smaOption: "High School (Basic, Service & Merchandising)",
      mhsOption: "University Student (Intro, Intermediate & Tax)",
      sessionLabel: "Number of Sessions (@90 Min):",
      modeLabel: "Delivery Format:",
      onlineMode: "Online (Interactive Zoom / Meet)",
      offlineMode: "In-Person (Tutor Visits / Face-to-Face)",
      estTotal: "Estimated Total Fee:",
      consultNow: "Consult Schedule on WhatsApp",
    },
    testimonials: {
      tag: "Student Testimonials",
      title: "Success Stories with Sanidin",
      subtitle: "Hear firsthand from high schoolers and university students who transformed their accounting performance.",
      items: [
        {
          name: "Rizky Pratama",
          role: "Grade 12 High School Student",
          institution: "SMAN 3 Bandung",
          quote: "I used to get completely stuck on Adjusting Entries and Worksheets. After just 3 private sessions at Sanidin, the logic clicked! My final exam score reached 96!",
          grade: "Exam Score: 96/100",
        },
        {
          name: "Annisa Larasati",
          role: "Undergraduate Management Student",
          institution: "Padjadjaran University",
          quote: "As a management student required to take Intermediate Accounting, Sanidin was a lifesaver. Explanations were straight to the point and practical!",
          grade: "Grade A in Financial Accounting",
        },
        {
          name: "Dimas Anggoro",
          role: "3rd-Semester Accounting Major",
          institution: "University of Indonesia",
          quote: "The guidance at Sanidin is remarkably detailed. Complex accounting lab problems were broken down step by step until I truly mastered every transaction flow.",
          grade: "Semester GPA: 3.85",
        },
        {
          name: "Maya Safitri",
          role: "Grade 11 High School Student",
          institution: "SMAN 8 Jakarta",
          quote: "I absolutely love Sanidin's 'Golden Rules of Debit-Credit'! I went from dreading merchandising accounting quizzes to being the first in class to balance the ledger.",
          grade: "Perfect 100 on Daily Exam",
        },
        {
          name: "Kevin Wijaya",
          role: "Undergraduate Accounting Major",
          institution: "Airlangga University",
          quote: "Basic taxation and bank reconciliation were explained with real corporate case simulations. My tutor was super approachable, and 24/7 WhatsApp Q&A is invaluable.",
          grade: "Grade A+ in Accounting Lab",
        },
      ],
    },
    faq: {
      tag: "Frequently Asked Questions",
      title: "Got Questions? We Have Answers",
      subtitle: "Everything you need to know about our private accounting tutoring at Sanidin.",
      items: [
        {
          q: "Are Sanidin classes truly 1-on-1 private?",
          a: "Yes! Sanidin focuses strictly on 1 tutor to 1 student mentorship so learning pace matches your specific needs. Small group options (2-3 peers) are also available if you prefer studying with friends.",
        },
        {
          q: "What if my university or school syllabus differs from standard textbooks?",
          a: "Not an issue at all! We provide a Flexible Curriculum. Simply share your lecture slides, syllabus, or problem sets, and our tutor customizes the lessons around your exact curriculum.",
        },
        {
          q: "Can I ask questions about homework outside of tutoring hours?",
          a: "Absolutely! Our Intensive Mentorship includes continuous WhatsApp Q&A support for your school tasks or college assignments.",
        },
        {
          q: "Do you offer online sessions for students outside Bandung?",
          a: "Yes, we teach students nationwide across Indonesia via interactive Zoom/Google Meet sessions with collaborative digital whiteboards and lesson notes.",
        },
      ],
    },
    contact: {
      tag: "Contact Us",
      title: "Start Your Accounting Journey Today",
      subtitle: "Tell us about your learning goals. The Sanidin team will immediately recommend the ideal schedule and tailored study plan.",
      directChat: "Direct WhatsApp Consultation",
      chatDesc: "Fast response every day (08:00 - 21:00 WIB)",
      buttonChat: "Chat on WhatsApp",
      emailLabel: "Official Email",
      emailValue: "halo.sanidin@gmail.com",
      locationLabel: "Location",
      locationValue: "Bandung, West Java & Online Across Indonesia",
      hoursLabel: "Operating Hours",
      hoursValue: "Monday - Sunday: 08:00 - 21:30 WIB",
      formTitle: "Fast Registration & Consultation Form",
      formName: "Your Full Name",
      formPhone: "Active WhatsApp Number",
      formLevel: "Your Level",
      formTopic: "Target Topic / Exam Need",
      formSubmit: "Send Consultation to WhatsApp",
    },
    footer: {
      about: "Sanidin is a dedicated private accounting tutoring service for High School and University students. We make financial logic intuitive, practical, and rewarding.",
      quickLinks: "Quick Navigation",
      learningFocus: "Core Specializations",
      contactUs: "Contact & Service",
      copyright: "© 2026 Sammy Krizpy. All rights reserved.",
    },
  },
};
