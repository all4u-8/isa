function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.info-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            if (section.style.display === 'block') {
                section.style.display = 'none';
            } else {
                sections.forEach(sec => sec.style.display = 'none');
                section.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    });
}
