// Data soal dan kunci jawaban
const quizQuestions = {
    "1": {
        "materi": "Patung Liberty",
        "question": "Patung Liberty terbuat dari lembaran tembaga setebal 3/32 inci dan awalnya berwarna cokelat kemerahan seperti tembaga baru. Kini, patung tersebut tampak berwarna hijau kebiruan yang khas. Apa penyebab utama perubahan warna tersebut?",
        "prompt": "",
        "correctAnswer": "B",
        "options": {
            "A": "Dicat hijau sejak awal untuk melambangkan harapan dan kebebasan yang abadi",
            "B": "Tembaga mengalami oksidasi alami sehingga membentuk lapisan patina hijau",
            "C": "Terkena hujan asam yang mengubah struktur kimia permukaan tembaga",
            "D": "Sengaja diubah warnanya pada renovasi besar tahun 1986 untuk alasan estetika"
        },
        "explanation": "Warna hijau pada Patung Liberty adalah hasil dari proses oksidasi alami yang terjadi pada tembaga ketika terpapar udara dan kelembapan dalam jangka waktu lama. Proses ini disebut patinasi, yaitu tembaga bereaksi dengan oksigen, air, dan senyawa lain di atmosfer membentuk tembaga karbonat dan tembaga sulfat yang berwarna hijau kebiruan. Patung Liberty awalnya berwarna cokelat kemerahan seperti tembaga baru, tetapi secara bertahap warnanya berubah menjadi hijau seperti yang kita lihat sekarang. Yang menarik, lapisan patina hijau ini sebenarnya melindungi tembaga di bawahnya dari korosi lebih lanjut, sehingga patung dapat bertahan selama lebih dari 130 tahun."
    },
    "2": {
        "materi": "Candi Borobudur",
        "question": "Candi Borobudur yang dibangun pada masa Dinasti Syailendra mengalami 'rediscovery' pada masa kolonial Belanda. Siapa tokoh Inggris yang pertama kali menemukan kembali Candi Borobudur pada tahun 1814?",
        "prompt": "",
        "correctAnswer": "A",
        "options": {
            "A": "Thomas Stamford Raffles",
            "B": "Herman Willem Daendels",
            "C": "Colin Mackenzie",
            "D": "John Crawford"
        },
        "explanation": "Candi Borobudur ditemukan kembali pada tahun 1814 oleh Thomas Stamford Raffles, Gubernur Jenderal Inggris di Jawa. Penemuan ini bermula dari laporan masyarakat lokal tentang adanya gundukan besar tertutup vegetasi di wilayah Magelang. Raffles mengutus H.C. Cornelius untuk menyelidiki dan membersihkan situs tersebut. Setelah dibersihkan, terungkaplah struktur candi Buddha terbesar di dunia yang terdiri dari sembilan teras dan ribuan relief yang menggambarkan ajaran Buddha. Penemuan ini menjadi titik awal restorasi dan pengakuan dunia terhadap keagungan arsitektur kuno Indonesia. Borobudur kini diakui sebagai Situs Warisan Dunia UNESCO sejak tahun 1991."
    },
    "3": {
        "materi": "Taj Mahal",
        "question": "Taj Mahal memiliki empat menara (minarets) di setiap sudutnya yang sengaja dibangun miring ke luar. Desain arsitektur Mughal ini juga terlihat di berbagai bangunan lain pada masa yang sama. Mengapa para arsitek sengaja membuat menara-menara tersebut miring ke luar?",
        "prompt": "",
        "correctAnswer": "C",
        "options": {
            "A": "Untuk menciptakan ilusi optik agar bangunan utama terlihat lebih besar",
            "B": "Mengikuti tradisi arsitektur Persia yang dibawa oleh dinasti Mughal",
            "C": "Agar jika terjadi gempa, menara akan roboh menjauhi bangunan utama",
            "D": "Untuk memudahkan perawatan dan pembersihan bagian atas menara"
        },
        "explanation": "Menara-menara (minarets) Taj Mahal memang sengaja dibangun dengan kemiringan yang sangat halus ke arah luar, dan ini merupakan keputusan arsitektur yang sangat cerdik dengan tujuan keamanan struktural. Empat menara di sekitar kubah utama dirancang dengan sedikit kemiringan ke luar untuk melindungi makam utama jika terjadi keruntuhan akibat bencana seperti gempa bumi. Dengan desain ini, jika terjadi gempa bumi, menara-menara akan jatuh ke arah taman dan Sungai Yamuna (yang terletak di utara kompleks), dan bukan menimpa mausoleum. Kemiringan halus ini memastikan bahwa menara-menara akan jatuh menjauhi makam utama selama gempa bumi, sehingga melindungi struktur pusat."
    },
    "4": {
        "materi": "Piramida Giza",
        "question": "Piramida Agung memiliki saluran yang mengarah ke bintang Thuban dan konstelasi Orion. Apa fungsi spiritual dari saluran ini menurut kepercayaan Mesir kuno?",
        "prompt": "",
        "correctAnswer": "B",
        "options": {
            "A": "Menunjukkan kalender pertanian Mesir kuno",
            "B": "Membuka jalan bagi roh firaun ke alam baka",
            "C": "Menandai waktu pembangunan piramida",
            "D": "Mengatur suhu dan sirkulasi udara dalam ruang pemakaman"
        },
        "explanation": `Saluran udara (air shafts) dalam Piramida Agung bukan sekadar sistem ventilasi biasa, melainkan memiliki fungsi spiritual yang mendalam dalam kepercayaan Mesir kuno.<br>
            <strong>🌟 Penyelarasan Astronomi</strong><ul style="margin-left: 10px; padding-left: 10px;"><li><strong>Saluran Utara:</strong> Mengarah ke bintang Thuban (Alpha Draconis) yang merupakan bintang kutub utara pada masa pembangunan piramida (sekitar 2500 SM)</li><li><strong>Saluran Selatan:</strong> Mengarah ke konstelasi Orion, khususnya bintang-bintang di Sabuk Orion</li></ul>
            <strong>🌟 Makna Spiritual</strong><br>Dalam kepercayaan Mesir kuno:<ul style="margin-left: 10px; padding-left: 10px;"><li>Orion dikaitkan dengan Osiris, dewa kematian dan alam baka</li><li>Bintang-bintang kutub dianggap sebagai tempat kekal di langit</li><li>Saluran ini dipercaya sebagai jalur bagi roh (Ka) firaun untuk melakukan perjalanan ke alam baka dan bergabung dengan dewa-dewa</li><li>Penyelarasan astronomi yang tepat menunjukkan bahwa saluran ini memiliki makna spiritual yang sangat penting dalam ritual pemakaman dan kepercayaan tentang kehidupan setelah kematian</li></ul>`
    },
    "5": {
        "materi": "Menara Eiffel",
        "question": "Menara Eiffel awalnya dirancang sebagai struktur sementara yang akan dibongkar setelah 20 tahun. Namun, munculnya teknologi radio pada awal abad ke-20 mengubah nasib menara ini. Mengapa Menara Eiffel menjadi sangat strategis bagi perkembangan komunikasi radio?",
        "prompt": "",
        "correctAnswer": "A",
        "options": {
            "A": "Ketinggian menara memberikan jangkauan sinyal radio yang optimal",
            "B": "Lokasi geografis Paris berada di pusat benua Eropa",
            "C": "Material besi pada struktur dapat memperkuat sinyal radio",
            "D": "Fondasi kokoh mampu menopang peralatan transmisi berat"
        },
        "explanation": `Menara Eiffel, yang selesai dibangun pada tahun 1889, awalnya dirancang oleh Gustave Eiffel sebagai struktur sementara untuk memperingati 100 tahun Revolusi Prancis dalam Pameran Dunia (Exposition Universelle). Menara ini dirancang akan dibongkar setelah 20 tahun, yaitu sekitar tahun 1909. Namun, kemajuan teknologi radio mengubah nasibnya.
            <ul style="margin-left: 10px; padding-left: 10px;"><li><strong>Ketinggian menara (300 m)</strong> membuatnya ideal sebagai tempat transmisi sinyal radio yang dapat menjangkau wilayah yang luas</li><li><strong>Sejak tahun 1903,</strong> militer Prancis menggunakannya untuk eksperimen komunikasi radio jarak jauh</li><li><strong>Pada tahun 1906,</strong> dipasang antena permanen di puncaknya untuk keperluan transmisi radio</li><li><strong>Saat Perang Dunia I,</strong> menara ini memainkan peran penting dalam komunikasi militer Prancis</li></ul>`
    },
    "6": {
        "materi": "Akropolis Athena",
        "question": "Akropolis Athena dibangun di atas bukit dengan ketinggian 156 meter. Jika kita menganalisis alasan strategis dan simbolis pemilihan lokasi ini, mengapa posisi elevated (tinggi) menjadi faktor penting dalam konsep sacred space Yunani kuno?",
        "prompt": "",
        "correctAnswer": "D",
        "options": {
            "A": "Untuk menghindari banjir dan gempa bumi yang sering terjadi di dataran rendah",
            "B": "Untuk memudahkan sistem pertahanan militer terhadap serangan musuh dari darat",
            "C": "Untuk memanfaatkan angin pegunungan dalam ritual pembakaran dupa dan korban persembahan",
            "D": "Untuk mendekati dunia para dewa dan menciptakan hierarki kosmis yang sakral"
        },
        "explanation": "Akropolis Athena yang dibangun di ketinggian 156 meter mencerminkan konsep sacred space dalam kosmologi Yunani kuno, yaitu hierarki vertikal antara dunia manusia dan dunia para dewa. Akropolis yang dibangun di atas bukit berbatu ini berfungsi sebagai pusat politik dan religius utama di Yunani kuno. Posisi yang elevated bukan sekadar untuk alasan praktis, tetapi untuk menciptakan ruang sakral yang secara simbolis lebih dekat dengan realm para dewa yang dipercaya tinggal di tempat tinggi seperti Gunung Olympus. Dengan demikian, posisi tinggi menciptakan hierarki kosmis yang sakral dan memungkinkan para penyembah merasa lebih dekat dengan dunia divine saat melakukan ritual keagamaan. Konsep ini kemudian menjadi model bagi pembangunan tempat suci lainnya di dunia Yunani kuno, di mana ketinggian selalu dikaitkan dengan kesucian dan kedekatan spiritual."
    },
    "7": {
        "materi": "Ka'bah",
        "question": "Kiswah Ka'bah berwarna hitam dengan bordir emas berisi kaligrafi ayat Al-Quran. Jika dilihat dari aspek psikologi warna, pemilihan warna hitam bertujuan untuk...",
        "prompt": "",
        "correctAnswer": "C",
        "options": {
            "A": "Menciptakan kontras maksimal dengan kaligrafi emas",
            "B": "Menyerap panas matahari di iklim gurun yang ekstrem",
            "C": "Memberikan kesan khidmat dan konsentrasi spiritual",
            "D": "Menyerap radiasi panas dan melindungi struktur bangunan"
        },
        "explanation": "Kiswah Ka'bah yang berwarna hitam dengan kaligrafi emas memiliki makna psikologis yang mendalam, di mana warna hitam melambangkan kesucian, keagungan, kekuatan, dan kedalaman iman dalam Islam, sementara secara psikologis menciptakan kesan elegan, misterius, dan dramatis yang mendukung konsentrasi spiritual. Kombinasi dengan kaligrafi emas memberikan rasa optimisme dan inspirasi, sekaligus menunjukkan kemewahan spiritual dan keanggunan yang tidak mengganggu fokus ibadah. Dari segi psikologi warna, kombinasi hitam-emas pada Ka'bah secara efektif menciptakan atmosfer khidmat yang mengurangi distraksi visual, meningkatkan pemusatan perhatian, dan mendukung kontemplasi spiritual - menjadikan jawaban C (Memberikan kesan khidmat dan konsentrasi spiritual) sebagai pilihan yang paling tepat karena kedua warna tersebut bekerja sinergis untuk menciptakan suasana sakral yang kondusif bagi ibadah dan perenungan."
    },
    "8": {
        "materi": "Great Wall of China",
        "question": "Great Wall of China sering digambarkan sebagai \"naga raksasa yang menggeliat di pegunungan.\" Metafora ini menyiratkan makna mendalam tentang perannya bagi peradaban Tiongkok. Makna simbolis apakah yang paling tepat diwakili oleh metafora \"naga\" tersebut?",
        "prompt": "",
        "correctAnswer": "C",
        "options": {
            "A": "Kekuatan destruktif dan kehancuran yang ditimbulkan oleh perang",
            "B": "Keindahan alam yang tidak tersentuh oleh campur tangan manusia",
            "C": "Pelindung abadi dan simbol kekuatan serta ketahanan bangsa",
            "D": "Ketergantungan Tiongkok pada kekuatan mistis untuk pertahanan"
        },
        "explanation": "Metafora \"naga raksasa yang menggeliat di pegunungan\" untuk Tembok Besar China memiliki makna simbolis yang kuat dalam budaya Tiongkok. Berbeda dengan mitologi Barat, naga dalam tradisi Tiongkok melambangkan kekuatan, kebijaksanaan, dan perlindungan.<br>Makna simbolis metafora naga untuk Tembok Besar:<ul style=\"margin-left: 10px; padding-left: 10px;\"><li>Pelindung abadi - menjaga peradaban dari ancaman luar</li><li>Kekuatan dan ketahanan - mencerminkan daya tahan ribuan tahun</li><li>Kontinuitas sejarah - menunjukkan adaptabilitas lintas dinasti</li><li>Identitas nasional - memperkuat kebanggaan Tiongkok</li></ul>Metafora ini menekankan aspek protektif dan simbolisme kekuatan nasional yang berkelanjutan, bukan destruksi, keindahan alam, atau ketergantungan mistis."
    },
    "9": {
        "materi": "Burj Khalifa",
        "question": "Burj Khalifa memiliki tinggi 828 meter dan terdiri dari 163 lantai. Gedung ini menggunakan desain yang menyempit ke atas dengan bentuk seperti bunga lily gurun. Mengapa desain yang menyempit ke atas ini dipilih untuk gedung super tinggi?",
        "prompt": "",
        "correctAnswer": "B",
        "options": {
            "A": "Untuk menghemat material konstruksi dan mengurangi biaya pembangunan",
            "B": "Mengurangi beban angin dan meningkatkan stabilitas struktural",
            "C": "Menciptakan tampilan yang lebih artistik dan menarik wisatawan",
            "D": "Memudahkan pemasangan elevator dan sistem utilitas"
        },
        "explanation": "Burj Khalifa menggunakan desain berbentuk Y yang menyempit ke atas (tapered profile) dengan sistem struktur inti penopang (buttressed core). Desain ini berfungsi untuk mengurangi gaya angin yang bekerja pada bangunan dengan cara \"mengacaukan\" pola angin (vortex shedding) sehingga tekanan angin tidak terkonsentrasi pada satu titik, melainkan tersebar sepanjang ketinggian bangunan. Dengan bagian bawah yang lebih lebar dan bagian atas yang ramping, beban dan gaya angin dapat didistribusikan secara efisien, membuat struktur lebih kuat dan aman.<br>Selain itu, Burj Khalifa dilengkapi dengan tingkat spiral yang berfungsi sebagai pemecah angin. Sistem inti beton yang diperkuat dengan tiga sayap besar memberikan kekakuan tinggi sehingga gedung mampu menahan angin hingga 250 km/jam dengan pergeseran puncak hanya sekitar 2 meter saat angin kencang."
    },
    "10": {
        "materi": "Menara Pisa",
        "question": "Salah satu upaya awal untuk mengoreksi kemiringan Menara Pisa adalah dengan menambah tanah atau material di sisi yang lebih rendah. Namun, cara ini justru memperburuk kemiringan menara. Apa alasan utama metode ini menjadi kontra-produktif?",
        "prompt": "",
        "correctAnswer": "A",
        "options": {
            "A": "Penambahan massa di sisi rendah menyebabkan tekanan tanah bertambah dan pondasi semakin turun",
            "B": "Material yang ditambahkan tidak mampu menahan beban menara dalam jangka panjang",
            "C": "Penambahan material mengganggu kestabilan struktur pondasi dan mempercepat kemiringan",
            "D": "Upaya ini menyebabkan distribusi berat menara semakin tidak seimbang sehingga kemiringan bertambah"
        },
        "explanation": "Upaya awal untuk mengoreksi kemiringan Menara Pisa dengan menambah tanah atau material di sisi yang lebih rendah justru menjadi kontra-produktif. Alasan utamanya adalah penambahan massa di sisi rendah menyebabkan tekanan tanah bertambah dan pondasi semakin turun.<br>Saat tanah atau material ditambahkan di sisi Menara Pisa yang lebih rendah (sisi yang miring ke bawah), hal ini secara langsung meningkatkan beban atau massa pada area tersebut. Penambahan massa ini pada gilirannya menyebabkan peningkatan tekanan pada tanah di bawah pondasi Menara. Tanah di bawah Menara Pisa dikenal sebagai tanah yang lunak dan kompresibel. Ketika tekanan meningkat pada tanah seperti ini, ia akan semakin padat dan \"turun,\" menyebabkan pondasi di sisi tersebut semakin amblas. Akibatnya, kemiringan Menara justru bertambah parah."
    },
    "11": {
        "materi": "Petra",
        "question": "Popularitas Petra sebagai destinasi wisata global telah meningkatkan jumlah pengunjung secara drastis. Namun, peningkatan ini juga menimbulkan tantangan signifikan. Tantangan utama apakah yang dihadapi Petra sebagai konsekuensi dari popularitasnya?",
        "prompt": "",
        "correctAnswer": "D",
        "options": {
            "A": "Penurunan minat masyarakat lokal terhadap sejarah",
            "B": "Kurangnya infrastruktur pariwisata yang memadai",
            "C": "Potensi kehilangan status Warisan Dunia UNESCO",
            "D": "Peningkatan erosi dan kerusakan fisik struktur kuno"
        },
        "explanation": "Popularitas Petra membawa manfaat ekonomi bagi Yordania, tetapi juga memberikan tekanan besar pada kelestarian fisiknya. Struktur batu pasir Petra sangat rentan terhadap erosi akibat angin, air, dan aktivitas wisatawan seperti sentuhan, gesekan alas kaki, dan polusi udara. Banjir bandang juga memperparah kerusakan.<br>Laporan dari UNESCO dan para ahli konservasi menyoroti urgensi pengelolaan hati-hati dan pembatasan jumlah pengunjung untuk melindungi situs ini dari kerusakan tak terkendali, menjadikan pelestarian fisik Petra sebagai tantangan utama dibandingkan isu lainnya."
    },
    "12": {
        "materi": "Colosseum",
        "question": "Colosseum dirancang untuk menampung puluhan ribu penonton dan dapat mengosongkan diri dalam waktu yang sangat singkat. Sistem arsitektur apa yang paling berkontribusi pada efisiensi manajemen kerumunan ini?",
        "prompt": "",
        "correctAnswer": "B",
        "options": {
            "A": "Desain arena yang miring, mengalirkan penonton keluar melalui satu gerbang utama",
            "B": "Penggunaan 80 pintu masuk bernomor (vomitoria) dan jalur terpisah untuk aliran simultan",
            "C": "Penonton diwajibkan untuk masuk dan keluar secara bergantian",
            "D": "Tersedia kereta dorong untuk memindahkan penonton dengan cepat"
        },
        "explanation": "Colosseum menunjukkan kecanggihannya arsitektur Romawi dalam mengelola massa dengan sangat efisien. Salah satu inovasi utamanya adalah keberadaan 80 pintu masuk bernomor yang disebut vomitoria. Sistem ini memungkinkan penonton masuk dan keluar secara serentak melalui jalur yang sudah ditentukan, menghindari penumpukan dan mempercepat pergerakan. Desainnya yang berbentuk elips tidak hanya mendukung visibilitas dari semua sudut, tetapi juga memudahkan distribusi penonton ke seluruh area. Dengan perpaduan antara keindahan bentuk dan fungsi praktis, Colosseum menjadi bukti keunggulan Romawi dalam menyatukan estetika dan efisiensi dalam satu struktur megah."
    },
    "13": {
        "materi": "Sphinx (Mesir)",
        "question": "Dalam konteks kompleks piramida Giza, Sphinx sering dianggap memiliki peran pelindung. Jelaskan secara analitis mengapa Sphinx ditempatkan sebagai \"penjaga\" di lokasi tersebut, dan apa yang secara spesifik diyakini dilindungi oleh monumen kolosal ini?",
        "prompt": "",
        "correctAnswer": "A",
        "options": {
            "A": "Melindungi kompleks pemakaman dari gangguan spiritual dan menjaga kesucian ritual",
            "B": "Menyimpan harta karun firaun yang paling berharga di dalam ruang rahasianya",
            "C": "Mencegah banjir Sungai Nil agar tidak mencapai piramida",
            "D": "Sebagai pos pengamatan untuk memantau pergerakan suku nomaden di gurun"
        },
        "explanation": "Sphinx Agung di Giza dengan tubuh singa dan kepala manusia, merupakan monumen simbolik yang secara tradisional diasosiasikan dengan kekuatan, kebijaksanaan, dan perlindungan spiritual. Dalam budaya Mesir Kuno, hewan buas seperti singa sering dianggap sebagai pelindung terhadap kekuatan jahat, sementara kepala manusia melambangkan intelektualitas dan kekuasaan.<br>Penempatan Sphinx tepat di depan kompleks piramida Khafre bukan kebetulan. Secara arsitektural dan simbolik, posisi ini mengindikasikan fungsi penjagaan terhadap makam-makam firaun, termasuk piramida dan kuil pemakamannya. Kepercayaan Mesir Kuno menyatakan bahwa dunia orang mati perlu dilindungi dari gangguan roh jahat, penyusup, dan pencuri makam. Oleh karena itu, Sphinx berperan sebagai \"penjaga sakral\" atas area suci tersebut."
    },
    "14": {
        "materi": "Christ the Redeemer",
        "question": "Patung Cristo Redentor di Rio de Janeiro mengalami perubahan desain dari rancangan awal yang menampilkan Yesus memegang salib dan bola dunia, lalu diubah menjadi pose tangan terbuka lebar. Mengapa perubahan desain tersebut dianggap mencerminkan pesan universal dari patung ini?",
        "prompt": "",
        "correctAnswer": "C",
        "options": {
            "A": "Desain awal terlalu kaku dan kurang menarik secara visual bagi wisatawan internasional",
            "B": "Modifikasi desain tersebut lebih efisien dari segi penggunaan material dan proses konstruksi",
            "C": "Tangan terbuka melambangkan sambutan dan perdamaian yang bersifat lebih universal",
            "D": "Rancangan awal memiliki kemiripan berlebihan dengan patung-patung Kristus lainnya di dunia"
        },
        "explanation": "Perubahan desain Patung Kristus Penebus (Cristo Redentor) menjadi pose tangan terbuka lebar secara fundamental mencerminkan pesan universal karena gesture tangan terbuka melambangkan sambutan, perdamaian, dan penebusan yang bersifat inklusif bagi semua orang, melampaui batas-batas keagamaan spesifik. Ini menjadikannya simbol penerimaan dan harapan bagi dunia.<br>Analisis opsi lain:<ul style=\"margin-left: 10px; padding-left: 10px;\"><li>A & B (Salah): Alasan estetika atau efisiensi konstruksi tidak merepresentasikan makna universal yang mendalam dari perubahan desain.</li><li>D (Salah): Meskipun keunikan adalah aspeknya, motif utama perubahan adalah perluasan makna simbolis, bukan sekadar diferensiasi.</li></ul>"
    },
    "15": {
        "materi": "Moai Statue",
        "question": "Para ahli telah lama berupaya memecahkan misteri pemindahan patung Moai raksasa dari tambang Rano Raraku ke lokasi-lokasi ahu di seluruh Pulau Paskah. Salah satu teori yang menjelaskan hal ini adalah teknik \"berjalan\" Moai. Bagaimana masyarakat Rapa Nui kuno diduga memindahkan patung-patung ini dengan metode tersebut?",
        "prompt": "",
        "correctAnswer": "A",
        "options": {
            "A": "Patung-patung digoyangkan maju dalam posisi tegak menggunakan tali dan tenaga manusia",
            "B": "Patung digulingkan secara horizontal di atas gelondongan kayu yang ditarik oleh banyak orang",
            "C": "Moai diangkut melalui perairan menggunakan rakit besar yang terbuat dari batang pohon palem",
            "D": "Menggunakan ramp tanah dan katrol sederhana untuk mengangkat patung secara bertahap"
        },
        "explanation": "Penelitian arkeolog Terry Hunt dan Carl Lipo menunjukkan bahwa patung Moai di Pulau Paskah dipindahkan dengan teknik \"berjalan\" menggunakan tali. Patung yang berdiri tegak digoyangkan maju mundur secara bergantian dari sisi ke sisi, dengan beberapa orang menarik tali di kedua sisi patung dan kelompok kecil di belakang yang menjaga keseimbangan dan mengarahkan gerakan. Teknik ini memungkinkan patung yang beratnya mencapai beberapa ton bergerak maju perlahan tanpa harus digulingkan atau diseret di atas kayu gelondongan yang rentan rusak. Metode ini juga didukung oleh tradisi lisan masyarakat Rapa Nui yang menyebut patung-patung itu \"berjalan\" (neke-neke), dan telah dibuktikan melalui eksperimen pemindahan replika patung seberat lima ton. Cara ini dinilai efisien dan ramah lingkungan, sesuai dengan kondisi Pulau Paskah yang minim sumber daya kayu."
    }
};

// Bobot nilai per materi
const scoreWeights = [
    44.11333176,
    69.68102496,
    88.22666352,
    67.46975988,
    55.85487793,
    71.11119724,
    75.85365085,
    60.69641287,
    54.25608134,
    73.24237901,
    69.83101634,
    66.13976579,
    76.10272357,
    58.88384679,
    68.53726815
];

// Data peserta
const participantAnswers = {
    "antaaini": {
        name: "Salsabila Quurotul A'ini",
        answers: ["B", "0", "C", "0", "A", "D", "D", "0", "D", "0", "0", "0", "0", "0", "0"],
        correct: [true, false, true, false, true, true, false, false, false, false, false, false, false, false, false]
    },
    // Tambahkan data peserta lainnya di sini...
    // (Sisanya sama seperti data peserta yang Anda miliki)
};

// Data distribusi jawaban dan bobot soal untuk tabel
const weightTableData = [
    { no: 1, landmark: "Patung Liberty", a: "5%", b: "90%", c: "5%", d: "0%", key: "B", difficulty: "-2.25", initialWeight: "50", finalWeight: "44.11" },
    { no: 2, landmark: "Candi Borobudur", a: "59%", b: "18%", c: "18%", d: "5%", key: "A", difficulty: "-0.37", initialWeight: "79", finalWeight: "69.68" },
    { no: 3, landmark: "Taj Mahal", a: "35%", b: "38%", c: "27%", d: "0%", key: "C", difficulty: "1.00", initialWeight: "100", finalWeight: "88.23" },
    { no: 4, landmark: "Piramida Giza", a: "4%", b: "63%", c: "11%", d: "22%", key: "B", difficulty: "-0.53", initialWeight: "76", finalWeight: "67.47" },
    { no: 5, landmark: "Menara Eiffel", a: "80%", b: "8%", c: "12%", d: "0%", key: "A", difficulty: "-1.39", initialWeight: "63", finalWeight: "55.85" },
    { no: 6, landmark: "Akropolis Athena", a: "22%", b: "9%", c: "13%", d: "57%", key: "D", difficulty: "-0.26", initialWeight: "81", finalWeight: "71.11" },
    { no: 7, landmark: "Ka'bah", a: "13%", b: "13%", c: "48%", d: "26%", key: "C", difficulty: "0.09", initialWeight: "86", finalWeight: "75.85" },
    { no: 8, landmark: "Great Wall China", a: "11%", b: "16%", c: "74%", d: "0%", key: "C", difficulty: "-1.03", initialWeight: "69", finalWeight: "60.70" },
    { no: 9, landmark: "Burj Khalifa", a: "0%", b: "82%", c: "9%", d: "9%", key: "B", difficulty: "-1.50", initialWeight: "61", finalWeight: "54.26" },
    { no: 10, landmark: "Menara Pisa", a: "53%", b: "21%", c: "11%", d: "16%", key: "A", difficulty: "-0.11", initialWeight: "83", finalWeight: "73.24" },
    { no: 11, landmark: "Petra", a: "18%", b: "6%", c: "18%", d: "59%", key: "D", difficulty: "-0.36", initialWeight: "79", finalWeight: "69.83" },
    { no: 12, landmark: "Colosseum", a: "17%", b: "65%", c: "13%", d: "4%", key: "B", difficulty: "-0.63", initialWeight: "75", finalWeight: "66.14" },
    { no: 13, landmark: "Sphinx (Mesir)", a: "47%", b: "32%", c: "16%", d: "5%", key: "A", difficulty: "0.11", initialWeight: "86", finalWeight: "76.10" },
    { no: 14, landmark: "Christ the Redeemer", a: "5%", b: "14%", c: "76%", d: "5%", key: "C", difficulty: "-1.16", initialWeight: "67", finalWeight: "58.88" },
    { no: 15, landmark: "Moai Statue", a: "61%", b: "17%", c: "17%", d: "6%", key: "A", difficulty: "-0.45", initialWeight: "78", finalWeight: "68.54" }
];