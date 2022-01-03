window.onload = () => {
    document.getElementById('Download').addEventListener('click', () => {
        const invoice = this.document.getElementById('profil')
        var opt = {
            margin: 0.5,
            filename: 'mr Bisimwa.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 3 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(invoice).set(opt).save()
    })
}