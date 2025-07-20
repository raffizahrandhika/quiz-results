document.addEventListener('DOMContentLoaded', function() {
    // Initialize jsPDF
    const { jsPDF } = window.jspdf;
    
    // Hitung skor total untuk setiap peserta
    const participantsWithScores = {};
    for (const username in participantAnswers) {
        const participant = participantAnswers[username];
        let totalScore = 0;

        for (let i = 0; i < participant.answers.length; i++) {
            if (participant.correct[i]) {
                totalScore += scoreWeights[i];
            }
        }

        participantsWithScores[username] = {
            name: participant.name,
            answers: participant.answers,
            correct: participant.correct,
            score: Math.round(totalScore)
        };
    }

    // Urutkan peserta berdasarkan skor (descending)
    const sortedParticipants = Object.keys(participantsWithScores)
        .map(username => ({
            username,
            ...participantsWithScores[username]
        }))
        .sort((a, b) => b.score - a.score);

    // Tambahkan ranking ke data peserta
    sortedParticipants.forEach((participant, index) => {
        participantsWithScores[participant.username].rank = index + 1;
    });

    // Isi tabel bobot soal
    const weightTableBody = document.getElementById('weight-table-body');
    weightTableData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.no}</td>
            <td>${item.landmark}</td>
            <td>${item.a}</td>
            <td>${item.b}</td>
            <td>${item.c}</td>
            <td>${item.d}</td>
            <td>${item.key}</td>
            <td>${item.difficulty}</td>
            <td>${item.initialWeight}</td>
            <td>${item.finalWeight}</td>
        `;
        weightTableBody.appendChild(row);
    });

    // Elemen DOM
    const usernameInput = document.getElementById('username');
    const searchButton = document.getElementById('search-button');
    const participantName = document.getElementById('participant-name');
    const participantUsername = document.getElementById('participant-username');
    const participantRank = document.getElementById('participant-rank');
    const totalScoreElement = document.getElementById('total-score');
    const congratsMessage = document.getElementById('congrats-message');
    const answerDetails = document.getElementById('answer-details');
    const viewAnswersBtn = document.getElementById('viewAnswersBtn');
    const downloadResultsBtn = document.getElementById('downloadResultsBtn');
    const answersSection = document.getElementById('answersSection');
    const answersContent = document.getElementById('answersContent');
    const certificateContainer = document.getElementById('certificateContainer');
    const downloadCertificateBtn = document.getElementById('downloadCertificateBtn');
    const browserWarning = document.getElementById('browser-warning');

    // Inisialisasi tampilan
    certificateContainer.style.display = 'none';
    browserWarning.style.display = 'none';
    initializeEmptyTable();

    // Fungsi untuk menampilkan preview sertifikat
    function showCertificatePreview(username) {
        if (!username || !participantsWithScores[username]) {
            alert('Silakan masukkan username yang valid terlebih dahulu');
            return;
        }

        const participantName = participantsWithScores[username].name;
        const modal = document.getElementById('certificateModal');
        const previewImg = document.getElementById('certificatePreview');

        // Buat canvas untuk menggambar sertifikat
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.crossOrigin = 'Anonymous';
        img.onload = function() {
            // Set ukuran canvas sesuai gambar
            canvas.width = img.width;
            canvas.height = img.height;

            // Gambar background sertifikat
            ctx.drawImage(img, 0, 0);

            // Tambahkan nama peserta
            ctx.font = '900 80px Nunito, Arial Black, sans-serif';
            ctx.fillStyle = '#006eff';
            ctx.textAlign = 'center';

            // Hitung posisi teks (sesuaikan dengan kebutuhan)
            const positionX = canvas.width * 0.72;
            const positionY = canvas.height * 0.30;

            ctx.fillText(participantName, positionX, positionY);

            // Set preview image
            previewImg.src = canvas.toDataURL('image/png');
            modal.style.display = 'flex';
        };

        img.src = 'https://i.imgur.com/oUBelz7.png';
    }

    // Fungsi untuk download sertifikat (setelah preview)
    function downloadCertificate(username) {
        const participantName = participantsWithScores[username].name;
        const previewImg = document.getElementById('certificatePreview');

        const link = document.createElement('a');
        link.download = `Sertifikat_${username}.png`;
        link.href = previewImg.src;
        link.click();

        // Tutup modal setelah download
        document.getElementById('certificateModal').style.display = 'none';
    }

    // Event listeners
    searchButton.addEventListener('click', function() {
        const username = usernameInput.value.trim();

        if (!username) {
            alert('Silakan masukkan username Anda');
            return;
        }

        if (participantsWithScores[username]) {
            displayResult(username, participantsWithScores[username]);
            displayUserAnswers(username);
            document.querySelector('.score-display').classList.remove('not-found');
        } else {
            // Reset tampilan
            document.querySelector('.score-display').classList.add('not-found');
            participantName.textContent = '-';
            participantUsername.textContent = '-';
            participantRank.textContent = '-';
            totalScoreElement.textContent = '-';
            congratsMessage.className = 'congrats-message not-found';
            congratsMessage.textContent = 'Username tidak ditemukan';
            initializeEmptyTable();
            answersContent.innerHTML = `
                <p style="color: #ff0000; background: #ffeeee; text-align: center; padding: 10px; border-radius: 5px; border: 1px solid #ffcccc; margin: 10px 0;">
                    Silakan cari username yang valid untuk melihat jawaban
                </p>
            `;
            viewAnswersBtn.innerHTML = `
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
                </svg>
                Lihat Jawaban
            `;
            answersSection.style.display = 'none';
            certificateContainer.style.display = 'none';
        }
    });

    // Event listener untuk tombol Lihat Jawaban
    viewAnswersBtn.addEventListener('click', function() {
        if (answersSection.style.display === 'block') {
            answersSection.style.display = 'none';
            this.innerHTML = `
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
                </svg>
                Lihat Jawaban
            `;
        } else {
            answersSection.style.display = 'block';
            this.innerHTML = `
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
                </svg>
                Tutup Jawaban
            `;
        }
    });

    // Event listener untuk tombol download sertifikat
    downloadCertificateBtn.addEventListener('click', function() {
        const username = usernameInput.value.trim();
        showCertificatePreview(username);
    });

    // Event listener untuk tombol confirm download
    document.getElementById('confirmDownloadBtn').addEventListener('click', function() {
        const username = usernameInput.value.trim();
        downloadCertificate(username);
    });

    // Event listener untuk tombol cancel
    document.getElementById('cancelDownloadBtn').addEventListener('click', function() {
        document.getElementById('certificateModal').style.display = 'none';
    });

    // Event listener untuk merespon ketika pengguna menekan Enter pada input
    usernameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });

    // Fungsi untuk inisialisasi tabel kosong
    function initializeEmptyTable() {
        answerDetails.innerHTML = '';

        // Tampilkan tabel kosong dengan materi dan bobot
        for (let i = 0; i < Object.keys(quizQuestions).length; i++) {
            const questionNum = (i + 1).toString();
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${questionNum}</td>
                <td>${quizQuestions[questionNum].materi}</td>
                <td class="not-answered">-</td>
                <td class="not-answered">-</td>
                <td>-</td>
            `;

            answerDetails.appendChild(row);
        }
    }

    // Fungsi untuk menampilkan hasil
    function displayResult(username, participant) {
        participantName.textContent = participant.name;
        participantUsername.textContent = username;
        participantRank.textContent = participant.rank;
        totalScoreElement.textContent = participant.score;

        // Update IRT modal content
        const irtOpeningMessage = document.getElementById('irtOpeningMessage');
        if (username && participant) {
            irtOpeningMessage.innerHTML = `
                Selamat, <strong>${participant.name}</strong>! Anda telah menyelesaikan Quiz Challenge ini. 
                Mungkin Anda bertanya-tanya, "Bagaimana skor saya sebesar <strong>${participant.score}</strong> itu didapatkan?" 
                Sistem penilaian pada kuis ini dirancang agar lebih akurat dan adil, terinspirasi dari metode modern seperti 
                <strong>Item Response Theory (IRT)</strong> yang digunakan dalam berbagai tes standar, termasuk UTBK SNBT.
            `;
        } else {
            // Reset to default message if no participant found
            irtOpeningMessage.innerHTML = `
                Selamat! Anda telah menyelesaikan Quiz Challenge ini. Mungkin Anda bertanya-tanya, "Bagaimana skor saya sebesar [Skor Anda] itu didapatkan?" 
                Sistem penilaian pada kuis ini dirancang agar lebih akurat dan adil, terinspirasi dari metode modern seperti 
                <strong>Item Response Theory (IRT)</strong> yang digunakan dalam berbagai tes standar, termasuk UTBK SNBT.
            `;
        }

        // Set pesan selamat berdasarkan skor
        if (participant.score === 1000) {
            congratsMessage.className = 'congrats-message perfect';
            congratsMessage.textContent = 'Luar biasa! Anda telah menjelajahi seluruh keajaiban Bumi dengan sempurna! Dunia seakan terbuka di hadapan Anda.';
        } else if (participant.score >= 667) {
            congratsMessage.className = 'congrats-message good';
            congratsMessage.textContent = 'Hebat! Anda telah mengenali banyak keajaiban dan rahasia Bumi. Teruslah menjelajah dan memperluas wawasan!';
        } else if (participant.score >= 334) {
            congratsMessage.className = 'congrats-message average';
            congratsMessage.textContent = 'Langkah awal yang bagus! Beberapa keajaiban telah Anda temukan, tapi masih banyak yang menanti untuk dieksplorasi.';
        } else {
            congratsMessage.className = 'congrats-message poor';
            congratsMessage.textContent = 'Setiap penjelajah hebat selalu memulai dari langkah pertama. Masih banyak keajaiban Bumi menunggu untuk Anda temukan!';
        }

        answerDetails.innerHTML = '';

        // Tampilkan detail jawaban
        for (let i = 0; i < participant.answers.length; i++) {
            const questionNum = (i + 1).toString();
            const userAnswer = participant.answers[i];
            const isAnswered = userAnswer !== "0";
            const isCorrect = participant.correct[i];
            const weight = scoreWeights[i];
            const earnedPoints = isAnswered && isCorrect ? Math.round(weight) : 0;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${questionNum}</td>
                <td>${quizQuestions[questionNum].materi}</td>
                <td class="${isAnswered ? 'correct' : 'not-answered'}">
                    ${isAnswered ? 'Dijawab' : 'Tidak Dijawab'}
                </td>
                <td class="${!isAnswered ? 'not-answered' : isCorrect ? 'correct' : 'incorrect'}">
                    ${!isAnswered ? '-' : isCorrect ? 'Benar' : 'Salah'}
                </td>
                <td>${earnedPoints}</td>
            `;

            answerDetails.appendChild(row);
        }

        // Update tampilan sertifikat
        certificateContainer.style.display = 'block';
    }

    // Fungsi untuk menampilkan jawaban pengguna
    function displayUserAnswers(username) {
        const participant = participantAnswers[username];
        if (!participant) return;

        answersContent.innerHTML = '';

        for (let i = 0; i < participant.answers.length; i++) {
            const questionNum = (i + 1).toString();
            const questionData = quizQuestions[questionNum];
            const userAnswer = participant.answers[i];
            const isCorrect = participant.correct[i];
            const notAnswered = userAnswer === "0";

            // Tentukan status jawaban
            let statusText, statusClass;
            if (notAnswered) {
                statusText = "Tidak Dijawab";
                statusClass = "not-answered-status";
            } else if (isCorrect) {
                statusText = "✔ Jawaban Anda Benar";
                statusClass = "correct-status";
            } else {
                statusText = "✖ Jawaban Anda Salah";
                statusClass = "incorrect-status";
            }

            const answerItem = document.createElement('div');
            answerItem.className = 'answer-item';

            answerItem.innerHTML = `
                <div class="answer-header">
                    <h4>Soal ${questionNum}: ${questionData.materi}</h4>
                    <span class="answer-status ${statusClass}">${statusText}</span>
                </div>
                <p>${questionData.question}</p>
                ${questionData.prompt ? `<p><strong>${questionData.prompt}</strong></p>` : ''}

                <div class="user-answer">
                    <strong>Jawaban Anda:</strong> ${notAnswered ? 'Tidak Dijawab' : userAnswer + '. ' + questionData.options[userAnswer]}
                </div>

                ${(!isCorrect && !notAnswered) ? `
                <div class="correct-answer">
                    <strong>Kunci Jawaban:</strong> ${questionData.correctAnswer}. ${questionData.options[questionData.correctAnswer]}
                </div>
                ` : ''}

                ${notAnswered ? `
                <div class="correct-answer">
                    <strong>Kunci Jawaban:</strong> ${questionData.correctAnswer}. ${questionData.options[questionData.correctAnswer]}
                </div>
                ` : ''}

                <div class="explanation">
                    <strong>Penjelasan:</strong> ${questionData.explanation}
                </div>
                <hr>
            `;

            answersContent.appendChild(answerItem);
        }
    }

    // Fungsi untuk generate PDF
    async function generatePDF(username) {
        const participant = participantsWithScores[username];
        if (!participant) return;

        // Create new PDF document
        const doc = new jsPDF('p', 'mm', 'a4');

        // Watermark configuration
        const watermarkConfig = {
            url: 'https://i.imgur.com/3AOkMq2.png',
            opacity: 15, // 15% opacity
            scale: 0.3 // Scale down to 30% of original size
        };

        // Function to add watermark to current page
        async function addWatermark() {
            try {
                // Get page dimensions
                const pageWidth = doc.internal.pageSize.getWidth();
                const pageHeight = doc.internal.pageSize.getHeight();

                // Create a temporary image to get actual dimensions
                const img = new Image();
                img.crossOrigin = 'anonymous';

                return new Promise((resolve) => {
                    img.onload = function() {
                        // Get actual image dimensions
                        const actualWidth = img.width;
                        const actualHeight = img.height;
                        const aspectRatio = actualWidth / actualHeight;

                        // Calculate watermark size maintaining aspect ratio
                        const maxSize = Math.min(pageWidth, pageHeight) * watermarkConfig.scale;
                        let imgWidth, imgHeight;

                        if (aspectRatio > 1) {
                            // Landscape image
                            imgWidth = maxSize;
                            imgHeight = maxSize / aspectRatio;
                        } else {
                            // Portrait or square image
                            imgHeight = maxSize;
                            imgWidth = maxSize * aspectRatio;
                        }

                        // Calculate centered position
                        const xPos = (pageWidth - imgWidth) / 2;
                        const yPos = (pageHeight - imgHeight) / 2;

                        // Add image with opacity and proper aspect ratio
                        doc.addImage(watermarkConfig.url, 'PNG', xPos, yPos, imgWidth, imgHeight, 
                                    '', 'FAST', 0, 0, 0, 0, watermarkConfig.opacity);
                        resolve();
                    };

                    img.onerror = function() {
                        console.error('Error loading watermark image');
                        resolve();
                    };

                    img.src = watermarkConfig.url;
                });
            } catch (error) {
                console.error('Error adding watermark:', error);
            }
        }

        // Add watermark to first page
        await addWatermark();

        // Set margins
        const margin = 15;
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const contentWidth = pageWidth - (margin * 2);

        // Fungsi untuk text justify
        function textJustify(doc, text, x, y, maxWidth, lineHeight) {
            const words = text.split(' ');
            let lines = [];
            let currentLine = words[0];

            for (let i = 1; i < words.length; i++) {
                const word = words[i];
                const width = doc.getTextWidth(currentLine + " " + word);
                if (width < maxWidth) {
                    currentLine += " " + word;
                } else {
                    lines.push(currentLine);
                    currentLine = word;
                }
            }
            lines.push(currentLine);

            for (let i = 0; i < lines.length; i++) {
                let line = lines[i];

                if (i === lines.length - 1 || doc.getTextWidth(line) < maxWidth * 0.75) {
                    doc.text(line, x, y);
                } else {
                    const wordCount = line.split(' ').length;
                    const totalWordWidth = line.split(' ').reduce((acc, word) => acc + doc.getTextWidth(word), 0);
                    const totalSpaceWidth = maxWidth - totalWordWidth;
                    const spaceWidth = totalSpaceWidth / (wordCount - 1);

                    let xPos = x;
                    const words = line.split(' ');
                    for (let j = 0; j < words.length; j++) {
                        doc.text(words[j], xPos, y);
                        xPos += doc.getTextWidth(words[j]);
                        if (j < words.length - 1) {
                            xPos += spaceWidth;
                        }
                    }
                }
                y += lineHeight;
            }
            return y;
        }

        // Fungsi untuk text wrap
        function textWithWrap(doc, text, x, y, maxWidth, lineHeight) {
            const lines = doc.splitTextToSize(text, maxWidth);
            doc.text(lines, x, y);
            return y + (lines.length * lineHeight);
        }

        // Add title (dengan background putih kecil untuk meningkatkan readability)
        doc.setFillColor(255, 255, 255);
        doc.rect(margin, 15, pageWidth - (margin * 2), 15, 'F');

        doc.setFontSize(16);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(0, 110, 255);
        doc.text('Hasil Quiz Hunt - Wonders of Earth', pageWidth / 2, 25, { align: 'center' });

        // Add participant info dengan background putih
        doc.setFillColor(255, 255, 255);
        doc.rect(margin, 35, pageWidth - (margin * 2), 25, 'F');

        doc.setFontSize(12);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(0, 0, 0);

        let yPosition = 40;
        const lineSpacing = 7;
        const colonPosition = margin + 35;

        doc.text('Username', margin, yPosition);
        doc.text(':', colonPosition, yPosition);
        doc.text(username, colonPosition + 5, yPosition);
        yPosition += lineSpacing;

        doc.text('Peringkat', margin, yPosition);
        doc.text(':', colonPosition, yPosition);
        const totalParticipants = Object.keys(participantsWithScores).length;
        doc.text(`${participant.rank} dari ${totalParticipants} peserta`, colonPosition + 5, yPosition);
        yPosition += lineSpacing;

        doc.text('Total Skor', margin, yPosition);
        doc.text(':', colonPosition, yPosition);
        doc.text(`${participant.score} dari 1000`, colonPosition + 5, yPosition);

        // Add questions
        yPosition += 15;

        for (let i = 0; i < participant.answers.length; i++) {
            const questionNum = (i + 1).toString();
            const userAnswer = participant.answers[i];
            const isAnswered = userAnswer !== "0";
            const isCorrect = participant.correct[i];
            const weight = scoreWeights[i];
            const earnedPoints = isAnswered && isCorrect ? Math.round(weight) : 0;

            // Check if we need a new page
            if (yPosition > pageHeight - 60) {
                doc.addPage();
                yPosition = 20;
                await addWatermark(); // Tambahkan watermark ke halaman baru

                // Tambahkan background putih untuk header
                doc.setFillColor(255, 255, 255);
                doc.rect(margin, yPosition, pageWidth - (margin * 2), 15, 'F');
                yPosition += 5;
            }

            // Question header
            doc.setFontSize(12);
            doc.setFont(undefined, 'bold');
            doc.setTextColor(0, 110, 255);
            doc.text(`[SOAL ${questionNum.padStart(2, '0')}]`, margin, yPosition);
            yPosition += 8;

            // Question text
            doc.setFont(undefined, 'normal');
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            const questionText = quizQuestions[questionNum].question || `Soal ${questionNum}`;
            yPosition = textJustify(doc, questionText, margin, yPosition, contentWidth, 6);

            // User answer
            doc.setFontSize(12);
            let userAnswerText = 'Tidak dijawab';
            let answerColor = [100, 100, 100];

            if (isAnswered && quizQuestions[questionNum].options) {
                const optionText = quizQuestions[questionNum].options[userAnswer];
                if (optionText) {
                    userAnswerText = `Jawaban Anda: ${userAnswer}. ${optionText}`;
                    answerColor = isCorrect ? [0, 128, 0] : [255, 0, 0];
                }
            } else {
                userAnswerText = `Jawaban Anda: ${userAnswerText}`;
            }

            doc.setTextColor(...answerColor);
            yPosition = textWithWrap(doc, userAnswerText, margin, yPosition, contentWidth, 6);

            // Correct answer
            doc.setFontSize(12);
            doc.setTextColor(0, 128, 0);
            let correctAnswerText = 'Kunci Jawaban: -';
            if (quizQuestions[questionNum].correctAnswer && quizQuestions[questionNum].options) {
                const correctAnswer = quizQuestions[questionNum].correctAnswer;
                const correctOptionText = quizQuestions[questionNum].options[correctAnswer];
                if (correctOptionText) {
                    correctAnswerText = `Kunci Jawaban: ${correctAnswer}. ${correctOptionText}`;
                }
            }

            yPosition = textWithWrap(doc, correctAnswerText, margin, yPosition, contentWidth, 6);

            // Score
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.setFont(undefined, 'bold');
            doc.text(`Skor: ${earnedPoints}`, margin, yPosition);
            yPosition += 7;

            // Separator line
            doc.setDrawColor(200, 200, 200);
            doc.line(margin, yPosition, pageWidth - margin, yPosition);
            yPosition += 6;
        }

        // Add footer to all pages
        const totalPages = doc.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
            doc.setPage(i);

            // Footer background
            doc.setFillColor(255, 255, 255);
            doc.rect(margin, pageHeight - 15, pageWidth - (margin * 2), 10, 'F');

            // Footer text
            const currentDate = new Date();
            const dateString = currentDate.toLocaleDateString('id-ID', {
                day: '2-digit',
                month: '2-digit', 
                year: 'numeric'
            });
            const timeString = currentDate.toLocaleTimeString('id-ID', {
                hour: '2-digit',
                minute: '2-digit'
            });

            const footerText = `Diunduh dari https://quizlabbyraffi.blogspot.com pada ${dateString} ${timeString}`;

            doc.setFontSize(9);
            doc.setFont(undefined, 'italic');
            doc.setTextColor(100, 100, 100);
            doc.text(footerText, pageWidth / 2, pageHeight - 10, { align: 'center' });
        }

        // Save PDF
        doc.save(`Hasil_Kuis_${username}.pdf`);
    }
  
    // Event listener untuk tombol Download Hasil (PDF)
    downloadResultsBtn.addEventListener('click', function() {
        const username = usernameInput.value.trim();
        
        if (!username) {
            alert('Silakan masukkan username Anda terlebih dahulu');
            return;
        }
        
        if (!participantsWithScores[username]) {
            alert('Username tidak ditemukan');
            return;
        }
        
        // Cek jika dibuka di Instagram
        if (isInstagramBrowser()) {
            document.getElementById('browserWarningModal').style.display = 'flex';
        } else {
            generatePDF(username);
        }
    });

    // Event listener untuk tombol close warning modal
    document.getElementById('closeBrowserWarningBtn').addEventListener('click', function() {
        document.getElementById('browserWarningModal').style.display = 'none';
    });

    // Deteksi jika dibuka di Instagram
    function isInstagramBrowser() {
        const isInstagram = /Instagram/.test(navigator.userAgent);
        browserWarning.style.display = isInstagram ? 'block' : 'none';
        return isInstagram;
    }

    // Override tombol download sertifikat jika di Instagram
    if (isInstagramBrowser()) {
        downloadCertificateBtn.onclick = function() {
            document.getElementById('browserWarningModal').style.display = 'flex';
            return false;
        };
    }

    // Fungsi untuk menangani form feedback
    function setupFeedbackForm(username = null, participantName = null) {
        const feedbackForm = document.getElementById('customFeedbackForm');
        const anonymousCheckbox = document.getElementById('anonymousCheckbox');
        const feedbackNameInput = document.getElementById('feedbackName');
        const usernameBadge = document.getElementById('usernameBadge');
        const closeBtn = document.getElementById('closeFeedbackModal');

        // Reset form setiap kali dibuka
        feedbackForm.reset();
        usernameBadge.style.display = 'none';
        anonymousCheckbox.checked = false;
        feedbackNameInput.readOnly = false;
        feedbackNameInput.style.backgroundColor = 'white';

        // Update nilai berdasarkan pencarian terbaru
        if (username && participantName) {
            feedbackNameInput.value = participantName;
            usernameBadge.textContent = `(from: ${username})`;
            usernameBadge.style.display = 'inline';
        } else {
            feedbackNameInput.value = '';
            usernameBadge.style.display = 'none';
        }

        // Handle checkbox anonymous
        anonymousCheckbox.addEventListener('change', function() {
            if (this.checked) {
                feedbackNameInput.value = 'Anonymous';
                feedbackNameInput.readOnly = true;
                feedbackNameInput.style.backgroundColor = '#f5f5f5';
            } else {
                feedbackNameInput.readOnly = false;
                feedbackNameInput.style.backgroundColor = 'white';
                if (username && participantName) {
                    feedbackNameInput.value = participantName;
                } else {
                    feedbackNameInput.value = '';
                }
            }
        });

        // Handle form submission
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();

            let name = feedbackNameInput.value.trim();
            const message = document.getElementById('feedbackMessage').value.trim();

            if (!message) {
                alert('Harap isi saran/kritik Anda');
                return;
            }

            if (!name) name = 'Anonymous';

            const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSc57kXXw5eZS2aykY2ZzVYoCkKZB6otmw6SAGcp7GmMPzVV2g/formResponse';
            const formData = new FormData();
            formData.append('entry.1346833210', name);       
            formData.append('entry.1972453642', message);   

            fetch(formURL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            }).then(() => {
                document.getElementById('feedbackSuccess').style.display = 'block';
                feedbackForm.reset();

                if (username && participantName) {
                    feedbackNameInput.value = participantName;
                }
                anonymousCheckbox.checked = false;
                feedbackNameInput.readOnly = false;
                feedbackNameInput.style.backgroundColor = 'white';

                setTimeout(() => {
                    document.getElementById('feedbackModal').style.display = 'none';
                    document.getElementById('feedbackSuccess').style.display = 'none';
                }, 2000);
            }).catch(() => {
                alert('Terjadi error saat mengirim saran. Silakan coba lagi.');
            });
        });

        // Fix: Tambahkan event listener untuk tombol close
        closeBtn.addEventListener('click', function() {
            document.getElementById('feedbackModal').style.display = 'none';
            document.getElementById('feedbackSuccess').style.display = 'none';
            feedbackForm.reset();

            if (username && participantName) {
                feedbackNameInput.value = participantName;
            }
            anonymousCheckbox.checked = false;
            feedbackNameInput.readOnly = false;
            feedbackNameInput.style.backgroundColor = 'white';
        });
    }

    // Cara memanggilnya:
    document.getElementById('openFeedbackBtn').addEventListener('click', function() {
        const username = document.getElementById('username').value.trim();
        let participantName = null;

        if (username && participantsWithScores[username]) {
            participantName = participantsWithScores[username].name;
        }

        // Tutup modal sebelumnya jika masih terbuka
        document.getElementById('feedbackModal').style.display = 'none';
        document.getElementById('feedbackSuccess').style.display = 'none';

        // Setup form dengan data baru
        setupFeedbackForm(username, participantName);
        document.getElementById('feedbackModal').style.display = 'flex';
    });
    
    // Fungsi untuk menangani modal penjelasan IRT
    document.getElementById('irtInfoLink').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('irtInfoModal').style.display = 'flex';
    });

    document.getElementById('closeIrtModal').addEventListener('click', function() {
        document.getElementById('irtInfoModal').style.display = 'none';
    });

    document.getElementById('closeIrtModalBtn').addEventListener('click', function() {
        document.getElementById('irtInfoModal').style.display = 'none';
    });
});