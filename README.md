# 🚀 FileFlow - Smart File Renamer & Desktop Cleaner

A beautiful, modern web application for lazy automation - rename multiple files and organize your desktop with zero effort!

Built for **Kiro Week 2 Challenge** using pure HTML, CSS, and JavaScript.

## ✨ Features

### 📝 Smart File Renamer
- Upload multiple files via drag & drop or file browser
- Automatic renaming with multiple options:
  - Remove spaces (replace with underscores)
  - Add custom prefix
  - Add sequential numbering
  - Convert to lowercase or uppercase
- Live preview of before/after filenames
- Download renamed files summary

### 🗂️ Desktop Cleaner
- Automatic file categorization into:
  - 🖼️ Images (jpg, png, gif, svg, etc.)
  - 📄 Documents (doc, docx, txt, rtf, etc.)
  - 📕 PDFs
  - 🎬 Videos (mp4, avi, mov, etc.)
  - 📦 Others (everything else)
- Visual folder simulation
- Real-time file count updates
- One-click organization

### 🎨 Premium UI Design
- Modern gradient background
- Soft shadows and rounded cards
- Clean typography
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)
- Intuitive user experience

## 📁 Project Structure

```
smart-file-renamer/
├── index.html              # Main HTML structure
├── style.css               # All styling and responsive design
├── script.js               # Core JavaScript functionality
├── README.md               # This file
└── .kiro/
    ├── workflow.json       # Kiro automation workflow
    └── cleanup.script      # Desktop cleanup bash script
```

## 🚀 Getting Started

### Quick Start
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start organizing your files!

No installation, no dependencies, no build process required!

### Using the File Renamer
1. Drag and drop files or click to browse
2. Select rename options (remove spaces, add prefix, etc.)
3. Click "Apply Rename" to see preview
4. Download the summary file

### Using the Desktop Cleaner
1. Upload files to see categorization
2. Click "Simulate Organization" to see results
3. Files are automatically sorted into categories

## 🤖 Kiro Workflow

The `.kiro/workflow.json` file contains an automated workflow that:
- Scans your desktop directory
- Categorizes files by extension
- Creates organized folders
- Moves files to appropriate categories
- Generates a cleanup summary

### Running the Workflow
The workflow can be triggered manually through Kiro's workflow system. It will:
1. Scan the desktop path
2. Create category folders (Images, Documents, PDFs, Videos, Others)
3. Move files based on their extensions
4. Generate a summary report

### Bash Script
The `.kiro/cleanup.script` is a standalone bash script that can be run directly:

```bash
chmod +x .kiro/cleanup.script
./.kiro/cleanup.script
```

## 🎯 Use Cases

- **Photographers**: Batch rename photos with numbering
- **Students**: Organize downloaded files and documents
- **Professionals**: Clean up messy desktop folders
- **Content Creators**: Rename video files with consistent naming
- **Anyone**: Automate boring file management tasks

## 🛠️ Technology Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with flexbox/grid
- **Vanilla JavaScript**: No frameworks or libraries
- **File API**: For file handling
- **Blob API**: For download functionality

## 📱 Responsive Design

The app works perfectly on:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1200px+)

## 🎨 Design Features

- Gradient purple theme
- Smooth hover effects
- Card-based layout
- Custom scrollbars
- Emoji icons for visual appeal
- Clean, modern typography

## 📝 AWS builder link 
builder.aws.com/content/36NoO3XmkjekJmQrvsWDLmv1vOJ/smart-file-renamer-and-desktop-cleaner-with-kiro-automation

## 🔒 Privacy

All file processing happens locally in your browser. No files are uploaded to any server. Your data stays on your device.

## 📝 License

This project is licensed under the MIT License. You are free to use, modify, and distribute it for personal or commercial purposes.

## 🙌 Credits

Built with ❤️ for the Kiro Week 2 Challenge - Lazy Automation By Payal Kumari

---

**FileFlow** - Because life's too short for manual file management! 🚀
