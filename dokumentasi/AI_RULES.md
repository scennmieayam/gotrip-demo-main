# AI Development Rules

Rules ini digunakan untuk memastikan AI agent bekerja secara konsisten selama development.

---

## General Rules

1. AI harus mengikuti struktur project yang sudah ada.
2. AI tidak boleh menghapus dokumentasi yang sudah ada.
3. Semua perubahan harus dicatat.

---

## Development Workflow

Setiap selesai session coding AI harus:

1. Update DEV_LOG.md
2. Update BACK_LOG.md
3. Pindahkan task yang selesai ke COMPLETED
4. Tambahkan task baru jika ditemukan selama development

---

## Documentation Rules

- Semua task harus memiliki TASK-ID
- DEV_LOG harus selalu mencatat aktivitas coding
- CHANGELOG harus mencatat perubahan fitur

---

## Code Rules

- Gunakan struktur folder yang konsisten
- Hindari duplikasi kode
- Dokumentasikan fungsi penting

---

## Commit Rules

Setiap commit harus memiliki pesan yang jelas.

Format commit message:

type: short description

Examples:

feat: add dashboard component  
fix: resolve login validation bug  
docs: update development log