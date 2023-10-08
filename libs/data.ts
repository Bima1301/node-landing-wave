import BallIcon from "@/app/components/atoms/icons/ballIcon";
import BookIcon from "@/app/components/atoms/icons/bookIcon";
import ChatIcon from "@/app/components/atoms/icons/chatIcon";
import CompanyIcon from "@/app/components/atoms/icons/companyIcon";
import ConstructionIcon from "@/app/components/atoms/icons/constructionIcon";
import ListIcon from "@/app/components/atoms/icons/listIcon";
import MoneyCashierIcon from "@/app/components/atoms/icons/moneyCashierIcon";
import ShopIcon from "@/app/components/atoms/icons/shopIcon";
import workshopIcon from "@/app/components/atoms/icons/workshopIcon";

export const links = [
    {
        name: "Website",
        hash: "#website",
    },
    {
        name: "Mobile Apps",
        hash: "#mobile-apps",
    },
    {
        name: "Portfolio",
        hash: "#portfolio",
    }
] as const;

export const testimonials = [
    {
        text: "Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave.",
        user: "Ahmad Prasetyo"
    },
    {
        text: "Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa,langsung dibuatin dengan cepat sama Nodewave.",
        user: "Laras Ratnadewi"
    },
    {
        text: "Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!",
        user: "Yusuf Uwais"
    }
] as const;

export const portfolio = [
    {
        bg: "bg-[url(/images/work1.png)]",
        src: "/images/work1.png",
        title: "Rayu Motor",
        description: "C Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales"
    },
    {
        bg: "bg-[url(/images/work2.png)]",
        src: "/images/work2.png",
        title: "Jasabung",
        description: "Jasabung is a platform for online cockfighting gambling games, which is equipped with a live streaming feature that allows players to watch the match live."
    },
] as const;

export const conversations = [
    {
        imgProfil: "/images/person.jpeg",
        chat: "My name is Danny, I'm looking for profile website company"
    },
    {
        imgProfil: "/images/person2.jpeg",
        chat: "Hello Danny, thank to reaching out us. We are interested to your offer. Maybe we can set meeting"
    },
    {
        imgProfil: "/images/person.jpeg",
        chat: "Sounds good, I have many desires to explain"
    },
    {
        imgProfil: "/images/person2.jpeg",
        chat: "How do I arrange our meeting on Monday at 10 WIB and my team will contact you again"
    },
] as const;

export const services = [
    {
        icon: ListIcon,
        title: "Online Attendance",
        description: `<p>With the times, your team may be able to work in the office or outside the office. Get the accuracy of your team&apos;s work hours with your own company&apos;s special online attendance feature with features such as:</p>
        <p><br></p>
        <ul>
            <li>Clock in and Clock Out attendance</li>
            <li>Face Photo</li>
            <li>Face Recognition</li>
            <li>Accurate time stamp down to seconds</li>
            <li>GPS location of employees</li>
        </ul>`
    },
    {
        icon: BallIcon,
        title: "Sport Center",
        description: `<p>Create your sports center field booking application. Suitable for futsal, mini soccer, badminton, tennis, golf, basketball, to table tennis. Give your customers the freedom to</p>
        <p><br></p>
        <ul>
            <li>Choose a booking schedule</li>
            <li>Online payments</li>
            <li>Automatic scheduling system</li>
            <li>Search for Friends feature</li>
            <li>Split Payment with team members</li>
            <li>Information and announcements from you</li>
        </ul>`
    },
    {
        icon: BookIcon,
        title: "Booking",
        description: `<p>Offer your services in your own application to place orders to delivery directly to the client&apos;s house. Suitable for ac service, cleaning, cleaning service, CCTV, massage, and even other digital services. Features that can be made:</p>
        <p><br></p>
        <ul>
            <li>Memilih jenis dan kategori jasa yang dikehendaki</li>
            <li>Melakukan reservasi online dan pembayaran dengan metode pembayaran digital</li>
            <li>Penjadwalan dengan tim lapangan</li>
            <li>Aplikasi khusus untuk tim</li>
            <li>Promosi dan Kode voucher khusus</li>
        </ul>`
    }

] as const;

export const otherServices = [
    {
        icon: ShopIcon,
        title: "E-Commerce",
    },
    {
        icon: CompanyIcon,
        title: "Company Profile",
    },
    {
        icon: MoneyCashierIcon,
        title: "Cashier",
    },
    {
        icon: workshopIcon,
        title: "Workshop",
    },
    {
        icon: ConstructionIcon,
        title: "Construction",
    },
    {
        icon: ChatIcon,
        title: "Chat",
    },
    {
        icon: "",
        title: "and many others",
    }
] as const;

export const offersProduct = [
    {
        title: "Website",
        realPrice: "Rp, 1.000.000",
        finalPrice: "Rp, 500.000",
        imgSrc: "/images/offerContent1.jpeg",
    },
    {
        title: "Mobile Apps",
        realPrice: "",
        finalPrice: "Rp, 999.000",
        imgSrc: "/images/offerContent2.jpeg",
    },
] as const;