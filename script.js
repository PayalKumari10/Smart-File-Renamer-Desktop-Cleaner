// File storage
let uploadedFiles = [];

// DOM Elements
const uploadZone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');
const applyRenameBtn = document.getElementById('applyRename');
const downloadBtn = document.getElementById('downloadBtn');
const simulateBtn = document.getElementById('simulateBtn');
const previewSection = document.getElementById('previewSection');
const previewList = document.getElementById('previewList');

// Rename options
const removeSpacesCheckbox = document.getElementById('removeSpaces');
const addNumberingCheckbox = document.getElementById('addNumbering');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const prefixInput = document.getElementById('prefix');

// Folder counts
const imagesCount = document.getElementById('imagesCount');
const documentsCount = document.getElementById('documentsCount');
const pdfsCount = document.getElementById('pdfsCount');
const videosCount = document.getElementById('videosCount');
const othersCount = document.getElementById('othersCount');

// Upload Zone Events
uploadZone.addEventListener('click', () => fileInput.click());

uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
});

uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('dragover');
});

uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    handleFiles(e.dataTransfer.files);
});

fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
});

// Handle uploaded files
function handleFiles(files) {
    uploadedFiles = Array.from(files);
    updateFolderCounts();
    
    if (uploadedFiles.length > 0) {
        uploadZone.innerHTML = `
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#48bb78" opacity="0.2"/>
                <path d="M18 24L22 28L30 20" stroke="#48bb78" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p style="color: #48bb78; font-weight: 600;">${uploadedFiles.length} file(s) uploaded successfully!</p>
        `;
    }
}

// Apply rename logic
applyRenameBtn.addEventListener('click', () => {
    if (uploadedFiles.length === 0) {
        alert('Please upload files first!');
        return;
    }

    const renamedFiles = uploadedFiles.map((file, index) => {
        let newName = file.name;
        const extension = newName.substring(newName.lastIndexOf('.'));
        let nameWithoutExt = newName.substring(0, newName.lastIndexOf('.'));

        // Apply transformations
        if (removeSpacesCheckbox.checked) {
            nameWithoutExt = nameWithoutExt.replace(/\s+/g, '_');
        }

        if (lowercaseCheckbox.checked) {
            nameWithoutExt = nameWithoutExt.toLowerCase();
        }

        if (uppercaseCheckbox.checked) {
            nameWithoutExt = nameWithoutExt.toUpperCase();
        }

        if (prefixInput.value.trim()) {
            nameWithoutExt = prefixInput.value.trim() + nameWithoutExt;
        }

        if (addNumberingCheckbox.checked) {
            nameWithoutExt = `${index + 1}_${nameWithoutExt}`;
        }

        newName = nameWithoutExt + extension;

        return {
            originalFile: file,
            oldName: file.name,
            newName: newName
        };
    });

    displayPreview(renamedFiles);
});

// Display preview
function displayPreview(renamedFiles) {
    previewList.innerHTML = '';
    
    renamedFiles.forEach(file => {
        const previewItem = document.createElement('div');
        previewItem.className = 'preview-item';
        previewItem.innerHTML = `
            <span class="old-name">${file.oldName}</span>
            <span class="arrow">→</span>
            <span class="new-name">${file.newName}</span>
        `;
        previewList.appendChild(previewItem);
    });

    previewSection.style.display = 'block';
    
    // Store renamed files for download
    window.renamedFiles = renamedFiles;
}

// Download ZIP (simulated)
downloadBtn.addEventListener('click', () => {
    if (!window.renamedFiles || window.renamedFiles.length === 0) {
        alert('No files to download!');
        return;
    }

    // Create a simple text file with the rename mapping
    let content = 'File Rename Summary\n';
    content += '===================\n\n';
    
    window.renamedFiles.forEach(file => {
        content += `${file.oldName} → ${file.newName}\n`;
    });

    content += '\n\nNote: In a real application, this would download a ZIP file with renamed files.\n';
    content += 'For this demo, we\'re showing the rename mapping instead.';

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'renamed_files_summary.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert('Download started! Check your downloads folder for the summary file.');
});

// Categorize files by extension
function categorizeFile(filename) {
    const ext = filename.substring(filename.lastIndexOf('.')).toLowerCase();
    
    const categories = {
        images: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp', '.ico'],
        documents: ['.doc', '.docx', '.txt', '.rtf', '.odt'],
        pdfs: ['.pdf'],
        videos: ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.mkv', '.webm'],
    };

    for (const [category, extensions] of Object.entries(categories)) {
        if (extensions.includes(ext)) {
            return category;
        }
    }

    return 'others';
}

// Update folder counts
function updateFolderCounts() {
    const counts = {
        images: 0,
        documents: 0,
        pdfs: 0,
        videos: 0,
        others: 0
    };

    uploadedFiles.forEach(file => {
        const category = categorizeFile(file.name);
        counts[category]++;
    });

    imagesCount.textContent = `${counts.images} file${counts.images !== 1 ? 's' : ''}`;
    documentsCount.textContent = `${counts.documents} file${counts.documents !== 1 ? 's' : ''}`;
    pdfsCount.textContent = `${counts.pdfs} file${counts.pdfs !== 1 ? 's' : ''}`;
    videosCount.textContent = `${counts.videos} file${counts.videos !== 1 ? 's' : ''}`;
    othersCount.textContent = `${counts.others} file${counts.others !== 1 ? 's' : ''}`;
}

// Simulate organization
simulateBtn.addEventListener('click', () => {
    if (uploadedFiles.length === 0) {
        // Generate sample files for demo
        const sampleFiles = [
            { name: 'vacation.jpg' },
            { name: 'report.docx' },
            { name: 'invoice.pdf' },
            { name: 'presentation.pdf' },
            { name: 'family_video.mp4' },
            { name: 'screenshot.png' },
            { name: 'notes.txt' },
            { name: 'movie.avi' },
            { name: 'archive.zip' },
            { name: 'photo.jpeg' }
        ];

        uploadedFiles = sampleFiles;
        updateFolderCounts();
    }

    const counts = {
        images: 0,
        documents: 0,
        pdfs: 0,
        videos: 0,
        others: 0
    };

    uploadedFiles.forEach(file => {
        const category = categorizeFile(file.name);
        counts[category]++;
    });

    let message = '✅ Desktop cleaned successfully!\n\n';
    message += 'Files organized:\n';
    message += `📁 Images: ${counts.images} file(s)\n`;
    message += `📁 Documents: ${counts.documents} file(s)\n`;
    message += `📁 PDFs: ${counts.pdfs} file(s)\n`;
    message += `📁 Videos: ${counts.videos} file(s)\n`;
    message += `📁 Others: ${counts.others} file(s)\n`;

    alert(message);
});

// Initialize with sample data for demo
window.addEventListener('load', () => {
    console.log('FileFlow - Smart File Renamer & Desktop Cleaner');
    console.log('Ready to organize your files!');
});
