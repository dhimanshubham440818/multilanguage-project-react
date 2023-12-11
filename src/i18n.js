import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "NavBar": "NavBar",
      "Home": "Home",
      "Features": "Features",
      "Pricing": "Pricing",
      "How is the Linux operating system used?": "How is the Linux operating system used?",
      "What is Linux?": "What is Linux?",
    }
  },
  hi: {
    translation: {
      "NavBar": "नेवबार",
      "Home": "घर",
      "Features": "विशेषताएं",
      "Pricing": "मूल्य निर्धारण",
      "What is Linux?": "लिनक्स क्या है?",
      "How is the Linux operating system used?": 'लिनक्स ऑपरेटिंग सिस्टम का उपयोग कैसे किया जाता है?',
      'Linux is a Unix-like, open source and community-developed operating system (OS) for computers, servers, mainframes, mobile devices and embedded devices. It is supported on almost every major computer platform, including x86, ARM and SPARC, making it one of the most widely supported operating systems.': 'लिनक्स कंप्यूटर, सर्वर, मेनफ्रेम, मोबाइल डिवाइस और एम्बेडेड डिवाइस के लिए एक यूनिक्स जैसा, खुला स्रोत और समुदाय-विकसित ऑपरेटिंग सिस्टम (ओएस) है। यह x86, ARM और SPARC सहित लगभग हर प्रमुख कंप्यूटर प्लेटफ़ॉर्म पर समर्थित है, जो इसे सबसे व्यापक रूप से समर्थित ऑपरेटिंग सिस्टम में से एक बनाता है।',
      "Every version of the Linux OS manages hardware resources, launches and handles applications, and provides some form of user interface. The enormous community for developers and wide range of distributions means that a Linux version is available for almost any task, and Linux has penetrated many areas of computing. For example, Linux has emerged as a popular OS for web servers such as Apache, as well as for network operations, scientific computing tasks that require huge compute clusters, running databases, desktop and endpoint computing, and running mobile devices with OS versions like Android.":"लिनक्स ओएस का प्रत्येक संस्करण हार्डवेयर संसाधनों का प्रबंधन करता है, एप्लिकेशन लॉन्च करता है और उन्हें संभालता है, और कुछ प्रकार का यूजर इंटरफेस प्रदान करता है। डेवलपर्स के लिए विशाल समुदाय और वितरण की विस्तृत श्रृंखला का मतलब है कि लिनक्स संस्करण लगभग किसी भी कार्य के लिए उपलब्ध है, और लिनक्स ने कंप्यूटिंग के कई क्षेत्रों में प्रवेश किया है। उदाहरण के लिए, लिनक्स अपाचे जैसे वेब सर्वर के साथ-साथ नेटवर्क संचालन, वैज्ञानिक कंप्यूटिंग कार्यों के लिए एक लोकप्रिय ओएस के रूप में उभरा है, जिसके लिए विशाल कंप्यूट क्लस्टर, रनिंग डेटाबेस, डेस्कटॉप और एंडपॉइंट कंप्यूटिंग और एंड्रॉइड जैसे ओएस संस्करणों के साथ मोबाइल डिवाइस चलाने की आवश्यकता होती है। .",
    }
  },
  ud:{
    "translation": {
      "NavBar": "نیو بار",
      "Home": "گھر",
      "Features": "خصوصیات",
      "Pricing": "معیار",
      "What is Linux?": "لینکس کیا ہے؟",
      "How is the Linux operating system used?": "لینکس آپریٹنگ سسٹم کا استعمال کیسے کیا جاتا ہے؟",
      "Linux is a Unix-like, open source and community-developed operating system (OS) for computers, servers, mainframes, mobile devices and embedded devices. It is supported on almost every major computer platform, including x86, ARM and SPARC, making it one of the most widely supported operating systems.": "لینکس یک یونکس جیسا، کھلا ماخذ اور کمیونٹی سے ترتیب یافتہ آپریٹنگ سسٹم (او ایس) ہے جو کمپیوٹرز، سرورز، مین فریمز، موبائل ڈوائسز اور ایمبیڈڈ ڈوائسز کے لیے ہے۔ یہ تقریباً ہر بڑے کمپیوٹر پلیٹفارم پر معاون کیا گیا ہے، جو x86، ARM اور SPARC شامل ہیں، جس سے یہ ایک سب سے وسیع معاون کیا گیا او ایس بناتا ہے۔",
      "Every version of the Linux OS manages hardware resources, launches and handles applications, and provides some form of user interface. The enormous community for developers and wide range of distributions means that a Linux version is available for almost any task, and Linux has penetrated many areas of computing. For example, Linux has emerged as a popular OS for web servers such as Apache, as well as for network operations, scientific computing tasks that require huge compute clusters, running databases, desktop and endpoint computing, and running mobile devices with OS versions like Android.": "لینکس او ایس کا ہر ورژن ہارڈویئر ریسورسز کا منظم انتظام کرتا ہے، ایپلیکیشنز کو لانچ کرتا ہے اور انہیں ہینڈل کرتا ہے، اور صارف کے لئے کچھ قسم کا یوزر انٹرفیس فراہم کرتا ہے۔ ڈویلپرز کے لئے بڑے سماج اور تقسیمات کی وسیع رینج کا مطلب ہے کہ لینکس ورژن لغیرہ کسی بھی ٹاسک کے لئے دستیاب ہے، اور لینکس نے کمپیوٹنگ کے بہت سے شعبوں میں داخلہ کیا ہے۔ مثال کے طور پر، لینکس نے ایپیچی جیسے ویب سرورز کے لئے ایک مقبول او ایس کے طور پر سامنا کیا ہے، ساتھ ہی نیٹ ورک آپریشنز، علمی حساباتی کام جو بڑے کمپیوٹ کلسٹر کی ضرورت ہوتی ہے، ڈیٹا بیسز چلانا، ڈیسک ٹاپ اور اینڈ پوائنٹ کمپیوٹنگ، اور اینڈروائڈ جیسے او ایس ورژنز کے ساتھ موبائل ڈوائسز چلانے کیلئے۔"
    }
  },
  ch:{
    "translation":{
      "NavBar": "导航栏",
      "Home": "主页",
      "Features": "特性",
      "Pricing": "定价",
      "What is Linux?": "Linux是什么？",
      "How is the Linux operating system used?": "Linux操作系统如何使用？",
      "Linux is a Unix-like, open source and community-developed operating system (OS) for computers, servers, mainframes, mobile devices and embedded devices. It is supported on almost every major computer platform, including x86, ARM and SPARC, making it one of the most widely supported operating systems.": "Linux是一种类Unix的、开源的、由社区开发的计算机、服务器、大型机、移动设备和嵌入式设备的操作系统（OS）。它在几乎所有主要的计算机平台上都得到支持，包括x86、ARM和SPARC，使其成为支持最广泛的操作系统之一。",
      "Every version of the Linux OS manages hardware resources, launches and handles applications, and provides some form of user interface. The enormous community for developers and wide range of distributions means that a Linux version is available for almost any task, and Linux has penetrated many areas of computing. For example, Linux has emerged as a popular OS for web servers such as Apache, as well as for network operations, scientific computing tasks that require huge compute clusters, running databases, desktop and endpoint computing, and running mobile devices with OS versions like Android.": "Linux操作系统的每个版本都管理硬件资源，启动和处理应用程序，并提供某种形式的用户界面。庞大的开发者社区和广泛的发行版范围意味着几乎可以为任何任务提供Linux版本，而Linux已经渗透到计算的许多领域。例如，Linux已成为诸如Apache之类的Web服务器的流行操作系统，以及网络操作、需要庞大计算集群的科学计算任务、运行数据库、桌面和终端计算以及运行Android等操作系统版本的移动设备。"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;