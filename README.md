# 💼 Personal Portfolio — เว็บไซต์พอร์ตโฟลิโอส่วนตัว

> 💡 **โปรเจกต์แสดงผลงาน (Showcase Portfolio)**  
> พัฒนาด้วย **Next.js, React, TypeScript และ Tailwind CSS**  
> เว็บไซต์พอร์ตโฟลิโอสำหรับแสดงข้อมูลส่วนตัว ทักษะ โปรเจกต์ และช่องทางการติดต่อ  
> ออกแบบด้วย **Glass Morphism Design System** ที่ทันสมัยและสวยงาม พร้อมระบบ Animation ที่ลื่นไหล

**🔗 Live Demo:** [https://ctrlfaith-portfolio.vercel.app/](https://ctrlfaith-portfolio.vercel.app/)

---

## 🌐 ภาพรวมของโปรเจกต์

**Personal Portfolio** เป็นเว็บไซต์พอร์ตโฟลิโอที่พัฒนาด้วย **Next.js 16** และ **React 19**  
เพื่อแสดงข้อมูลส่วนตัว ทักษะทางเทคนิค โปรเจกต์ที่เคยทำ และช่องทางการติดต่อ  
พร้อมดึงข้อมูลโปรเจกต์จาก **GitHub API** แบบ Real-time  

ออกแบบด้วยแนวคิด **Apple-inspired Glass Morphism** ที่ให้ความรู้สึกทันสมัย เรียบหรู  
และมีการใช้ **Framer Motion** สร้าง Smooth Animations ทำให้ประสบการณ์การใช้งานน่าประทับใจ

### ✨ ฟีเจอร์หลัก

- 🏠 **Hero Section** — แสดงข้อมูลส่วนตัวและสถานะปัจจุบัน พร้อม Memoji แบบ Animated
- 👤 **About Section** — ข้อมูลส่วนตัว ประวัติการศึกษา และความสนใจ
- 💻 **Tech Stack Section** — แสดงเทคโนโลยีและเครื่องมือที่ใช้งานได้ พร้อมไอคอนจาก Simple Icons
- 📂 **Projects Section** — ดึงข้อมูลโปรเจกต์จาก GitHub API พร้อมแสดงรายละเอียดและ Tech Stack
- 📧 **Contact Section** — ข้อมูลติดต่อและลิงก์โซเชียลมีเดีย พร้อมปุ่ม Copy to Clipboard
- 🎨 **Glass Morphism Design** — UI/UX ที่สวยงามด้วย Custom CSS และ Tailwind
- 📱 **Fully Responsive** — รองรับทุกขนาดหน้าจอ (Mobile, Tablet, Desktop)
- ⚡ **Smooth Animations** — ใช้ Framer Motion และ CSS Keyframes
- 🧭 **Smooth Navigation** — ระบบ Navigation พร้อม Active Indicator

---

## ⚙️ เทคโนโลยีที่ใช้ (Tech Stack)

| หมวด | รายละเอียด |
|------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES2017), TypeScript |
| **Framework / Library** | Next.js 16, React 19 |
| **Styling** | Tailwind CSS 4, Custom CSS (Glass Morphism) |
| **Animation** | Framer Motion |
| **UI Components** | Lucide React (Icons) |
| **API Integration** | GitHub REST API |
| **Fonts** | Inter (Google Fonts via @next/font) |
| **Deployment** | Vercel |

---

## 🎯 วัตถุประสงค์ของโครงการ

- เพื่อสร้างเว็บไซต์พอร์ตโฟลิโอที่แสดงผลงานและทักษะด้านการพัฒนาเว็บ
- เพื่อฝึกการใช้ **Next.js** และ **React 19** ในการพัฒนา Modern Web Application
- เพื่อศึกษาการออกแบบ **Glass Morphism UI** และการใช้ **Framer Motion** สร้าง Animation
- เพื่อเรียนรู้การเชื่อมต่อและดึงข้อมูลจาก **External API** (GitHub API)
- เพื่อฝึกการเขียน **TypeScript** และการจัดการ Type Safety
- เพื่อพัฒนาทักษะด้าน **Responsive Design** ที่รองรับทุกอุปกรณ์
- เพื่อเรียนรู้การ Deploy และ Host เว็บไซต์บน **Vercel**

---

## 📁 โครงสร้างโปรเจกต์

```
ctrl-portfolio/
├── .next/                   # Next.js Build Output
├── .vscode/                 # VS Code Configuration
├── app/
│   ├── about/               # About Page Route
│   ├── contact/             # Contact Page Route
│   ├── projects/            # Projects Page Route
│   ├── tech-stack/          # Tech Stack Page Route
│   ├── favicon.ico          # Favicon
│   ├── globals.css          # Custom CSS & Design System
│   ├── layout.tsx           # Root Layout
│   └── page.tsx             # Main Page (Home)
├── components/
│   ├── sections/
│   │   ├── AboutSection.tsx      # About Me Section
│   │   ├── ContactSection.tsx    # Contact Section
│   │   ├── ProjectsSection.tsx   # Projects Section (GitHub API)
│   │   └── TechStackSection.tsx  # Tech Stack Section
│   ├── Footer.tsx           # Footer Component
│   └── Navbar.tsx           # Navigation Bar
├── lib/
│   └── projectsConfig.ts    # Projects Metadata Configuration
├── node_modules/            # Dependencies
├── public/
│   └── memoji/              # Memoji Images
│       ├── memoji-hi.png
│       ├── memoji-heart1.png
│       └── memoji-laptop1.png
├── .eslintrc.json           # ESLint Configuration
├── .gitignore               # Git Ignore File
├── next.config.js           # Next.js Configuration
├── package.json             # Project Dependencies
├── package-lock.json        # Lock File
├── postcss.config.js        # PostCSS Configuration
├── tailwind.config.ts       # Tailwind Configuration
├── tsconfig.json            # TypeScript Configuration
└── README.md                # Project Documentation
```

---

## 🎨 คุณสมบัติพิเศษ (Special Features)

### ระบบออกแบบแบบ Glass Morphism
เว็บไซต์ออกแบบด้วยแนวคิดที่ได้รับแรงบันดาลใจจาก Apple โดยใช้เทคนิค Glass Morphism ที่ทำให้องค์ประกอบต่างๆ มีลักษณะคล้ายกระจกขุ่นๆ สวยงามและทันสมัย มีเงาและการไล่สีที่ซับซ้อนเพื่อเพิ่มความโดดเด่น และสามารถปรับตัวให้เหมาะกับทุกขนาดหน้าจอได้อย่างลงตัว

### ภาพเคลื่อนไหวที่ลื่นไหล
ใช้ Framer Motion ในการสร้างภาพเคลื่อนไหวเมื่อเปลี่ยนหน้าและแสดงองค์ประกอบต่างๆ พร้อมกับ CSS Keyframes ที่ช่วยให้ภาพลอยและเคลื่อนไหวแบบ Pulse ดูมีชีวิตชีวา รวมถึงการทำ Animation บน Navigation Bar ที่บอกว่าผู้ใช้อยู่ในส่วนไหนของหน้าเว็บ

### การเชื่อมต่อกับ GitHub API
ระบบดึงข้อมูลโปรเจกต์จาก GitHub แบบเรียลไทม์ โดยสามารถแสดงรายละเอียดโปรเจกต์พร้อมคำอธิบายที่ปรับแต่งเอง มีการจัดเรียงและกรองโปรเจกต์ตามความสำคัญ และมีระบบจัดการข้อผิดพลาดพร้อม Loading State เมื่อกำลังโหลดข้อมูล

### ระบบนำทางที่ตอบสนอง
Navigation Bar ติดอยู่ด้านบนพร้อมเอฟเฟกต์เมื่อเลื่อนหน้าเว็บ มีเมนูสำหรับมือถือที่เปิด-ปิดด้วย Animation จาก Framer Motion มีตัวบอกตำแหน่งที่เปลี่ยนตามส่วนที่ผู้ใช้กำลังดูอยู่ และสามารถคลิกลิงก์เพื่อเลื่อนไปยังส่วนต่างๆ ได้อย่างนุ่มนวล

---

## 🔧 เทคโนโลยีเพิ่มเติมที่ใช้

### Development Tools
- **ESLint** — Code Linting
- **PostCSS** — CSS Processing
- **TypeScript** — Type Checking

### Design Resources
- **Lucide React** — Open-source Icons
- **Simple Icons** — Brand Icons
- **Google Fonts** — Inter Font Family

### External APIs
- **GitHub REST API** — Repository Data
- **Vercel** — Deployment & Hosting

---

## ⚖️ เงื่อนไขการเผยแพร่และเจตนาของโครงการ

โปรเจกต์นี้จัดทำเพื่อการแสดงผลงานและการเรียนรู้เท่านั้น  
**โค้ดที่เผยแพร่เป็นส่วนหนึ่งของพอร์ตโฟลิโอส่วนตัว** เพื่อใช้ในการสาธิตทักษะการพัฒนาเว็บแอปพลิเคชัน  
ข้อมูลโปรเจกต์ต่างๆ ที่แสดงในเว็บไซต์ดึงมาจาก GitHub API สาธารณะ

> "Personal Portfolio เป็นจุดเริ่มต้นของการแสดงผลงาน  
> ที่มุ่งเน้นการออกแบบที่สวยงาม โค้ดที่มีคุณภาพ และประสบการณ์การใช้งานที่ลื่นไหล"

---

## 👨‍💻 ผู้พัฒนา

**ชื่อ:** ภูริพัฒนชัย รัตนาธรรม (Phuriphatthanachai Rattanatham)   
**GitHub:** [@ctrlfaith](https://github.com/ctrlfaith)  
**LinkedIn:** [Phuriphatthanachai Rattanatham](https://linkedin.com/in/phuriphatthanachai-rattanatham-3b0ba4375)  
**Email:** bhm.rattanatham@gmail.com  
**ประเภทโปรเจกต์:** Portfolio Showcase Project

---

## 📄 License

This project is open source and available for educational purposes.

